# ECBr
Plugin jQuery que carrega estados e cidades do Brasil. 

Através de um arquivo JSON, que será salvo no local storage do browser, as cidades são carregadas no elemento html conforme selecionar o estado.

## Utilização
Obs.: É necessário a utilização da versão 1.4 ou mais recente do jQuery.

<b>Exemplo</b>

<pre><code>
$(function(){
  // Elemento html: &lt;select id="estados" data-cidades="#cidades"&gt;&lt;/select&gt;
  $("#estados").ECBr({
    dEstado: "SP",
    dCidade: "SAO PAULO"
  });
});
</code></pre>
