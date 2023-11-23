CREATE TABLE Usuario (
	ID_Usuario INT PRIMARY KEY NOT NULL,
	Nome VARCHAR (40) NOT NULL,
	Senha VARCHAR (20) NOT NULL
)

CREATE TABLE Endereco (
	ID_Endereco INT PRIMARY KEY NOT NULL,
	Logradouro VARCHAR (40) NOT NULL,
	Bairro VARCHAR (20) NOT NULL,
	UF VARCHAR (2) NOT NULL,
	CEP VARCHAR (15) NOT NULL,
	FK_Usuario INT NOT NULL,
	--CONSTRAINT endereco_pk FOREIGN KEY (fk_id_usuario),
	CONSTRAINT FK_Usuario FOREIGN KEY (FK_Usuario) REFERENCES usuario(id_usuario)
)

CREATE TABLE Produtos (
	ID_Produto INT PRIMARY KEY NOT NULL,
	Nome VARCHAR (40) NOT NULL,
	Valor FLOAT NOT NULL
)

CREATE TABLE Pedido (
	ID_Pedido INT PRIMARY KEY NOT NULL,
	Numero_Pedido VARCHAR (40) NOT NULL,
	FK_ID_Usuario INT NOT NULL,
	FK_ID_Produto INT NOT NULL,
	Total FLOAT NOT NULL,
	--CONSTRAINT pedido_pk PRIMARY KEY (fk_id_usuario, fk_id_produto),
	CONSTRAINT FK_ID_Usuario FOREIGN KEY (FK_ID_Usuario) REFERENCES usuario(id_usuario) ,
	CONSTRAINT FK_ID_Produto FOREIGN KEY (FK_ID_Produto) REFERENCES produtos(id_produto)
)

CREATE TABLE Item_Pedido (
	ID_Item_Pedido INT PRIMARY KEY NOT NULL,
	Nome VARCHAR (40) NOT NULL,
	Valor FLOAT NOT NULL,
	FK_ID_Pedido INT NOT NULL,
	CONSTRAINT FK_ID_Pedido FOREIGN KEY (FK_ID_Pedido) REFERENCES pedido(id_pedido)
)

CREATE TABLE Contato (
	ID_Contato INT PRIMARY KEY NOT NULL,
	Nome VARCHAR (40) NOT NULL,	
	Email VARCHAR (40) NOT NULL,
	Telefone VARCHAR (15) NOT NULL,
    Comentarios VARCHAR (255) NOT NULL
)

INSERT INTO usuario (id_usuario, nome, senha) VALUES 
    (1, 'Emerson', 'werrt'),
    (2, 'Zaro', '@#$@#%'),
    (3, 'Moacir', 'OOP())');
       
INSERT INTO endereco (id_endereco, logradouro, bairro, uf, cep, fk_usuario) VALUES 
    (1, 'Rua 44 , 44', 'Centro', 'ES', '29510-059', 2),
    (2, 'Rua 2 , 333', 'Villa', 'RJ', '21510-059', 2),
    (3, 'XXXX, 999', 'V. Zero', 'PR', '35555-059', 3);

INSERT INTO produtos (id_produto, nome, valor) 	VALUES
    (1, 'Gameboy US', 422.00),	
    (2, 'Super Nintendo US', 500.00),
    (3, 'Master System Tectoy', 320.00),
    (4, 'Playstation FAT JP', 622.00),
    (5, 'Megadrive JP', 422.00);
	
INSERT INTO pedido (id_pedido, numero_pedido, fk_id_usuario, fk_id_produto, total) VALUES
	(1, '1', '1', '1', 422.00),
    (2, '2', '2', '3', 320.00),
    (3, '3', '3', '5', 422.00);
    
INSERT INTO item_pedido (id_item_pedido, nome, valor, fk_id_pedido) VALUES
    (1, 'Gameboy US', 422.00, 1),
    (2, 'Master System Tectoy', 320.00, 2),
    (3, 'Megadrive JP', 422.00, 3);    
    
INSERT INTO contato (id_contato, nome, email, telefone, comentarios) VALUES
    (1, 'Arthur o Rei', 'theking@sqn', '223234234', 'Legal o site de vcs, vou comprar alguns itens para a minha coleção KKKKK');
    

-- PEDIDO POR USUÁRIO
select numero_pedido, total, nome AS CLIENTE from pedido 
inner join usuario
on pedido.id_pedido = usuario.id_usuario
--WHERE nome LIKE 'E%'

-- TOTAL DE PEDIDOS
SELECT COUNT(*) from pedido;




