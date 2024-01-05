using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Pdr.EntityModel.Entities;

namespace Pdr.EntityModel;

/// <summary>
/// Represents the application Entity Framework database context used for identity.
/// </summary>
public class PdrIdentityDbContext : IdentityDbContext<PdrIdentityUser>
{
    /// <summary>
    /// Initializes a new instance of <see cref="PdrIdentityDbContext"/>.
    /// </summary>
    /// <param name="options">The options to be used by a <see cref="DbContext"/>.</param>
    public PdrIdentityDbContext(DbContextOptions options) : base(options) { }

    /// <summary>
    /// Initializes a new instance of the <see cref="PdrIdentityDbContext" /> class.
    /// </summary>
    protected PdrIdentityDbContext() { }
}