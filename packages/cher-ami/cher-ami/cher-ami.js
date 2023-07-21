const axios = require('axios');

async function send_email(args) {
    return await axios({
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        url: 'https://api.smtp2go.com/v3/email/send',
        data: {
            "api_key": process.env.API_KEY,
            "to": ["Bruno PC <work@brunopc.net>"],
            "sender": "Blog <blog@brunopc.net>",
            "subject": "New message from encrypted message form",
            "text_body": args.message,
            "custom_headers": [
                {
                    "header": "Reply-To",
                    "value": args.email
                }
            ]
        }
    }).then(function (response) {
        return {
            status: response.status,
            statusText: response.statusText
        }
    }).catch(function (error) {
        // handle error
        return {
            status: error.response.status,
            statusText: error.response.statusText,
            details: error.response.data.data
        }
    });
}

exports.main = send_email;