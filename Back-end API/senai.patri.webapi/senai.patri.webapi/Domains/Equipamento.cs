using System;
using System.Collections.Generic;

#nullable disable

namespace senai.patri.webapi.Domains
{
    public partial class Equipamento
    {
        public int IdEquipamento { get; set; }
        public int? IdTipoEquipamento { get; set; }
        public int? IdSala { get; set; }
        public int? IdInstituicao { get; set; }
        public string Marca { get; set; }
        public string NumeroSerie { get; set; }
        public string Descricao { get; set; }
        public string NumeroPatrimonio { get; set; }
        public bool? StatusEquipamento { get; set; }

        public virtual Instituicao IdInstituicaoNavigation { get; set; }
        public virtual Sala IdSalaNavigation { get; set; }
        public virtual TipoEquipamento IdTipoEquipamentoNavigation { get; set; }
    }
}
