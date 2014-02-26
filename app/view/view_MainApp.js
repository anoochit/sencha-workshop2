// d e a c
Ext.define('WorkShop2.view.view_MainApp', {
    extend: 'Ext.Container',
    alias: 'widget.wg_view_MainApp',
    requires: ['Ext.TitleBar','Ext.dataview.List'],
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                title: 'Main App',
                docked: 'top',

                items:[
                    {
                        xtype:'button',
                        text: 'About Us',
                        itemId: 'bnt_AboutUs',
                        align: 'right'
                    }
                ]

            },
            {
                xtype: 'list',
                store :'store_MainApp',
                itemTpl: 'Name : {field_name} {field_surname} <br/>Age : {field_age}',
                onItemDisclosure: true,
                itemId: 'list_MainApp'
            }
        ]
    }
})
;