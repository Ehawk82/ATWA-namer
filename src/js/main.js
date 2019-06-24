var myUI = {
	init: function(){
		var dvContain = createEle("div"),
		    title = createEle("h1"),
		    form = createEle("form"),
		    nameHolder = createEle("p"),
		    nLabel = createEle("label"),
		    nInput = createEle("input"),
		    dobHolder = createEle("p"), dLabel = createEle("label"), dIn = createEle("input"), mIn = createEle("input"), yIn = createEle("input");

		dIn.type = "number";
		dIn.max = 31;
		dIn.min = 1;
		dIn.setAttribute("maxLength", "2");
		dIn.placeholder = "DD";

		mIn.type = "number";
		mIn.max = 12;
		mIn.min = 1;
		mIn.maxLength = 2;
		mIn.placeholder = "MM";

		yIn.type = "number";
		yIn.max = 2019;
		yIn.min = 1900;
		yIn.maxLength = 4;
		yIn.placeholder = "YYYY";

		dLabel.innerHTML = "DATE OF BIRTH";

		dobHolder.append(dLabel,dIn,mIn,yIn);

		nLabel.innerHTML = "FIRST NAME";

		nameHolder.append(nLabel,nInput);

		form.append(nameHolder,dobHolder);

		title.innerHTML = "WHAT IS YOUR ATWA NAME?";

		dvContain.className = "dvContain";
		dvContain.append(title,form);
		
		body.append(dvContain);
	}
};
window.onload = function(){
	myUI.init();
};