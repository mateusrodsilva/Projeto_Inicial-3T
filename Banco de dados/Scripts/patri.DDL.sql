/*CREATE DATABASE Patri;*/
GO

USE Patri;
GO

CREATE TABLE Instituicao(

idInstituicao int primary key identity,

Nome VARCHAR(150) NOT NULL UNIQUE,

RazaoSocial VARCHAR(150) NOT NULL UNIQUE,

Cnpj VARCHAR(14) NOT NULL UNIQUE,

Endereco VARCHAR(150) NOT NULL
); 
GO


CREATE TABLE Usuario(

IdUsuario int primary key identity,

IdInstituicao int foreign key references instituicao(idInstituicao),

Email VARCHAR(150) NOT NULL UNIQUE ,

Senha VARCHAR(150) NOT NULL,

Tipo VARCHAR(20) NOT NULL
);
GO


CREATE TABLE Sala(

IdSala int primary key identity,

IdInstituicao int foreign key references Instituicao(IdInstituicao),

Andar VARCHAR(20) not null,

NomeSala VARCHAR(150) not null,

MetragemSala FLOAT NOT NULL
);
GO


CREATE TABLE TipoEquipamento(

IdTipoEquipamento int primary key identity,
NomeTipoEquipamento VARCHAR(150) NOT NULL);
GO


CREATE TABLE Equipamento(

IdEquipamento int primary key identity,

IdTipoEquipamento int foreign key references TipoEquipamento(IdTipoEquipamento),

IdSala int foreign key references Sala(IdSala),

Marca VARCHAR(100) not null,

NumeroSerie VARCHAR(100) not null,

Descricao VARCHAR(300) not null,

NumeroPatrimonio VARCHAR(100) not null,

StatusEquipamento BIT DEFAULT (1));
GO
