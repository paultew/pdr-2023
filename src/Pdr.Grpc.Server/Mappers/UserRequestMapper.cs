using Pdr.Domain.Contracts.Mappers;
using Pdr.EntityModel.Entities;

namespace Pdr.Grpc.Server.Mappers;

public class UserRequestMapper : IMapper<UserCreateRequest, PdrIdentityUser>
{
    #region Implementation of IMapper<UserCreateRequest,PdrIdentityUser>

    public PdrIdentityUser Map(UserCreateRequest source)
    {
        var identityUser = new PdrIdentityUser();
        identityUser.UserName = source.UserName;
        identityUser.Email = source.Email;
        
        throw new NotImplementedException();
    }

    public void Map(UserCreateRequest source, ref PdrIdentityUser dest)
    {
        throw new NotImplementedException();
    }

    public UserCreateRequest Map(PdrIdentityUser source)
    {
        throw new NotImplementedException();
    }

    public void Map(PdrIdentityUser source, ref UserCreateRequest dest)
    {
        throw new NotImplementedException();
    }

    #endregion
}