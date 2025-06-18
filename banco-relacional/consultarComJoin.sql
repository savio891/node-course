SELECT * FROM estados e, cidades c
WHERE e.id = c.estado_id;

-- SELECT nome FROM estados e, cidades c  //Esse comando geraria um erro, porque "nome" representa ambiguidade (campo que existe nas tabelas estados e cidades)
-- WHERE e.id = c.estado_id;

SELECT 
    e.nome as Estado, 
    c.nome as Cidade, 
    regiao as Região
FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Regiao
FROM estados e
INNER JOIN cidades c 
    ON e.id = c.estado_id

