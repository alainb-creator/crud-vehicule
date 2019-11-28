using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vehicule2.Services;
using Microsoft.AspNetCore.Mvc;
using vehicule2.Models;

namespace vehicule2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class VehiculeController : ControllerBase
    {
        private readonly VehiculeService _vehiculeService;

        public VehiculeController(VehiculeService vehiculeService)
        {
            _vehiculeService = vehiculeService;
        }

        [HttpGet]
        public ActionResult<List<Vehicule>> Get() =>
           _vehiculeService.Get();

        [HttpGet("{id:length(24)}", Name = "GetVehicule")]
        public ActionResult<Vehicule> Get(string id)
        {
            var vehicule = _vehiculeService.Get(id);

            if (vehicule == null)
            {
                return NotFound();
            }
            return vehicule;
        }
        [HttpPost]
        public ActionResult<Vehicule> Create(Vehicule vehicule)
        {
            _vehiculeService.Create(vehicule);

            return CreatedAtRoute("GetVehicule", new { id = vehicule.Id.ToString() }, vehicule);
        }
        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Vehicule vehiculeIn)
        {
            var book = _vehiculeService.Get(id);

            if (book == null)
            {
                return NotFound();
            }

            _vehiculeService.Update(id, vehiculeIn);

            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var vehicule = _vehiculeService.Get(id);

            if (vehicule == null)
            {
                return NotFound();
            }

            _vehiculeService.Remove(vehicule.Id);

            return NoContent();
        }
    }
}

