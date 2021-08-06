CREATE DATABASE Patri;

USE Patri;

CREATE TABLE Instituicao(

idInstituicao int primary key identity,

Nome VARCHAR(150),

RazaoSocial VARCHAR(150),

Cnpj VARCHAR(14),

Endereco VARCHAR(150)
); 



CREATE TABLE Usuario(

IdUsuario int primary key identity,

IdInstituicao int foreign key references instituicao(idInstituicao),

Email VARCHAR(150),

Senha VARCHAR(150),

Tipo VARCHAR(20)

);



CREATE TABLE Sala(

IdSala int primary key identity,

IdInstituicao int foreign key references Instituicao(IdInstituicao),

Andar VARCHAR(20) not null,

NomeSala VARCHAR(150) not null,

MetragemSala FLOAT NOT NULL
);



CREATE TABLE TipoEquipamento(

IdTipoEquipamento int primary key identity,

NomeTipoEquipamento VARCHAR(150));



CREATE TABLE Equipamento(

IdEquipamento int primary key identity,

IdTipoEquipamento int foreign key references TipoEquipamento(IdTipoEquipamento),

IdSala int foreign key references Sala(IdSala),

Marca VARCHAR(100) not null,

NumeroSerie VARCHAR(100) not null,

Descricao VARCHAR(300) not null,

NumeroPatrimonio VARCHAR(100) not null,

StatusEquipamento VARCHAR(6) not null);