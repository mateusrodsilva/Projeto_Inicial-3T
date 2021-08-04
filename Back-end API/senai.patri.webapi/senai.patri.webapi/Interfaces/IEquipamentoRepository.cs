using senai.patri.webapi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Interfaces
{
    interface IEquipamentoRepository
    {
        /// <summary>
        /// Método que cadastra uma novo Equipamento
        /// </summary>
        /// <param name="NovoEquipamento">Objeto do Equipamento que será Cadastrado</param>
        public void Cadastrar(Equipamento NovoEquipamento);

        /// <summary>
        /// Lista todos os Equipamentos cadastrados 
        /// </summary>
        /// <returns>Lista com os Medicos</returns>
        List<Equipamento> Listar();

        /// <summary>
        /// Busca um Equipamento pelo id 
        /// </summary>
        /// <param name="id">id do Equipamento que será buscado</param>
        /// <returns>Equipamento Buscado</returns>
        Equipamento BuscarPorId(int id);

        /// <summary>
        /// Atualiza um Equipamento pelo Id
        /// </summary>
        /// <param name="id">Id do Equipamento que será atualizado</param>
        /// <param name="EquipamentoAtt">Objeto EquipamentoAtt com as informações atualizadas</param>
        void Atualizar(int id, Equipamento EquipamentoAtt);

        /// <summary>
        /// Deleta um cadastro de um Equipamento existente
        /// </summary>
        /// <param name="id">Id do Equipamento que será deletado</param>
        void Deletar(int id);
    }
}
