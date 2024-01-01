using Microsoft.AspNetCore.Identity;
using Pdr.Domain.Contracts.Entities;

namespace Pdr.EntityModel.Entities;

/// <summary>
/// Represents the application identity user.
/// </summary>
public class PdrIdentityUser : IdentityUser, IUser
{
    
}