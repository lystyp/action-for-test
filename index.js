// 'use strict';

// const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

// exports.<insertCloudFunctionName>= (req, res) => {
//   const app = new ActionsSdkApp({request: req, response: res});

//     function mainIntent (app) {
//       let inputPrompt = app.buildInputPrompt(false,
//         'Hi! Say something, and I\'ll repeat it');
//       app.ask(inputPrompt);
//     }

//     function respond (app) {
//       let inputPrompt = app.buildInputPrompt(false,
//         'Hi! Say something, and I\'ll repeat it.');
//       app.ask(inputPrompt);
//     }

// }

// let actionMap = new Map();
// actionMap.set(app.StandardIntents.MAIN, mainIntent);
// actionMap.set(app.StandardIntents.TEXT, respond);

// //add more intents to the map

// app.handleRequest(actionMap);








'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('', function(req, res) {
    var speech = "Tets. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});




restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
