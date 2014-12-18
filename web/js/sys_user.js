/**
 * Created by Administrator on 2014-12-09.
 */

Ext.define('js.sys_user', {
    extend: 'Ext.grid.Panel',

    initComponent: function () {
        var me = this;
        //主页面rootList数据源
        var sysUserStore = Ext.create('Ext.data.Store', {

            pageSize: 10,
            proxy: {
                type: 'ajax',
                url: '/person/showSysUserRootList',
                reader: {
                    type: 'json',
                    root: 'sysUserRootList',
                    totalProperty: 'count'
                }
            },
            fields: [
                {name: 'userId', type: 'int'},
                {name: 'realName', type: 'string'},
                {name: 'loginName', type: 'string'},
                {name: 'loginPass', type: 'string'},
                {name: 'address', type: 'string'},
                {name: 'linkTel', type: 'string'},
                {name: 'qq', type: 'string'},
                {name: 'email', type: 'string'},
                {name: 'mobile', type: 'string'},
                {name: 'sortId', type: 'short'},
                {name: 'status', type: 'boolean'}
            ],
            autoLoad: false,
            listeners: {

            }

        });
        var userStatusStore = Ext.create('Ext.data.Store', {

            fields: ['statusValue', 'status'],
            data: [
                {'statusValue': 'true', 'status': '可用'},
                {'statusValue': 'false', 'status': '不可用'}
            ]
        });
        sysUserStore.load({
            params: {
                start: 0,
                limit: 10
            }
        });

        Ext.apply(this, {
            id: '用户管理',
            title: '用户管理',
            store: sysUserStore,
            selModel: Ext.create('Ext.selection.CheckboxModel', {mode: "SIMPLE"}),
            closable: true,
            columns: [
                {text: '用户ID', dataIndex: 'userId'},
                {text: '登陆名', dataIndex: 'loginName'},
                {text: '真实姓名', dataIndex: 'realName'},
                {text: '登陆密码', dataIndex: 'loginPass'},
                {text: '地址', dataIndex: 'address'},
                {text: '联系电话', dataIndex: 'linkTel'},
                {text: 'QQ', dataIndex: 'qq'},
                {text: 'E-mail', dataIndex: 'email'},
                {text: '手机', dataIndex: 'mobile'},
                {text: '排序编码', dataIndex: 'sortId'},
                {text: '状态', dataIndex: 'status'}
            ],
            width: 300,

            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: sysUserStore,
                    dock: 'bottom',
                    displayInfo: true
                }
            ],
            tbar: [

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
                },
                {
                    xtype: 'button',
                    text: '权限',
                    handler: me.findLimition
                }
            ]

        });
        this.callParent();
    },

    findLimition: function () {
        var userId = Ext.getCmp('用户管理').getSelectionModel().getSelection()[0].get('userId');
        var muneStore = Ext.create('Ext.data.Store', {
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
    },

    deleteItem: function () {
        var record = Ext.getCmp('用户管理').getSelectionModel().getSelection();
        var length = record.length;
        var userIdList = "";
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length > 0) {

            for (var i = 0; i < length; i++) {
                if (i < length - 1) {
                    userIdList = userIdList + record[i].get('userId') + ',';
                }
                if (i == length - 1) {
                    userIdList = userIdList + record[i].get('userId');
                }
            }
            Ext.MessageBox.confirm('系统提示', '确认要删除该记录？', function (btn) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/person/deleteSysUser.action?userIdList=' + userIdList,

                        success: function (response) {
                            var msg = Ext.JSON.decode(response.responseText);
                            Ext.MessageBox.alert("提示框", msg.message);
                            Ext.getCmp('用户管理').store.reload();
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
        var userStatusStore = Ext.create('Ext.data.Store', {
            fields: ['statusValue', 'status'],
            data: [
                {'statusValue': 'true', 'status': '可用'},
                {'statusValue': 'false', 'status': '不可用'}
            ]
        });

        var arr = Ext.getCmp('用户管理').getSelectionModel().getSelection();
        var length = arr.length;
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length == 1) {
            var record = arr[0];
            Ext.create('Ext.window.Window', {
                title: '修改',
                width: 300,
                id: 'myRoleEditWin',
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
                                xtype: 'hidden',
                                value: record.get('userId'),
                                name: 'sysUser.userId'
                            },
                            {
                                fieldLabel: '真实姓名',
                                width: 20,
                                allowBlank: false,
                                value: record.get('realName'),
                                name: 'sysUser.realName'
                            },
                            {
                                fieldLabel: '登录名',
                                width: 20,
                                allowBlank: false,
                                value: record.get('loginName'),
                                name: 'sysUser.loginName'
                            },
                            {
                                inputType: 'password',
                                fieldLabel: '登陆密码',
                                width: 20,
                                allowBlank: false,
                                name: 'sysUser.loginPass'
                            },
                            {
                                fieldLabel: '确认密码',
                                inputType: 'password',
                                width: 20,
                                allowBlank: false,
                                name: 'enPass'
                            },
                            {
                                fieldLabel: '联系地址',
                                width: 20,
                                value: record.get('address'),
                                name: 'sysUser.address'
                            },
                            {
                                fieldLabel: '电话号码',
                                width: 20,
                                value: record.get('linkTel'),
                                name: 'sysUser.linkTel'
                            },
                            {
                                fieldLabel: 'QQ号码',
                                width: 20,
                                value: record.get('qq'),
                                name: 'sysUser.qq'
                            },
                            {
                                fieldLabel: 'E-mail',
                                width: 20,
                                value: record.get('email'),
                                name: 'sysUser.email'
                            },
                            {
                                fieldLabel: '手机号码',
                                width: 20,
                                value: record.get('mobile'),
                                name: 'sysUser.mobile'
                            },
                            {
                                fieldLabel: '排序编码',
                                width: 20,
                                value: record.get('sortId'),
                                name: 'sysUser.sortId'
                            },
                            {
                                xtype: 'combo',
                                fieldLabel: '状态',
                                store: userStatusStore,
                                displayField: 'status',
                                valueField: 'statusValue',
                                name: 'sysUser.status'
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
                                        url: '/person/updateSysUser.action',
                                        success: function (response) {
                                            var msg = Ext.JSON.decode(response.responseText);
                                            Ext.getCmp('用户管理').store.reload();
                                            Ext.getCmp('myRoleEditWin').close();
                                            Ext.Msg.alert('系统提示', msg.message);
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
        var userStatusStore = Ext.create('Ext.data.Store', {
            fields: ['statusValue', 'status'],
            data: [
                {'statusValue': 'true', 'status': '可用'},
                {'statusValue': 'false', 'status': '不可用'}
            ]
        });
        Ext.create('Ext.window.Window', {
            title: '添加',
            id: 'sysUserAddWin',
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
                            fieldLabel: '真实姓名',
                            width: 20,
                            allowBlank: false,
                            name: 'sysUser.realName'
                        },
                        {
                            fieldLabel: '登录名',
                            width: 20,
                            allowBlank: false,
                            name: 'sysUser.loginName'
                        },
                        {
                            fieldLabel: '登陆密码',
                            inputType: 'password',
                            width: 20,
                            allowBlank: false,
                            name: 'sysUser.loginPass'
                        },
                        {
                            fieldLabel: '确认密码',
                            inputType: 'password',
                            width: 20,
                            allowBlank: false,
                            name: 'enPass'
                        },
                        {
                            fieldLabel: '联系地址',
                            width: 20,
                            allowBlank: false,
                            name: 'sysUser.address'
                        },
                        {
                            fieldLabel: '电话号码',
                            width: 20,
                            allowBlank: false,
                            name: 'sysUser.linkTel'
                        },
                        {
                            fieldLabel: 'QQ号码',
                            width: 20,
                            allowBlank: false,
                            name: 'sysUser.qq'
                        },
                        {
                            fieldLabel: 'E-mail',
                            width: 20,
                            allowBlank: false,
                            name: 'sysUser.email'
                        },
                        {
                            fieldLabel: '手机号码',
                            width: 20,
                            allowBlank: false,
                            name: 'sysUser.mobile'
                        },
                        {
                            fieldLabel: '排序编码',
                            name: 'sysUser.sortId'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '状态',
                            store: userStatusStore,
                            displayField: 'status',
                            valueField: 'statusValue',
                            name: 'sysUser.status'
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
                                url: '/person/saveSysUser.action',
                                success: function () {
                                    Ext.getCmp('用户管理').store.reload();
                                    Ext.getCmp('sysUserAddWin').close();
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

