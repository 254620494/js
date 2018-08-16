
function peibi(){
	window.location.href="peibi.html";
}

var index =0;
//3秒轮播一次
$(document).ready(function(){
/*	$('#left').on('click',function(){
	$("#oneee").slideToggle();
	})*/
	$('#left').on('click',function(){
		if($("#oneee").css('display')=='block'){
			$("#oneee").css('display','none');
			
			}
		else {
			
			$("#oneee").css('display','block');
		}
		
	})
})


window.onload=function(){
	$(" .game_top_text.play").hide().eq(index).show();
    $(" .game_top_text.play2").hide().eq(index).show();
    $(" .game_top_text.play3").hide().eq(index).show();
    $(" .game_top_text.play4").hide().eq(index).show();
    $(" .circle.play5").hide().eq(index).show();
var timer = setInterval(function(){
    index = (index == 1) ? 0 : index + 1;          
    //某个div显示，其他的隐藏
    $(" .game_top_text.play").hide().eq(index).show();
    $(" .game_top_text.play2").hide().eq(index).show();
    $(" .game_top_text.play3").hide().eq(index).show();
    $(" .game_top_text.play4").hide().eq(index).show();
    $(" .circle.play5").hide().eq(index).show();
},3000);
}
//---------------------------------------第一页--------------------------------









    var killers = $("#killer"),
        normals = $("#normal");
	
	var killer=document.getElementById("killer");
    var IB=document.getElementById("inputBut");
	var N2=document.getElementById("number2");
function tt(){
	var t=parseInt(kill1.value)+parseInt(kill2.value)+parseInt(kill3.value)+parseInt(people.value);
	aaa.value=t;
}
function fenpei(value){
	
    var num=~~(~~((value-4)/3)+1);
    document.getElementById("killer").innerHTML=num;
  //  killers.text(num);
	normals.text(~~value-num);
}
function number(){
	var a=number2.value;
	if(a<4|a>18){
		alert("请输入正确的数量");
	}
	document.getElementById("inputBut").value=a;
	fenpei(a);
}
function BtLeft(){
	
	IB.value--;
	N2.value=IB.value;	
	var a=N2.value;
	fenpei(N2.value);
	$("#inputBut").css('backgroundSize',(~~IB.value-4)/14*100+'% 100%');
}
function BtRight(){

	IB.value++;
	N2.value=IB.value;
	var a=N2.value;
	fenpei(a);
	$("#inputBut").css('backgroundSize',(~~IB.value-4)/14*100+'% 100%');
}
function change(){
	N2.value=IB.value;
	var a=N2.value;
	fenpei(a);
	var ta=0.1;
	$("#inputBut").css('backgroundSize',(~~IB.value-4)/14*100+'% 100%');
//	$("#inputbot").css("backgroundSize"," 75% 100%;")
//	var inputbot=document.getElementById("inputBut");
//	inputbot.style.backgroundSize=" 100%";
	
}
var kills=killers.text();

function go(){
	var kills=killers.text();
	var	kk=normals.text();
	var all = {
		"name":kills,
		"age":kk,
	}

	sessionStorage.setItem('user',JSON.stringify(all));
	$(location).attr('href',"player.html");
}   