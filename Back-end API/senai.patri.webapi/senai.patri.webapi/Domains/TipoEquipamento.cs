using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.patri.webapi.Domains
{
    public partial class TipoEquipamento
    {
        public TipoEquipamento()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdTipoEquipamento { get; set; }
        [Required]
        public string NomeTipoEquipamento { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
