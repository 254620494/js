
	var gameMsgstr= sessionStorage.getItem('Juge');
	var gameMsg=JSON.parse(gameMsgstr);
	var players=gameMsg.players,
		
		playersBox=$("#gamersVote"),
		btn=$('#btn-skip'),
		str='';
		console.log(gameMsg);
	for(var i = 0;i<players.length;i++){
		str+='<div class="lastBlock_one"> '
			str+=	'<div class="lastName">'+players[i].id+'</div>'
			str+=	'<div class="lastNum">'+(players[i].index+1)+'号</div>'
			str+=	'<div class="chooseBlock ">'
			str+=	'	<img src="img/1.png">'
			str+=	'</div>'
			str+= '</div>'
				
	}
	playersBox.html(str);
	
		btn.on('click',function(){
		$(location).prop('href','JugeBook.html')
	})


/*	for(var i = 0;i<players.length;i++){
	if(players[i].state=="dead"){
				$($('.lastBlock_one')[i]).css('background-color','red');
				
			}
	}*/
/*	playerId=$('.lastName');
	if(gameMsg.goLog){
		for(var i=0;i<players[i].length;i++){
			if(players[i].state==="dead"){
				$(playerId[i]).css('background-color','red');
			}
		}
		btn.text("返回");
	}*/


//	var t=ttt.arry;
/*	tNum=ttt.killersNum+ttt.normalsNum;
	console.log(ttt.arry);
    var JugeNum=~~(tNum/3);
	
	for(var i=0;i<JugeNum;i++){
		Juge[i].style.visibility='visible'
		
	}
	for(i;i<6;i++){
		Juge[i].style.visibility="hidden";
	}
	for(var d=0;d<tNum;d++){
		lastName[d].innerHTML=t[d];
	}
	var inBlock=tNum%3;
	if(inBlock){
	//	Juge[JugeNum].style.visibility='visible';
		if(inBlock==1){
			lastOne[JugeNum].style.visibility='visible';
		if(inBlock==2){
			lastThree[JugeNum].style.visibility='visible';
			}
		} 
	}
/*var Jsfive={},
	Jsfive.threeBlockNum=JugeNum,
	Jsfive.smallBlockNum=inBlock,*/
	
