/**
 * Created by Administrator on 2014-12-11.
 */
/**
 * Created by Administrator on 2014/11/25.
 */
Ext.define('test', {
    extend: 'Ext.panel.Panel',
    myData: {root: {children: []}},
    initComponent: function () {
        var me = this;


//        Ext.apply(this, {
//            store: new Ext.data.TreeStore({
//                proxy: {
//                    type: 'ajax',
//                    url: '/test/test',
//                    reader: {
//                        type: 'xml',
//                        root: 'root',
//                        record: 'children'
//                    }
//                },
//                root: {
//                    text: '权限',
//                    id: 'qx',
//                    expanded: true
//                },
//                folderSort: true,
//                sorters: [{
//                    property: 'text',
//                    direction: 'ASC'
//                }]
//            }),
//            viewConfig: {
//                plugins: {
////                    ptype: 'treeviewdragdrop',
//                    containerScroll: true
//                }
//            }
//        });
//        this.callParent();


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
            //layout: 'border',
            width: 300,
            items: [
                {
                    title: '模块菜单',

                    xtype: 'treepanel',
//                    rootVisible : false,
                    store: treeStore
//                    useArrows : true
                }
            ]
        });
        this.callParent();
    }


});