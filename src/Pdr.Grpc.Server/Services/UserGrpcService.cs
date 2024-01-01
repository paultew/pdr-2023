using Grpc.Core;
using Microsoft.AspNetCore.Identity;
using Pdr.EntityModel.Entities;

namespace Pdr.Grpc.Server.Services;

public class UserGrpcService : Pdr.Grpc.Server.Users.UsersBase
{
    private readonly UserManager<PdrIdentityUser> _userManager;
    
    public UserGrpcService(UserManager<PdrIdentityUser> userManager)
    {
        _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
    }
    
    #region Overrides of UsersBase

    public override async Task<UserCreateReply> Create(UserCreateRequest request, ServerCallContext context)
    {
        var identityUser = new PdrIdentityUser();
        identityUser.UserName = request.UserName;
        identityUser.Email = request.Email;
        
        var result = await _userManager.CreateAsync(identityUser, request.Password);
        if (!result.Succeeded)
        {
            var reply = new UserCreateReply { Succeeded = false };
            foreach (var identityError in result.Errors)
            {
                reply.Errors.Add(identityError.Description);
            }

            return reply;
        }
        //_userManager.Re

        var userReply = new UserReply();
        //userReply.
        //
        return base.Create(request, context);
    }

    public override Task<EmptyReply> Delete(UserFindRequest request, ServerCallContext context)
    {
        return base.Delete(request, context);
    }

    public override Task<UsersReply> GetAll(EmptyRequest request, ServerCallContext context)
    {
        return base.GetAll(request, context);
    }

    public override Task<UserReply> GetById(UserFindRequest request, ServerCallContext context)
    {
        return base.GetById(request, context);
    }

    public override Task<UserReply> Update(UserUpdateRequest request, ServerCallContext context)
    {
        return base.Update(request, context);
    }

    #endregion
}