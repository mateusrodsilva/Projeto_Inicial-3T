using senai.patri.webapi.Contexts;
using senai.patri.webapi.Domains;
using senai.patri.webapi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Repositories
{
    public class SalaRepository : ISalaRepository
    {

        PatriContext ctx = new PatriContext();
        public void Atualizar(int id, Sala SalaAtt)
        {
            Sala SalaBuscada = ctx.Salas.Find(id);

            if(SalaAtt.Andar != null && SalaAtt.NomeSala != null && SalaAtt.IdInstituicao != null && SalaAtt.MetragemSala != 0)
            {
                SalaBuscada.Andar = SalaAtt.Andar;
                SalaBuscada.NomeSala = SalaAtt.NomeSala;
                SalaBuscada.IdInstituicao = SalaAtt.IdInstituicao;
                SalaBuscada.MetragemSala = SalaAtt.MetragemSala;
            }
        }

        public Sala BuscarPorId(int id)
        {
            return ctx.Salas.FirstOrDefault(s => s.IdSala == id);
        }

        public List<Sala> BuscarSalaInstituicao(int IdInstituicao)
        {
            return ctx.Salas.Where(w => w.IdInstituicao == IdInstituicao).ToList();
        }

        public void Cadastrar(Sala NovaSala)
        {
            ctx.Salas.Add(NovaSala);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Sala SalaBuscada = ctx.Salas.Find(id);

            ctx.Salas.Remove(SalaBuscada);
            ctx.SaveChanges();
        }

        public List<Sala> Listar()
        {
            return ctx.Salas.ToList();
        }
    }
}
