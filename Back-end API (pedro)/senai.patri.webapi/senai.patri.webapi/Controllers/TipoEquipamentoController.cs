using Microsoft.AspNetCore.Http;
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
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class TipoEquipamentoController : ControllerBase
    {
        private ITipoEquipamentoRepository _tipoEquipamentoRepository { get; set; }

        public TipoEquipamentoController()
        {
            _tipoEquipamentoRepository = new TipoEquipamentoRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tipoEquipamentoRepository.Listar());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_tipoEquipamentoRepository.BuscarPorId(id));

        }


        [HttpPost]
        public IActionResult Post(TipoEquipamento novoEquipamento)
        {
            _tipoEquipamentoRepository.Cadastrar(novoEquipamento);
            return StatusCode(201);
        }


        [HttpPut]
        public IActionResult Put(int id, TipoEquipamento EquipamentoAtualizado)
        {
            _tipoEquipamentoRepository.Atualizar(id, EquipamentoAtualizado);
            return StatusCode(204);
        }


        [HttpDelete]
        public IActionResult Delete(int id)
        {
            _tipoEquipamentoRepository.Deletar(id);

            return StatusCode(204);
        }
    }
}
