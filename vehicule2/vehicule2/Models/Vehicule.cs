using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace vehicule2.Models
{
    public class Vehicule
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string Id { get; set; }

        [BsonElement("Marque")]
        [JsonProperty("Marque")]
        public string Marque { get; set; }

        [BsonElement("Modele")]
        [JsonProperty("Modele")]
        public string Modele { get; set; }

        [BsonElement("Immatriculation")]
        [JsonProperty("Immatriculation")]
        public string Immatriculation { get; set; }

        [BsonElement("kilometrage")]
        [JsonProperty("kilometrage")]
        public int Kilometrage { get; set; }

    }

}
