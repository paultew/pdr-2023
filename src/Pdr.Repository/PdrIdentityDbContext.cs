using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Pdr.Repository.Entities;

namespace Pdr.Repository;

/// <summary>
/// Represents the application Entity Framework database context used for identity.
/// </summary>
public class PdrIdentityDbContext : IdentityDbContext<PdrIdentityUser>
{
    /// <summary>
    /// Initializes a new instance of <see cref="PdrIdentityDbContext"/>.
    /// </summary>
    /// <param name="options">The options to be used by a <see cref="DbContext"/>.</param>
    public PdrIdentityDbContext(DbContextOptions<PdrIdentityDbContext> options) :
        base(options) { }
}