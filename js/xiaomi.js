window.onload=function(){
//banner的轮播效果
var banner=$(".bannerone")[0];
var imgs=$("img",banner);
var btn=$(".banner-left3");
var index=0;

function demo(type){
	if(type=="r"){
		index++;
		if(index>=imgs.length){
			index=0;
		}
	}else if(type=="l"){
		index--;
		if(index<=-1){
			index=imgs.length-1;
		}
	}
	imgs.hide();
	imgs.eq(index).fadeIn();
	btn.css({background:"black"});
	btn.eq(index).css({background:"white"});
	
	
}
var t=setInterval(function(){
		demo("r")
	},2000);
$(".banner").hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(function(){
				demo("r")
			},2000);
		})
$(".left").click(function(){
	clearInterval(t);
	demo("l");
})
$(".right").click(function(){
	clearInterval(t);
	demo("r");
})
$(".banner-left3").hover(function(){
		var now=$(this).index();
		$(".banner-left3").css({background:"black"})
        $(this).css({background:"white"});
        imgs.hide();
        imgs.eq(now).fadeIn();
        index=now;
	},function(){
	})



//下拉菜单
$(".main-left3").hover(function(){
    /*$(this).find("div").slideDown("fast");*/
	/*$(this).find(".erji>div").slideDown();*/
	$(this).find("div").show();
},function(){
    /*$(".erji").stop();*/
	/*$(this).find("div").slideUp("fast");*/
	$(this).find("div").hide();
})

$(".bannerbox1").hover(function(){
	$(this).find("div").show();
},function(){
	$(this).find("div").hide();
})

//搜索框下拉
$(".main-right").focusin(function(){
	$(".main-right3").css("display","none");
	$(".shousuo").css("display","block");
	$(".main-right").css({border:"1px solid red"});
	$(".main-right2").css({border:"1px solid red"});
})
$(".main-right").focusout(function(){
	$(".main-right3").css("display","block");
	$(".shousuo").css("display","none");
	$(".main-right").css({border:"1px solid #ccc"});
    $(".main-right2").css({border:"1px solid #ccc"});
})

//轮播图
   var trag=true;
	function move(){
	   
       if(trag){
       	$(".danpingbox").animate({left:-1226},600);
       	$(".danpingboxl").css({color:"#ccc"});
		$(".danpingboxr").css({color:"black"});
       	trag=false;
       }else{
       	$(".danpingbox").animate({left:0},600);
       	$(".danpingboxl").css({color:"black"});
		$(".danpingboxr").css({color:"#ccc"});
       	trag=true;
       }
	}
	var m=setInterval(function(){
        move();
	},6000);

    $(".danpingboxl").click(function(){
		$(".danpingbox").animate({left:-1226},600);
		$(".danpingboxl").css({color:"#ccc"});
		$(".danpingboxr").css({color:"black"});
	})
	$(".danpingboxr").click(function(){
		$(".danpingbox").animate({left:0},600);
		$(".danpingboxl").css({color:"black"});
		$(".danpingboxr").css({color:"#ccc"});
	})



    $(".dapeinav-left1").hover(function(){
        $(".tanchuang").css("display","block");  
    },function(){
        $(".tanchuang").css("display","none");  
    })

}