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
        [Required]
        public string Andar { get; set; }
        [Required]
        public string NomeSala { get; set; }
        [Required]
        public double MetragemSala { get; set; }

        public virtual Instituicao IdInstituicaoNavigation { get; set; }
        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
