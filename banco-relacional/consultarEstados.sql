select * from estados;

select 
    nome, 
    sigla as 'Sigla do Estado' 
from estados
WHERE regiao = 'Sul';

select 
    nome, 
    regiao,
    populacao
from estados
WHERE populacao >= 10
ORDER BY populacao DESC;