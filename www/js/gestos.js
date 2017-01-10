var app = {
	inicio: function(){
		this.iniciaBotones();
		this.iniciaFastClick();
		this.iniciaHammer();
	},
	iniciaBotones: function(){		
		document.querySelector("#claro").addEventListener("click",this.ponloClaro,false);
		document.querySelector("#oscuro").addEventListener("click",this.ponloOscuro,false);
	},
	iniciaFastClick: function(){
		FastClick.attach(document.body);
	},
	iniciaHammer: function(){
		var zona = document.querySelector("#zona-gestos");
		var hammertime = new Hammer(zona);

		hammertime.get("pinch").set({enable: true});
		hammertime.get("rotate").set({enable: true});
		zona.addEventListener("webkitAnimationEnd", function(e){
			zona.className = "";
		});

		hammertime.on("doubletap press tap", function(ev){
			zona.className = ev.type;
		});

		hammertime.on("swipe", function(ev){
			var clase = "";
			var direccion = ev.direction;

			if(direccion == 4)
				clase = "derecha";
			else if (direccion == 2 )
				clase = "izquierda";

			zona.className = clase;

			// document.querySelector("#info").innerHTML = clase;
		});

		hammertime.on("rotate", function(ev){
			var umbral = 25;
			if(ev.distance >umbral)
				zona.className = "rotate";
		});
		/*hammertime.on("press", function(ev){
			zona.className = "press";
			document.querySelector("#info").innerHTML = ev.type+"!";
		});*/
		/*hammertime.on("tap doubletap swipe press rotate", function(ev){
		});*/
	},
	ponloClaro: function(){
		document.body.className = "claro";
	},
	ponloOscuro: function(){
		document.body.className = "oscuro";
	}
};

if("addEventListener" in document){
	document.addEventListener("DOMContentLoaded", function(){
		app.inicio();
	}, false);
}

// app.inicio();