/**
 * Created by Administrator on 2014-12-03.
 */

Ext.define('js.out_stock', {
    extend: 'Ext.panel.Panel',
    myCode: '',
    myName: '',
    maxNum: 9999,
    totalmoney: '',
    initComponent: function () {
        var me = this, cellEditing;
        cellEditing = new Ext.grid.plugin.CellEditing(
            {
                clicksToEdit: 1,
                listeners: {
                    edit: function (editor, context) {
                        if (context.value) {
                            var myStore = Ext.data.StoreManager.lookup('myStore');
                            if (context.field === "name") {
                                context.record.set('outStockProductNameHidden', me.myCode);
                                context.record.set('name', me.myName);
                                Ext.Ajax.request({
                                    url: '/sys/queryProductStockById.action?productCode=' + me.myCode,
                                    success: function (response) {
                                        var msg = Ext.JSON.decode(response.responseText);
                                        context.record.set('stock_price', msg.productStock.avgPrice);
                                        context.record.set('totalNumber', msg.productStock.num);
//                                        maxNum=msg.productStock.num;
                                    },
                                    failure: function () {

                                    }
                                });
                            }
                            if (context.field === "number") {
                                if (context.record.data.price) {
                                    context.record.set('total', context.record.data.price * context.value);
                                }
                            }
                            if (context.field === "price") {
                                if (context.record.data.number) {
                                    context.record.set('total', context.record.data.number * context.value);
                                }
                            }
                            if (context.record.data.name && context.record.data.number && context.record.data.price) {
                                if (context.record.data.number > context.record.data.totalNumber) {
                                    Ext.Msg.alert('系统提示！', '出库数量大于库存数量，请更正！');
                                } else {
                                    myStore.add({});
                                }

                            }
                            //将grid的总价直接添加到上面主表的入库金额
                            me.totalmoney = 0;
                            for (var i = 0; i < myStore.data.items.length; i++) {
                                if (!isNaN(myStore.data.items[i].data.total) && myStore.data.items[i].data.total != "") {
                                    me.totalmoney += myStore.data.items[i].data.total;
                                }
                            }
                            Ext.getCmp('inStockTotalMoney').setValue(me.totalmoney);
                        }
                    }
                }
            }
        );

        var sysUserOutStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showSysUserList.action',
                reader: {
                    type: 'json',
                    root: 'sysUserList'
                }
            },
            fields: [
                {name: 'userId', type: 'int'},
                {name: 'realName', type: 'string'}
            ],
            autoLoad: true
        });

        var productOutStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showProductList.action',
                reader: {
                    type: 'json',
                    root: 'productList'
                }
            },
            fields: [
                {name: 'productCode', type: 'string'},
                {name: 'productName', type: 'string'}
            ],
            autoLoad: true
        });
        var outStockTypeStore = Ext.create('Ext.data.Store', {
            data: [
                {'outStockTypeCode': '1', 'outStockTypeName': '正常出库'},
                {'outStockTypeCode': '2', 'outStockTypeName': '报溢出库'}
            ],
            fields: ['outStockTypeCode', 'outStockTypeName']
        });


        Ext.apply(this, {
            title: '商品出库',
            id: '商品出库',
            layout: 'vbox',
            closable: true,
            tbar: [
                {
                    text: '提交',
                    handler: function () {
                        var mydata = Ext.data.StoreManager.lookup('myStore').data.items;
                        var postData = '';
                        Ext.each(mydata, function (item, index) {
                            if (!item.data.total) {
                                return;
                            }
                            postData += 'outStockDetailList[' + index + '].productByProductCode.productCode=' + item.data.outStockProductNameHidden + '&outStockDetailList[' + index + '].sellPrice=' + item.data.price + '&outStockDetailList[' + index + '].num=' + item.data.number + '&outStockDetailList[' + index + '].stockPrice=' + item.data.stock_price + '&outStockDetailList[' + index + '].outTotal=' + item.data.total;
                            if (index != mydata.length - 2) {
                                postData += '&';
                            }
                        });
                        Ext.getCmp('outStockForm').submit({
                            url: '/outStock/outStock.action?' + postData,
                            success: function (form, action) {
                                var msg = Ext.JSON.decode(action.response.responseText);
                                if (msg.state) {
                                    Ext.MessageBox.show({
                                        title: '系统提示',
                                        msg: msg.message,
                                        buttons: Ext.MessageBox.OK
                                    });
                                    Ext.getCmp('outStockGrid').store.reload();
                                    Ext.getCmp('outStockForm').getForm().reset();
                                } else {
                                    Ext.MessageBox.alert({
                                        title: '系统提示',
                                        msg: msg.message,
                                        icon: Ext.MessageBox.WARNING
                                    })
                                }


//                                Ext.Msg.alert('系统提示','入库成功！')
                            },
                            failure: function () {

                            }
                        });
                    }
                }
            ],
            items: [
                {
                    xtype: 'form',
                    width: '100%',
                    id: 'outStockForm',
                    layout: 'column',
                    defaults: {
                        margin: 5,
                        labelWidth: 90,
                        labelAlign: 'right'
                    },
                    items: [
                        {
                            xtype: 'combo',
                            fieldLabel: '操作员',
                            store: sysUserOutStore,
                            displayField: 'realName',
                            valueField: 'userId',
                            name: 'outStock.sysUserByUserId.userId'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '出库方式',
                            store: outStockTypeStore,
                            displayField: 'outStockTypeName',
                            valueField: 'outStockTypeCode',
                            name: 'outStock.outType'

                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '备注',
                            name: 'outStock.remark'
                        },
                        {
                            xtype: 'datefield',
                            format: 'Y-m-d',
                            fieldLabel: '出库时间',
                            readOnly: true,
                            value: new Date(),
                            name: 'outStock.outTime'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '经手人',
                            allowBlack: false,
                            name: 'outStock.handlerName'
                        },
                        {
                            xtype: 'textfield',
                            id: 'inStockTotalMoney',
                            fieldLabel: '出库总金额',
                            readOnly: true,
                            name: 'outStock.totalMoney'
                        }
                    ]
                },
                {
                    xtype: 'grid',
                    width: '100%',
                    id: 'outStockGrid',
                    plugins: cellEditing,
                    store: Ext.create('Ext.data.ArrayStore', {
                        id: 'myStore',
                        data: [
                            {}
                        ],
                        fields: [
                            'outStockProductNameHidden', 'name', 'number', 'totalNumber', 'price', 'total'
                        ]
                    }),
                    columns: [
                        {
                            dataIndex: 'outStockProductNameHidden',
                            hidden: true
                        },
                        {
                            text: '商品',
                            editor: {
                                xtype: 'combo',
                                store: productOutStore,
                                displayField: 'productName',
                                valueField: 'productCode',
                                allowBlank: false,
                                listeners: {
                                    select: function (combo, records) {
                                        me.myCode = this.value;
                                        me.myName = records[0].data.productName;
                                    }
                                }

                            },
                            dataIndex: 'name'
                        },
                        {
                            text: '出库数量',
                            editor: new Ext.form.field.Number({
//                                maxValue: maxNum,
                                minValue: 0,
                                allowBlank: false
                            }),
                            dataIndex: 'number'
                        },
                        {
                            text: '库存数量',
                            dataIndex: 'totalNumber'
                        },
                        {
                            text: '出库单价',
                            editor: new Ext.form.field.Number({
                                maxValue: 9999,
                                minValue: 1,
                                allowBlank: false
                            }),
                            dataIndex: 'price'
                        },
                        {
                            text: '成本单价',
                            allowBlank: false,
                            dataIndex: 'stock_price'
                        },
                        {
                            text: '出库总价',
                            dataIndex: 'total'
                        }
                    ]
                }
            ]
        });

        this.callParent();
    }


});
