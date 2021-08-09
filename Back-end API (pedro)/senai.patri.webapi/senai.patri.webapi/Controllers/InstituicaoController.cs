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
    public class InstituicaoController : ControllerBase
    {
       
            private IInstituicaoRepository _instituicaoRepository { get; set; }

            public InstituicaoController()
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
            public IActionResult Post(Instituicao novaInstituicao)
            {
                _instituicaoRepository.Cadastrar(novaInstituicao);
                return StatusCode(201);
            }


            [HttpPut]
            public IActionResult Put(int id, Instituicao InstituicaoAtualizada)
            {
                _instituicaoRepository.Atualizar(id, InstituicaoAtualizada);
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
