const grpc = require("grpc");
const loader = require("@grpc/proto-loader");

const PROTO_PATH = "../protos/hello.proto";

const serviceDefinition = loader.loadSync(PROTO_PATH);

const service = grpc.loadPackageDefinition(serviceDefinition).helloworld;
const clientCredentials = grpc.credentials.createInsecure();

module.exports = {
  service,
  clientCredentials
};
