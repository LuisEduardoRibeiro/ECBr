# ECBr
Plugin jQuery que carrega estados e cidades brasileiras. 

Através de um arquivo JSON, que será salvo no local storage do browser, as cidades são carregadas no elemento html conforme selecionar o estado.

## Pré-requisitos
jQuery versão 1.4 ou superior. 

## Exemplo de Utilização
```html
<select id="cmbEstados" data-cidades="#cmbCidades"></select>
<select id="cmbCidades"></select>

<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="ECBr.js"></script>
<script type="text/javascript">
    $(function(){
        $("#cmbEstados").ECBr({
            dEstado: "SP",
            dCidade: "SAO PAULO"
        });
    });
</script>
```
