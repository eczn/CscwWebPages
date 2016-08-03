$(document).ready(function(){

	// var left = $("#connect").css("left");

	$(".border,.mainIntro,.intromore").animate({"opacity":"0","margin-top":"+=70px"},0);
	$(".yellow").animate({"opacity":"0","bottom":"-50px"},0);
	$(".border,.mainIntro,.intromore").delay(1000).animate({"opacity":1,"margin-top":"-=70px"});
	$(".yellow").delay(800).animate({"opacity":"1","bottom":"0"});

	$("#connect").on("click",function(){
		if(!$(".phone,.address,.email").is(":animated")&&($(".active")[0].id!="connect")){
			$(".phone,.address,.email").animate({"opacity":"0","left":"+=7%"},0);
			$(".phone,.address,.email").delay(1000).animate({"opacity":1,"left":"-=7%"});
		}
	})

	// if(!$(".phone,.address,.email").is(":animated")&&($(".active")[0].id!="connect")&&(left=="30%")){
	// 	$(".phone,.address,.email").animate({"opacity":"0"},0);
	// }

	$("#home").on("click",function(){
		if(!$(".border,.mainIntro,.intromore,.yellow").is(":animated")&&($(".active")[0].id!="home")){
			$(".border,.mainIntro,.intromore").animate({"opacity":"0","margin-top":"+=70px"},0);
			$(".yellow").animate({"opacity":"0","bottom":"-50px"});
			$(".border,.mainIntro,.intromore").delay(1000).animate({"opacity":1,"margin-top":"-=70px"});
			$(".yellow").delay(800).animate({"opacity":"1","bottom":"0"});
		}
	})

})