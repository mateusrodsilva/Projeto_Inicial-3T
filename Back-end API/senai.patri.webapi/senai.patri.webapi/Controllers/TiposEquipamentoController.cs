using Microsoft.AspNetCore.Authorization;
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
    public class TiposEquipamentoController : ControllerBase
    {
        private TipoEquipamentoRepository _tipoEquipamentoRepository { get; set; }

        public TiposEquipamentoController()
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

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post(TipoEquipamento NovoTipoEquipamento)
        {
            _tipoEquipamentoRepository.Cadastrar(NovoTipoEquipamento);
            return StatusCode(201);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult Put(int id, TipoEquipamento TipoEquipamentoAtt)
        {
            _tipoEquipamentoRepository.Atualizar(id, TipoEquipamentoAtt);
            return StatusCode(204);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _tipoEquipamentoRepository.Deletar(id);

            return StatusCode(204);
        }

    }
}
