using senai.patri.webapi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.patri.webapi.Interfaces
{
    interface ITipoEquipamentoRepository
    {
        /// <summary>
        /// Método que cadastra um novo TipoEquipamento
        /// </summary>
        /// <param name="NovoTipoEquipamento">Objeto do TipoEquipamento que será cadastrado</param>
        public void Cadastrar(TipoEquipamento NovoTipoEquipamento);

        /// <summary>
        /// Lista todos os TipoEquipamento
        /// </summary>
        /// <returns>Lista com os Usuários</returns>
        List<TipoEquipamento> Listar();

        /// <summary>
        /// Busca um TipoEquipamento pelo id 
        /// </summary>
        /// <param name="id">id do TipoEquipamento que será buscado</param>
        /// <returns>Usuário Buscado</returns>
        TipoEquipamento BuscarPorId(int id);

        /// <summary>
        /// Atualiza um TipoEquipamento pelo Id
        /// </summary>
        /// <param name="id">Id do TipoEquipamento que será atualizado</param>
        /// <param name="TipoEquipamentoAtt">Objeto TipoEquipamentoAtt com as informações atualizadas</param>
        void Atualizar(int id, TipoEquipamento TipoEquipamentoAtt);

        /// <summary>
        /// Deleta um TipoEquipamento existente
        /// </summary>
        /// <param name="id">Id do TipoEquipamento que será deletado</param>
        void Deletar(int id);
    }
}
