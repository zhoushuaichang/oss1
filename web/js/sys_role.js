/**
 * Created by Administrator on 2014-12-01.
 */

Ext.define('js.sys_role', {
    extend: 'Ext.grid.Panel',
    myTreeData: {root: {children: []}},
    initComponent: function () {
        var me = this;
        //主页面rootList数据源
        var sysRoleStore = Ext.create('Ext.data.Store', {

            pageSize: 10,
            proxy: {
                type: 'ajax',
                url: '/sys/showSysRoleRootList',
                reader: {
                    type: 'json',
                    root: 'rootList',
                    totalProperty: 'count'
                }
            },
            fields: [
                {name: 'roleCode', type: 'string'},
                {name: 'roleName', type: 'string'},
                {name: 'sortId', type: 'short'},
                {name: 'status', type: 'boolean'}
            ],
            autoLoad: false,
            listeners: {
                beforeload: function (store, operation) {
                    var roleName = Ext.getCmp('roleName');
                    var status = Ext.getCmp('status');
                    if (roleName || status) {
                        if (roleName.getValue() || status.getValue()) {
                            if (operation.params) {
                                operation.params.selectId = roleName.getValue();
                                operation.params.selectName = status.getValue();
                            }
                            else {
                                operation.params = {
                                    selectId: roleName.getValue(),
                                    selectName: status.getValue()};
                            }
                        }
                    }
                }
            }


        });
        var roleStatusStore = Ext.create('Ext.data.Store', {

            fields: ['statusValue', 'status'],
            data: [
                {'statusValue': 'true', 'status': '可用'},
                {'statusValue': 'false', 'status': '不可用'}
            ]
        });
        sysRoleStore.load({
            params: {
                start: 0,
                limit: 10
            }
        });


        Ext.apply(this, {
            id: '用户角色分类维护',
            title: '用户角色分类维护',
//            renderTo: Ext.getBody(),
            store: sysRoleStore,
            selModel: Ext.create('Ext.selection.CheckboxModel', {mode: "SIMPLE"}),
            closable: true,
            columns: [
                {text: '角色编码', dataIndex: 'roleCode'},
                {text: '角色名称', dataIndex: 'roleName'},
                {text: '排序编码', dataIndex: 'sortId'},
                {text: '状态', dataIndex: 'status'}
            ],
            width: 300,

            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: sysRoleStore,
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
                            fieldLabel: '角色名称',
                            id: 'sys_role_queryRoleName',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '状态',
                            id: 'sys_role_queryStatus',
                            store: roleStatusStore,
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
                    text: '启用/禁用',
                    handler: me.deleteItem
                }
            ]

        });
        this.callParent();
    },


    queryConditions: function () {
        Ext.getCmp('用户角色分类维护').store.reload({
            params: {
                roleName: Ext.getCmp('sys_role_queryRoleName').value,
                statusRemark: Ext.getCmp('sys_role_queryStatus').value
            }
        })

    },

    deleteItem: function () {
        var record = Ext.getCmp('用户角色分类维护').getSelectionModel().getSelection();
        var length = record.length;
        var roleCode = "", roleStatus;
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！");
        }
        if (length == 1) {
            roleCode = record[0].get('roleCode');
            roleStatus = record[0].get('status');
            if (roleStatus === true) {
                Ext.MessageBox.confirm('系统提示', '确认要禁用角色？', function (btn) {
                    if (btn == 'yes') {
                        Ext.Ajax.request({
                            url: '/sys/endSysRole.action?roleCode=' + roleCode,

                            success: function () {
                                Ext.MessageBox.alert("提示框", "已禁用！");
                                Ext.getCmp('用户角色分类维护').store.reload();
                            },
                            failure: function () {
                                Ext.MessageBox.alert("提示框", "网络超时，请刷新后重试！");
                            }
                        });
                    }
                });
            }
            if (roleStatus === false) {
                Ext.MessageBox.confirm('系统提示', '确认要启用角色？', function (btn) {
                    if (btn == 'yes') {
                        Ext.Ajax.request({
                            url: '/sys/startSysRole.action?roleCode=' + roleCode,
                            success: function () {
                                Ext.MessageBox.alert("提示框", "已启用！");
                                Ext.getCmp('用户角色分类维护').store.reload();
                            },
                            failure: function () {
                                Ext.MessageBox.alert("提示框", "网络超时，请刷新后重试！");
                            }
                        });
                    }
                });
            }

        }
        if (length > 1) {
            Ext.MessageBox.alert("提示框", "每次只能禁用一个用户！");
        }
    },

    edit: function () {


        var arr = Ext.getCmp('用户角色分类维护').getSelectionModel().getSelection();
        var length = arr.length;
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length == 1) {
            var record = arr[0];
            Ext.Ajax.request(
                {
                    url: '/person/showMenuRole.action',
                    async: false,
                    success: function (response) {
                        myTreeData = response.responseText;
                        if (typeof (myTreeData) === 'string') {
                            myTreeData = Ext.JSON.decode(myTreeData);
                        }
                    }
                }
            );

            var treeEditStore = Ext.create('Ext.data.TreeStore', {
                fields: [
                    {name: 'id', type: 'string', mapping: 'sys_menu.menuCode'},
                    {name: 'text', type: 'string', mapping: 'sys_menu.menuName'}

                ],
                root: {
                    text: '权限管理',
                    id: '-1',
                    children: myTreeData.root.children
                }
            });
            Ext.create('Ext.window.Window', {
                title: '编辑',
                width: 300,
                id: 'myRoleEditWin',
                layout: 'fit',
                items: [
                    {
                        xtype: 'form',
                        layout: 'form',
                        margin: 5,

                        items: [
                            {
                                xtype: 'panel',
                                defaults: {
                                    xtype: 'textfield',
                                    allowBlank: false,
                                    region: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'hidden',
                                        value: record.get('roleCode'),
                                        name: 'roleCode'
                                    },
                                    {
                                        fieldLabel: '角色名称',
//                                        width: 20,
                                        value: record.get('roleName'),
                                        allowBlank: false,
                                        name: 'roleName'
                                    },
                                    {
                                        fieldLabel: '排序编码',
                                        value: record.get('sortId'),
                                        allowBlank: false,
                                        name: 'sortId'
                                    },
                                    {
                                        fieldLabel: '状态',
                                        value: record.get('status'),
                                        allowBlank: true,
                                        name: 'status'
                                    },
                                    {
                                        xtype: 'hidden',
                                        value: record.get('roleCode'),
                                        name: 'roleCode'
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                items: [
                                    {
                                        xtype: 'treepanel',
                                        id: 'treeEdit',
                                        height: 250,
                                        store: treeEditStore,
                                        listeners: {
                                            'checkchange': function (node, checked) {
                                                node.expand();
                                                node.checked = checked;

                                                if (true == checked) {
                                                    var parent_node = node.parentNode;
                                                    while (parent_node != null) {
                                                        parent_node.set('checked', checked);
                                                        parent_node = parent_node.parentNode;
                                                    }
                                                }
                                                node.eachChild(function (child) {
                                                    child.set('checked', checked);
                                                    child.fireEvent('checkchange', child, checked);
                                                });
                                                if (Ext.getCmp("treeEdit").getRootNode().data.id == "-1") {
                                                    Ext.getCmp("treeEdit").getRootNode().data.checked = false;
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttons: [
                    {
                        text: '提交',
                        handler: function () {
                            //修改角色
                            var updateRoleArr = {}, formData, form;
                            formData = Ext.getCmp('myRoleEditWin').query();
                            Ext.each(formData, function (items1) {
                                if (items1) {
                                    if (items1.xtype === 'combox' || items1.xtype === 'textfield' || items1.xtype === 'hidden') {
                                        updateRoleArr[items1.name] = items1.lastValue;
                                    }
                                }
                            });

                            //tree的提交遍历
                            var roleMenuTree = [];
                            var checkedTree = Ext.getCmp('treeEdit').getChecked();
                            Ext.each(checkedTree, function (item, index) {
                                if (item.data.id != -1) {
                                    roleMenuTree[index] = {};
                                    roleMenuTree[index].menuCode = item.data.id;
                                }
                            });
                            form = Ext.create('Ext.form.Panel', {});
                            if (form.isValid()) {
                                form.submit({
                                    url: '/person/updateMenuRole.action',
                                    jsonSubmit: true,
                                    params: {
                                        updateRoleArr: updateRoleArr,
                                        roleMenuTree: roleMenuTree
                                    },
                                    success: function (form, action) {
                                        var msg = Ext.JSON.decode(action.response.responseText);
                                        Ext.Msg.alert('系统提示', msg.message);
                                    },
                                    failure: function () {
                                        Ext.Msg.alert('系统提示', '网络有错误！');
                                    }
                                })
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

//        var record = Ext.getCmp('用户角色分类维护').getSelectionModel().getSelection()[0];

    },

    addNew: function () {
        var roleStatusStore = Ext.create('Ext.data.Store', {
            fields: ['statusValue', 'status'],
            data: [
                {'statusValue': 'true', 'status': '可用'},
                {'statusValue': 'false', 'status': '不可用'}
            ]
        });
        Ext.create('Ext.window.Window', {
            title: '添加',
            id: 'myRoleAddWin',
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
                            fieldLabel: '角色编码',
                            width: 20,
                            allowBlank: false,
                            name: 'sysRole.roleCode'
                        },
                        {
                            fieldLabel: '角色名称',
                            width: 20,
                            allowBlank: false,
                            name: 'sysRole.roleName'
                        },
                        {
                            fieldLabel: '排序编码',
                            name: 'sysRole.sortId'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '状态',
                            store: roleStatusStore,
                            displayField: 'status',
                            valueField: 'statusValue',
                            name: 'sysRole.status'
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
                                url: '/sys/saveSysRole',
                                success: function () {
                                    Ext.getCmp('用户角色分类维护').store.reload();
                                    Ext.getCmp('myRoleAddWin').close();
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

