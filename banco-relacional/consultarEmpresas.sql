SELECT e.nome Empresa, c.nome Cidade
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id 
AND c.id = eu.cidade_id
AND sede;

SELECT e.nome AS EMPRESA, c.nome AS CIDADE
FROM empresas AS e, empresas_unidades AS eu, cidades AS c
INNER JOIN 