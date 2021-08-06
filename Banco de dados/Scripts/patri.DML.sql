USE Patri;

INSERT INTO Instituicao(Nome, RazaoSocial, Cnpj, Endereco)
VALUES('Senai Informática', 'Serviço Nacional de Aprendizagem Industrial', '01998767000202', 'Alameda Barão de Limeira, 539 - Santa Cecilia');

INSERT INTO Usuario(IdInstituicao, Email, Senha, Tipo)
VALUES(1,'mateus@email.com', 'mat123','ADM'),
	  (1, 'renato@email.com', 'renato123', 'ADM'),
	  (1, 'vinicius@email.com', 'vini123', 'ADM'),
	  (1, 'pedro@email.com', 'pedro123', 'ADM');

INSERT INTO Sala(IdInstituicao, Andar, NomeSala, MetragemSala)
VALUES(1,2,'Coworking',10),
	  (1,3,'Dev',10),
	  (1,4,'Redes',10);

INSERT INTO TipoEquipamento(NomeTipoEquipamento)
VALUES('Mobiliário'),('Informática'),('Eletroeletrônico');

INSERT INTO Equipamento(IdTipoEquipamento,IdSala,Marca,NumeroSerie,Descricao,NumeroPatrimonio,StatusEquipamento)
VALUES(1,1,'Dell','1010101','Notebook','999', 'Ativo'),
	  (2,2,'XingLing','23430','Arduino','728','Ativo'),
	  (3,3,'Kappesberg','445432','Mesa de pingpong','188','Ativo');