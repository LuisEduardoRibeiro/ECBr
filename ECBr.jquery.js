$.fn.ECBr = function(options){
	opt = { dEstado:"", dCidade:"" };
	if (!options) options = opt;
	if (!options.dEstado) options.dEstado = opt.dEstado;
	if (!options.dCidade) options.dCidade = opt.dCidade;
	
	/**
	 * Versão do arquivo ECBr.json
	 */
	var versao = "20180119074711";
	
	/**
	 * Salva ou pega valor do local storage
	 */
	var ck = {
		save : function(n,v){ localStorage.setItem(n,v); },
		get : function(n){ return localStorage.getItem(n); }
	};
	
	
	var jsonEstados = [{c:"AC",t:"Acre"},{c:"AL",t:"Alagoas"},{c:"AM",t:"Amazonas"},{c:"AP",t:"Amapa"},{c:"BA",t:"Bahia"},{c:"CE",t:"Ceara"},{c:"DF",t:"Distrito Federal"},{c:"ES",t:"Espirito Santo"},{c:"GO",t:"Goias"},{c:"MA",t:"Maranhao"},{c:"MG",t:"Minhas Gerais"},{c:"MS",t:"Mato Grosso do Sul"},{c:"MT",t:"Mato Grosso"},{c:"PA",t:"Para"},{c:"PB",t:"Paraiba"},{c:"PE",t:"Pernambuco"},{c:"PI",t:"Piaui"},{c:"PR",t:"Parana"},{c:"RJ",t:"Rio de Janeiro"},{c:"RN",t:"Rio Grande do Norte"},{c:"RO",t:"Rondonia"},{c:"RR",t:"Roraima"},{c:"RS",t:"Rio Grande do Sul"},{c:"SC",t:"Santa Catarina"},{c:"SE",t:"Sergipe"},{c:"SP",t:"Sao Paulo"},{c:"TO",t:"Tocantins"}];
	var jsonCidades = ck.get("ECBr");
	var loadCidades = 0;
	var $cidade = $(this.data("cidades"));
	
	jsonCidades = jsonCidades ? JSON.parse(jsonCidades) : null;
	
	var getCidades = function($this){
		loadCidades = 1;
		$.getJSON("common/general/ECBr/ECBr.json",function(list){
			console.log("Atualizou ECBr");
			jsonCidades = list;
			ck.save("ECBr",JSON.stringify(list));
			loadCidades = 0;
			$this.change();
		}).fail(function(){
			alert("Não foi possível carregar as cidades");
		});
	};
	
	if (!jsonCidades || jsonCidades.v != versao) getCidades(this);
	
	var html = "";
	var init = 1;
	for (var i in jsonEstados) {
		var e = jsonEstados[i];
		html += "<option value=\"" + e.c + "\" title=\"" + e.t + "\" " + (options.dEstado == e.c ? "selected" : "")+ ">" + e.c + "</option>";
	}
	this.html(html);
	
	this.change(function(){
		if (loadCidades != 0) {
			$cidade.html("<option value=>Carregando...</option>");
		}
		else {
			var est = $(this).val();
			var list = jsonCidades && jsonCidades.l ? jsonCidades.l[String(est)] : null;
			
			if (!est || !list) {
				if (!list) getCidades(this);
				$cidade.html("<option value=>Selecione o estado</option>");
			}
			else {
				var html = "<option value=>Selecione</option>";
				for (var i in list) {
					html += "<option value='" + list[i].n + "' data-ibge='" + list[i].c + "'>" + list[i].n + "</option>";
				}
				$cidade.html(html);
				if (init == 1 && options.dCidade) {
					init = 0;
					$cidade.val(options.dCidade);
				}
			}
		}
	});
	
	this.change();
	
	return this;
};