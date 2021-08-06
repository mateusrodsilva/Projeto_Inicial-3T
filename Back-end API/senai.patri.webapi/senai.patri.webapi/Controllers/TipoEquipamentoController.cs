using Microsoft.AspNetCore.Mvc;
using senai.patri.webapi.Domains;
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
    public class TipoEquipamentoController : ControllerBase
    {
        private TipoEquipamentoRepository _tipoEquipamentoRepository { get; set; }

        public TipoEquipamentoController()
        {
            _tipoEquipamentoRepository = new TipoEquipamentoRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tipoEquipamentoRepository.Listar());
        }

        [HttpGet("tipo-equipamento/{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_tipoEquipamentoRepository.BuscarPorId(id));

        }


        [HttpPost]
        public IActionResult Post(TipoEquipamento NovoTipoEquipamento)
        {
            _tipoEquipamentoRepository.Cadastrar(NovoTipoEquipamento);
            return StatusCode(201);
        }


        [HttpPut]
        public IActionResult Put(int id, TipoEquipamento TipoEquipamentoAtt)
        {
            _tipoEquipamentoRepository.Atualizar(id, TipoEquipamentoAtt);
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
