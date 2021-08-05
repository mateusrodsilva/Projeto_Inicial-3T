using senai.patri.webapi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Interfaces
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Método que cadastra uma novo Usuario
        /// </summary>
        /// <param name="NovoUsuario">id do Usuario que será cadastrado</param>
        public void Cadastrar(Usuario NovoUsuario);

        /// <summary>
        /// Lista todos os Usuários 
        /// </summary>
        /// <returns>Lista com os Usuários</returns>
        List<Usuario> Listar();

        /// <summary>
        /// Busca um Usuário pelo id 
        /// </summary>
        /// <param name="id">id do Usuário que será buscado</param>
        /// <returns>Usuário Buscado</returns>
        Usuario BuscarPorId(int id);

        /// <summary>
        /// Atualiza um Usuário pelo Id
        /// </summary>
        /// <param name="id">Id do Usuário que será atualizado</param>
        /// <param name="UsuarioAtt">Objeto UsuarioAtt com as informações atualizadas</param>
        void Atualizar(int id, Usuario UsuarioAtt);

        /// <summary>
        /// Deleta um Usuário existente
        /// </summary>
        /// <param name="id">Id do Usuário que será deletado</param>
        void Deletar(int id);

        /// <summary>
        /// Valida o usuário
        /// </summary>
        /// <param name="email">e-mail do usuário</param>
        /// <param name="senha">senha do usuário</param>
        /// <returns>Um objeto do tipo Usuario que foi buscado</returns>
        Usuario Login(string email, string senha);
    }
}
