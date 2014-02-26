// app na luk Eva
Ext.application({
    name: 'WorkShop2',
    models: ['model_MainApp'],
    views: ['view_MainApp'],
    stores: ['store_MainApp'],
    controllers: ['controller_MainApp'],

    launch: function () {
        console.log('--> App Start..');
        var page_MainApp = {
            xtype: 'wg_view_MainApp'
        };

        Ext.Viewport.add([page_MainApp]);
        var _store = Ext.getStore('store_MainApp');
        console.log(_store.data.all);
    }
});
