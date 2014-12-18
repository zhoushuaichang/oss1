/**
 * Created by Administrator on 2014-12-03.
 */

Ext.define('js.in_stock_order', {
    extend: 'Ext.grid.Panel',

    initComponent: function () {
        var me = this;


        //主页面rootList数据源
        var inStockOrderStore = Ext.create('Ext.data.Store', {

            pageSize: 10,
            proxy: {
                type: 'ajax',
                url: '/inStock/showInStockList.action',
                reader: {
                    type: 'json',
                    root: 'inStockRootList',
                    totalProperty: 'count'
                }
            },
            fields: [
                'inStockId',
                'inType',
                'inTime',
                'handlerName',
                'totalMoney',
                'memo',
                'providerByProviderCode.providerName',
                'sysUserByUserId.realName'
            ],
            autoLoad: false,
            listeners: {
                beforeload: function (store, operation) {
                    var in_stock_code = Ext.getCmp('in_stock_code');
                    var provider_code = Ext.getCmp('provider_code');
                    var in_start_time = Ext.getCmp('in_start_time');
                    var in_end_time = Ext.getCmp('in_end_time');
                    if (in_stock_code || provider_code || in_start_time || in_end_time) {
                        if (in_stock_code.getValue() || provider_code.getValue() || in_start_time.getValue() || in_end_time.getValue()) {
                            if (operation.params) {
                                operation.params.in_stock_code = in_stock_code.getValue();
                                operation.params.provider_code = provider_code.getValue();
                                operation.params.in_start_time = in_start_time.getValue();
                                operation.params.in_end_time = in_end_time.getValue();

                            }
                            else {
                                operation.params = {
                                    in_stock_code: in_stock_code.getValue(),
                                    provider_code: provider_code.getValue(),
                                    in_start_time: in_start_time.getValue(),
                                    in_end_time: in_end_time.getValue()
                                };

                            }
                        }
                    }
                }
            }


        });
//        var validStore = Ext.create('Ext.data.Store', {
//
//            fields: ['validValue', 'valid'],
//            data: [
//                {'validValue': 'true', 'valid': '可用'},
//                {'validValue': 'false', 'valid': '不可用'}
//            ]
//        });
//        var typeNameStore = Ext.create('Ext.data.Store', {
//            proxy: {
//                type: 'ajax',
//                url: '/sys/showTypeNameList.action',
//                reader: {
//                    type: 'json',
//                    root: 'typeNameList'
//                }
//            },
//            fields: [
//                {name: 'typeName', type: 'string'},
//                {name: 'typeCode', type: 'string'}
//            ],
//            autoLoad: true
//        });
//        var statusStore = Ext.create('Ext.data.Store', {
//            proxy: {
//                type: 'ajax',
//                url: '/sys/showStatusList.action',
//                reader: {
//                    type: 'json',
//                    root: 'productSaleStatusList'
//                }
//            },
//            fields: ['statusId', 'statusName'],
//            autoLoad: true
//        });

        var providerStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showProviderList.action',
                reader: {
                    type: 'json',
                    root: 'providerList'
                }
            },
            fields: ['providerCode', 'providerName'],
            autoLoad: true
        });

        inStockOrderStore.load({
            params: {
                start: 0,
                limit: 10
            }
        });


        Ext.apply(this, {
            id: '入库订单',
            title: '入库订单',
            store: inStockOrderStore,
            selModel: Ext.create('Ext.selection.CheckboxModel', {mode: "SIMPLE"}),
            closable: true,
            columns: [
                {text: '入库单号', dataIndex: 'inStockId'},
                {text: '供应商', dataIndex: 'providerByProviderCode.providerName'},
                {text: '操作员', dataIndex: 'sysUserByUserId.realName'},
                {text: '入库方式', dataIndex: 'inType'},
                {text: '入库时间', dataIndex: 'inTime'},
                {text: '经手人', dataIndex: 'handlerName'},
                {text: '入库金额', dataIndex: 'totalMoney'},
                {text: '备注', dataIndex: 'memo'}
            ],
            width: 300,

            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: inStockOrderStore,
                    dock: 'bottom',
                    displayInfo: true
                }
            ],
            tbar: [
                {
                    xtype: "panel",
                    layout: 'column',
                    bodyStyle: {
                        background: '#d3e1f1',
                        bodyMargin: 0
                    },
//                    width:250,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: '入库单号',
                            id: 'in_stock_code',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '供应商',
                            id: 'provider_code',
                            store: providerStore,
                            displayField: 'providerName',
                            valueField: 'providerCode',
                            labelAlign: 'right',
                            labelWidth: 50
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: '入库时间',
                            id: 'in_start_time',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'datefield',
                            id: 'in_end_time',
                            fieldLabel: '--',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 20
                        },
                        {
                            xtype: 'button',
                            text: '查询',
                            handler: me.queryConditions
                        }
                    ]
                },
                '-',
                {
                    xtype: 'button',
                    text: '查看',
                    handler: me.find_details
                },
                {
                    xtype: 'button',
                    text: '编辑',
                    handler: me.edit
                },
                {
                    xtype: 'button',
                    text: '删除',
                    handler: me.deleteItem
                }
            ]

        });
        this.callParent();
    },


    queryConditions: function () {
        Ext.getCmp('入库订单').store.reload({
            params: {
                in_stock_code: Ext.getCmp('in_stock_code').value,
                provider_code: Ext.getCmp('provider_code').value,
                in_start_time: Ext.getCmp('in_start_time').value,
                in_end_time: Ext.getCmp('in_end_time').value
            }
        })

    },

    deleteItem: function () {
        var record = Ext.getCmp('入库订单').getSelectionModel().getSelection();
        var length = record.length;
        var inStockCodeList = "";
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length > 0) {

            for (var i = 0; i < length; i++) {
                if (i < length - 1) {
                    inStockCodeList = inStockCodeList + record[i].get('inStockId') + ',';
                }
                if (i == length - 1) {
                    inStockCodeList = inStockCodeList + record[i].get('inStockId');
                }
            }
            Ext.MessageBox.confirm('系统提示', '确认要删除该记录？', function (btn) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/inStock/deleteInStock.action?inStockCodeList=' + inStockCodeList,

                        success: function () {
                            Ext.MessageBox.alert("提示框", "删除成功！", function () {
                            });
                            Ext.getCmp('入库订单').store.reload();
                        },
                        failure: function () {
                            Ext.MessageBox.alert("提示框", "网络超时，请刷新后重试！", function () {
                            });
                        }
                    });
                }
            });
        }
    },

    edit: function () {

        var proStore = Ext.create('Ext.data.Store', {
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


        var arr = Ext.getCmp('入库订单').getSelectionModel().getSelection();
        var length = arr.length;
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择要修改的数据！", function () {
            });
        }
        if (length == 1) {
            var record = arr[0];
            var inStockId = record.get('inStockId');
            var myCode, myName, totalMoney = record.get('totalMoney'), my = this;
            var editDetailStore;
            var cellEditing = new Ext.grid.plugin.CellEditing(
                {
                    clicksToEdit: 1,
                    listeners: {
                        edit: function (editor, context) {
                            if (context.value) {
                                editDetailStore = Ext.data.StoreManager.lookup('editDetailStore');
                                if (context.field === "productName") {
                                    context.record.set('productCode', myCode);
                                    context.record.set('productName', myName);
                                }
                                if (context.field === "num") {
                                    if (context.record.data.price) {
                                        context.record.set('inTotal', context.record.data.price * context.value);
                                    }
                                }
                                if (context.field === "price") {
                                    if (context.record.data.num) {
                                        context.record.set('inTotal', context.record.data.num * context.value);
                                    }
                                }
//                            context.record.data.(productByProductCode.productName)
//                                if (context.record.data.num && context.record.data.price) {
//                                    editDetailStore.add({});
//                                }
                                //将grid的总价直接添加到上面主表的入库金额
                                totalMoney = 0;
                                for (var i = 0; i < editDetailStore.data.items.length; i++) {
                                    if (!isNaN(editDetailStore.data.items[i].data.inTotal) && editDetailStore.data.items[i].data.inTotal != "") {
                                        totalMoney += editDetailStore.data.items[i].data.inTotal;
                                    }
                                }
                                Ext.getCmp('editInStockTotal').setValue(totalMoney);
                            }
                        }
                    }
                }
            );

            Ext.create('Ext.window.Window', {
                title: '修改订单' + inStockId + '明细',
                id: 'isoDetailEditWin',
                width: 420,
                modal: true,
                layout: 'fit',
                items: [
                    {
                        xtype: 'grid',
                        width: '100%',
                        id: 'inDetailStockGrid',
                        selModel: Ext.create('Ext.selection.CheckboxModel', {mode: "SIMPLE"}),
                        plugins: cellEditing,
                        store: Ext.create('Ext.data.Store', {
                            id: 'editDetailStore',
                            proxy: {
                                type: 'ajax',
                                url: '/inStock/showDetailByInStockId.action?inStockId=' + inStockId,
                                reader: {
                                    type: 'json',
                                    root: 'inStockDetailList'
                                }
                            },
                            fields: [
                                {name: 'inStockDetailId'},
                                {name: 'productName', mapping: 'productByProductCode.productName'},
                                {name: 'productCode', mapping: 'productByProductCode.productCode'},
                                {name: 'price'},
                                {name: 'num'},
                                {name: 'inTotal'}
                            ],
                            autoLoad: true
                        }),
                        columns: [
                            {
                                xtype: 'hidden',
                                dataIndex: 'productCode'
                            },
                            {
                                text: '商品',
                                editor: {
                                    xtype: 'combo',
                                    store: proStore,
                                    displayField: 'productName',
                                    valueField: 'productCode',
                                    allowBlank: false,
                                    listeners: {
                                        select: function (combo, records) {
                                            myCode = this.value;
                                            myName = records[0].data.productName;
                                        }
                                    }
                                },
                                dataIndex: 'productName'
                            },
                            {
                                text: '入库数量',
                                editor: new Ext.form.field.Number({
                                    maxValue: 99,
                                    minValue: 1,
                                    allowBlank: false
                                }),
                                dataIndex: 'num'
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
                                dataIndex: 'inTotal'
                            }
                        ]
                    }
                ],
                buttons: [
                    {
                        xtype: 'textfield',
                        id: 'editInStockTotal',
                        fieldLabel: '订单总价',
                        labelWidth: 60,
                        width: 150,
                        readOnly: true,
                        value: totalMoney
                    },
                    { xtype: 'tbfill' },
                    {
                        text: '删除',
                        handler: function () {
                            var arrItem = Ext.getCmp('inDetailStockGrid').getSelectionModel().getSelection();
                            var itemLength = arrItem.length;
                            editDetailStore = Ext.data.StoreManager.lookup('editDetailStore');
                            if (itemLength == 0) {
                                Ext.MessageBox.alert("提示框", "请先选择要修改的数据！", function () {
                                });
                            }
                            if (itemLength > 0) {
                                for (var i = 0; i < itemLength; i++) {
                                    editDetailStore.remove(arrItem[i]);
                                }
//                                editDetailStore.reload();
                            }
                        }
                    },
                    {
                        text: '添加',
                        handler: function (context) {
                            editDetailStore = Ext.data.StoreManager.lookup('editDetailStore');
                            var storeLength = editDetailStore.data.length;
                            var lastItem = editDetailStore.data.items[storeLength - 1].data;

                            if (lastItem.num > 0 && lastItem.price > 0 && lastItem.productName.trim().length > 0) {
                                editDetailStore.add({});
                            }
                        }
                    },
                    {
                        text: '提交',
                        handler: function () {

                            editDetailStore = Ext.data.StoreManager.lookup('editDetailStore');
                            var postData = 'inStockId=' + inStockId + '&totalMoney=' + totalMoney + '&';

                            var item;
                            for (var index = 0; index < editDetailStore.data.length; index++) {
                                item = editDetailStore.data.items[index];
                                if (!item.data.inTotal) {
                                    return;
                                }
                                postData += 'inStockDetailList[' + index + '].productByProductCode.productCode=' + item.data.productCode + '&inStockDetailList[' + index + '].price=' + item.data.price + '&inStockDetailList[' + index + '].num=' + item.data.num + '&inStockDetailList[' + index + '].inTotal=' + item.data.inTotal;
                                if (index != editDetailStore.length - 1) {
                                    postData += '&';
                                }
                            }
//                            editDetailStore.data.items.forEach(function(e){
//
//                            });
//
//                            Ext.each(editDetailStore, function (item, index) {
//                                if (!item.data.items[index].data.inTotal) {
//                                    return;
//                                }
//                                postData += 'inStockDetailList[' + index + '].productByProductCode.productCode=' + item.data.productCode + '&inStockDetailList[' + index + '].price=' + item.data.price + '&inStockDetailList[' + index + '].num=' + item.data.number + '&inStockDetailList[' + index + '].total=' + item.data.total;
//                                if (index != editDetailStore.length - 1) {
//                                    postData += '&';
//                                }
//                            });

                            Ext.Ajax.request({
                                url: '/inStock/updateInStockDetail.action?' + postData,
                                success: function () {
                                    Ext.getCmp('入库订单').store.reload();
                                    Ext.getCmp('isoDetailEditWin').close();
                                },
                                failure: function () {
                                    Ext.MessageBox.alert('系统提示', '网络超时，请刷新后重试！');
                                }
                            });
                        }
                    }
                ]
            }).show();
        }
        if (length > 1) {
            Ext.MessageBox.alert("提示框", "请逐条修改数据！", function () {
            });
        }
    },

    find_details: function () {
        var arr = Ext.getCmp('入库订单').getSelectionModel().getSelection();
        var length = arr.length;
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length == 1) {
            var record = arr[0];
            Ext.create('Ext.window.Window', {
                title: '订单' + record.get('inStockId') + '详细',
                id: 'isoDetailWin',
                width: 415,
                modal: true,
                layout: 'fit',
                items: [
                    {
                        xtype: 'grid',
                        width: '100%',
                        id: 'inDetailStockGrid',
                        store: Ext.create('Ext.data.Store', {
                            proxy: {
                                type: 'ajax',
                                url: '/inStock/showDetailByInStockId.action?inStockId=' + record.get('inStockId'),
                                reader: {
                                    type: 'json',
                                    root: 'inStockDetailList'
                                }
                            },
                            fields: [
                                'productByProductCode.productName',
                                'price',
                                'num',
                                'inTotal'
                            ],
                            autoLoad: true
                        }),
                        columns: [
                            {text: '商品', dataIndex: 'productByProductCode.productName'},
                            {text: '入库数量', dataIndex: 'num'},
                            {text: '入库价格', dataIndex: 'price'},
                            {text: '入库总价', dataIndex: 'inTotal'}
                        ]
                    }
                ],
                buttons: [
                    {
                        xtype: 'textfield',
                        fieldLabel: '总金额',
                        labelWidth: 60,
                        width: 150,
                        value: arr[0].get('totalMoney')
                    },
                    { xtype: 'tbfill' },
                    {
                        text: '关闭',
                        handler: function () {
                            Ext.getCmp('isoDetailWin').close();
                        }
                    }

                ]
            }).show();
        }
        if (length > 1) {
            Ext.MessageBox.alert("提示框", "请逐条查看数据！", function () {
            });
        }


    }

});

