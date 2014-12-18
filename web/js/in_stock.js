/**
 * Created by Administrator on 2014-12-02.
 */

Ext.define('js.in_stock', {
    extend: 'Ext.panel.Panel',
    myCode: '',
    myName: '',
    totalmoney: '',
    initComponent: function () {
        var me = this, cellEditing;
        cellEditing = new Ext.grid.plugin.CellEditing(
            {
                clicksToEdit: 1,
                listeners: {
                    edit: function (editor, context) {
                        if (context.value) {
                            var myInStockStore = Ext.data.StoreManager.lookup('myInStockStore');
                            if (context.field === "name") {
                                context.record.set('inStockProductNameHidden', me.myCode);
                                context.record.set('name', me.myName);
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
                                myInStockStore.add({});
                            }
                            //将grid的总价直接添加到上面主表的入库金额
                            me.totalmoney = 0;
                            for (var i = 0; i < myInStockStore.data.items.length; i++) {
                                if (!isNaN(myInStockStore.data.items[i].data.total) && myInStockStore.data.items[i].data.total != "") {
                                    me.totalmoney += myInStockStore.data.items[i].data.total;
                                }
                            }
                            Ext.getCmp('inStockTotalMoney').setValue(me.totalmoney);
                        }
                    }
                }
            }
        );

        var sysUserStore = Ext.create('Ext.data.Store', {
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
        var deliveryInfoStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showProviderList.action',
                reader: {
                    type: 'json',
                    root: 'providerList'
                }
            },
            fields: [
                {name: 'providerCode', type: 'string'},
                {name: 'providerName', type: 'string'}
            ],
            autoLoad: true
        });
        var productStore = Ext.create('Ext.data.Store', {
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
        var inStockTypeStore = Ext.create('Ext.data.Store', {
            data: [
                {'inStockTypeCode': '1', 'inStockTypeName': '正常入库'},
                {'inStockTypeCode': '2', 'inStockTypeName': '报损入库'}
            ],
            fields: ['inStockTypeCode', 'inStockTypeName']
        });


        Ext.apply(this, {
            title: '商品入库',
            id: '商品入库',
            layout: 'vbox',
            closable: true,
            tbar: [
                {
                    text: '提交',
                    handler: function () {
                        var mydata = Ext.data.StoreManager.lookup('myInStockStore').data.items;
                        var postData = '';
                        Ext.each(mydata, function (item, index) {
                            if (!item.data.total) {
                                return;
                            }
                            postData += 'inStockDetailList[' + index + '].productByProductCode.productCode=' + item.data.inStockProductNameHidden + '&inStockDetailList[' + index + '].price=' + item.data.price + '&inStockDetailList[' + index + '].num=' + item.data.number + '&inStockDetailList[' + index + '].inTotal=' + item.data.total;
                            if (index != mydata.length - 2) {
                                postData += '&';
                            }
                        });
                        Ext.getCmp('inStockForm').submit({
                            url: '/inStock/inStock.action?' + postData,
                            success: function (form, action) {
                                var msg = Ext.JSON.decode(action.response.responseText);
                                if (msg.state) {
                                    Ext.MessageBox.show({
                                        title: '系统提示',
                                        msg: msg.message,
                                        buttons: Ext.MessageBox.OK
                                    });
                                    Ext.getCmp('inStockGrid').store.reload();
                                    Ext.getCmp('inStockForm').getForm().reset();
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
                                Ext.Msg.alert('系统提示！', '网络超时或系统错误！');
                            }
                        });
                    }
                }
            ],
            items: [
                {
                    xtype: 'form',
                    width: '100%',
                    id: 'inStockForm',
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
                            store: sysUserStore,
                            displayField: 'realName',
                            valueField: 'userId',
                            name: 'inStock.sysUserByUserId.userId'
                        },
                        {
                            xtype: 'combo',
                            store: deliveryInfoStore,
                            displayField: 'providerName',
                            valueField: 'providerCode',
                            fieldLabel: '供应商',
                            name: 'inStock.providerByProviderCode.providerCode'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '入库方式',
                            store: inStockTypeStore,
                            displayField: 'inStockTypeName',
                            valueField: 'inStockTypeCode',
                            name: 'inStock.inType'

                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '备注',
                            name: 'inStock.memo'
                        },
                        {
                            xtype: 'datefield',
                            format: 'Y-m-d',
                            fieldLabel: '入库时间',
                            readOnly: true,
                            value: new Date(),
                            name: 'inStock.inTime'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '经手人',
                            allowBlack: false,
                            name: 'inStock.handlerName'
                        },
                        {
                            xtype: 'textfield',
                            id: 'inStockTotalMoney',
                            fieldLabel: '入库总金额',
                            readOnly: true,
                            name: 'inStock.totalMoney'
                        }
                    ]
                },
                {
                    xtype: 'grid',
                    width: '100%',
                    id: 'inStockGrid',
                    plugins: cellEditing,
                    store: Ext.create('Ext.data.ArrayStore', {
                        id: 'myInStockStore',
                        data: [
                            {}
                        ],
                        fields: [
                            'inStockProductNameHidden', 'name', 'number', 'price', 'total'
                        ]
                    }),
                    columns: [
                        {
                            dataIndex: 'inStockProductNameHidden',
                            hidden: true
                        },
                        {
                            text: '商品',
                            editor: {
                                xtype: 'combo',
                                store: productStore,
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
                            text: '入库数量',
                            editor: new Ext.form.field.Number({
                                maxValue: 99,
                                minValue: 1,
                                allowBlank: false
                            }),
                            dataIndex: 'number'
                        },
                        {
                            text: '入库价格',
                            editor: new Ext.form.field.Number({
                                maxValue: 9999,
                                minValue: 1,
                                allowBlank: false
                            }),
                            dataIndex: 'price'
                        },
                        {
                            text: '入库总价',
                            dataIndex: 'total'
                        }
                    ]
                }
            ]
        });

        this.callParent();
    }
});
