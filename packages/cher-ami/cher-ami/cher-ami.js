const axios = require('axios');

function getEmailRequest(args){
    return {
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
    }
}

exports.main = (args) => {
    const req = getEmailRequest(args);
    console.log("Request sent: "+JSON.stringify(req));

    axios(req).then(
        function (response) {
            console.log(response);
        }
    );

    return {"body": "email sent"}
}