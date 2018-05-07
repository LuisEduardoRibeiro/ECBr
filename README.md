# ECBr
Plugin jQuery que carrega estados e cidades brasileiras. 

Através de um arquivo JSON, que será salvo no local storage do browser, as cidades são carregadas no elemento html conforme selecionar o estado.

## Utilização
Obs.: É necessário a utilização da versão 1.4 ou mais recente do jQuery.

<b>Exemplo</b>

<pre>
  <code>
    <select id="cmbEstados" data-cidades="#cmbCidades"></select>
    <select id="cmbCidades"></select>

    <script type="text/javascript">
      $(function(){
        $("#cmbEstados").ECBr({
          dEstado: "SP",
          dCidade: "SAO PAULO"
        });
      });
    </script>
  </code>
</pre>
