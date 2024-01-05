# Based on https://www.envoyproxy.io/docs/envoy/latest/start/docker
FROM envoyproxy/envoy:dev-5cffd2c9fcd0ce26b7fc821fdf2ea0c93d3f44c2
COPY envoy.yaml /etc/envoy/envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml

