var fun = [dark,wolf_active,wolf_down,seer_active,seer_adjust,seer_down,witch_active,witch_live,witch_death,witch_down,light,talk];
function dark(){
	$("#begin_button span").text('天黑了');
	$("#begin_button").css('background','black');
	$("#tips span").text("全体玩家闭眼，确认全体玩家闭眼后，点击‘下一步’");
	$(".person_head").removeClass('lastDead');
	$("#save").remove();
	$("#shlide_img").remove();
	var a = document.getElementById('dark_wav');
	a.play();
    victory();

}
function oldman_active(){
	$("#begin_button span").text('长老睁眼');
	$("#begin_button").css('background','green');
	$("#tips span").text("标记长老角色，长老被狼人杀，状态切换为濒死，点击‘下一步’");
	var a = document.getElementById('oldman_wake_wav');
	a.play();
}
function oldman_down(){
	$("#begin_button span").text('长老闭眼');
	$("#begin_button").css('background','green');
	$("#tips span").text("确认长老闭眼后，点击‘下一步’");

	
}
function soldiers_active(){
	$("#begin_button span").text('守卫睁眼');
	$("#begin_button").css('background','#EE0000');
	$("#tips span").text("将守卫选择的人状态改为守卫，改为守卫状态的玩家，不能被改为死亡，可以改为毒杀，点击‘下一步’");
	var a = document.getElementById('soldiers_wake_wav');
	a.play();
}
function soldiers_down(){
	$("#begin_button span").text('守卫闭眼');
	$("#begin_button").css('background','#EE0000');
	$("#tips span").text("确认守卫闭眼后，点击‘下一步’");
	
}
function wolf_active(){
	$("#begin_button span").text('狼人活动时间');
	$("#begin_button").css('background','#880000');
	$("#tips span").text("狼人睁眼，将狼人玩家在玩家头像上标记出来，将被杀玩家标记为死亡，点击下一步");
	var a = document.getElementById('wolf_kill_wav');
	a.play();
	victory();
}
function wolf_down(){
	$("#begin_button span").text('狼人闭眼');
	$("#begin_button").css('background','#880000');
	$("#tips span").text("确认所有狼人闭眼后，点击‘下一步’");
	victory();
	
}
function seer_active(){
	$("#begin_button span").text('预言家选择验人');
	$("#begin_button").css('background','#836FFF');
	$("#tips span").text("预言家睁眼，标记预言家玩家，查看预言家选择的人是否为狼人，点击‘下一步’");
	var a = document.getElementById('seer_wake_wav');
	a.play();
	victory();
}
function seer_adjust(){
	$("#begin_button span").text('给出预言结果');
	$("#begin_button").css('background','#836FFF');
	$("#tips span").text("被验人是好人，大拇指向下；被验人是狼人，大拇指向上，待预言家确认后点击‘下一步’");
	
}
function seer_down(){
	$("#begin_button span").text('预言家闭眼');
	$("#begin_button").css('background','#836FFF');
	$("#tips span").text("确认预言家闭眼后，点击‘下一步’");
	
}
function witch_active(){
	$("#begin_button span").text('女巫睁眼');
	$("#begin_button").css('background','#8E388E');
	$("#tips span").text("女巫睁眼，标记女巫玩家，点击‘下一步’");
	var a = document.getElementById('witch_wake_wav');
	a.play();
}
function witch_live(){
	$("#begin_button span").text('使用解药阶段');
	$("#begin_button").css('background','#8E388E');
	$("#tips span").text("告知昨晚被标记死亡的玩家，如果女巫不救，保持玩家状态不变；若女巫使用解药，将死亡玩家状态改为解药，点击‘下一步’");
	var a = document.getElementById('witch_save_wav');
	a.play();
}
function witch_death(){
	$("#begin_button span").text('使用毒药阶段');
	$("#begin_button").css('background','#8E388E');
	$("#tips span").text("女巫选择要毒杀的玩家，将毒杀的玩家状态改为毒杀，点击‘下一步’");
	var a = document.getElementById('witch_death_wav');
	a.play();
	victory();
}
function witch_down(){
	$("#begin_button span").text('女巫闭眼');
	$("#begin_button").css('background','#8E388E');
	$("#tips span").text("确认女巫闭眼后，点击‘下一步’");
	victory();

}

