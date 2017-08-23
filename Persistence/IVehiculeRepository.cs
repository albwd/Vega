using System.Threading.Tasks;
using Vega.Models;

namespace Vega.Persistence
{
    public interface IVehiculeRepository
    {
         Task<Vehicle> GetVehicle(int id);
    }
}