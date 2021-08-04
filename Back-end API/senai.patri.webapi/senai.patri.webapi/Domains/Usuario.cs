using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.patri.webapi.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }
        [Required]
        public int? IdInstituicao { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Senha { get; set; }
        [Required]
        public string Tipo { get; set; }

        public virtual Instituicao IdInstituicaoNavigation { get; set; }
    }
}
