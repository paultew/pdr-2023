using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Pdr.EntityModel.Entities;

namespace Pdr.EntityModel;

/// <summary>
/// Represents the application Entity Framework database context used for identity.
/// </summary>
public class PdrIdentityDbContext : IdentityDbContext<PdrIdentityUser>
{
    
}