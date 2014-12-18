/**
 * Created by Administrator on 2014-12-04.
 */
/**
 * Created by Administrator on 2014-12-03.
 */

Ext.define('js.out_stock_order', {
    extend: 'Ext.grid.Panel',

    initComponent: function () {
        var me = this;
        //主页面rootList数据源
        var outStockOrderStore = Ext.create('Ext.data.Store', {

            pageSize: 10,
            proxy: {
                type: 'ajax',
                url: '/outStock/showOutStockList.action',
                reader: {
                    type: 'json',
                    root: 'outStockList',
                    totalProperty: 'count'
                }
            },
            fields: [
                'outStockId',
                'outTime',
                'handlerName',
                'outType',
                'totalMoney',
                'remark',
                'sysUserByUserId.realName'
            ],
            autoLoad: false,
            listeners: {
                beforeload: function (store, operation) {
                    var out_stock_code = Ext.getCmp('out_stock_code');
                    var out_start_time = Ext.getCmp('out_start_time');
                    var out_end_time = Ext.getCmp('out_end_time');
                    if (out_stock_code || out_start_time || out_end_time) {
                        if (out_stock_code.getValue() || out_start_time.getValue() || out_end_time.getValue()) {
                            if (operation.params) {
                                operation.params.out_stock_code = out_stock_code.getValue();
                                operation.params.out_start_time = out_start_time.getValue();
                                operation.params.out_end_time = out_end_time.getValue();

                            }
                            else {
                                operation.params = {
                                    out_stock_code: out_stock_code.getValue(),
                                    out_start_time: out_start_time.getValue(),
                                    out_end_time: out_end_time.getValue()
                                };

                            }
                        }
                    }
                }
            }


        });

        outStockOrderStore.load({
            params: {
                start: 0,
                limit: 10
            }
        });


        Ext.apply(this, {
            id: '出库订单',
            title: '出库订单',
            store: outStockOrderStore,
            selModel: Ext.create('Ext.selection.CheckboxModel', {mode: "SIMPLE"}),
            closable: true,
            columns: [
                {text: '出库单号', dataIndex: 'outStockId'},
                {text: '操作员', dataIndex: 'sysUserByUserId.realName'},
                {text: '出库方式', dataIndex: 'outType'},
                {text: '出库时间', dataIndex: 'outTime'},
                {text: '经手人', dataIndex: 'handlerName'},
                {text: '出库金额', dataIndex: 'totalMoney'},
                {text: '备注', dataIndex: 'memo'}
            ],
            width: 300,

            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: outStockOrderStore,
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
                            fieldLabel: '出库单号',
                            id: 'out_stock_code',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: '出库时间',
                            id: 'out_start_time',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'datefield',
                            id: 'out_end_time',
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
        Ext.getCmp('出库订单').store.reload({
            params: {
                out_stock_code: Ext.getCmp('out_stock_code').value,
                out_start_time: Ext.getCmp('out_start_time').value,
                out_end_time: Ext.getCmp('out_end_time').value
            }
        })

    },

    deleteItem: function () {
        var record = Ext.getCmp('出库订单').getSelectionModel().getSelection();
        var length = record.length;
        var outStockIdList = "";
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length > 0) {

            for (var i = 0; i < length; i++) {
                if (i < length - 1) {
                    outStockIdList = outStockIdList + record[i].get('outStockId') + ',';
                }
                if (i == length - 1) {
                    outStockIdList = outStockIdList + record[i].get('outStockId');
                }
            }
            Ext.MessageBox.confirm('系统提示', '确认要删除该记录？', function (btn) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/outStock/deleteOutStock.action?outStockIdList=' + outStockIdList,

                        success: function () {
                            Ext.MessageBox.alert("提示框", "删除成功！", function () {
                            });
                            Ext.getCmp('出库订单').store.reload();
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

        var proOutStore = Ext.create('Ext.data.Store', {
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

        var arr = Ext.getCmp('出库订单').getSelectionModel().getSelection();
        var length = arr.length;
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length == 1) {
            var record = arr[0];
            var myCode, myName, totalMoney = record.get('totalMoney');
            var outStockId = record.get('outStockId');
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
                                    Ext.Ajax.request({
                                        url: '/sys/queryProductStockById.action?productCode=' + myCode,
                                        success: function (response) {
                                            var msg = Ext.JSON.decode(response.responseText);
                                            context.record.set('stockPrice', msg.productStock.avgPrice);
                                            context.record.set('stockNum', msg.productStock.num);
//                                        maxNum=msg.productStock.num;
                                        },
                                        failure: function () {

                                        }
                                    });
                                }
                                if (context.field === "num") {
                                    if (context.value > context.record.data.stockNum) {
                                        Ext.Msg.alert('系统提示', '出库数量大于库存量，请注意！');
                                        context.record.set('num', context.record.data.stockNum);
                                    } else {
                                        if (context.record.data.sellPrice) {
                                            context.record.set('outTotal', context.record.data.sellPrice * context.value);
                                        }
                                    }

                                }
                                if (context.field === "sellPrice") {
                                    if (context.record.data.num) {
                                        context.record.set('outTotal', context.record.data.num * context.value);
                                    }
                                }

                                totalMoney = 0;
                                for (var i = 0; i < editDetailStore.data.items.length; i++) {
                                    if (!isNaN(editDetailStore.data.items[i].data.outTotal) && editDetailStore.data.items[i].data.outTotal != "") {
                                        totalMoney += editDetailStore.data.items[i].data.outTotal;
                                    }
                                }
                                Ext.getCmp('editOutStockTotal').setValue(totalMoney);
                            }
                        }
                    }
                }
            );

            Ext.create('Ext.window.Window', {
                title: '修改出库订单' + outStockId + '明细',
                width: 650,
                id: 'osoDetailEditWin',
                layout: 'fit',
                items: [
                    {
                        xtype: 'grid',
                        width: '100%',
                        id: 'outDetailStockGrid',
                        selModel: Ext.create('Ext.selection.CheckboxModel', {mode: "SIMPLE"}),
                        plugins: cellEditing,
                        store: Ext.create('Ext.data.Store', {
                            id: 'editDetailStore',
                            proxy: {
                                type: 'ajax',
                                url: '/outStock/showDetailByOutStockId.action?outStockId=' + outStockId,
                                reader: {
                                    type: 'json',
                                    root: 'outStockDetailList'
                                }
                            },
                            fields: [
                                {name: 'outStockDetailId'},
                                {name: 'productName', mapping: 'productByProductCode.productName'},
                                {name: 'productCode', mapping: 'productByProductCode.productCode'},
                                {name: 'stockNum', mapping: 'productByProductCode.productStockByProductCode.num'},
                                {name: 'sellPrice'},
                                {name: 'stockPrice'},
                                {name: 'num'},
                                {name: 'outTotal'}
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
                                    store: proOutStore,
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
                                text: '出库数量',
                                editor: new Ext.form.field.Number({
                                    maxValue: 99,
                                    minValue: 1,
                                    allowBlank: false
                                }),
                                dataIndex: 'num'
                            },
                            {
                                text: '出库价格',
                                editor: new Ext.form.field.Number({
                                    maxValue: 9999,
                                    minValue: 1,
                                    allowBlank: false
                                }),
                                dataIndex: 'sellPrice'
                            },
                            {
                                text: '库存均价',
                                dataIndex: 'stockPrice'
                            },
                            {
                                text: '库存量',
                                dataIndex: 'stockNum'
                            },
                            {
                                text: '出库总价',
                                dataIndex: 'outTotal'
                            }
                        ]
                    }
                ],
                buttons: [
                    {
                        xtype: 'textfield',
                        id: 'editOutStockTotal',
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
                            var arrItem = Ext.getCmp('outDetailStockGrid').getSelectionModel().getSelection();
                            var itemLength = arrItem.length;
                            editDetailStore = Ext.data.StoreManager.lookup('editDetailStore');
                            if (itemLength == 0) {
                                Ext.MessageBox.alert("提示框", "请先选择要删除的数据！", function () {
                                });
                            }
                            if (itemLength > 0) {
                                for (var i = 0; i < itemLength; i++) {
                                    editDetailStore.remove(arrItem[i]);
                                }
                                totalMoney = 0;
                                for (var j = 0; j < editDetailStore.data.items.length; j++) {
                                    if (!isNaN(editDetailStore.data.items[j].data.outTotal) && editDetailStore.data.items[j].data.outTotal != "") {
                                        totalMoney += editDetailStore.data.items[j].data.outTotal;
                                    }
                                }
                                Ext.getCmp('editOutStockTotal').setValue(totalMoney);
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

                            if (lastItem.num > 0 && lastItem.sellPrice > 0 && lastItem.productName.trim().length > 0) {
                                editDetailStore.add({});
                            }
                        }
                    },
                    {
                        text: '提交',
                        handler: function () {
                            editDetailStore = Ext.data.StoreManager.lookup('editDetailStore');
                            var postData = 'outStockId=' + outStockId + '&totalMoney=' + totalMoney + '&';

                            var item;
                            for (var index = 0; index < editDetailStore.data.length; index++) {
                                item = editDetailStore.data.items[index];
                                if (!item.data.outTotal) {
                                    return;
                                }
                                postData += 'outStockDetailList[' + index + '].productByProductCode.productCode=' + item.data.productCode + '&outStockDetailList[' + index + '].sellPrice=' + item.data.sellPrice + '&outStockDetailList[' + index + '].stockPrice=' + item.data.stockPrice + '&outStockDetailList[' + index + '].num=' + item.data.num + '&outStockDetailList[' + index + '].outTotal=' + item.data.outTotal;
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
                                url: '/outStock/updateOutStockDetail.action?' + postData,
                                success: function () {
                                    Ext.getCmp('出库订单').store.reload();
                                    Ext.getCmp('osoDetailEditWin').close();
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
            Ext.MessageBox.alert("提示框", "每次只能修改一条数据！", function () {
            });
        }

    },

    find_details: function () {
        var arr = Ext.getCmp('出库订单').getSelectionModel().getSelection();
        var length = arr.length;
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length == 1) {
            var record = arr[0];
            Ext.create('Ext.window.Window', {
                title: '订单' + record.get('outStockId') + '详细',
                id: 'osoDetailWin',
                width: 520,
                modal: true,
                layout: 'fit',
                items: [
                    {
                        xtype: 'grid',
                        width: '100%',
                        id: 'outDetailStockGrid',
                        store: Ext.create('Ext.data.Store', {
                            proxy: {
                                type: 'ajax',
                                url: '/outStock/showDetailByOutStockId.action?outStockId=' + record.get('outStockId'),
                                reader: {
                                    type: 'json',
                                    root: 'outStockDetailList'
                                }
                            },
                            fields: [
                                'productByProductCode.productName',
                                'price',
                                'num',
                                'sellPrice',
                                'stockPrice',
                                'outTotal'
                            ],
                            autoLoad: true
                        }),
                        columns: [
                            {text: '商品', dataIndex: 'productByProductCode.productName'},
                            {text: '出库数量', dataIndex: 'num'},
                            {text: '出库价格', dataIndex: 'sellPrice'},
                            {text: '库存平均价格', dataIndex: 'stockPrice'},
                            {text: '出库总价', dataIndex: 'outTotal'}
                        ]
                    }
                ],
                buttons: [
                    {
                        text: '关闭',
                        handler: function () {
                            Ext.getCmp('osoDetailWin').close();
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

