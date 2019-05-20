var express = require("express");
var router = express.Router();
// var AssistantV1 = require("watson-developer-cloud/assistant/v1"); // watson sdk
const AssistantV1 = require("ibm-watson/assistant/v1");

// const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
  version: "2019-02-28",
  iam_apikey: "iTgMRXOMVpecDf61hbaKmm_oG7qVQXNh_AWltRsMZffO",
  url: "https://gateway-lon.watsonplatform.net/assistant/api"
});

// assistant.method(params, function(err, response) {
//   // The error will be the first argument of the callback
//   if (err.code == 404) {
//     // Handle Not Found (404) error
//   } else if (err.code == 413) {
//     // Handle Request Too Large (413) error
//   } else {
//     console.log("Unexpected error: ", err.code);
//     console.log("error:", err);
//   }
// });

// var assistant = new AssistantV1({
//   version: "2019-04-29",
//   iam_apikey: "yK-hxAnOACAyqxvN4x1rPrJo5gMvJnZGFEwzM7kju6fT",
//   url: "https://gateway-lon.watsonplatform.net/assistant/api"
// });
var newContext = {
  global: {
    system: {
      turn_count: 1
    }
  }
};
router.post("/", function(req, res, next) {
  var assistantId = process.env.ASSISTANT_ID || "<assistant-id>";
  if (!assistantId || assistantId === "<assistant-id>>") {
    return res.json({
      output: {
        text: "Code error"
      }
    });
  }
  var contextWithAcc = req.body.context ? req.body.context : newContext;

  if (req.body.context) {
    contextWithAcc.global.system.turn_count += 1;
  }
  textIn = req.body.msg;

  var payload = {
    workspace_id: "fa512a09-d82a-422b-84dc-46bff7308615",
    input: {
      message_type: "text",
      text: textIn
    }
  };
  assistant.message(payload, function(err, data) {
    if (err) {
      return res.status(err.code || 500).json({ err: err });
    }

    return res.json({ success: true, data });
  });
  // assistant
  //   .message({
  //     workspace_id: "29d60f54-68af-4df1-8f40-4d5687a2a80f",
  //     input: { text: "Hello" }
  //   })
  //   .then(res => {
  //     console.log(JSON.stringify(res, null, 2));
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
});
module.exports = router;
