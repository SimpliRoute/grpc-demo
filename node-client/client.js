const { service, clientCredentials } = require("../node-service-def/service");

const SERVER_HOST = process.env.HOST || "0.0.0.0";
const SERVER_PORT = process.env.PORT || "50051";
const SERVER_ADDRESS = `${SERVER_HOST}:${SERVER_PORT}`;

const client = new service.Greeter(SERVER_ADDRESS, clientCredentials);

const user = "gbahamondezc";

client.sayHello({ name: user }, (err, message) => {
  if (err) {
    console.log("Error happened", err);
  }
  console.log("Response: ", message);
});
