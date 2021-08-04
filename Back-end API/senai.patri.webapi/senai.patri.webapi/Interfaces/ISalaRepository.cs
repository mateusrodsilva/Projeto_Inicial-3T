using senai.patri.webapi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Interfaces
{
    interface ISalaRepository
    {
        /// <summary>
        /// Método que cadastra uma nova Sala
        /// </summary>
        /// <param name="NovaSala">Objeto da Sala que será Cadastrada</param>
        public void Cadastrar(Sala NovaSala);

        /// <summary>
        /// Lista todas as Sala cadastrados 
        /// </summary>
        /// <returns>Lista com as Salas</returns>
        List<Sala> Listar();

        /// <summary>
        /// Busca uma Sala pelo id 
        /// </summary>
        /// <param name="id">id da Sala que será buscada</param>
        /// <returns>Sala Buscada</returns>
        Sala BuscarPorId(int id);

        /// <summary>
        /// Atualiza uma Sala pelo Id
        /// </summary>
        /// <param name="id">Id da Sala que será atualizada</param>
        /// <param name="SalaAtt">Objeto SalaAtt com as informações atualizadas</param>
        void Atualizar(int id, Sala SalaAtt);

        /// <summary>
        /// Deleta um cadastro de uma Sala existente
        /// </summary>
        /// <param name="id">Id da Salaque será deletada</param>
        void Deletar(int id);
    }
}
