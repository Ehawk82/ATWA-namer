var userContext = [
	name = "",
	day = 0,
	month = 0,
	year = 0,
	air = "",
	tree = "",
	water = "",
	animals = "",
	culminate = 0,
	bool = false
];
var myUI = {
	init: function(){
		var dvContain = createEle("div"),
		    title = createEle("h1"),
		    form = createEle("form"),
		    nameHolder = createEle("p"),
		    nLabel = createEle("label"),
		    nInput = createEle("input"),
		    dobHolder = createEle("p"), dLabel = createEle("label"), dIn = createEle("input"), mIn = createEle("input"), yIn = createEle("input"),
		    dtHolder = createEle("p"), aLabel = createEle("label"), dtSelect = createEle("select"),
		    tHolder = createEle("p"), tLabel = createEle("label"), tSelect = createEle("select"),
		    wHolder = createEle("p"), wLabel = createEle("label"), wSelect = createEle("select"),
		    gHolder = createEle("p"), gLabel = createEle("label"), ghSelect = createEle("select"),
		    btn = createEle("button");

		btn.innerHTML = "GENERATE NAME";
		btn.onclick = myUI.processForm(form);

		gLabel.innerHTML = "ANIMALS";
        
		var animals = ["[ SELECT ANIMAL TYPE ]","PRIMATE","CANINE","FELINE","RODENT","MARCUPIAL","AVIAN","BOVINE","MARINE","INSECT","ARACHNID","OTHER"];
		for(var g = 0; g < animals.length; g++) {
			var ghOptions = createEle("option");

        	ghOptions.innerHTML = animals[g];
			ghOptions.className = "options";
			ghOptions.id = "opt_" + g;

			ghSelect.append(ghOptions);
		}
				
		gHolder.append(gLabel, ghSelect);

		wLabel.innerHTML = "WATER";
        
		var water = ["[ SELECT BODY OF WATER ]","PUDDLE","POND","LAKE","RIVER","OCEAN"];
		for(var w = 0; w < water.length; w++) {
			var wOptions = createEle("option");

        	wOptions.innerHTML = water[w];
			wOptions.className = "options";
			wOptions.id = "opt_" + w;

			wSelect.append(wOptions);
		}
		
		wHolder.append(wLabel, wSelect);

        tLabel.innerHTML = "TREES";

		var trees = ["[ SELECT TREE TYPE ]","BROADLEAF","NEEDLE","SCALE"];

		for(var t = 0; t < trees.length; t++) {
			var tOptions = createEle("option");

        	tOptions.innerHTML = trees[t];
			tOptions.className = "options";
			tOptions.id = "opt_" + t;

			tSelect.append(tOptions);
        }

		tHolder.append(tLabel, tSelect);

		aLabel.innerHTML = "AIR";

		var climates = ["[ SELECT AIR ]","MARITIME POLAR","MARITIME TROPICAL","MARITIME TEMPERATE","CONTINENTAL POLAR","CONTINENTAL TROPICAL","CONTINENTAL ARID","CONTINENTAL TEMPERATE"];
		
		for(var d = 0; d < climates.length; d++) {
			var dtOptions = createEle("option");

        	dtOptions.innerHTML = climates[d];
			dtOptions.className = "options";
			dtOptions.id = "opt_" + d;

			dtSelect.append(dtOptions);
        }

		dtHolder.append(aLabel, dtSelect);

		dIn.type = "number";
		dIn.max = 31;
		dIn.min = 1;
		dIn.setAttribute("maxLength", "2");
		dIn.placeholder = "DD";
		dIn.onkeyup = myUI.validateAge(dIn);

		mIn.type = "number";
		mIn.max = 12;
		mIn.min = 1;
		mIn.maxLength = 2;
		mIn.placeholder = "MM";
		mIn.onkeyup = myUI.validateAge(mIn);

		yIn.type = "number";
		yIn.max = 2019;
		yIn.min = 1900;
		yIn.maxLength = 4;
		yIn.placeholder = "YYYY";
		yIn.onkeyup = myUI.validateAge(yIn);

		dLabel.innerHTML = "DATE OF BIRTH";

		dobHolder.append(dLabel,dIn,mIn,yIn);

		nLabel.innerHTML = "FIRST NAME";

		nameHolder.append(nLabel,nInput);

		form.append(nameHolder,dobHolder,dtHolder,tHolder,wHolder,gHolder,btn);

		title.innerHTML = "WHAT IS YOUR ATWA NAME?";

		dvContain.className = "dvContain";
		dvContain.append(title,form);
		
		body.append(dvContain);
	},
	processForm: function(form){
		return function(){
			var z, d;
			for(var i = 0; i < 4; i++){
				var inputs = byTag("input", i);
				if(i === 0) {
					let z = i;
					let d = inputs.value; 
					//console.log(d);
				}
				if(i === 1) {
					let z = i;
					let d = inputs.value; 
					//console.log(d);
				}
				if(i === 2) {
					let z = i;
					let d = inputs.value; 
					//console.log(d);
				}
				if(i === 3) {
					let z = i;
					let d = inputs.value; 
					//console.log(d);
				}
			}
			
            debugger;
		}
	},
	validateAge: function(x){
		return function(){
			var str = x.value,
			    strLength = str.length;

			if(strLength < x.maxLength){
		
			} else {
				if(x.value > x.max){
					var strSlice;
					if(x.maxLength === 2){
						strSlice = str.slice(0,2);
					}else{
						strSlice = str.slice(0,4);
					}
					var strCut = strSlice;

					x.value = x.max;

				} else {
					return false;
				}
			}
		};
	}
};
window.onload = function(){
	myUI.init();
};