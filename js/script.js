$(function(){
	$(".gnb > ul > li").hover(
		function(){
			$("#nav .GNB").addClass("active")
		},
		function(){
			$("#nav .GNB").removeClass("active")
		}
	)
	$(".gnb > ul > li").focusin(function(){
			$("#nav .GNB").addClass("active")
			$(".gnb > ul > li").removeClass("active")
			$(this).addClass("active")
	})
	$(".gnb li li:last-child").focusout(function(){
			$("#nav .GNB").removeClass("active")
	})
	$(".gnb li:last-child li:last-child").focusout(function(){
			$("#nav .GNB").removeClass("active")
	})



	var n=0;
	var m=0;
	var id=setInterval(function(){
		moving();
	}, 6000)

	function moving(){
		n++;
		m=-1*$(window).width()*n;
		$(".visual").animate({left:m}, 400, function(){
			if(n == 4){
				n=0;
				m=0;
				$(".visual").animate({left:0},0)
			}
		})
	}

	$(".keyvisual .control li").hover(
		function(){
			clearInterval(id)
		},
		function(){
			id=setInterval(function(){
				moving();
			}, 6000)
		}
	)
	$(".keyvisual .control .left").click(function(e){
		e.preventDefault()
		if(n > 0){
			n--;
			m=-1*$(window).width()*n
			$(".visual").animate({left:m},400);
		}
	})
	$(".keyvisual .control .right").click(function(e){
		e.preventDefault()
		if(n < 3){
			n++;
			m=-1*$(window).width()*n
			$(".visual").animate({left:m},400);
		}
	})


	$(".close").click(function(e){
		e.preventDefault()
		if($("input[name=todayClose]").is(":checked")){
			setCookie("close", "yes", 1);
		}
		$(".pop").removeClass("active")
	})
	if(GetCookie("close") == "yes"){

	}
	else{
		$(".pop").addClass("active")
	}

	function setCookie(name, value, expiredays){
		var days=expiredays;
		if(days){
			var date=new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires="; expires="+date.toGMTString();
		}else{
			var expires="";
		}
		document.cookie=name+"="+value+expires+"; path=/";
	}
	function GetCookie(name){
		var value=null, search=name+"=";
		if(document.cookie.length > 0){
			var offset=document.cookie.indexOf(search);
			if(offset != -1){
				offset+=search.length;
				var end=document.cookie.indexOf(";", offset);
				if(end == -1) end=document.cookie.length;
				value=unescape(document.cookie.substring(offset, end));
			}
		} return value;
	}
})
