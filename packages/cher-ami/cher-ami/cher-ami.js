import axios from 'axios';

const API_KEY = process.env.API_KEY;
const from = "Blog <blog@brunopc,net>";
const to = "Bruno PC <work@brunopc.net>";
const subject = "New message from encrypted message form";

exports.main = (args) => {
    const body = {
        "api_key": API_KEY,
        "to": [to],
        "sender": from,
        "subject": subject,
        "text_body": args.message,
        //"html_body": "<h1>That was easy!</h1>",
        "custom_headers": [
            {
                "header": "Reply-To",
                "value": args.email
            }
        ],
        /*
        "attachments": [
            {
                "filename": "test.pdf",
                "fileblob": "--base64-data--",
                "mimetype": "application/pdf"
            },
            {
                "filename": "test.txt",
                "fileblob": "--base64-data--",
                "mimetype": "text/plain"
            }
        ]
        */
    }
    axios({
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        url: 'https://api.smtp2go.com/v3/email/send',
        data: body
    });
    return {"body": "email sent"}
}