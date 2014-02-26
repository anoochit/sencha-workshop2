// d e a c
Ext.define('WorkShop2.controller.controller_MainApp', {
    extend: 'Ext.app.Controller',
    requires: 'Ext.MessageBox',
    config: {
        refs: {
            ref_wg_view_MainApp_list_MainApp: 'wg_view_MainApp #list_MainApp',
            ref_wg_view_MainApp_bnt_AboutUs: 'wg_view_MainApp #bnt_AboutUs'
        },
        control: {

            ref_wg_view_MainApp_bnt_AboutUs: {
                tap: 'FNC_bnt_AboutUs'
            },

            ref_wg_view_MainApp_list_MainApp: {
                itemtap: 'FNC_bnt_Detail'
            }
        }
    },

    launch: function () {
        console.log('--> Control MainApp Start...');
    },

    FNC_bnt_AboutUs: function () {
        console.log('--> About Us tap');
    },

    FNC_bnt_Detail: function (list, index, target, record) {
        console.log(record.data.field_name);
        Ext.Msg.alert(record.data.field_name + ' ' + record.data.field_surname);

    }



});