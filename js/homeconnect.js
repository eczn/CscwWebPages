$(document).ready(function(){

	$(".yellow").animate({"opacity":"0"},0);
	$(".border,.mainIntro,.intromore").animate({"opacity":"0","margin-top":"+=70px"},0);
	$(".border,.mainIntro,.intromore").delay(300).animate({"opacity":1,"margin-top":"-=70px"});
	$(".yellow").delay(100).animate({"opacity":"1"});

	$("#connect").on("click",function(){
		if(!$(".phone,.address,.email").is(":animated") && ($(".active")[0].id!="connect")){
			$(".phone,.address,.email").animate({"opacity":0},0).delay(200).animate({"opacity":0.1},0);
			$(".phone,.address,.email").delay(200).animate({"opacity":1},500);
		}
	})

	$("#home").on("click",function(){
		if(!$(".border,.mainIntro,.intromore,.yellow").is(":animated") && ($(".active")[0].id!="home")){
			$(".border,.mainIntro,.intromore").delay(1000).animate({"opacity":1,"margin-top":"-=70px"},500);
			$(".yellow").delay(800).animate({"opacity":"1"},500);
		}
	})

})