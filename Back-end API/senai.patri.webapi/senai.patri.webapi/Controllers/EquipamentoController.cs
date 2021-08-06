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
    public class EquipamentoController : ControllerBase
    {
        private IEquipamentoRepository _equipamentoRepository { get; set; }

        public EquipamentoController()
        {
            _equipamentoRepository = new EquipamentoRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_equipamentoRepository.Listar());
        }

        [HttpGet("equipamentos-por-id/{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_equipamentoRepository.BuscarPorId(id));

        }

        [HttpGet("equipamentos-por-sala/{id}")]
        public IActionResult GetBySala(int id)
        {
            return Ok(_equipamentoRepository.BuscarEquipamentosSala(id));
        }

        [HttpPost]
        public IActionResult Post(Equipamento NovoEquipamento)
        {
            _equipamentoRepository.Cadastrar(NovoEquipamento);
            return StatusCode(201);
        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, Equipamento EquipamentoAtt)
        {
            _equipamentoRepository.Atualizar(id, EquipamentoAtt);
            return StatusCode(204);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _equipamentoRepository.Deletar(id);

            return StatusCode(204);
        }
    }
}
