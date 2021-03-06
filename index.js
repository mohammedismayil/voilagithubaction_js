//hey index.js
const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `name` input defined in action metadata file
  const nameToGreet = core.getInput("name");
  console.log(`Hello ${nameToGreet}!`);
  console.log(`recursion will not leave you until death`);
  const time = new Date().toTimeString();
  core.setOutput("time of greeting", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
// 