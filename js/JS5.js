 
     //这个函数是用来通过天数转化为相应的中文
    function toChinese(value) {
        var arr = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", '十'];
        if (value < 10) {
            return arr[value];
        } else if (value === 10) {
            return '十';
        } else if (value < 20 && value > 10) {
            return arr[10] + arr[(value - 10)];
        }///
    }

 //获取上一个页面的传过来的数据
 var gameMsgstr = sessionStorage.getItem('Juge');
 var gameMsg = JSON.parse(gameMsgstr);
 var states=gameMsg.states;
// var {result,dayNum,players,state} =gameMsg;
 var dayNum=gameMsg.dayNum,
 	 result=gameMsg.result,
 	 players=gameMsg.players;

console.log(result,dayNum,players);

$("#killerNum").text(gameMsg.killersNum);
$("#normalNum").text(gameMsg.normalsNum);
/*$('#killerNum').text(gameMsg.killersNum);
$('#normalNum').text(gameMsg.normalsNum);

if(states =='vote'){
    dayNum--;
}
var img=$('#resultImg');*/
//显示剩余玩家
/*$('#killerNum').text('杀 手：'+gameMsg.killersNum+'人');
$('#normalNum').text('平 民：'+gameMsg.normalsNum+'人');
//判断什么结果
console.log(result);
console.log(img)
if(result === 'popWin'){
    img.prop('src','img/popwin.png');
}else if(result === 'killWin'){
    img.prop('src','img/killwin.png');
}else{
    img.prop('src','img/gameover.png');
}*/
var str='';
for( var i=0; i<dayNum;i++){
       var night='';
        var day ='';
    for(var j=0;j<players.length;j++){
     
        if(players[j].deadDay ==[i+1] && players[j].deadReason =='killed'){
            night='晚上：'+(players[j].index+1)+'号被杀手杀死，'+(players[j].index+1)+'号是水民</p>'
           
        }
        if(players[j].deadDay ==[i+1] && players[j].deadReason =='voted'){
            day='白天: '+(players[j].index+1)+'号被投死，'+(players[j].index+1)+'号是'+(players[j].id)+'</p>'
           
        } 
    
    }
        
 	str +=	 '  <div class="result_bottom_block">'
	str +=		'	<div class="result_bottom_block_text">'
	str +=			'	<div class="textOne">第' +toChinese(i+1) +'天</div>'
	str +=			'	<div class="textThree">'
	str +=					night ;
	str +=					day;
	str +=				'</div>'
	str +=			'</div>'
	str +=		'</div>'
}

$('.result_bottom').append(str);



$('#again').on('click',function(){
    $(location).attr('href','index.html');
})


















