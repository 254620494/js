function toChinese(value) {
    var arr = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", '十'];
    if (value < 10) {
        return arr[value];
    } else if (value === 10) {
        return '十';
    } else if (value < 20 && value > 10) {
        return arr[10] + arr[(value - 10)];
    }
}



	var gameMsgstr= sessionStorage.getItem('Juge');
	var gameMsg=JSON.parse(gameMsgstr);
	var players=gameMsg.players;
		console.log(gameMsg);
	var states=gameMsg.states;
	var days=gameMsg.dayNum;
	var str='';
//	var	voteresult=$('.vote-result'),
//      killresult=$('.kill-result');
	console.log(states); 
	
	for(var i=0;i<gameMsg.dayNum;i++){
		var killstr='';
		var votestr='';
		for(var j=0;j<players.length;j++){
			if(players[j].deadDay==i+1 && players[j].deadReason=='killed'){
				killstr=(players[j].index+1)+'号被杀死，身份是平民';
			}
			if(players[j].deadDay==i+1 && players[j].deadReason=='voted'){
				votestr=(players[j].index+1)+'号被投票出局，身份是'+players[j].id;
			}
		} 
		
		
		
		str+=	'<div class="date">'
		str+=		'<div class="day" >第'+toChinese(i+1)+'天</div>'
		str+=		'<div class="pass" id="pass">'
		str+=			'<li class="blockone" id="one">杀手杀人</li>'
		str+=			'<div class="zz" id="kill">'+killstr+'</div>'
		str+=			'<li class="blocktwo" id="two">亡灵发表遗言</li>'
		str+=			'<li class="blockthree" id="three">玩家依次发言</li>'
		str+=			'<li class="blockfour" id="four">全民投票</li>'
		str+=			'<div class="zz" id="kills">'+votestr+'</div>'
		str+=		'</div>'
		str+=	'</div>'
	} 
	$('main').html(str);


if(killstr==''){
	$('.blockone').one('click',function(){
				states="kill";
				gameMsg.states=states;
				sessionStorage.setItem('Juge',JSON.stringify(gameMsg));
			//	$('.blockone').unbind();
				$(location).attr("href","rizhi.html");	
		});
	 }	else{
	       	 $('.blockone').css('background-color','gray'); 
	       	$('.blockone').click(function(){
	       	alert('请执行其他操作');
	       	})
}


	$('.blocktwo').click(function(){
		
		
		if(states=='ghost'){
			alert("亡灵已经发表遗言");
			$(this).css('background-color','gray'); 
			states='player';
		}
		else if(this.style.backgroundColor=='gray'){
			alert('此操作已被执行，请执行其他操作');
		}
		else{
			alert('请先完成其他的步骤');
			}
		});



$('.blockthree').click(function(){
	if(states=='player'){
		alert("玩家发言完毕");
		$(this).css('background-color','gray'); 
		states='vote';
		}
	else if(this.style.backgroundColor=='gray'){
		alert('此操作已被执行，请执行其他操作');
		}
	else{
		alert('请先完成其他的步骤');
		}
	});
	




$('.blockfour').click(function(){
	if(states=='vote'){
		states='vote'; 
		gameMsg.states=states; 
		$(location).attr("href","rizhi.html"); 
		sessionStorage.setItem('Juge',JSON.stringify(gameMsg));
	}
	else if(this.style.backgroundColor=='gray'){
		alert('此操作已被执行，请执行其他操作');
	}
	else{
		alert('请先完成其他的步骤');
		}
	});

	




$('.day').click(function(){
	$(this).next('.pass').toggle();
})
	
	$('.pass').each(function(i){
		console.log(i,days);
		if(i<days-1){
			$(this).toggle();
			$(this).on('click','.pass',function(e){
				alert('今天是第'+days+'天，请按步骤进行');
			});
			 $(this).find('li').css('background-color','#808080');
			 $(this).find('.zz').css('color','#808080'); 
			 $(voteresult[i]).css('background-color','green');
             $(killresult[i]).css('background-color','green');
             
             $($('.blockone')[i]).unbind();
             $($('.blocktwo')[i]).unbind();
             $($('.blockthree')[i]).unbind();
             $($('.blockfour')[i]).unbind();

		}
	})
	

