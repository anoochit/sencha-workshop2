// d e a c
Ext.define('WorkShop2.store.store_MainApp', {
    extend: 'Ext.data.Store',
    config: {
        model: 'WorkShop2.model.model_MainApp',

//{ name: 'field_name', type: 'string'},
//{ name: 'field_surname', type: 'string'},
//{ name: 'field_age', type: 'string'}

        data: [
            { field_name: 'Anuchit', field_surname: 'Chalothorn', field_age: '28'},
            { field_name: 'Nion', field_surname: 'Janpho', field_age: '28'}
        ]
    }
});