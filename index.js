'use strict';

const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

exports.<insertCloudFunctionName>= (req, res) => {
  console.log("TESTTTTTTTTTTTT");
  const app = new ActionsSdkApp({request: req, response: res});

    function mainIntent (app) {
      let inputPrompt = app.buildInputPrompt(false,
        'Hi! Say something, and I\'ll repeat it');
      app.ask(inputPrompt);
    }

    function respond (app) {
      let inputPrompt = app.buildInputPrompt(false,
        'Hi! Say something, and I\'ll repeat it.');
      app.ask(inputPrompt);
    }

}

let actionMap = new Map();
actionMap.set(app.StandardIntents.MAIN, mainIntent);
actionMap.set(app.StandardIntents.TEXT, respond);

//add more intents to the map

app.handleRequest(actionMap);


function responseHandler (app) {
  // intent contains the name of the intent you defined in `initialTriggers`
  let intent = app.getIntent();
  switch (intent) {
    case app.StandardIntents.MAIN:
      app.ask('Welcome! Say a number.');
      break;

    case app.StandardIntents.TEXT:
      let number = app.getArgument(NUMBER_ARGUMENT);
      app.tell('You said ' + number);
      break;
  }
}
// you can add the function name instead of an action map
app.handleRequest(responseHandler);



