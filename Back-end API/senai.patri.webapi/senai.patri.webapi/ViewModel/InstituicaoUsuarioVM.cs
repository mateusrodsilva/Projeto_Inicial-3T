using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.ViewModel
{
    public class InstituicaoUsuarioVM
    {
        [Required]
        public string Nome { get; set; }
        [Required]
        public string RazaoSocial { get; set; }
        [Required]
        public string Cnpj { get; set; }
        [Required]
        public string Endereco { get; set; }
        public int? IdInstituicao { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Senha { get; set; }
        public string Tipo { get; set; }
    }
}
