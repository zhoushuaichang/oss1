Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        title: '登陆',
        layout: 'fit',
        width: 300,
        frame: true,
//        border:false,
        items: {
            xtype: 'form',
            border: false,
            items: {
                defaults: {
                    xtype: 'textfield',
                    allowBlank: false,
                    margin: '10',
                    labelAlign: 'right'

                },
                items: [
                    {
                        name: 'loginName',
                        fieldLabel: '登录名',
                        labelWidth: 60,

                        blankText: '请输入登录名'
                    },
                    {
                        name: 'loginPass',
                        fieldLabel: '密码',
                        inputType: 'password',
                        labelWidth: 60,

                        blankText: '请输入密码'
                    },
                    {
                        xtype: 'panel',
                        layout: 'column',
                        border: false,
                        bodyStyle: {
//                            backgroundColor: '#dfe9f6'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'validCode',
                                fieldLabel: '验证码',
                                labelWidth: 60,
                                width: 100,
                                labelAlign: 'right',
                                allowBlank: false,
                                columnWidth: .55
                            },
                            {
                                xtype: 'panel',
                                border: false,
                                bodyStyle: {
                                    backgroundColor: '#dfe9f6'
                                },
                                html: '&nbsp;<img id="myImg" style="height:20px;width: 60px" src="validCode.jsp" onclick="this.src=\'validCode.jsp?r=\'+Math.random()"/>',
                                columnWidth: .28
                            }
                        ]
                    }
                ]
            }
        },
        buttonAlign: 'center',
        border: false,
        buttons: [
            {
                text: '提交',
                handler: function () {
                    var form = this.up('panel').down('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            url: '/login/login.action',
                            success: function (form, action) {
                                var msg = Ext.JSON.decode(action.response.responseText);
                                if (msg.state) {
                                    Ext.Msg.alert('系统提示', msg.message);
                                    window.location = '/index.jsp';

                                } else {
                                    Ext.Msg.alert('系统提示', msg.message);
                                    return;
                                }
                            },
                            failure: function (form, action) {
                                var msg = Ext.JSON.decode(action.response.responseText);
                                Ext.Msg.alert('系统提示', '网络错误或链接超时，请重试或联系管理员！');
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