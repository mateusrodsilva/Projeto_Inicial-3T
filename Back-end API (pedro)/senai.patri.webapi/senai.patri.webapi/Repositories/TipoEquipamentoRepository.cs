using senai.patri.webapi.Contexts;
using senai.patri.webapi.Domains;
using senai.patri.webapi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Repositories
{
    public class TipoEquipamentoRepository : ITipoEquipamentoRepository
    {
        PatriContext ctx = new PatriContext();

        public void Atualizar(int id, TipoEquipamento TipoAtualizado)
        {
            TipoEquipamento tipoBuscado = ctx.TipoEquipamentos.Find(id);

            if (TipoAtualizado.NomeTipoEquipamento != null)
            {
                tipoBuscado.NomeTipoEquipamento = TipoAtualizado.NomeTipoEquipamento;
               
            }

            ctx.TipoEquipamentos.Update(tipoBuscado);
            ctx.SaveChanges();


        }

        public TipoEquipamento BuscarPorId(int id)
        {
            return ctx.TipoEquipamentos.Find(id);
        }

        public void Cadastrar(TipoEquipamento NovoTipoEquipamento)
        {
            ctx.TipoEquipamentos.Add(NovoTipoEquipamento);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            TipoEquipamento tipoBuscado = ctx.TipoEquipamentos.Find(id);

            ctx.TipoEquipamentos.Remove(tipoBuscado);
            ctx.SaveChanges();
        }

        public List<TipoEquipamento> Listar()
        {
            return ctx.TipoEquipamentos.ToList();
        }
    }
}
