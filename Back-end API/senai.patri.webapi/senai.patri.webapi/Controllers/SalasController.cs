using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using senai.patri.webapi.Domains;
using senai.patri.webapi.Interfaces;
using senai.patri.webapi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class SalasController : ControllerBase
    {
        private ISalaRepository _salaRepository { get; set; }

        public SalasController()
        {
            _salaRepository = new SalaRepository();
        }



        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_salaRepository.Listar());
        }

        [HttpGet("por-id/{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_salaRepository.BuscarPorId(id));

        }

        [HttpGet("por-instituicao/{id}")]
        public IActionResult GetByInstituicao(int id)
        {
            return Ok(_salaRepository.BuscarSalaInstituicao(id));
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post(Sala NovaSala)
        {
            _salaRepository.Cadastrar(NovaSala);
            return StatusCode(201);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult Put(int id, Sala SalaAtt)
        {
            _salaRepository.Atualizar(id, SalaAtt);
            return StatusCode(204);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _salaRepository.Deletar(id);

            return StatusCode(204);
        }
    }
}
