
odoo.define('age_verification.popup', [], function(require) {
    'use strict';
    var core = require('web.core');
    var QWeb = core.qweb;

    const isAgeVerified = localStorage.getItem('isAgeVerified');

        if (!isAgeVerified) {
            // Render the QWeb template
            var popupHTML = QWeb.render('age_verification_popup');
            
            $('body').prepend(popupHTML);

            $('#age-verification-confirm').click(function() {
                localStorage.setItem('isAgeVerified', 'true');
                $('#age-verification-popup').hide();
            });
        }

});

    // var publicWidget = require('web.public.widget');
    // var widgetRegistry = require('web.widget_registry');
    // console.log({ publicWidget, widgetRegistry });
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
//});