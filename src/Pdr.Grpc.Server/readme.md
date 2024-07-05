# Overview

In order for CORS to work with gRPC Web we have to communicate over TLA since the client switches between HTTP/1.1 and HTTP/2. https://learn.microsoft.com/en-us/aspnet/core/grpc/aspnetcore?view=aspnetcore-8.0&tabs=visual-studio

# Setup

If the application is set to run under Kestrel the path to the TLS ceritificates should be set as follows:

dotnet user-secrets set "Kestrel:Certificates:Default:Path" "/path/to/certificates/localhost.pfx"
dotnet user-secrets set "Kestrel:Endpoints:https:Certificate:Path" "/path/to/certificates/localhost.pfx"
dotnet user-secrets set "Kestrel:Certificates:Default:KeyPath" "<password>"
dotnet user-secrets set "Kestrel:Endpoints:https:Certificate:Password" "<password>"

The application can be configured for self-certification using the Powershell script /setup/setup-ssl.ps1 
