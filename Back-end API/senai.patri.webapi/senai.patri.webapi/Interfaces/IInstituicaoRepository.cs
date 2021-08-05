using senai.patri.webapi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Interfaces
{
    interface IInstituicaoRepository
    {
        /// <summary>
        /// Método que cadastra uma nova Instituição
        /// </summary>
        /// <param name="NovaInstituicao">Objeto da Instituicao que será Cadastrada</param>
        public void Cadastrar(Instituicao NovaInstituicao);

        /// <summary>
        /// Lista todos as Instituições cadastradas 
        /// </summary>
        /// <returns>Lista com os Medicos</returns>
        List<Instituicao> Listar();

        /// <summary>
        /// Busca uma Instituicao pelo id 
        /// </summary>
        /// <param name="id">id da Instituicao que será buscada</param>
        /// <returns>Instituicao Buscada</returns>
        Instituicao BuscarPorId(int id);

        /// <summary>
        /// Atualiza um Equipamento pelo Id
        /// </summary>
        /// <param name="id">Id da Instituicao que será atualizada</param>
        /// <param name="InstituicaoAtt">Objeto InstituicaoAtt com as informações atualizadas</param>
        void Atualizar(int id, Instituicao InstituicaoAtt);

        /// <summary>
        /// Deleta um cadastro de uma Instituicao existente
        /// </summary>
        /// <param name="id">Id da Instituicao que será deletada</param>
        void Deletar(int id);
    }
}
