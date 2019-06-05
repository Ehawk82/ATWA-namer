var myUI = {
	init: function(){
		var dvContain = createEle("div");

		dvContain.innerHTML = "WHAT IS YOUR ATWA NAME?";
		dvContain.className = "dvContain";
		
		body.append(dvContain);
	}
};
window.onload = function(){
	myUI.init();
};