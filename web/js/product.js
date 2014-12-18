/**
 * Created by Administrator on 2014-12-01.
 */

Ext.define('js.product', {
    extend: 'Ext.grid.Panel',

    initComponent: function () {
        var me = this;
        //主页面rootList数据源
        var ProStore = Ext.create('Ext.data.Store', {

            pageSize: 10,
            proxy: {
                type: 'ajax',
                url: '/sys/showProductRootList',
                reader: {
                    type: 'json',
                    root: 'rootList',
                    totalProperty: 'count'
                }
            },
            fields: [
                'productCode',
                'productName',
                'productNameAb',
                'price',
                'valid',
                'productTypeByTypeCode.typeName',
                'productUnitByUnitId.name',
                'productSaleStatusByStatusId.statusName',
                'memo'
            ],
            autoLoad: false,
            listeners: {
                beforeload: function (store, operation) {
                    var productName = Ext.getCmp('productName');
                    var productNameAb = Ext.getCmp('productNameAb');
                    var price = Ext.getCmp('price');
                    var valid = Ext.getCmp('valid');
                    var typeName = Ext.getCmp('typeName');
                    var statusName = Ext.getCmp('statusName');
                    if (productName || productNameAb || price || typeName || valid || statusName) {
                        if (productName.getValue() || productNameAb.getValue() || price.getValue() || typeName.getValue() || valid.getValue() || statusName.getValue()) {
                            if (operation.params) {
                                operation.params.productName = productName.getValue();
                                operation.params.productNameAb = productNameAb.getValue();
                                operation.params.price = price.getValue();
                                operation.params.valid = valid.getValue();
                                operation.params.typeName = typeName.getValue();
                                operation.params.statusName = statusName.getValue();
                            }
                            else {
                                operation.params = {
                                    productName: productName.getValue(),
                                    productNameAb: productNameAb.getValue(),
                                    price: price.getValue(),
                                    valid: valid.getValue(),
                                    typeName: typeName.getValue(),
                                    statusName: statusName.getValue()
                                };

                            }
                        }
                    }
                }
            }


        });
        var validStore = Ext.create('Ext.data.Store', {

            fields: ['validValue', 'valid'],
            data: [
                {'validValue': 'true', 'valid': '可用'},
                {'validValue': 'false', 'valid': '不可用'}
            ]
        });

        var ProTypeNameStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showTypeNameList.action',
                reader: {
                    type: 'json',
                    root: 'typeNameList'
                }
            },
            fields: [
                {name: 'typeName', type: 'string'},
                {name: 'typeCode', type: 'string'}
            ],
            autoLoad: true
        });
        var ProStatusStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showStatusList.action',
                reader: {
                    type: 'json',
                    root: 'productSaleStatusList'
                }
            },
            fields: ['statusId', 'statusName'],
            autoLoad: true
        });
        ProStore.load({
            params: {
                start: 0,
                limit: 10
            }
        });


        Ext.apply(this, {
            id: '商品信息字典维护',
            title: '商品信息字典维护',
//            renderTo: Ext.getBody(),
            store: ProStore,
            selModel: Ext.create('Ext.selection.CheckboxModel', {mode: "SIMPLE"}),
            closable: true,
            columns: [
                {text: '商品编码', dataIndex: 'productCode'},
                {text: '商品名称', dataIndex: 'productName'},//-------------------
                {text: '商品助记码', dataIndex: 'productNameAb'},//----------------
                {text: '单价', dataIndex: 'price'},//-------------
                {text: '可售状态', dataIndex: 'valid'},//-----------
                {text: '商品类别', dataIndex: 'productTypeByTypeCode.typeName'},//---------
                {text: '商品单位', dataIndex: 'productUnitByUnitId.name'},
                {text: '促销状态', dataIndex: 'productSaleStatusByStatusId.statusName'},//----------
                {text: '备注', dataIndex: 'memo'}
            ],
            width: 300,

            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: ProStore,
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
                            fieldLabel: '商品名称',
                            id: 'product_queryProductName',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '助记码',
                            id: 'product_queryProductNameAb',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '单价',
                            id: 'product_queryPrice',
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '可售状态',
                            id: 'product_queryValid',
                            store: validStore,
                            displayField: 'valid',
                            valueField: 'validValue',
                            editable: false,
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '商品类别',
                            id: 'product_queryTypeName',
                            store: ProTypeNameStore,
                            displayField: 'typeName',
                            valueField: 'typeCode',
                            editable: false,
                            column: .5,
                            labelAlign: 'right',
                            labelWidth: 60
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '促销状态',
                            id: 'product_queryStatus',
                            store: ProStatusStore,
                            displayField: 'statusName',
                            valueField: 'statusId',
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
        Ext.getCmp('商品信息字典维护').store.reload({
            params: {
                productName: Ext.getCmp('product_queryProductName').value,
                productNameAb: Ext.getCmp('product_queryProductNameAb').value,
                price: Ext.getCmp('product_queryPrice').value,
                valid: Ext.getCmp('product_queryValid').value,
                typeCode: Ext.getCmp('product_queryTypeName').value,
                statusId: Ext.getCmp('product_queryStatus').value
            }
        })

    },

    deleteItem: function () {
        var record = Ext.getCmp('商品信息字典维护').getSelectionModel().getSelection();
        var length = record.length;
        var productCodeList = "";
        if (length == 0) {
            Ext.MessageBox.alert("提示框", "请先选择数据！", function () {
            });
        }
        if (length > 0) {

            for (var i = 0; i < length; i++) {
                if (i < length - 1) {
                    productCodeList = productCodeList + record[i].get('productCode') + ',';
                }
                if (i == length - 1) {
                    productCodeList = productCodeList + record[i].get('productCode');
                }
            }
            Ext.MessageBox.confirm('系统提示', '确认要删除该记录？', function (btn) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: '/sys/deleteProduct.action?productCodeList=' + productCodeList,

                        success: function () {
                            Ext.MessageBox.alert("提示框", "删除成功！", function () {
                            });
                            Ext.getCmp('商品信息字典维护').store.reload();
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

        var validStore = Ext.create('Ext.data.Store', {

            fields: ['validValue', 'valid'],
            data: [
                {'validValue': 'true', 'valid': '可用'},
                {'validValue': 'false', 'valid': '不可用'}
            ]
        });

        var ProTypeNameStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showTypeNameList.action',
                reader: {
                    type: 'json',
                    root: 'typeNameList'
                }
            },
            fields: [
                {name: 'typeName', type: 'string'},
                {name: 'typeCode', type: 'string'}
            ],
            autoLoad: true
        });
        var ProStatusStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showStatusList.action',
                reader: {
                    type: 'json',
                    root: 'productSaleStatusList'
                }
            },
            fields: ['statusId', 'statusName'],
            autoLoad: true
        });
        var unitStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showUnitList.action',
                reader: {
                    type: 'json',
                    root: 'productUnitList'
                }
            },
            fields: ['unitId', 'name'],
            autoLoad: true
        });

        var arr = Ext.getCmp('商品信息字典维护').getSelectionModel().getSelection();
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
                                fieldLabel: '商品名称',
                                width: 20,
                                value: record.get('productName'),
                                allowBlank: false,
                                name: 'product.productName'
                            },
                            {
                                fieldLabel: '商品助记码',
                                value: record.get('productNameAb'),
                                name: 'product.productNameAb'
                            },
                            {
                                fieldLabel: '商品价格',
                                value: record.get('price'),
                                allowBlank: false,
                                name: 'product.price'
                            },
                            {
                                xtype: 'combo',
                                fieldLabel: '可售状态',
                                store: validStore,
                                displayField: 'valid',
                                valueField: 'validValue',
                                name: 'product.valid'
                            },
                            {
                                fieldLabel: '规格',
                                value: record.get('spec'),
                                name: 'product.spec'
                            },
                            {
                                xtype: 'combo',
                                fieldLabel: '商品分类',
                                store: ProTypeNameStore,
                                displayField: 'typeName',
                                valueField: 'typeCode',
                                name: 'product.productTypeByTypeCode.typeCode'
                            },
                            {
                                xtype: 'combo',
                                fieldLabel: '单位',
                                store: unitStore,
                                displayField: 'name',
                                valueField: 'unitId',
                                name: 'product.productUnitByUnitId.unitId'
                            },
                            {
                                xtype: 'combo',
                                fieldLabel: '促销状态',
                                store: ProStatusStore,
                                displayField: 'statusName',
                                valueField: 'statusId',
                                name: 'product.productSaleStatusByStatusId.statusId'
                            },
                            {
                                fieldLabel: '描述',
                                value: record.get('describe'),
                                name: 'product.describe'
                            },
                            {
                                fieldLabel: '图片',
                                value: record.get('picPath'),
                                name: 'product.picPath'
                            },
                            {
                                xtype: 'hidden',
                                value: record.get('clickCount'),
                                name: 'product.clickCount'
                            },
                            {
                                fieldLabel: '备注',
                                value: record.get('memo'),
                                name: 'product.memo'
                            },
                            {
                                xtype: 'hidden',
                                value: record.get('productCode'),
                                name: 'product.productCode'

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
                                        url: '/sys/updataProduct.action',
                                        success: function () {
                                            Ext.getCmp('商品信息字典维护').store.reload();
                                            Ext.getCmp('myWin1').close();
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

        var ProTypeNameStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showTypeNameList.action',
                reader: {
                    type: 'json',
                    root: 'typeNameList'
                }
            },
            fields: [
                {name: 'typeName', type: 'string'},
                {name: 'typeCode', type: 'string'}
            ],
            autoLoad: true
        });
        var ProStatusStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showStatusList.action',
                reader: {
                    type: 'json',
                    root: 'productSaleStatusList'
                }
            },
            fields: ['statusId', 'statusName'],
            autoLoad: true
        });
        var unitStore = Ext.create('Ext.data.Store', {
            proxy: {
                type: 'ajax',
                url: '/sys/showUnitList.action',
                reader: {
                    type: 'json',
                    root: 'productUnitList'
                }
            },
            fields: ['unitId', 'name'],
            autoLoad: true
        });
        Ext.create('Ext.window.Window', {
            title: '添加',
            id: 'myWin',
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
                            fieldLabel: '商品编码',
                            allowBlank: false,
                            name: 'product.productCode'

                        },
                        {
                            fieldLabel: '商品名称',
                            width: 20,
                            allowBlank: false,
                            name: 'product.productName'
                        },
                        {
                            fieldLabel: '商品助记码',
                            name: 'product.productNameAb'
                        },
                        {
                            fieldLabel: '商品价格',
                            allowBlank: false,
                            name: 'product.price'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '可售状态',
                            store: validStore,
                            displayField: 'valid',
                            valueField: 'validValue',
                            editable: false,
                            name: 'product.valid'
                        },
                        {
                            fieldLabel: '规格',
                            name: 'product.spec'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '商品分类',
                            store: ProTypeNameStore,
                            displayField: 'typeName',
                            valueField: 'typeCode',
                            editable: false,
                            name: 'product.productTypeByTypeCode.typeCode'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '单位',
                            store: unitStore,
                            displayField: 'name',
                            valueField: 'unitId',
                            editable: false,
                            name: 'product.productUnitByUnitId.unitId'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: '促销状态',
                            store: ProStatusStore,
                            displayField: 'statusName',
                            valueField: 'statusId',
                            editable: false,
                            name: 'product.productSaleStatusByStatusId.statusId'
                        },
                        {
                            fieldLabel: '描述',
                            name: 'product.describe'
                        },
                        {
                            fieldLabel: '图片',
                            name: 'product.picPath'
                        },
                        {
                            fieldLabel: '备注',
                            name: 'product.memo'
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
                                url: '/sys/saveProduct',
                                success: function () {
                                    Ext.getCmp('商品信息字典维护').store.reload();
                                    Ext.getCmp('myWin').close();
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

