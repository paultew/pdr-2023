# gRPC Web Proxy

Since gRPC is based on HTTP/2 and browser JavaScript [cannot control all the features](https://yuku.takahashi.coffee/blog/2019/01/grpc-proxy-for-grpc-web) a proxy must be used.

Our proxy is [Envoy](https://www.envoyproxy.io/) that runs inside a Docker container.

Run the proxy from the root directory:

```console
docker build -t envoy:v1  -f src/pdr-grpc-web-proxy/Dockerfile .
docker run -d --name envoy -p 8080:8080 -p 8443:8443 -p 9901:9901 envoy:v1
```