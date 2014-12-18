/**
 * Created by Administrator on 2014-12-11.
 */

Ext.define('js.provider', {
    extend: 'Ext.grid.Panel',

    initComponent: function () {
        var me = this;
        //主页面rootList数据源
        var ProviderStore = Ext.create('Ext.data.Store', {

            pageSize: 10,
            proxy: {
                type: 'ajax',
                url: '/person/showProviderList',
                reader: {
                    type: 'json',
                    root: 'providerList',
                    totalProperty: 'count'
                }
            },
            fields: [
                'providerCode',
                'providerName',
                'providerNameAb',
                'address',
                'linkName',
                'linkTel',
                'qq',
                'email',
                'sortId',
                'status'
            ],
            autoLoad: false,
            listeners: {
                beforeload: function (store, operation) {

                    var provider_queryStatus = Ext.getCmp('provider_queryStatus');
                    if (provider_queryStatus) {
                        if (provider_queryStatus.getValue()) {
                            if (operation.params) {
                                operation.params.status = provider_queryStatus.getValue();
                            }
                            else {
                                operation.params = {
                                    status: provider_queryStatus.getValue()
                                };

                            }
                        }
                    }
                }
            }


        });
        var providerStatusStore = Ext.create('Ext.data.Store', {

            fields: ['statusValue', 'status'],
            data: [
                {'statusValue': 'true', 'status': '可用'},
                {'statusValue': 'false', 'status': '不可用'}
            ]
        });

        ProviderStore.load({
            params: {
                start: 0,
                limit: 10
            }
        });


        Ext.apply(this, {
            id: '供应商管理',
            title: '供应商管理',
//            renderTo: Ext.getBody(),
            store: ProviderStore,
            selModel: Ext.create('Ext.selection.CheckboxModel', {mode: "SIMPLE"}),
            closable: true,
            columns: [
                {text: '供应商编码', dataIndex: 'providerCode'},
                {text: '供应商名称', dataIndex: 'providerName'},//-------------------
                {text: '供应商助记码', dataIndex: 'providerNameAb'},//----------------
                {text: '联系地址', dataIndex: 'address'},//-------------
                {text: '联系人', dataIndex: 'linkName'},//-----------
                {text: '联系电话', dataIndex: 'linkTel'},//---------
                {text: '联系QQ', dataIndex: 'qq'},
                {text: '联系邮箱', dataIndex: 'email'},//----------
                {text: '排序码', dataIndex: 'sortId'},
                {text: '可用状态', dataIndex: 'status'}
            ],
            width: 300,

            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: ProviderStore,
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
                            xtype: 'combo',
                            fieldLabel: '促销状态',
                            id: 'provider_queryStatus',
                            store: providerStatusStore,
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
        Ext.getCmp('供应商管理').store.reload({
            params: {
                status: Ext.getCmp('provider_queryStatus').value
            }
        })

    },

    deleteItem: function () {
        var record = Ext.getCmp('供应商管理').getSelectionModel().getSelection();
        var length = record.length;
        var providerCodeList = "";
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length > 0) {

            for (var i = 0; i < length; i++) {
                if (i < length - 1) {
                    providerCodeList = providerCodeList + record[i].get('providerCode') + ',';
                }
                if (i == length - 1) {
                    providerCodeList = providerCodeList + record[i].get('providerCode');
                }
            }
            Ext.MessageBox.confirm('系统提示', '确认要删除该记录？', function (btn) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/person/deleteProvider.action?providerCodeList=' + providerCodeList,

                        success: function () {
                            Ext.MessageBox.alert("提示框", "删除成功！", function () {
                            });
                            Ext.getCmp('供应商管理').store.reload();
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

        var providerStatusStore = Ext.create('Ext.data.Store', {
            fields: ['statusValue', 'status'],
            data: [
                {'statusValue': 'true', 'status': '可用'},
                {'statusValue': 'false', 'status': '不可用'}
            ]
        });


        var arr = Ext.getCmp('供应商管理').getSelectionModel().getSelection();
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
                id: 'myWin1',
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
                                xtype: 'hidden',
                                value: record.get('providerCode'),
                                name: 'provider.providerCode'
                            },
                            {
                                fieldLabel: '供应商名称',
                                width: 20,
                                value: record.get('providerName'),
                                allowBlank: false,
                                name: 'provider.providerName'
                            },
                            {
                                fieldLabel: '供应商助记码',
                                value: record.get('providerNameAb'),
                                name: 'provider.providerNameAb'
                            },
                            {
                                fieldLabel: '地址',
                                value: record.get('address'),
                                allowBlank: false,
                                name: 'provider.address'
                            },
                            {
                                fieldLabel: '联系人',
                                value: record.get('linkName'),
                                allowBlank: false,
                                name: 'provider.linkName'
                            },
                            {
                                fieldLabel: '联系电话',
                                value: record.get('linkTel'),
                                allowBlank: false,
                                name: 'provider.linkTel'
                            },
                            {
                                fieldLabel: '联系QQ',
                                value: record.get('qq'),
                                allowBlank: false,
                                name: 'provider.qq'
                            },
                            {
                                fieldLabel: '电子邮箱',
                                value: record.get('email'),
                                allowBlank: false,
                                name: 'provider.email'
                            },
                            {
                                fieldLabel: '排序码',
                                value: record.get('sortId'),
                                allowBlank: false,
                                name: 'provider.sortId'
                            },
                            {
                                xtype: 'combo',
                                fieldLabel: '供应状态',
                                store: providerStatusStore,
                                displayField: 'status',
                                valueField: 'statusValue',
                                name: 'provider.status'
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
                                        url: '/person/updateProvider.action',
                                        success: function (response) {
                                            Ext.getCmp('供应商管理').store.reload();
                                            Ext.getCmp('myWin1').close();
                                            var msg = Ext.JSON.decode(response.responseText);
                                            Ext.Msg.alert('系统提示！', msg.message);
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

        var validStore = Ext.create('Ext.data.Store', {

            fields: ['validValue', 'valid'],
            data: [
                {'validValue': 'true', 'valid': '可用'},
                {'validValue': 'false', 'valid': '不可用'}
            ]
        });

        Ext.create('Ext.window.Window', {
            title: '添加',
            id: 'myWin',
            width: 300,
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
                            fieldLabel: '供应商编码',
                            allowBlank: false,
                            name: 'provider.providerCode'

                        },
                        {
                            fieldLabel: '供应商名称',
                            width: 20,
                            allowBlank: false,
                            name: 'provider.providerName'
                        },
                        {
                            fieldLabel: '供应商助记码',
                            name: 'provider.providerNameAb'
                        },
                        {
                            fieldLabel: '联系地址',
                            allowBlank: false,
                            name: 'provider.address'
                        },
                        {
                            fieldLabel: '联系人',
                            allowBlank: false,
                            name: 'provider.linkName'
                        },
                        {
                            fieldLabel: '联系电话',
                            allowBlank: false,
                            name: 'provider.linkTel'
                        },
                        {
                            fieldLabel: '联系QQ',
                            allowBlank: false,
                            name: 'provider.qq'
                        },
                        {
                            fieldLabel: '联系邮箱',
                            allowBlank: false,
                            name: 'provider.email'
                        },
                        {
                            fieldLabel: '排序码',
                            allowBlank: false,
                            name: 'provider.sortId'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '供应状态',
                            store: validStore,
                            displayField: 'valid',
                            valueField: 'validValue',
                            editable: false,
                            name: 'provider.status'
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
                                url: '/person/saveProvider',
                                success: function (response) {
                                    Ext.getCmp('供应商管理').store.reload();
                                    Ext.getCmp('myWin').close();
                                    var msg = Ext.JSON.decode(response.responseText)
                                    Ext.Msg.alert('系统提示', msg.message)
                                },
                                failure: function () {
                                    Ext.Msg.alert('系统提示', '网络连接有错误，请联系管理员！')
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

