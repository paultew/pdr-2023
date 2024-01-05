using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Pdr.EntityModel;
using Pdr.EntityModel.Entities;
using Pdr.Grpc.Server.Interceptors;
using Pdr.Grpc.Server.Services;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Identity
var databasePath = System.IO.Path.Join(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "pdr2023.db");
builder.Services
    .AddAuthentication(IdentityConstants.ApplicationScheme)
    .AddIdentityCookies();
builder.Services.AddAuthorizationBuilder();
builder.Services.AddDbContext<PdrIdentityDbContext>(options =>
{
    options.UseSqlite($"Data Source={databasePath}", b => b.MigrationsAssembly("Pdr.Grpc.Server"));
});
builder.Services.AddIdentityCore<PdrIdentityUser>().AddEntityFrameworkStores<PdrIdentityDbContext>();

// Serilog
builder.Host.UseSerilog((context, configuration) =>
    configuration.ReadFrom.Configuration(context.Configuration));

// Add services to the container.
builder.Services.AddGrpc(options => {
    options.Interceptors.Add<ExceptionInterceptor>(); // Register custom ExceptionInterceptor interceptor
});

var corsPolicyName = "AllowAll";
builder.Services.AddCors(o => o.AddPolicy(corsPolicyName, builder =>
{
    builder.WithOrigins()
           .AllowAnyMethod()
           .AllowAnyHeader()
           .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
}));

var app = builder.Build();

app.UseSerilogRequestLogging();

app.UseRouting();
app.UseCors();
app.UseGrpcWeb(new GrpcWebOptions { DefaultEnabled = true });

// Configure the HTTP request pipeline.
app.MapGrpcService<UserGrpcService>().EnableGrpcWeb().RequireCors(corsPolicyName);
app.MapGet("/",
    () =>
        "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();