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

        public void Atualizar(int id, TipoEquipamento TipoEquipamentoAtt)
        {
            TipoEquipamento TipoEquipamentoBuscado = ctx.TipoEquipamentos.Find(id);

            if (TipoEquipamentoAtt.NomeTipoEquipamento != null )
            {
                TipoEquipamentoBuscado.NomeTipoEquipamento = TipoEquipamentoAtt.NomeTipoEquipamento;
            }

            ctx.TipoEquipamentos.Update(TipoEquipamentoBuscado);
            ctx.SaveChanges();
        }

        public TipoEquipamento BuscarPorId(int id)
        {
            return ctx.TipoEquipamentos.FirstOrDefault(i => i.IdTipoEquipamento == id);
        }

        public void Cadastrar(TipoEquipamento NovoTipoEquipamento)
        {
            ctx.TipoEquipamentos.Add(NovoTipoEquipamento);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            TipoEquipamento TipoEquipamentoBuscado = ctx.TipoEquipamentos.Find(id);

            ctx.TipoEquipamentos.Remove(TipoEquipamentoBuscado);
            ctx.SaveChanges();
        }

        public List<TipoEquipamento> Listar()
        {
            return ctx.TipoEquipamentos.ToList();
        }
    }
}
