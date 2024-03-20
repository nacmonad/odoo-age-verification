{
    'name': 'Age Verification Popup',
    'author': 'nacmonad',
    'version': '1.0',
    'category': 'Website',
    'summary': 'Age Verification for Website',
    'depends': ['website'],
    'data': [
        'views/template.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            '/age_verification/static/src/js/age_verification.js',
        ],
    },
}