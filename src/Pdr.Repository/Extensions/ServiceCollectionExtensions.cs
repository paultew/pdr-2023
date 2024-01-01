using System.Collections.Immutable;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Pdr.Repository.Extensions;

/// <summary>
/// Provides dependency injection extensions for <see cref="IServiceCollection"/>.
/// </summary>
public static class ServiceCollectionExtensions
{
    /// <summary>
    /// Adds the repository contracts and implementations to the service collection.
    /// </summary>
    /// <param name="services">The service collection to add the services to.</param>
    /// <param name="configuration">The application configuration property collection.</param>
    // ReSharper disable once UnusedParameter.Global
    public static void AddRepositories(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<PdrIdentityDbContext>(opts => opts.UseInMemoryDatabase("Identity"));
        
    }
}