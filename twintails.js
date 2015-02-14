// Awesome JS lyrics timed by someone5544.
// Thanks to Commie for the TV and BD subs.
// Why'd you remove the color effects in the BD at 0:53-1:07 though?

var twintailLyrics = [
	"Kono tsuintēru ni yume to negai wo komeru n da",
	"Nabiku kami ni chikau yō ni",
	"Aisuru mono wo",
	"Yami kara mamoru",
	"Yuzurenai mono mune no naka ni hime",
	"Jibun jishin no",
	"Koeru beki kabe",
	"Tachi domaru wake ni ha ikanai no sa",
	"Akai yūki to",
	"Aoi aijō to",
	"Kiiro no kibō wo chikara ni",
	"Tail on!",
	"Mugen no mirai wo kokoro ni idaite",
	"Nakama wo shinjite kake nukete ikou",
	"Nitsui no tamashī, omoi wo hitotsu ni musunde",
	"Mayowanai de tsuki susume",
	"Nabiku kami ni chikau yō ni"
];

var hdTiming = [1.662, 7.9, 14.45, 21.15, 23.25, 25.91, 30.63, 32.95, 35.47, 40.43, 42.67, 45.07, 49.83, 50.57, 52.15, 57.17, 62.05, 68.65, 73.59, 80.00];
var fullhdTiming = [2.161, 8.421, 14.941, 21.681, 24.181, 26.701, 31.201, 33.702, 36.201, 41.201, 43.201, 45.701, 50.201, 51.201, 52.721, 57.961, 62.481, 69.222, 74.241, 80.502];
var twintailTiming = fullhdTiming;
/*var twintailTiming = [
	1.662,	// none
	7.9,	// 0
	14.45,	// 1
	21.15,	// none
	23.25,	// 2
	25.91,	// 3
	30.63,	// 4
	32.95,	// 5
	35.47,	// 6
	40.43,	// 7
	42.67,	// 8
	45.07,	// 9
	49.83,	// 10
	50.57,	// none
	52.15,	// 11
	57.17,	// 12
	62.05,	// 13
	68.65,	// 14
	73.59,	// 15
	80.00	// 16
];*/

function twintailSubs(e) {
	if(e.target.currentTime < twintailTiming[0]) {
		$("#lyric").text("");
	}
	else if(e.target.currentTime < twintailTiming[1]) {
		$("#lyric").text(twintailLyrics[0]);
		$("#lyric").css("text-shadow", "0 0 10px #FF0000");
	}
	else if(e.target.currentTime < twintailTiming[2]) {
		$("#lyric").text(twintailLyrics[1]);
	}
	else if(e.target.currentTime < twintailTiming[3]) {
		$("#lyric").text("");
	}
	else if(e.target.currentTime < twintailTiming[4]) {
		$("#lyric").text(twintailLyrics[2]);
	}
	else if(e.target.currentTime < twintailTiming[5]) {
		$("#lyric").text(twintailLyrics[3]);
	}
	else if(e.target.currentTime < twintailTiming[6]) {
		$("#lyric").text(twintailLyrics[4]);
	}
	else if(e.target.currentTime < twintailTiming[7]) {
		$("#lyric").text(twintailLyrics[5]);
	}
	else if(e.target.currentTime < twintailTiming[8]) {
		$("#lyric").text(twintailLyrics[6]);
	}
	else if(e.target.currentTime < twintailTiming[9]) {
		$("#lyric").text(twintailLyrics[7]);
	}
	else if(e.target.currentTime < twintailTiming[10]) {
		$("#lyric").text(twintailLyrics[8]);
	}
	else if(e.target.currentTime < twintailTiming[11]) {
		$("#lyric").text(twintailLyrics[9]);
		$("#lyric").css("text-shadow", "0 0 10px #0000FF");
	}
	else if(e.target.currentTime < twintailTiming[12]) {
		$("#lyric").text(twintailLyrics[10]);
		$("#lyric").css("text-shadow", "0 0 10px #999900");
	}
	else if(e.target.currentTime < twintailTiming[13]) {
		$("#lyric").text("");
	}
	else if(e.target.currentTime < twintailTiming[14]) {
		$("#lyric").text(twintailLyrics[11]);
		$("#lyric").css("text-shadow", "0 0 10px #FF0000");
	}
	else if(e.target.currentTime < twintailTiming[15]) {
		$("#lyric").text(twintailLyrics[12]);
		$("#lyric").css("text-shadow", "0 0 10px #999900");
	}
	else if(e.target.currentTime < twintailTiming[16]) {
		$("#lyric").text(twintailLyrics[13]);
		$("#lyric").css("text-shadow", "0 0 10px #0000FF");
	}
	else if(e.target.currentTime < twintailTiming[17]) {
		$("#lyric").text(twintailLyrics[14]);
		$("#lyric").css("text-shadow", "0 0 10px #FF0000");
	}
	else if(e.target.currentTime < twintailTiming[18]) {
		$("#lyric").text(twintailLyrics[15]);
	}
	else if(e.target.currentTime < twintailTiming[19]) {
		$("#lyric").text(twintailLyrics[16]);
	}
	else {
		$("#lyric").text("");
	}
}

function videoToggle() {
	if($("#video_toggle").data("ver") == "creditless") {
		$("#vid").prop("src", "https://yuki.kaze.moe/tt/twintail_ed_h264.mp4");
		$("#video_toggle").text("Creditless (1080p)");
		$("#video_toggle").data("ver", "credits");
		twintailTiming = hdTiming;
		$("#vid")[0].play();
	}
	else {
		$("#vid").prop("src", "https://yuki.kaze.moe/tt/twintail_nced_h264_1080.mp4");
		$("#video_toggle").text("With credits (720p)");
		$("#video_toggle").data("ver", "creditless");
		twintailTiming = fullhdTiming;
		$("#vid")[0].play();
	}
	return false;
}

$(document).ready(function() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) != true ) {
		$("#vid").removeAttr("controls");
	}
	$("#vid").on("timeupdate", twintailSubs);
	$("#video_toggle").on("click", videoToggle);
	var d = new Date();
	if(d.getMonth() == 1 && d.getDate() == 2) {
		$("#ttday").text("Happy Twintail Day!");
	}
	else if(d.getMonth() == 1 && d.getDate() == 14) {
		$("#ttday").text("Happy (Twintailed) Valentine's Day!");
	}
});
