/**
 * Created by Administrator on 2014/11/25.
 */
Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        title: '注册',
        layout: 'fit',
        width: 300,
        items: {
            xtype: 'form',
            items: {
                defaults: {
                    xtype: 'textfield',
                    allowBlank: false
                },
                items: [
                    {
                        name: 'user_name',
                        fieldLabel: '姓名',
                        blankText: '请输入姓名'
                    },
                    {
                        name: 'user_pass',
                        fieldLabel: '密码',
                        inputType: 'password',
                        blankText: '请输入密码'
                    },
                    {
                        name: 'ensure_pass',
                        fieldLabel: '确认密码',
                        inputType: 'password',
                        blankText: '请输入确认密码'
                    },
                    {
                        xtype: 'datefield',
                        anchor: '100%',
                        fieldLabel: '出生日期',
                        name: 'birthday',
                        maxValue: new Date()  // limited to the current date or prior
                    },
                    {
                        name: 'datefield',
                        fieldLabel: '家庭地址',
                        blankText: '请输入确认密码'
                    }
                ]
            }
        },
        buttonAlign: 'center',
        buttons: [
            {
                text: '提交',
                handler: function () {
                    var form = this.up('panel').down('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            url: '/login',
                            success: function (form, action) {
                                var msg = Ext.JSON.decode(action.response.responseText);
                                if (msg.statee) {
                                    Ext.Msg.alert(msg.message);
                                } else {
                                    Ext.Msg.alert(msg.message);
                                }
                            },
                            failure: function (form, action) {
                                var msg = Ext.JSON.decode(action.response.responseText);
                                Ext.Msg.alert(msg.message);
                            }
                        });
                    }
                }
            },
            {
                text: '重置',
                handler: function () {
                    this.up('panel').down('form').getForm().reset();
                }
            }
        ],
        renderTo: Ext.getBody()
    }).center()

});