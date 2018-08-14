
var index=1;
var index2=1;
var userJson=sessionStorage.getItem('user');
var aa=JSON.parse(userJson);
var aat=paixu(~~aa.name,~~aa.age);
console.log(aat)


function paixu(kill,normal) {
	var a=new Array();//可以不要括号
	a.length=kill+normal;
	var obj,
		num=0;
	 for(var i=0;i<kill;i++){
	 	a[i]="杀手";
	 }
	 for(;i<a.length;i++){
	 	a[i]="平民";
	 }

   	var b = []; 
    while (a.length >0) {
        var index = parseInt(Math.random() * (a.length - 1));
        obj={id:'',index:"",state:'alive',deadReason:null,deadDay:null};
        obj.id=a[index];
        obj.index=num;
        num++;
        b.push(obj);
        
        a.splice(index, 1);
    } 
	return b;     
} 
function PlayerChange(){
	var bbb=~~aa.name+~~aa.age;
	var stepNum=$('#need1'),
		Id=$('#shenfen'),
 		need1=$('#need1');
	
	if(one.style.visibility=="visible"){
		
		one.style.visibility="hidden";
		two.style.visibility="visible";
		
		Id.text(aat[index-1].id);
		index+=1;
		look.innerHTML="隐藏并传递给"+index+"号";
		
	}
	else {
		
		index2+=1;
		need1.text(index2);
		one.style.visibility="visible";
		two.style.visibility="hidden";
		look.innerHTML="查看"+index+"号身份"
		
		if(index==bbb+1){
			var CT={};
			CT.dayNum=1;
			CT.killersNum=~~aa.name;
			CT.normalsNum=~~aa.age;
			CT.killed=[];
			CT.players=paixu(~~aa.name,~~aa.age);
		
			sessionStorage.setItem('Juge',JSON.stringify(CT));
			$(location).attr("href","JugeSee.html");
		}
	}
	
    
}
 