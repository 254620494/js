


var gameMsgstr= sessionStorage.getItem('Juge');
	var gameMsg=JSON.parse(gameMsgstr);
	var players=gameMsg.players;
	var killed=gameMsg.killed;
	var states=gameMsg.states;
	console.log(gameMsg);
	console.log(states);

var days=gameMsg.dayNum;
var	playersBox=$("#gamersVote");
	
var	btn=$('#btn-skip');
var		str='';
		

	for(var i = 0;i<players.length;i++){
		str+='<div class="lastBlock_one" > '
			str+=	'<div class="lastName">'+players[i].id+'</div>'
			str+=	'<div class="lastNum">'+(players[i].index+1)+'号</div>'
			str+=	'<div class="chooseBlock ">'
			str+=	'	<img src="img/1.png">'
			str+=	'</div>'
			str+= '</div>'
				
	}
	playersBox.html(str);	

	
	for(var i = 0;i<players.length;i++){
	if(players[i].state=="dead"){
				$($('.lastBlock_one')[i]).css('background-color','red');
			}
	}


	$('.lastBlock_one').click(function(){
		for(var i=0;i<players.length;i++){	
			if(players[i].state==="alive"){
				$($('.lastBlock_one')[i]).css("background-color","#f5c97b");
				}
		}
		$(this).css("background-color",'red');
		$('.chooseBlock').css('display','none');
		$(this).find('.chooseBlock').css("display",'block');
		killed[0]=$(this).index();
	});		


// return 很关键
$('#btn-two').click(function(){
	var index=killed[0];
	var lastOne=document.getElementsByClassName("lastBlock_one");
	console.log(killed.length);
	console.log(index);
	if(killed.length){
		if(players[index].state=='dead'){
			alert('此玩家已死，请选择别的玩家');
			return ;
		}
	}
	if(states=='kill'){
		if(!killed.length){
			alert('杀手必须杀人');
			return ;
		}
		if(players[index].id=='杀手'){
		alert('杀手不能杀自己人')
		return ;
		}
		players[index].deadReason='killed';
		gameMsg.normalsNum--;
		gameMsg.states="ghost";
	}
	if(states=='vote'){
		if(!killed.length){
			alert('本轮必须投票');
			return ;
		}
		if(players[index].id=='杀手'){
			gameMsg.killersNum--;
		}else{
			gameMsg.normalsNum--;
		}
		gameMsg.dayNum++;
		players[index].deadReason='voted';
	
		}
	
	players[index].state='dead';
	players[index].deadDay=days;

	
	
	if(gameMsg.killersNum ==0){
        //平民胜利
        gameMsg.result='normalWin';
        sessionStorage.setItem('Juge', JSON.stringify(gameMsg));
        alert('游戏结束，平民胜利');
        $(location).attr('href','result.html');
        return ;
    }
	
	else if(gameMsg.killersNum >=gameMsg.normalsNum){
        //杀手胜利
        gameMsg.result='killWin';        
        sessionStorage.setItem('Juge', JSON.stringify(gameMsg));        
        alert('游戏结束，杀手胜利');        
        $(location).attr('href','result.html');        
        return ;        
    }
	gameMsg.countKill=2;
	
    sessionStorage.setItem('Juge', JSON.stringify(gameMsg));            
    $(location).attr('href','JugeBook.html');
	
})	
	
	
/*	for(var i=0;i<players.length;i++){
		if(lastOne[i].style.backgroundColor=="red"){
			count++;
			
			b[j]=i;
			j++;
			
		}
	}*/
	
	/*for(var i=0;i<b.length;i++){
			if(count>1){
				alert("只能选择一名玩家");
				break;
			}
			
			if(count==1){
				if(players[b[i]].id=="杀手"){
				alert("你不能杀死自己人，请重新选择");
			}
				if(players[b[i]].id=="平民"){
				
				players[b[i]].state="dead";
				players[b[i]].deadReason="kill";
				sessionStorage.setItem("Juge",JSON.stringify(gameMsg));
				$(location).attr("href","法官台本.html");
			}
				
			}
	}*/
	





/*for(var i=0;i<players.length;i++){
	$($('.lastBlock_one')[i])
}*/ 


	//console.log(players[id])
/*	$('.lastBlock_one').each(function(e){
		if(players[e].state=="alive"){
			$('.lastBlock_one').click(function(id){
			if(this.style.backgroundColor=="red"){
						this.style.backgroundColor="#f5c97b";
						$(this).children(".chooseBlock").css("display","none");
				}else{
					this.style.backgroundColor="red";
					$(this).children(".chooseBlock").css("display","block"); 
				}
			});
			
		}
	})*/
/*	var c=[];
	var x=0;
	for(var i=0;i<players.length;i++){
		if(players[i].state==="dead"){
			c[x]=i;
			x++;
			$($('.lastBlock_one')[i]).css("background-color","red");
			$($('.lastBlock_one')[i]).attr('disabled','disabled');
		}
		if(players[i].state==="alive"){
			$($('.lastBlock_one')[i]).css("background-color","#f5c97b");
		}
	}*/
/*	for(var i=0;i<c.length;i++){
		if(players[c[i]].state==="alive"){
			$('.lastBlock_one').css("background-color","#f5c97b");
		}
	}*/
	
	//可以让 小刀图片全部隐藏，利用$(this).find('#/.').show();	
	/*		if(this.style.backgroundColor=="red"){
						this.style.backgroundColor="#f5c97b";
						$(this).children(".chooseBlock").css("display","none");
				}else{
					this.style.backgroundColor="red";
					$(this).children(".chooseBlock").css("display","block"); 
				}*/
			
		
/*	function cc(id){	
		
				if(id.style.backgroundColor=="red"){
						id.style.backgroundColor="#f5c97b";
						$(id).children(".chooseBlock").css("display","none");
				}else{
					id.style.backgroundColor="red";
					$(id).children(".chooseBlock").css("display","block"); 
				}
			
	
}	*/

 


/*$(document).ready(function(){
	$('.lastBlock_one').on('click',function(){
		if($(this).css("background-color","red")){
			$(this).css("background-color","#f5c97b");
			$(this).children(".chooseBlock").css("display","block");
		}else{
			$(this).css("background-color","red");
			$(this).children(".chooseBlock").css("display","none");
		}
		
	})*/
	
	/*$(".lastBlock_one").click(function(){
		$(this).removeClass('chooseBlock');
	});*/








/*$(document).ready(function(){
	$('.lastBlock_one').click(function(){
		if($(this).hasClass("changecolor")){
			$(this).removeClass("changecolor");
		}else{
			$(this).addClass("changecolor");
		}
		
	});
})*/

