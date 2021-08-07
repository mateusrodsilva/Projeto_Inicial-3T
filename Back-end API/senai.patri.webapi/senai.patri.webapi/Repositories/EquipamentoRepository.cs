using Microsoft.EntityFrameworkCore;
using senai.patri.webapi.Contexts;
using senai.patri.webapi.Domains;
using senai.patri.webapi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Repositories
{
    public class EquipamentoRepository : IEquipamentoRepository
    {
        PatriContext ctx = new PatriContext();
        public void Atualizar(int id, Equipamento EquipamentoAtt)
        {
            Equipamento EquipamentoBuscado = ctx.Equipamentos.Find(id);

            if (EquipamentoAtt.Marca != null && EquipamentoAtt.IdTipoEquipamento != null && EquipamentoAtt.NumeroSerie != null && EquipamentoAtt.Descricao != null && EquipamentoAtt.NumeroPatrimonio != null && EquipamentoAtt.StatusEquipamento != null)
            {
                EquipamentoBuscado.Marca = EquipamentoAtt.Marca;
                EquipamentoBuscado.IdTipoEquipamento = EquipamentoAtt.IdTipoEquipamento;
                EquipamentoBuscado.NumeroSerie = EquipamentoAtt.NumeroSerie;
                EquipamentoBuscado.Descricao = EquipamentoAtt.Descricao;
                EquipamentoBuscado.NumeroPatrimonio = EquipamentoAtt.NumeroPatrimonio;
                EquipamentoBuscado.StatusEquipamento = EquipamentoAtt.StatusEquipamento;
            }
        }

        public List<Equipamento> BuscarEquipamentosSala(int idSala)
        {
            return ctx.Equipamentos
                .Select(e => new Equipamento
                {
                    IdEquipamento = e.IdEquipamento,
                    Descricao = e.Descricao,
                    Marca = e.Marca,
                    NumeroSerie = e.NumeroSerie,
                    NumeroPatrimonio = e.NumeroPatrimonio,
                    StatusEquipamento = e.StatusEquipamento,
                    IdSala = e.IdSala,
                    IdTipoEquipamento = e.IdTipoEquipamento,

                    IdTipoEquipamentoNavigation = new TipoEquipamento
                    {
                        NomeTipoEquipamento = e.IdTipoEquipamentoNavigation.NomeTipoEquipamento
                    },

                    IdSalaNavigation = new Sala
                    {
                        IdSala = e.IdSalaNavigation.IdSala,
                        NomeSala = e.IdSalaNavigation.NomeSala
                    }

                })
                .Where(w => w.IdSala == idSala)
                .ToList();
        }

        public Equipamento BuscarPorId(int id)
        {
            return ctx.Equipamentos.FirstOrDefault(e => e.IdEquipamento == id);
        }

        public void Cadastrar(Equipamento NovoEquipamento)
        {
            ctx.Equipamentos.Add(NovoEquipamento);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Equipamento EquipamentoBuscado = ctx.Equipamentos.Find(id);

            ctx.Equipamentos.Remove(EquipamentoBuscado);
            ctx.SaveChanges();
        }

        public List<Equipamento> Listar()
        {
            return ctx.Equipamentos
                .Select( w => new Equipamento
                {
                    IdTipoEquipamento = w.IdTipoEquipamento,
                    IdEquipamento = w.IdEquipamento,
                    IdSala = w.IdSala,
                    Marca = w.Marca,
                    NumeroSerie = w.NumeroSerie,
                    NumeroPatrimonio = w.NumeroPatrimonio,
                    StatusEquipamento = w.StatusEquipamento,
                    Descricao = w.Descricao,

                    IdTipoEquipamentoNavigation = new TipoEquipamento
                    {
                        //IdTipoEquipamento = w.IdTipoEquipamentoNavigation.IdTipoEquipamento,
                        NomeTipoEquipamento = w.IdTipoEquipamentoNavigation.NomeTipoEquipamento
                    },
                    
                    IdSalaNavigation = new Sala
                    {
                        IdSala = w.IdSalaNavigation.IdSala,
                        NomeSala = w.IdSalaNavigation.NomeSala,
                        MetragemSala = w.IdSalaNavigation.MetragemSala,
                        Andar = w.IdSalaNavigation.Andar,
                        IdInstituicao = w.IdSalaNavigation.IdInstituicao
                    },

                    


                })
                .ToList();
        }
    }
}
