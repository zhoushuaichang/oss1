/**
 * Created by Administrator on 2014-12-04.
 */

Ext.define('js.product_stock', {
    extend: 'Ext.grid.Panel',

    initComponent: function () {
        var me = this;
        //主页面rootList数据源
        var productStockStore = Ext.create('Ext.data.Store', {
            pageSize: 10,
            proxy: {
                type: 'ajax',
                url: '/sys/showProductStockList',
                reader: {
                    type: 'json',
                    root: 'productStockList',
                    totalProperty: 'count'
                }
            },
            fields: [
                'productCode',
                'productByProductCode.productName',
                'avgPrice',
                'num'
            ],
            autoLoad: true

        });
        productStockStore.load({
            params: {
                start: 0,
                limit: 10
            }
        });

        Ext.apply(this, {
            id: '库存信息查看',
            title: '库存信息查看',
//            renderTo: Ext.getBody(),
            store: productStockStore,
            selModel: Ext.create('Ext.selection.CheckboxModel', {mode: "SIMPLE"}),
            closable: true,
            columns: [
                {text: '商品名称', dataIndex: 'productByProductCode.productName'},
                {text: '平均价', dataIndex: 'avgPrice'},
                {text: '库存数量', dataIndex: 'num'}
            ],
            width: 300,

            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: productStockStore,
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
                            fieldLabel: '促销名称',
                            id: 'queryProUnitName',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
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
                    text: '添加',
                    handler: me.addNew
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
        Ext.getCmp('库存信息查看').store.reload({
            params: {
                name: Ext.getCmp('queryProUnitName').value,
                statusRemark: Ext.getCmp('product_unit_queryStatus').value
            }
        })

    },

    deleteItem: function () {
        var record = Ext.getCmp('库存信息查看').getSelectionModel().getSelection();
        var length = record.length;
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length > 0) {
            var unitIdList = "";
            for (var i = 0; i < length; i++) {
                if (i < length - 1) {
                    unitIdList = unitIdList + record[i].get('unitId') + ',';
                }
                if (i == length - 1) {
                    unitIdList = unitIdList + record[i].get('unitId');
                }
            }
            Ext.MessageBox.confirm('系统提示', '确认要删除该记录？', function (btn) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/sys/deleteProductUnit.action?unitIdList=' + unitIdList,

                        success: function () {
                            Ext.MessageBox.alert("提示框", "删除成功！", function () {
                            });
                            Ext.getCmp('库存信息查看').store.reload();
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

        var arr = Ext.getCmp('库存信息查看').getSelectionModel().getSelection();
        var length = arr.length;
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length == 1) {
            var record = arr[0];
            Ext.create('Ext.window.Window', {
                title: '编辑',
                width: 300,
                id: 'myProUnitWin',
                layout: 'fit',
                items: [
                    {
                        xtype: 'form',
                        layout: 'form',
                        margin: 5,
                        defaults: {
                            xtype: 'textfield',
                            allowBlank: false,
                            region: 'center'
                        },
                        items: [
                            {
                                fieldLabel: '单位名称',
                                width: 20,
                                value: record.get('name'),
                                allowBlank: false,
                                name: 'productUnit.name'
                            },
                            {
                                fieldLabel: '使用状态',
                                value: record.get('status'),
                                allowBlank: false,
                                name: 'productUnit.status'
                            },
                            {
                                fieldLabel: '备注',
                                value: record.get('memo'),
                                allowBlank: true,
                                name: 'productUnit.memo'
                            },
                            {
                                xtype: 'hidden',
                                value: record.get('unitId'),
                                name: 'productUnit.unitId'

                            }
                        ]
                    }
                ],
                buttons: [
                    {
                        text: '提交',
                        handler: function () {
                            var form = this.up('window').down('form').getForm();
                            if (form.isValid()) {
                                form.submit({
                                        url: '/sys/updataProductUnit.action',
                                        success: function () {
                                            Ext.getCmp('库存信息查看').store.reload();
                                            Ext.getCmp('myProUnitWin').close();
                                        },
                                        failure: function () {
                                            Ext.MessageBox.alert('系统提示', '网络超时，请刷新后重试！');
                                        }
                                    }
                                );
                            }
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

    addNew: function () {
        var productUnitStatusStore = Ext.create('Ext.data.Store', {
            fields: ['statusValue', 'status'],
            data: [
                {'statusValue': 'true', 'status': '可用'},
                {'statusValue': 'false', 'status': '不可用'}
            ]
        });
        Ext.create('Ext.window.Window', {
            title: '添加',
            id: 'myProUnitWin',
            width: 300,
//                        height:300,

            layout: 'fit',
            items: [
                {
                    xtype: 'form',
                    layout: 'form',
                    margin: 5,
                    defaults: {
                        xtype: 'textfield',
                        region: 'center'
                    },
                    items: [
                        {
                            fieldLabel: '单位名称',
                            width: 20,
                            allowBlank: false,
                            name: 'productUnit.name'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '使用状态',
                            store: productUnitStatusStore,
                            displayField: 'status',
                            valueField: 'statusValue',
                            name: 'productUnit.status'
                        },
                        {
                            fieldLabel: '备注',
                            name: 'productUnit.memo'
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: '提交',
                    handler: function () {
                        var form = this.up('window').down('form').getForm();
                        if (form.isValid()) {
                            form.submit({
                                url: '/sys/saveProductUnit',
                                success: function () {
                                    Ext.getCmp('库存信息查看').store.reload();
                                    Ext.getCmp('myProUnitWin').close();
                                },
                                failure: function () {
                                    window.location.href = 'login.html';
                                }
                            });
                        }
                    }
                },
                {
                    text: '重置',
                    handler: function () {
                        this.up('window').down('form').getForm().reset();
                    }
                }
            ]
        }).show();
    }

});

