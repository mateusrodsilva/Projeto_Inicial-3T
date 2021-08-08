using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.patri.webapi.Domains
{
    public partial class Instituicao
    {
        public Instituicao()
        {
            Equipamentos = new HashSet<Equipamento>();
            Salas = new HashSet<Sala>();
            Usuarios = new HashSet<Usuario>();
        }

        public int IdInstituicao { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string RazaoSocial { get; set; }
        [Required]
        public string Cnpj { get; set; }
        [Required]
        public string Endereco { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
        public virtual ICollection<Sala> Salas { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
