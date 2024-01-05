# These use the ts-proto NPM package
# protoc -I ./src/Protos --plugin=protoc-gen-ts_proto=.\\src\\pdr-web-client\\node_modules\\.bin\\protoc-gen-ts_proto.cmd --ts_proto_opt=context=true --ts_proto_opt=esModuleInterop=true --ts_proto_out=./src/pdr-web-client/src/proto ./src/Protos/user.proto
# protoc -I ./src/Protos --plugin=protoc-gen-ts_proto=.\\src\\pdr-web-client\\node_modules\\.bin\\protoc-gen-ts_proto.cmd --ts_proto_opt=esModuleInterop=true --ts_proto_opt=outputClientImpl=grpc-web --ts_proto_out=./src/pdr-web-client/src/proto ./src/Protos/user.proto

#$PROTOC_GEN_TS_PATH=".\\src\\pdr-web-client\\node_modules\\.bin\\protoc-gen-ts_proto.cmd"
#$OUT_DIR="./src/pdr-web-client/src/proto"
#protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out="import_style=commonjs,binary:${OUT_DIR}" --ts_out="service=grpc-web:${OUT_DIR}" ./src/Protos/user.proto

