odoo.define('age_verification.popup', [], function(require) {
    'use strict';

    console.log("[age_verification]hello world")


    if (!localStorage.getItem('isAgeVerified')) {
        alert('By clicking Ok, you are verifying you are over the age of 19.');
        localStorage.setItem('isAgeVerified', 'true');
    }

    var publicWidget = require('web.public.widget');
    var widgetRegistry = require('web.widget_registry');
    console.log({ publicWidget, widgetRegistry });


    // publicWidget.registry.AgeVerificationPopup = publicWidget.Widget.extend({
    //     selector: ':not([data-age-verified])',
    //     start: function() {
    //         if (!localStorage.getItem('isAgeVerified')) {
    //             alert('Hello World! Verify your age.');
    //             localStorage.setItem('isAgeVerified', 'true');
    //         }
    //         return this._super.apply(this, arguments);
    //     },
    // });
});