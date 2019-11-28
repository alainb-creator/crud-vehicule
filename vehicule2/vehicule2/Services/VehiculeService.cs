using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using vehicule2.Models;

namespace vehicule2.Services
{
    public class VehiculeService
    {
        private readonly IMongoCollection<Vehicule> _vehicules;

        public VehiculeService(IVehiculeDataBaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _vehicules = database.GetCollection<Vehicule>(settings.VehiculeCollectionName);
        }
        public List<Vehicule> Get() =>
           _vehicules.Find(vehicule => true).ToList();

        public Vehicule Get(string id) =>
            _vehicules.Find<Vehicule>(vehicule => vehicule.Id == id).FirstOrDefault();

        public Vehicule Create(Vehicule vehicule)
        {
            _vehicules.InsertOne(vehicule);
            return vehicule;
        }

        public void Update(string id, Vehicule vehiculeIn) =>
            _vehicules.ReplaceOne(vehicule => vehicule.Id == id, vehiculeIn);

        public void Remove(Vehicule vehiculeIn) =>
            _vehicules.DeleteOne(vehicule => vehicule.Id == vehiculeIn.Id);

        public void Remove(string id) =>
            _vehicules.DeleteOne(vehicule => vehicule.Id == id);
    }
}
