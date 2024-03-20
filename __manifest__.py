{
    'name': 'Age Verification Popup',
    'author': 'nacmonad',
    'version': '1.0',
    'category': 'Website',
    'summary': 'Age Verification for Website',
    'depends': ['website','web', 'website_sale'],
    'data': [
        'odoo_age_verification/views/age_verification.xml',
        'odoo_age_verification/views/template.xml',

    ],
    'assets': {
        'web.assets_frontend': [
            'odoo_age_verification/static/src/js/age_verification.js',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
}