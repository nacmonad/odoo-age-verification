var publicWidget = require('web.public.widget');

odoo.define('age_verification.popup', [publicWidget], function(require) {
    'use strict';

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
