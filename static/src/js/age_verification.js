odoo.define('age_verification.popup', function(require) {
    'use strict';

    var publicWidget = require('web.public.widget');

    publicWidget.Widget.extend({
        selector: ':not([data-age-verified])',
        start: function() {
            if (!localStorage.getItem('isAgeVerified')) {
                // Here you would actually implement your popup logic
                // For demonstration, let's just use an alert
                alert('Hello World! Verify your age.');
                localStorage.setItem('isAgeVerified', 'true');
                // You might want to redirect or perform another action after setting the flag
            }
        }
    });
});
