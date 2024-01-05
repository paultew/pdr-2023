# This uses protobuf-ts to generate the TypeScript definitions from the proto file

$output_path="./src/generated"
If(!(test-path -PathType container $output_path))
{
      New-Item -ItemType Directory -Path $output_path | Out-Null
}

npx protoc --ts_out "${output_path}" --proto_path ./../Protos ./../Protos/user.proto

