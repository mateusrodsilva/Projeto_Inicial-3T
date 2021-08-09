using System;
using System.Collections.Generic;

#nullable disable

namespace senai.patri.webapi.Domains
{
    public partial class Instituicao
    {
        public Instituicao()
        {
            Salas = new HashSet<Sala>();
            Usuarios = new HashSet<Usuario>();
        }

        public int IdInstituicao { get; set; }
        public string Nome { get; set; }
        public string RazaoSocial { get; set; }
        public string Cnpj { get; set; }
        public string Endereco { get; set; }

        public virtual ICollection<Sala> Salas { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
