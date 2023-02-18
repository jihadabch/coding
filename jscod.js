var texterea=document.getElementById("text");
var result=document.getElementById("result");
var select=document.getElementById("select");
let arabic=document.getElementById("arabic");
let english=document.getElementById("english");
let text1=document.getElementById("text1");
let text2=document.getElementById("text2");
var done=document.getElementById("done");
var clear=document.getElementById("clear");
var entery=document.getElementById("inf");



texterea.addEventListener("input",()=>{
	app();
});
select.addEventListener("change",()=>{
	app();

});


function app(){
	if(select.value=="decod"){
		result.value=atob(texterea.value);
	}else{
		result.value=btoa(texterea.value);
	}
};


arabic.onclick=()=>{
	lang("arabic");
	localStorage.setItem("info","arabic")
};
english.onclick=()=>{
	lang("english");
	localStorage.setItem("info","english")
};

onload=()=>{
	lang(localStorage.getItem("info"))
}


function lang(getlang){
	if(getlang==="arabic"){
		text1.innerHTML="النص";
		text2.innerHTML="النتيجه";
	}else if(getlang==="english"){
		text1.innerHTML="The Text";
		text2.innerHTML="The Result";
	}
};
document.getElementById("color").onchange=function(){
	localStorage.setItem("color",document.getElementById("color").value);
	document.body.style.background=localStorage.getItem("color");
};
if(document.getElementById("color").value=localStorage.getItem("color")){
	document.body.style.background=localStorage.getItem("color")
};


entery.addEventListener("invalid",()=>{
	msg();
});
entery.addEventListener("input",()=>{
	msg();
});


function msg(){
	if(entery.validity.valueMissing){
		entery.setCustomValidity("No input!!!")
	}else if(entery.validity.typeMismatch){
		entery.setCustomValidity("wrong data input")
	}else{
		entery.setCustomValidity("");
	}
};

