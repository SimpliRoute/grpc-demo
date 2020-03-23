const grpc = require("grpc");
const chalk = require("chalk");

const messages = require("../protos/build/js/hello_pb");
const services = require("../protos/build/js/hello_grpc_pb");

const SERVER_HOST = process.env.HOST || "0.0.0.0";
const SERVER_PORT = process.env.PORT || "50051";
const BIND_ADDRESS = `${SERVER_HOST}:${SERVER_PORT}`;

const server = new grpc.Server();

const gRPCCallLogger = call => {
  console.log(
    chalk.green("Request received from agent => "),
    chalk.white.bold(call.metadata._internal_repr["user-agent"][0])
  );

  console.log(chalk.green("Params => "), JSON.stringify(call.request, null, 4));
};

server.addService(services.GreeterService, {
  sayHello: (call, callback) => {
    gRPCCallLogger(call);
    const response = new messages.HelloReply();
    response.setMessage(`Hello ${call.request.getName().toUpperCase()}`);
    callback(null, response);
  }
});

server.bindAsync(
  BIND_ADDRESS,
  grpc.ServerCredentials.createInsecure(),
  function() {
    console.log(
      chalk.cyan.bold("gRPC"),
      chalk.white.bold(`Server started at ${SERVER_HOST}:${SERVER_PORT}`)
    );
  }
);

server.start();
