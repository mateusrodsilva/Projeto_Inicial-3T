using Microsoft.AspNetCore.Mvc;
using senai.patri.webapi.Domains;
using senai.patri.webapi.Interfaces;
using senai.patri.webapi.Repositories;
using senai.patri.webapi.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class InstituicoesController : ControllerBase
    {
        private IInstituicaoRepository _instituicaoRepository { get; set; }
        private IUsuarioRepository _usuarioRepository { get; set; }

        public InstituicoesController()
        {
            _instituicaoRepository = new InstituicaoRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_instituicaoRepository.Listar());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_instituicaoRepository.BuscarPorId(id));

        }

        [HttpPost]
        public IActionResult Post(InstituicaoUsuarioVM NovoInstituicaoUsuario)
        {
            _instituicaoRepository.Cadastrar(NovoInstituicaoUsuario);
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
