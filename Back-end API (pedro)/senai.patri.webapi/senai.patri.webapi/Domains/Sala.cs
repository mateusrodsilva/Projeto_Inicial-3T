using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.patri.webapi.Domains
{
    public partial class Sala
    {
        public Sala()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdSala { get; set; }
        [Required]
        public int? IdInstituicao { get; set; }
        public string Andar { get; set; }
        public string NomeSala { get; set; }
        public double MetragemSala { get; set; }

        public virtual Instituicao IdInstituicaoNavigation { get; set; }
        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
