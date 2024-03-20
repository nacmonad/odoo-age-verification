odoo.define('age_verification.popup', [], function(require) {
    'use strict';
 
    // How to fix dependency injection issue ?
    // var core = require('web.core');
    // var QWeb = core.qweb;

    const isAgeVerified = localStorage.getItem('isAgeVerified');
    console.log("[age_verification]isAgeVerified", isAgeVerified);

    if (!isAgeVerified) {
        $('body').prepend(`
            <div id="age-verification-popup" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999;display:flex;justify-content:center;align-items:center;">
                <div style="background:#fff;padding:20px;max-width:400px;text-align:center;">
                    <p>Confirm you are over the age of 19 to enter this site.</p>
                    <div style="display:flex;flex-direction:row;justify-content:space-around;">
                        <button id="age-verification-yes" class="btn btn-primary btn_cta mx-2 w-100 w-100 w-100 w-100 w-100 w-100 w-100">Yes</button>
                        <button id="age-verification-no" class="btn btn-primary btn_cta mx-2 w-100 w-100 w-100 w-100 w-100 w-100 w-100">No</button>
                    </div>
                </div>
            </div>
        `);

        $('#age-verification-yes').click(function() {
            localStorage.setItem('isAgeVerified', 'true');
            $('#age-verification-popup').hide();
        });
        $('#age-verification-no').click(function() {
            localStorage.setItem('isAgeVerified', '');
            $('#age-verification-popup').hide();
            //redirect to https://disney.com
            window.location.href = 'https://disney.com';
        });
        }
    });