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
    public class InstituicaoController : ControllerBase
    {
        private IInstituicaoRepository _instituicaoRepository { get; set; }

        public InstituicaoController()
        {
            _instituicaoRepository = new InstituicaoRepository();
        }

        [HttpGet("listarinstituicoes")]
        public IActionResult Get()
        {
            return Ok(_instituicaoRepository.Listar());
        }

        [HttpGet("instituicaoporid/{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_instituicaoRepository.BuscarPorId(id));

        }

        [HttpPost]
        public IActionResult Post(Instituicao NovaInstituicao)
        {
            _instituicaoRepository.Cadastrar(NovaInstituicao);
            return StatusCode(201);
        }


        [HttpPut]
        public IActionResult Put(int id, Instituicao InstituicaoAtt)
        {
            _instituicaoRepository.Atualizar(id, InstituicaoAtt);
            return StatusCode(204);
        }


        [HttpDelete]
        public IActionResult Delete(int id)
        {
            _instituicaoRepository.Deletar(id);

            return StatusCode(204);
        }
    }
}