function light(){
	$("#begin_button span").text('天亮了');
	$("#begin_button").css('background','#FF8C00');
	$("#tips span").text("确认所有人睁眼，点击‘下一步’");
	var a = document.getElementById('light_wav');
	a.play();
	victory();
	
}
function talk(){
	$("#begin_button span").text("公布死者投票发言")
	$("#begin_button").css('background','#000080');
	$("#tips span").text("公布昨晚死者，轮流发言，投票发表遗言");
	de_oldman();
	de_police();
	victory();
}
function police_choose(){
	$("#begin_button span").text('天亮了,选警长');
	$("#begin_button").css('background','#000080');
	$("#tips span").text("投票选警长，点击‘下一步’");
	var a = document.getElementById('light_police_wav');
	a.play();
}
function de_oldman(){
	for(var i = 0 ;i<fun.length;i++){
		if(fun[i]==oldman_active){
			fun.splice(i,2);
		}
	}
}
function de_police(){
	for(var i = 0 ;i<fun.length;i++){
		if(fun[i]==police_choose){
			fun.splice(i,1,light);
		}
	}
}
function victory(){
	var person_alive_length = $("img[class*='person_head_img person alive']").length;
	var wolf_alive_length = $("img[class='person_head_img alive wolf']").length;
	console.log(person_alive_length);
	console.log(wolf_alive_length);
	if($("#handle button").eq(1).prop('disabled')&&$("#handle button").eq(2).prop('disabled')&&$('.hurter').hasClass('alive')==false){
		if(person_alive_length == wolf_alive_length){
			alert("狼人获胜");
		}
		if(wolf_alive_length == 0){
			alert("平民获胜");
		}
	 }
	 else {
	 	if(person_alive_length == 0){
			alert("狼人获胜");
		}
		if(wolf_alive_length == 0){
			alert("平民获胜");
		}
	 }
}
$(function(){
	$("#begin_button").click(function(){
		if($("input[name='soldiers']").prop("checked")==true){
		fun.splice(1,0,soldiers_active,soldiers_down);			
	}
	if($("input[name='oldman']").prop("checked")==true){
		fun.splice(1,0,oldman_active,oldman_down);			
	}
	if($("input[name='police']").prop("checked")==true){
		fun.splice(fun.length-2,1,police_choose);
	}
	$("#next").removeAttr('disabled').css('opacity','1.0');
	$("#replay").removeAttr('disabled').css('opacity','1.0');
	$("#tips span").text("游戏开始，点击下一步");
	})
	$("#next").click(function(){
		fun[0]();
		var a = fun.shift();
		fun.push(a);
	})
	$("#replay").click(function(){
		var last = fun.pop();
		fun.unshift(last);
		fun[fun.length-1]();
	})
	$("#reset").click(function(){
				$(".person_head_img").attr('src','image/empty_photo.png').css('opacity','1.0');
				$("#next").attr('disabled','disabled').css('opacity','0.4');
				$("#replay").attr('disabled','disabled').css('opacity','0.4');
				$(".person_head").removeClass('lastDead');
				$(".person_head").find(".small_pic").remove();
				$(".person_head").find("#police").remove();
				fun = [dark,wolf_active,wolf_down,seer_active,seer_adjust,seer_down,witch_active,witch_live,witch_death,witch_down,light,talk];
				$("#tips span").text(" ");
				$("#begin_button span").text("游戏开始");
				$("#begin_button").css("background","#FF8C00");
				$("#handle button").removeAttr('disabled');
				$(".person_page").remove();
				$("#god").remove();

			})
})