/**
 * Created by Administrator on 2014/11/26.
 */
Ext.define('js.product_sale_status', {
    extend: 'Ext.grid.Panel',

    initComponent: function () {
        var me = this;
        //主页面rootList数据源
        var proSaleStatusStore = Ext.create('Ext.data.Store', {

            pageSize: 10,
            proxy: {
                type: 'ajax',
                url: '/sys/showProductSaleStatusRootList',
                reader: {
                    type: 'json',
                    root: 'rootList',
                    totalProperty: 'count'
                }
            },
            fields: [
                {name: 'statusId', type: 'byte'},
                {name: 'statusName', type: 'string'},
                {name: 'status', type: 'boolean'},
                {name: 'memo', type: 'string'}
            ],
            autoLoad: false,
            listeners: {
                beforeload: function (store, operation) {
                    var statusName = Ext.getCmp('statusName');
                    var status = Ext.getCmp('status');
                    if (statusName || status) {
                        if (statusName.getValue() || status.getValue()) {
                            if (operation.params) {
                                operation.params.selectId = statusName.getValue();
                                operation.params.selectName = status.getValue();
                            }
                            else {
                                operation.params = {
                                    selectId: statusName.getValue(),
                                    selectName: status.getValue()};
                            }
                        }
                    }
                }
            }


        });
        var statusStore = Ext.create('Ext.data.Store', {

            fields: ['statusValue', 'status'],
            data: [
                {'statusValue': 'true', 'status': '促销'},
                {'statusValue': 'false', 'status': '不促销'}
            ]
        });
        proSaleStatusStore.load({
            params: {
                start: 0,
                limit: 10
            }
        });


        Ext.apply(this, {
            id: '促销状态字典维护',
            title: '促销状态字典维护',
//            renderTo: Ext.getBody(),
            store: proSaleStatusStore,
            selModel: Ext.create('Ext.selection.CheckboxModel', {mode: "SIMPLE"}),
            closable: true,
            columns: [
                {text: '促销编号', dataIndex: 'statusId'},
                {text: '促销名称', dataIndex: 'statusName'},
                {text: '促销状态', dataIndex: 'status'},
                {text: '备注', dataIndex: 'memo'}
            ],
            width: 300,

            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: proSaleStatusStore,
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
                            id: 'queryStatusName',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '促销状态',
                            id: 'product_sale_status_queryStatus',
                            store: statusStore,
                            displayField: 'status',
                            valueField: 'statusValue',
                            editable: false,
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
        Ext.getCmp('促销状态字典维护').store.reload({
            params: {
                statusName: Ext.getCmp('queryStatusName').value,
                statusRemark: Ext.getCmp('product_sale_status_queryStatus').value
            }
        })

    },

    deleteItem: function () {
        var record = Ext.getCmp('促销状态字典维护').getSelectionModel().getSelection();
        var length = record.length;
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length > 0) {
            var statusIdList = "";
            for (var i = 0; i < length; i++) {
                if (i < length - 1) {
                    statusIdList = statusIdList + record[i].get('statusId') + ',';
                }
                if (i == length - 1) {
                    statusIdList = statusIdList + record[i].get('statusId');
                }
            }
            Ext.MessageBox.confirm('系统提示', '确认要删除该记录？', function (btn) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/sys/deleteProductSaleStatus.action?statusIdList=' + statusIdList,

                        success: function () {
                            Ext.MessageBox.alert("提示框", "删除成功！", function () {
                            });
                            Ext.getCmp('促销状态字典维护').store.reload();
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
        var record = Ext.getCmp('促销状态字典维护').getSelectionModel().getSelection()[0];
        Ext.create('Ext.window.Window', {
            title: '编辑',
            width: 300,
            id: 'mypssEditWin',
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
                            fieldLabel: '促销名称',
                            width: 20,
                            value: record.get('statusName'),
                            allowBlank: false,
                            name: 'productSaleStatus.statusName'
                        },
                        {
                            fieldLabel: '是否促销',
                            value: record.get('status'),
                            allowBlank: false,
                            name: 'productSaleStatus.status'
                        },
                        {
                            fieldLabel: '促销状态',
                            value: record.get('memo'),
                            allowBlank: true,
                            name: 'productSaleStatus.memo'
                        },
                        {
                            xtype: 'hidden',
                            value: record.get('statusId'),
                            name: 'productSaleStatus.statusId'

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
                                    url: '/sys/updataProductSaleStatus.action',
                                    success: function () {
                                        Ext.getCmp('促销状态字典维护').store.reload();
                                        Ext.getCmp('mypssEditWin').close();
                                    },
                                    failure: function () {
                                        Ext.MessageBox.alert('系统提示', '网络超时，请刷新后重试！');
//                                        window.location.href = 'login.html';
                                    }
                                }
//                                                url....
//                                                    params:{
//                                                id: ''
//                                            }
                            );
                        }
                    }
                }
            ]
        }).show();
    },

    addNew: function () {
        Ext.create('Ext.window.Window', {
            title: '添加',
            id: 'mypssAddWin',
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
                            fieldLabel: '促销名称',
                            width: 20,
                            allowBlank: false,
                            name: 'productSaleStatus.statusName'
                        },
                        {
                            fieldLabel: '是否促销',
                            allowBlank: false,
                            name: 'productSaleStatus.status'
                        },
                        {
                            fieldLabel: '促销状态',
                            name: 'productSaleStatus.memo'
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
                                url: '/sys/saveProductSaleStatus',
                                success: function () {
                                    Ext.getCmp('促销状态字典维护').store.reload();
                                    Ext.getCmp('mypssAddWin').close();
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
