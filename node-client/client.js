const SERVER_HOST = process.env.HOST || "0.0.0.0";
const SERVER_PORT = process.env.PORT || "50051";
const SERVER_ADDRESS = `${SERVER_HOST}:${SERVER_PORT}`;

const messages = require("../protos/build/js/hello_pb");
const services = require("../protos/build/js/hello_grpc_pb");

const credentials = require("../protos/build/js/grpc_credentials");

const client = new services.GreeterClient(SERVER_ADDRESS, credentials);
var request = new messages.HelloRequest();

const user = "gbahamondezc";

request.setName(user);

client.sayHello(request, (err, message) => {
  if (err) {
    console.log("Error happened", err);
  }
  console.log("Response: ", message);
});
