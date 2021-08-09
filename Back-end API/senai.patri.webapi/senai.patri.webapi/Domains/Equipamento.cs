using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.patri.webapi.Domains
{
    public partial class Equipamento
    {
        public int IdEquipamento { get; set; }
        [Required]
        public int? IdTipoEquipamento { get; set; }
        [Required]
        public int? IdSala { get; set; }
        [Required]
        public int? IdInstituicao { get; set; }
        [Required]
        public string Marca { get; set; }
        [Required]
        public string NumeroSerie { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public string NumeroPatrimonio { get; set; }
        [Required]
        public bool? StatusEquipamento { get; set; }

        public virtual Instituicao IdInstituicaoNavigation { get; set; }
        public virtual Sala IdSalaNavigation { get; set; }
        public virtual TipoEquipamento IdTipoEquipamentoNavigation { get; set; }
    }
}
