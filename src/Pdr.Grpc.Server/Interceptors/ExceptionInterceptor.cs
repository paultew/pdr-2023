using Grpc.Core;
using Grpc.Core.Interceptors;
using Pdr.Grpc.Server.Helpers;

namespace Pdr.Grpc.Server.Interceptors;

/// <summary>
/// Represents a gRPC interceptor for handling errors.
/// </summary>
public class ExceptionInterceptor : Interceptor
{
    private readonly Guid _correlationId; 
    private readonly ILogger<ExceptionInterceptor> _logger;

    /// <summary>
    /// Initializes a new instance of the <see cref="ExceptionInterceptor"/> class.
    /// </summary>
    /// <param name="logger">The logger for this class.</param>
    /// <exception cref="ArgumentNullException">Thrown if <paramref name="logger"/> is <see langword="null"/>.</exception>
    public ExceptionInterceptor(ILogger<ExceptionInterceptor> logger)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _correlationId = Guid.NewGuid();
    }

    #region Overrides of Interceptor

    public override async Task<TResponse> ClientStreamingServerHandler<TRequest, TResponse>(IAsyncStreamReader<TRequest> requestStream, ServerCallContext context, ClientStreamingServerMethod<TRequest, TResponse> continuation)
    {
        try
        {
            return await continuation(requestStream, context);
        }
        catch (Exception e)
        {
            throw e.Handle(context, _logger, _correlationId);
        }
    }
    
    public override async Task DuplexStreamingServerHandler<TRequest, TResponse>(IAsyncStreamReader<TRequest> requestStream, IServerStreamWriter<TResponse> responseStream, ServerCallContext context, DuplexStreamingServerMethod<TRequest, TResponse> continuation)
    {
        try
        {
            await continuation(requestStream, responseStream, context);
        }
        catch (Exception e)
        {
            throw e.Handle(context, _logger, _correlationId);
        }
    }
    
    public override async Task ServerStreamingServerHandler<TRequest, TResponse>(TRequest request, IServerStreamWriter<TResponse> responseStream, ServerCallContext context, ServerStreamingServerMethod<TRequest, TResponse> continuation)
    {
        try
        {
            await continuation(request, responseStream, context);
        }
        catch (Exception e)
        {
            throw e.Handle(context, _logger, _correlationId);
        }
    }
    
    public override async Task<TResponse> UnaryServerHandler<TRequest, TResponse>(TRequest request, ServerCallContext context, UnaryServerMethod<TRequest, TResponse> continuation)
    {
        try
        {
            return await continuation(request, context);
        }
        catch (Exception e)
        {
            throw e.Handle(context, _logger, _correlationId);
        }
    }

    #endregion
}