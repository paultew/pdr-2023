using Pdr.Domain.Contracts.Entities;

namespace Pdr.Domain.Contracts.Repositories;

/// <summary>
/// Interface for a repository of <see cref="IUser"/> objects.
/// </summary>
public interface IUserRepository
{
    /// <summary>
    /// Creates the specified <see cref="IUser"/> asynchronously.
    /// </summary>
    /// <param name="user">The <see cref="IUser"/> to create.</param>
    /// <returns>A task that represents the asynchronous create operation. The task result contains the created <see cref="IUser"/> object.</returns>
    Task<IUser> CreateAsync(IUser user);
    
    /// <summary>
    /// Deletes the <see cref="IUser"/> asynchronously.
    /// </summary>
    /// <param name="user">The <see cref="IUser"/> to delete.</param>
    /// <returns>A task that represents the asynchronous operation. The task result is <see langword="true"/> if the object is deleted, otherwise <see langword="false"/>.</returns>
    Task<bool> DeleteAsync(IUser user);
    
    /// <summary>
    /// Gets all the <see cref="IUser"/> objects asynchronously.
    /// </summary>
    /// <returns>A task that represents the asynchronous get operation. The task result contains a list of <see cref="IUser"/> objects.</returns>
    Task<IList<IUser>> GetAllAsync();
    
    /// <summary>
    /// Gets the specified <see cref="IUser"/> asynchronously.
    /// </summary>
    /// <param name="id">The identifier of the <see cref="IUser"/> to retrieve.</param>
    /// <returns>A task that represents the asynchronous get operation. The task result contains the <see cref="IUser"/> if it is found, otherwise <see langword="null" />.</returns>
    Task<IUser> GetByIdAsync(string id);
    
    /// <summary>
    /// Returns an initialised <see cref="IUser"/>.
    /// </summary>
    /// <returns>An instance of a <see cref="IUser"/> object.</returns>
    IUser New();
    
    /// <summary>
    /// Updates the specified <see cref="IUser"/> asynchronously.
    /// </summary>
    /// <param name="user">The <see cref="IUser"/> to update.</param>
    /// <returns>A task that represents the asynchronous operation. The task result contains the updated <see cref="IUser"/>.</returns>
    Task<IUser> UpdateAsync(IUser user);
}