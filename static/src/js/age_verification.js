odoo.define('age_verification.popup', ['website.public.widget'], function(require) {
    'use strict';

    var publicWidget = require('website.public.widget');

    publicWidget.registry.AgeVerificationPopup = publicWidget.Widget.extend({
        selector: ':not([data-age-verified])',
        start: function() {
            if (!localStorage.getItem('isAgeVerified')) {
                alert('Hello World! Verify your age.');
                localStorage.setItem('isAgeVerified', 'true');
            }
            return this._super.apply(this, arguments);
        },
    });
});