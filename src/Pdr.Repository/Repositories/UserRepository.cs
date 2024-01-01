using Microsoft.AspNetCore.Identity;
using Pdr.Domain.Contracts.Entities;
using Pdr.Domain.Contracts.Repositories;
using Pdr.Repository.Entities;

namespace Pdr.Repository.Repositories;

/// <summary>
/// Represents the default user repository implementation.
/// </summary>
public class UserRepository : IUserRepository
{
    private readonly UserManager<PdrIdentityUser> _userManager;
    
    /// <summary>
    /// Initializes a new instance of the <see cref="UserRepository"/> class using the specified data context.
    /// </summary>
    /// <param name="userManager">The manager for persisting user data.</param>
    /// <exception cref="ArgumentNullException"></exception>
    public UserRepository(UserManager<PdrIdentityUser> userManager)
    {
        _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
    }
    
    #region Implementation of IUserRepository

    /// <summary>
    /// Creates the specified <see cref="IUser"/> asynchronously.
    /// </summary>
    /// <param name="user">The <see cref="IUser"/> to create.</param>
    /// <returns>A task that represents the asynchronous create operation. The task result contains the created <see cref="IUser"/> object.</returns>
    public async Task<IUser> CreateAsync(IUser user)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Deletes the <see cref="IUser"/> asynchronously.
    /// </summary>
    /// <param name="user">The <see cref="IUser"/> to delete.</param>
    /// <returns>A task that represents the asynchronous operation. The task result is <see langword="true"/> if the object is deleted, otherwise <see langword="false"/>.</returns>
    public async Task<bool> DeleteAsync(IUser user)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Gets all the <see cref="IUser"/> objects asynchronously.
    /// </summary>
    /// <returns>A task that represents the asynchronous get operation. The task result contains a list of <see cref="IUser"/> objects.</returns>
    public async Task<IList<IUser>> GetAllAsync()
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Gets the specified <see cref="IUser"/> asynchronously.
    /// </summary>
    /// <param name="id">The identifier of the <see cref="IUser"/> to retrieve.</param>
    /// <returns>A task that represents the asynchronous get operation. The task result contains the <see cref="IUser"/> if it is found, otherwise <see langword="null" />.</returns>
    public async Task<IUser> GetByIdAsync(string id)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Returns an initialised <see cref="IUser"/>.
    /// </summary>
    /// <returns>An instance of a <see cref="IUser"/> object.</returns>
    public IUser New()
    {
        return new PdrIdentityUser();
    }

    /// <summary>
    /// Updates the specified <see cref="IUser"/> asynchronously.
    /// </summary>
    /// <param name="user">The <see cref="IUser"/> to update.</param>
    /// <returns>A task that represents the asynchronous operation. The task result contains the updated <see cref="IUser"/>.</returns>
    public async Task<IUser> UpdateAsync(IUser user)
    {
        throw new NotImplementedException();
    }

    #endregion
}