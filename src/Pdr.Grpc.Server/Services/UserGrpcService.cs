using Grpc.Core;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Pdr.EntityModel.Entities;
using Pdr.Grpc.Server.Extensions;

namespace Pdr.Grpc.Server.Services;

/// <summary>
/// Represents the User gRPC service.
/// </summary>
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
            var reply = new UserCreateReply { Succeeded = false, Errors = new UserCreateErrors() };
            foreach (var identityError in result.Errors)
            {
                if (identityError.Code.Contains(nameof(PdrIdentityUser.UserName), StringComparison.OrdinalIgnoreCase))
                {
                    reply.Errors.UserName.Add(identityError.Description);
                }
                else if (identityError.Code.Contains(nameof(PdrIdentityUser.Email), StringComparison.OrdinalIgnoreCase))
                {
                    reply.Errors.Email.Add(identityError.Description);
                }
                else if (identityError.Code.Contains("Password", StringComparison.OrdinalIgnoreCase))
                {
                    reply.Errors.Password.Add(identityError.Description);
                }
                else
                {
                    reply.Errors.Other.Add(identityError.Description);
                }
            }

            return reply;
        }

        var createdUser = await _userManager.FindByEmailAsync(request.Email);
        
        var userCreateReply = new UserCreateReply
        {
            Succeeded = true,
            User = createdUser?.AsUserReply()
        };

        return userCreateReply;
    }

    public override async Task<UserDeleteReply> Delete(UserFindRequest request, ServerCallContext context)
    {
        var userDeleteReply = new UserDeleteReply() { Succeeded = true };
        
        var user = await _userManager.FindByIdAsync(request.UserId);
        if (user != null)
        {
            var identityResult = await _userManager.DeleteAsync(user);
            if (!identityResult.Succeeded)
            {
                userDeleteReply.Succeeded = false;
                foreach (var identityError in identityResult.Errors)
                {
                    userDeleteReply.Errors.Add(identityError.Description);
                }
            }
        }
        return userDeleteReply;
    }

    public override async Task<UsersReply> GetAll(EmptyRequest request, ServerCallContext context)
    {
        var usersReply = new UsersReply();
        
        var pdrIdentityUsers = await _userManager.Users.OrderBy(u => u.UserName).ToListAsync();
        foreach (var pdrIdentityUser in pdrIdentityUsers)
        {
            usersReply.Users.Add(pdrIdentityUser.AsUserReply());
        }
        
        return usersReply;
    }

    public override async Task<UserReply> GetById(UserFindRequest request, ServerCallContext context)
    {
        var user = await _userManager.FindByIdAsync(request.UserId);
        if (user is null)
        {
            throw new RpcException(new Status(StatusCode.NotFound, $"Could not find user with id: {request.UserId}"));
        }
        
        return user.AsUserReply();
    }

    public override async Task<UserUpdateReply> Update(UserUpdateRequest request, ServerCallContext context)
    {
        var userUpdateReply = new UserUpdateReply() { Succeeded = false };
        
        var user = await _userManager.FindByIdAsync(request.UserId);
        if (user is null)
        {
            throw new RpcException(new Status(StatusCode.NotFound, $"Could not find user with id: {request.UserId}"));
        }

        if (user.UserName != request.UserName)
        {
            var updateUserNameResult = await _userManager.SetUserNameAsync(user, request.UserName);
            if (!updateUserNameResult.Succeeded)
            {
                foreach (var identityError in updateUserNameResult.Errors)
                {
                    userUpdateReply.Errors.UserName.Add(identityError.Description);
                }

                return userUpdateReply;
            }
        }

        if (user.Email != request.Email)
        {
            var updateEmailResult = await _userManager.SetEmailAsync(user, request.Email);
            if (!updateEmailResult.Succeeded)
            {
                foreach (var identityError in updateEmailResult.Errors)
                {
                    userUpdateReply.Errors.Email.Add(identityError.Description);
                }

                return userUpdateReply;
            }
        }

        if (!string.IsNullOrEmpty(request.OldPassword) && !string.IsNullOrEmpty(request.NewPassword))
        {
            var changePasswordResult = await _userManager.ChangePasswordAsync(user, request.OldPassword, request.NewPassword);
            if (!changePasswordResult.Succeeded)
            {
                foreach (var identityError in changePasswordResult.Errors)
                {
                    if (identityError.Code.Contains("Password", StringComparison.OrdinalIgnoreCase))
                    {
                        userUpdateReply.Errors.NewPassword.Add(identityError.Description);
                    }
                    else
                    {
                        userUpdateReply.Errors.OldPassword.Add(identityError.Description);
                    }
                }

                return userUpdateReply;
            }
        }

        userUpdateReply.Succeeded = true;
        userUpdateReply.User = user.AsUserReply();
        
        return userUpdateReply;
    }

    #endregion
}