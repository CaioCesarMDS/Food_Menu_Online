create table
	user (
		id_user integer primary key AUTOINCREMENT not null,
		name varchar(50),
		email varchar(100),
		password varchar(100)
	);

create table
	product (
		id_product integer primary key AUTOINCREMENT not null,
		name varchar(50),
		description varchar(200),
		price decimal(9, 2),
		foto varchar(1000)
	);

create table
	orderr (
		id_order integer primary key AUTOINCREMENT not null,
		id_user int,
		name varchar(50),
		email varchar(100),
		phone varchar(50),
		state varchar(2),
		cep varchar(10),
		address varchar(100),
		total decimal(9, 2)
	);

create table
	order_item (
		id_item integer primary key AUTOINCREMENT not null,
		id_order int,
		id_product int,
		quantity decimal(9, 2),
		price decimal(9, 2),
		total_price decimal(9, 2)
	);

insert into
	user (name, email, password)
values
	('Teste123', 'teste@gmail.com', '');

insert into
	product (name, description, price, foto)
values
	(
		'Spicy Burguer',
		'Hamburguer de 250g, queijo, tomate, alface e cebola',
		24.90,
		'https://jornadajs-food.s3.amazonaws.com/spicy.png'
	);

insert into
	product (name, description, price, foto)
values
	(
		'Sanduba',
		'Sanduiche natural, alface, tomate, pão integral e orégano',
		22.00,
		'https://jornadajs-food.s3.amazonaws.com/sanduba.png'
	);

insert into
	product (name, description, price, foto)
values
	(
		'Super Burguer',
		'Hamburguer de 300g, molho, queijo, tomate, alface e cebola',
		29.90,
		'https://jornadajs-food.s3.amazonaws.com/super.png'
	);

insert into
	product (name, description, price, foto)
values
	(
		'Mega',
		'Hamburguer de 300g, maionese, tomate, alface, queijo e cebola',
		34.90,
		'https://jornadajs-food.s3.amazonaws.com/mega.png'
	);

insert into
	product (name, description, price, foto)
values
	(
		'Penne',
		'Penne ao molho especial de tomates rústicos, ervas aromáticas e cebola',
		27.00,
		'https://jornadajs-food.s3.amazonaws.com/penne.png'
	);

insert into
	product (name, description, price, foto)
values
	(
		'Fritas',
		'Batata frita crocante com molho especial de maionese da casa',
		14.90,
		'https://jornadajs-food.s3.amazonaws.com/fritas.png'
	);

insert into
	product (name, description, price, foto)
values
	(
		'Coca-Cola Lata',
		'Coca-cola em lata de 300ml, trincando de gelada para você',
		9.90,
		'https://jornadajs-food.s3.amazonaws.com/coca.png'
	);