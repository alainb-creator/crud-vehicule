using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vehicule2.Models
{
     public class VehiculeDataBaseSettings : IVehiculeDataBaseSettings
    {
        public string VehiculeCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IVehiculeDataBaseSettings
    {
        public string VehiculeCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}