using senai.patri.webapi.Contexts;
using senai.patri.webapi.Domains;
using senai.patri.webapi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Repositories
{
    public class InstituicaoRepository : IInstituicaoRepository
    {
        PatriContext ctx = new PatriContext();


        public void Atualizar(int id, Instituicao InstituicaoAtt)
        {
            Instituicao InstituicaoBuscada = ctx.Instituicaos.Find(id);

            if (InstituicaoAtt.Nome != null && InstituicaoAtt.RazaoSocial != null && InstituicaoAtt.Cnpj != null && InstituicaoAtt.Endereco != null)
            {
                InstituicaoBuscada.Nome = InstituicaoAtt.Nome;
                InstituicaoBuscada.RazaoSocial = InstituicaoAtt.RazaoSocial;
                InstituicaoBuscada.Cnpj = InstituicaoAtt.Cnpj;
                InstituicaoBuscada.Endereco = InstituicaoAtt.Endereco;
            }
        }

        public Instituicao BuscarPorId(int id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Instituicao NovaInstituicao)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public List<Instituicao> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
