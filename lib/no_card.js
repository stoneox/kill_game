 function adjust_role(wolf_num,person_number){					//产生随机数
 		console.log(wolf_num);		
 		var tip_num = wolf_num + 2;
 		console.log(tip_num);
 		if($("input[name='oldman']").prop("checked")==true){
			tip_num++;
			}
		if($("input[name='soldiers']").prop("checked")==true){
			tip_num++;
			}
		if($("input[name='hurter']").prop("checked")==true){
			tip_num++;
			}
			console.log(tip_num);
        var num = new Array();
        for(var i = 0; i < tip_num; i++){
            var val =  Math.floor(Math.random() * parseInt(person_number));
            var isEqu = false;
            for(var idx in num){
                if(num[idx] == val){isEqu = true; break;}
            }
            if(isEqu)
                i--;
            else
                num[num.length] = val;
        }
        return num;
    }
$(function(){
	$("#card").click(function(){						//产生角色分配界面
		var person_number = sessionStorage.getItem("number");
		var name_card_array = [];
		var name_card_array = JSON.parse(sessionStorage.getItem("name"));
		for(var i =0;i<person_number;i++){
			$("#container").append('<div data-role="page" data-url="" class="person_page"><div><img  class="front" src="image/empty_photo.png" alt="" /><img class="back" src="image/people.png" alt="" /><span></span></div><button>查看</button><a href="">下一个</a></div>');
			$('.person_page:last-child').attr('id','id'+i.toString());
			$('.person_page:last-child').attr('data-url','id'+i.toString());
			$('.person_page span').eq(i).text(name_card_array[i].toString());
			$('.person_head_img').attr('src','image/people.png');
		}
		var wolf_num = parseInt($("#wolf_num").val());
		var num = adjust_role(wolf_num,person_number);
				
		for(var j = 0 ;j<wolf_num;j++){						//给狼人添加图标
			$(".person_head_img").eq(num[j]).removeClass('person');
			$(".person_head_img").eq(num[j]).attr('src','image/ic_begin_werewolf.png').addClass('wolf');
			$(".person_page").eq(num[j]).find('.back').attr('src','image/ic_begin_werewolf.png');
			//$(".person_page").eq(num[j]).find('span').text('狼人');
		}
		$(".person_head_img").eq(num[wolf_num]).attr('src','image/ic_begin_seer.png');
		$(".person_page").eq(num[wolf_num]).find('.back').attr('src','image/ic_begin_seer.png');
		//$(".person_page").eq(num[wolf_num]).find('span').text('预言家');

		$(".person_head_img").eq(num[wolf_num+1]).attr('src','image/ic_begin_witch_kill.png');
		$(".person_page").eq(num[wolf_num+1]).find('.back').attr('src','image/ic_begin_witch_kill.png');
		//$(".person_page").eq(num[wolf_num+1]).find('span').text('女巫');
		if($("input[name='oldman']").prop("checked")==true){			//长老
			var oldman_num = num.pop();
			$(".person_head_img").eq(oldman_num).attr('src','image/laoren.jpg');
			$(".person_page").eq(oldman_num).find('.back').attr('src','image/laoren.jpg');
			//$(".person_page").eq(oldman_num).find('span').text('长老');
			}
		if($("input[name='soldiers']").prop("checked")==true){			//士兵
			var soldiers_num = num.pop();
			$(".person_head_img").eq(soldiers_num).attr('src','ic_begin_guard.png');
			$(".person_page").eq(soldiers_num).find('.back').attr('src','ic_begin_guard.png');
			//$(".person_page").eq(soldiers_num).find('span').text('守卫');
			}
		if($("input[name='hurter']").prop("checked")==true){			//猎人
			var hurter_num = num.pop();
			$(".person_head_img").eq(hurter_num).attr('src','image/hurter.jpg').addClass('hurter');
			$(".person_page").eq(hurter_num).find('.back').attr('src','image/hurter.jpg');
			//$(".person_page").eq(hurter_num).find('span').text('猎人');
		}	
		$('head').append('<link rel="stylesheet" href="lib/card.css">');		//动态添加选择界面样式表

		$(".person_page button").toggle(function(){							//翻转图片，改变描述
			$(this).parents('.person_page').find('img').removeClass('active_back');
			$(this).parents('.person_page').find('img').addClass('active');
			//var person_name_div = $(this).prev().find('span').text()
			//console.log(person_name_div);
			//$(this).prev().find('span').text('平民')
			switch($(this).prev().find('.back').attr('src')){
				case 'image/ic_begin_werewolf.png':
					$(this).prev().find('span').text('狼人');
					break;
				case 'image/ic_begin_seer.png':
					$(this).prev().find('span').text('预言家');
					break;
				case 'image/ic_begin_witch_kill.png':
					$(this).prev().find('span').text('女巫');
					break;
				case 'image/ic_begin_guard.png':
					$(this).prev().find('span').text('守卫');
					break;
				case 'image/laoren.png':
					$(this).prev().find('span').text('长老');
					break;
				case 'image/hurter.jpg':
					$(this).prev().find('span').text('猎人');
					break;
				default:
					$(this).prev().find('span').text('平民');
			}
		},
		function(){
			$(this).parents('.person_page').find('img').removeClass('active');
			$(this).parents('.person_page').find('img').addClass('active_back');
			for(var i =0;i<person_number;i++){
				$('.person_page span').eq(i).text(name_card_array[i].toString());
			}
			
		})	
		for(var i =0;i<person_number-1;i++){
			$(".person_page").eq(i).find('a').attr('href','#'+'id'+(i+1).toString());
		}

		$('#container').append('<div id="god" data-role="page"><img src="image/god.png" alt="god" /><span>请把手机交给你们的上帝</span><a href="#game_index">上帝点击返回</a></div>')
		
		//var first_id = $(".person_page").eq(0).attr('id');
		$(".person_page:eq(-1)").find('a').attr('href','#god');
		$("#look").attr('href','#id0');

		location.href = "http://101.200.175.86/langrensha/game.html#id0";

	})
})