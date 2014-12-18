/**
 * Created by Administrator on 2014-12-04.
 */

Ext.define('js.pie', {
    extend: 'Ext.chart.Chart',

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
//                'productCode',
                'productByProductCode.productName',
//                'avgPrice',
                'num'
            ],
            autoLoad: true

        });

        Ext.apply(this, {
            id: '库存商品分析',
            title: '库存商品统计',
            width: 400,
            height: 300,
            store: productStockStore,
            animate: true,
            closable: true,
            shadow: true,
//            theme: 'Base:gradients',
            theme: 'Green',
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
                            // calculate and display percentage on hover
                            var total = 0;
                            productStockStore.each(function (rec) {
                                total += rec.get('num');
                            });
                            this.setTitle(storeItem.get('productByProductCode.productName') + ': ' + Math.round(storeItem.get('num') / total * 100) + '%');
                        }
                    },
                    highlight: {
                        segment: {
                            margin: 20
                        }
                    },
                    label: {
                        field: 'productByProductCode.productName',
                        display: 'rotate',
                        contrast: true,
                        font: '18px Arial',
                        hideLessThan: 18
                    }
                }
            ]


        });

        this.callParent();
    }







});

