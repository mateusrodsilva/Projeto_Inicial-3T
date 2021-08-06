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
    public class SalaController : ControllerBase
    {
        private ISalaRepository _salaRepository { get; set; }

        public SalaController()
        {
            _salaRepository = new SalaRepository();
        }



        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_salaRepository.Listar());
        }

        [HttpGet("salas-por-id/{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_salaRepository.BuscarPorId(id));

        }

        [HttpGet("salas-por-instituicao/{id}")]
        public IActionResult GetByInstituicao(int id)
        {
            return Ok(_salaRepository.BuscarSalaInstituicao(id));
        }

        [HttpPost]
        public IActionResult Post(Sala NovaSala)
        {
            _salaRepository.Cadastrar(NovaSala);
            return StatusCode(201);
        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, Sala SalaAtt)
        {
            _salaRepository.Atualizar(id, SalaAtt);
            return StatusCode(204);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _salaRepository.Deletar(id);

            return StatusCode(204);
        }
    }
}
