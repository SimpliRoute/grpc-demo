const grpc = require("grpc");
const { service } = require("../node-service-def/service");

const chalk = require("chalk");

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

server.addService(service.Greeter.service, {
  sayHello: (call, callback) => {
    gRPCCallLogger(call);
    callback(null, {
      message: `Hello ${call.request.name.toUpperCase()}`
    });
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
