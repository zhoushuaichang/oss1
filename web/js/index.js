/**
 * Created by Administrator on 2014/11/25.
 */
Ext.define('main', {
    extend: 'Ext.container.Viewport',
    myData: {root: {children: []}},
    initComponent: function () {
        var me = this;
        this.createMenuList();
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
                {name: 'productName', mapping: 'productByProductCode.productName'},
                {name: 'num'}
            ],
            autoLoad: true

        });

        Ext.Ajax.request(
            {
                url: '/test/test',
                async: false,
                success: function (response) {
                    me.myData = response.responseText;
                    if (typeof (me.myData) === 'string') {
                        me.myData = Ext.JSON.decode(me.myData);
                    }
                }
            }
        );

        var treeStore = Ext.create('Ext.data.TreeStore', {
            fields: [
                {name: 'id', type: 'string', mapping: 'sys_menu.menuCode'},
                {name: 'text', type: 'string', mapping: 'sys_menu.menuName'}

            ],
            root: {
                text: '权限管理',
                id: '-1',
                children: me.myData.root.children
            }
        });

        Ext.apply(this, {
            layout: 'border',
            defaults: {
                border: false
            },
            items: [
                {
                    region: 'north',
                    xtype: 'toolbar',
                    border: false,
                    height: 60,
                    items: [
                        {
                            xtype: 'tbtext',
                            text: '<img src=\"img/logo.gif\" style="float: left"/><h1 ">兜阿兜商城管理系统</h1>'

                        },
                        { xtype: 'tbfill' },
                        {
                            xtype: 'button',
                            text: '注销',
                            handler: function () {
                                window.location.href = 'logout.jsp';

                            }
                        }
                    ]

                },
                {
                    region: 'west',
                    width: 200,
                    layout: 'accordion',
                    title: '菜单栏',
                    split: true,
                    collapsible: true,
                    items: me.menuList
                },
                {
                    region: 'center',
                    id: 'mycenter',
                    xtype: 'tabpanel',
                    items: [
                        {
                            xtype: 'panel',
                            title: '详细',
                            width: 400,
                            height: 400,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'panel',
                                    title: '统计图',
                                    width: 300,
                                    height: 300,
                                    items: [
                                        {
                                            closable: true,
                                            xtype: 'chart',
                                            width: 300,
                                            height: 300,
                                            store: productStockStore,
                                            animate: true,
                                            shadow: true,
                                            legend: {
                                                position: 'right'
                                            },
                                            theme: 'Red',
                                            series: [
                                                {
                                                    type: 'pie',
                                                    angleField: 'num',
                                                    showInLegend: true,
                                                    tips: {
                                                        trackMouse: true,
                                                        width: 140,
                                                        height: 28,
                                                        renderer: function (storeItem, item) {
                                                            var total = 0;
                                                            productStockStore.each(function (rec) {
                                                                total += rec.get('num');
                                                            });
                                                            this.setTitle(storeItem.get('productName') + ': ' + Math.round(storeItem.get('num') / total * 100) + '%');
                                                        }
                                                    },
                                                    highlight: {
                                                        segment: {
                                                            margin: 20
                                                        }
                                                    },
                                                    label: {
                                                        field: 'productName',
                                                        display: 'rotate',
                                                        contrast: true,
                                                        font: '18px Arial',
                                                        hideLessThan: 18
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    title: '柱形图',
                                    items: [
                                        {
                                            xtype: 'chart',
                                            width: 500,
                                            height: 300,
                                            animate: true,
                                            store: productStockStore,
                                            axes: [
                                                {
                                                    type: 'Numeric',
                                                    position: 'left',
                                                    fields: ['num'],
                                                    label: {
                                                        renderer: Ext.util.Format.numberRenderer('0,0')
                                                    },
                                                    title: '库存数量',
                                                    grid: true,
                                                    minimum: 0
                                                },
                                                {
                                                    type: 'Category',
                                                    position: 'bottom',
                                                    fields: ['productName'],
                                                    title: '商品名称'
                                                }
                                            ],
                                            series: [
                                                {
                                                    type: 'column',
                                                    axis: 'left',
                                                    highlight: true,
                                                    tips: {
                                                        trackMouse: true,
                                                        width: 140,
                                                        height: 28,
                                                        renderer: function (storeItem, item) {
                                                            this.setTitle(storeItem.get('productName') + ': ' + storeItem.get('num') + ' ');
                                                        }
                                                    },
                                                    label: {
                                                        display: 'insideEnd',
                                                        'text-anchor': 'middle',
                                                        field: 'num',
                                                        renderer: Ext.util.Format.numberRenderer('0'),
                                                        orientation: 'vertical',
                                                        color: '#333'
                                                    },
                                                    xField: 'productByProductCode.productName',
                                                    yField: 'num'
                                                }
                                            ]
                                        }
                                    ]
                                }


                            ]
                        }
                    ]
                },
                {
                    region: 'east',
                    xtype: 'panel',
                    width: 200,
                    split: true,
                    collapsible: true,
                    items: [
                        {
                            title: '模块菜单',
                            width: 200,
                            height: 300,
                            xtype: 'treepanel',
                            store: treeStore
                        }
                    ]
                },
                {
                    region: 'south',
//                    title: '属性',
                    height: 30,
//                    split: true,
                    xtype: 'tbtext',
                    id: 'clock',
                    style: {
                        fontSize: '20px'
                    },
                    listeners: {
                        'render': function () {
                            Ext.TaskManager.start({
                                run: function () {
                                    Ext.getCmp("clock").setText(Ext.Date.format(new Date(), 'Y-m-d H:i:s'));
                                },
                                interval: 1000
                            });
                        }
                    }
//                    collapsible: true,
//                    items: [
//                        {
//                            xtype: 'tbtext',
//                            id: 'clock',
//                            style: {
//                                fontSize: '20px'
//                            },
//                            listeners: {
//                                'render': function () {
//                                    Ext.TaskManager.start({
//                                        run: function () {
//                                            Ext.getCmp("clock").setText(Ext.Date.format(new Date(), 'Y-m-d H:i:s'));
//                                        },
//                                        interval: 1000
//                                    });
//                                }
//                            }
//
//                        }
//                    ]
                }
            ]
        });
        this.callParent();
    },
    menuList: new Array(),
    createMenuList: function () {
        var menuData = {}, tpl, me = this;
        tpl = new Ext.XTemplate(
            '<tpl for=".">',
            '<div class="part01">',
            '<img src="{icon}">',
            '<div class="con">',
//            '<span>{menuCode}</span>',
            '<div class="con1">{menuName}</div>',
            '</div>',
            '</div>',
            '</tpl>'
        );

        Ext.Ajax.request({
            url: '/sys/showMenuGroup',
            async: false,
            success: function (response) {
                menuData = Ext.JSON.decode(response.responseText);
            }
        });

        for (var i = 0, len = menuData.sysMenuList.length; i < len; i++) {
            var storeID = 'store_' + i, item, title = menuData.sysMenuList[i].menuListName;
            Ext.create('Ext.data.Store', {
                id: storeID,
                data: menuData.sysMenuList[i].sysMenusByMenuListId,
                fields: [
                    { name: 'menuCode', type: 'string' },
                    { name: 'menuName', type: 'string' },
                    { name: 'menuUrl', type: 'string' },
                    { name: 'status', type: 'string' },
                    { name: 'icon', type: 'string' }

                ]
            });

            item = {
                xtype: 'panel',
                title: title,
                layout: 'fit',
                items: [
                    {
                        xtype: 'dataview',
                        store: Ext.data.StoreManager.lookup(storeID),
                        tpl: tpl,
                        itemSelector: 'div.part01',
                        listeners: {
                            itemclick: function (view, record) {
                                Ext.require(record.get('menuUrl'), function () {

                                    var center = Ext.getCmp('mycenter');
                                    var tag = center.items.get(record.get('menuName'));
                                    if (!tag) {
                                        var obj = Ext.create(record.get('menuUrl'));
                                        center.add(obj);
                                        center.setActiveTab(obj);
                                    } else {
                                        if (center.setActiveTab() !== tag) {
                                            center.setActiveTab(tag);
                                        }

                                    }

                                }, this);
//                            Ext.Msg.alert('dfadsfasdfasdfasdf');
                            }
                        }
                    }
                ]
            };

            me.menuList.push(item);
        }
    }


});