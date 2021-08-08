USE Patri;
GO

INSERT INTO Instituicao(Nome, RazaoSocial, Cnpj, Endereco)
VALUES('Senai Informática', 'Serviço Nacional de Aprendizagem Industrial', '01998767000202', 'Alameda Barão de Limeira, 539 - Santa Cecilia');
GO

INSERT INTO Usuario(IdInstituicao, Email, Senha, Tipo)
VALUES(1,'mateus@email.com', 'mat123','Admin'),
	  (1, 'renato@email.com', 'renato123', 'Admin'),
	  (1, 'vinicius@email.com', 'vini123', 'Admin'),
	  (1, 'pedro@email.com', 'pedro123', 'Admin');
	  GO

INSERT INTO Sala(IdInstituicao, Andar, NomeSala, MetragemSala)
VALUES(1,1,'Coworking',15),
	  (1,2,'Dev',45),
	  (1,2,'Redes',20);
	  GO

INSERT INTO TipoEquipamento(NomeTipoEquipamento)
VALUES('Mobiliário'),('Informática'),('Eletroeletrônico');
GO

INSERT INTO Equipamento(IdInstituicao,IdTipoEquipamento,IdSala,Marca,NumeroSerie,Descricao,NumeroPatrimonio)
VALUES(1,2,1,'Dell','1010101','Notebook','999'),
		(1,1,1,'Kappesberg', '5550557','Mesa para Computador','843'),
		(1,1,1,'Pichau', '1728946','Cadeira Gamer','360'),
		(1,1,1,'DxRacer', '3468134','Cadeira Gamer','943'),
		(1,2,1,'Sony', '4891356','Playstation 5','543'),
		(1,1,1,'Samsung', '9825461','Televisão 4K','376'),
		(1,1,2,'Flexform', '9725461','Cadeira de Escritório','256'),
	  (1,3,2,'XingLing','23430','Arduino','728'),
	  (1,1,2,'Kappesberg', '6481359','Mesa para Computador','752'),
	  (1,2,2,'Dell','1010105','Notebook','997'),
	  (1,2,2,'EPSON','1010102','Projetor','959'),
	  (1,1,2,'Flexform', '9725461','Cadeira de Escritório','236'),
	  (1,1,1,'Kappesberg','445432','Mesa de pingpong','188');
	  GO
