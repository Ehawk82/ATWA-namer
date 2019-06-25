var myUI = {
	init: function(){
		var dvContain = createEle("div"),
		    title = createEle("h1"),
		    form = createEle("form"),
		    nameHolder = createEle("p"),
		    nLabel = createEle("label"),
		    nInput = createEle("input"),
		    dobHolder = createEle("p"), dLabel = createEle("label"), dIn = createEle("input"), mIn = createEle("input"), yIn = createEle("input"),
		    dietHolder = createEle("p"), aLabel = createEle("label"), dtSelect = createEle("select"), dtOptionS = createEle("option"), dtOption0 = createEle("option"), dtOption1 = createEle("option"), dtOption2 = createEle("option"), dtOption3 = createEle("option"),
		    gHolder = createEle("p"), gLabel = createEle("label"), ghSelect = createEle("select"), ghOptionS = createEle("option"), ghOption0 = createEle("option"), ghOption1 = createEle("option"), ghOption2 = createEle("option"),
		    btn = createEle("button");

		btn.innerHTML = "GENERATE NAME";

		gLabel.innerHTML = "ANIMALS";
        
		ghOptionS.innerHTML = "[ SELECT ANIMAL ]";
		ghOptionS.className = "options";
		ghOptionS.selected = true;

		ghOption0.innerHTML = "DOG";
		ghOption0.className = "options";

		ghOption1.innerHTML = "CAT";
		ghOption1.className = "options";

		ghOption2.innerHTML = "OTHER";
		ghOption2.className = "options";

		ghSelect.append(ghOptionS,ghOption0,ghOption1,ghOption2);
		
		gHolder.append(gLabel, ghSelect);

		aLabel.innerHTML = "AIR";

		dtOptionS.innerHTML = "[ SELECT AIR ]";
		dtOptionS.className = "options";

		dtOption0.innerHTML = "MARITIME POLAR";
		dtOption0.className = "options";

		dtOption1.innerHTML = "MARITIME TROPICAL";
		dtOption1.className = "options";

		dtOption2.innerHTML = "CONTINENTAL POLAR";
		dtOption2.className = "options";

		dtOption3.innerHTML = "CONTINENTAL TROPICAL";
		dtOption3.className = "options";

		dtSelect.append(dtOptionS,dtOption0,dtOption1,dtOption2,dtOption3);

		dietHolder.append(aLabel, dtSelect);

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

		form.append(nameHolder,dobHolder,dietHolder,gHolder,btn);

		title.innerHTML = "WHAT IS YOUR ATWA NAME?";

		dvContain.className = "dvContain";
		dvContain.append(title,form);
		
		body.append(dvContain);
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
					console.log(strCut);
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