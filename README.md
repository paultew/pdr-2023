# PDR 2023

Demo application to perform CRUD operations using React 18, gRPC, ASP.NET Core 8 and SQLite. Internally the application uses the .Net UserManager/UserStore for persistance with SQLite.

Due to browser limitations with HTTP/2 the application uses gRPC Web to make calls via an Envoy proxy (running in Docker) to the back end .Net gRPC services. The application does NOT
use TLS at the current time.

## Prerequisites

### Install Protobuf

Download the latest version of Protobuf for Windows from [GitHub](https://github.com/protocolbuffers/protobuf/releases/tag/v25.1)
and [protoc-gen-grpc-web](https://github.com/grpc/grpc-web/releases).

Add the install directory to the system PATH environment variable.

## Notes

Proto field names follow the format in the [Style Guide](https://protobuf.dev/programming-guides/style/).
