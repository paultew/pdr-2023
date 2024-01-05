using Pdr.EntityModel.Entities;

namespace Pdr.Grpc.Server.Extensions;

/// <summary>
/// Extension methods for <see cref="PdrIdentityUser"/>.
/// </summary>
internal static class PdrIdentityUserExtensions
{
    /// <summary>
    /// Returns the identity user as a user reply.
    /// </summary>
    /// <param name="pdrIdentityUser">The <see cref="PdrIdentityUser"/> to return the values for.</param>
    /// <returns>An instance of a <see cref="UserReply"/> with the properties of the user.</returns>
    internal static UserReply AsUserReply(this PdrIdentityUser pdrIdentityUser)
    {
        var userReply = new UserReply
        {
            UserId = pdrIdentityUser.Id,
            UserName = pdrIdentityUser.UserName,
            Email = pdrIdentityUser.Email
        };

        return userReply;
    }
}