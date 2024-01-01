namespace Pdr.Domain.Contracts.Mappers;

/// <summary>
/// Interface for a mapper between types.
/// </summary>
/// <typeparam name="T1">The <see cref="T1"/> type.</typeparam>
/// <typeparam name="T2">The <see cref="T2"/> type.</typeparam>
public interface IMapper<T1, T2>
{
    T2 Map(T1 source);

    void Map(T1 source, ref T2 dest);

    T1 Map(T2 source);
    
    void Map(T2 source, ref T1 dest);
}