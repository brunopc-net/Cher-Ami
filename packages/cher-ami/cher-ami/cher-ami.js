const axios = require('axios');

exports.main = (args) => {
    axios({
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
        // handle success
        console.log(response.status);
    }).catch(function (error) {
        // handle error
        console.log(error);
    })
}