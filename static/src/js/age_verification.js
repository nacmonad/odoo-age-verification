odoo.define('age_verification.popup', [], function(require) {
    'use strict';
    const isAgeVerified = localStorage.getItem('isAgeVerified');
    console.log("[age_verification]isAgeVerified", isAgeVerified);

    if (!isAgeVerified) {
        $('body').prepend(`
            <div id="age-verification-popup" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999;display:flex;justify-content:center;align-items:center;">
                <div style="background:#fff;padding:20px;max-width:400px;text-align:center;">
                    <p>You must be over the age of 19 to enter this site.</p>
                    <button id="age-verification-confirm">I am over 19</button>
                </div>
            </div>
        `);

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