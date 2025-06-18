SELECT * FROM estados 
WHERE id = 25;

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 25);

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niterói', 133.9, 19);

    INSERT INTO cidades (nome, area, estado_id)
    VALUES (
        'Caruaru',
        920.6, 
        (select id from estados where sigla = 'PE')
);

INSERT INTO cidades (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte',
    248.8,
    (select id from estados where sigla = 'CE')
);

INSERT INTO cidades (nome, area, estado_id)
VALUES (
    'Divisópolis',
    572.92,
    (select id from estados where sigla = 'MG')
);

SELECT * FROM cidades