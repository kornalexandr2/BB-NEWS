var myApp = new Framework7(); 





// Export selectors engine
var $$ = Dom7;


//social links
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
}
window.addEventListener('load', function () {    
    $(document).on('click', 'a[target="_system"],a[target="_blank"]', function (e) {
            e.preventDefault();
            var url = this.href;
            window.open(url,"_system");                    
    });
  //}
}, false);


$$.getJSON('http://battlebrotherhood.ru/api/core/get_category_posts/?id=2/?count=15', function (data) {

	var output="<ul class='photo_content list-block' id='myid'>";
    for (var i in data.posts) {

        output+="<li class='OneFeedInList' id="+data.posts[i].id+"><center><b><a class='pb-standalone-dark feed_title' href='#'>"+data.posts[i].title+"</b><br>";
        output+="<img src='"+ data.posts[i].thumbnail_images.medium.url + " ' /></center></a></li>";


    }
	
    output+="</ul><p><a href='#' class='button button-fill color-blue NextClass'>далее</a></p>";
    document.getElementById("placephoto").innerHTML=output;

$$(".NextClass").click(function () {
	$$.getJSON('http://battlebrotherhood.ru/api/core/get_category_posts/?id=2/?count=15?page=2', function (data) {

	var output="<ul class='photo_content list-block' id='myid'>";
    for (var k in data.posts) {

        koutput+="<li class='OneFeedInList' id="+data.posts[i].id+"><center><b><a class='pb-standalone-dark feed_title' href='#'>"+data.posts[i].title+"</b><br>";
        koutput+="<img src='"+ data.posts[i].thumbnail_images.medium.url + " ' /></center></a></li>";


    }
	
   koutput+="</ul><p><a href='#' class='button button-fill color-blue NextClass'>далее</a></p>";
    $$('.list-block ul').append(koutput);
})
});

$$("#myid li").click(function() {
  

	qq = $$( this ).index();
	console.log (qq);
	
	
});


$$(document).off('click', function(){}).on('click','.pb-standalone-dark', function () {

/*for (i = 0; i < data.posts[qq].attachments; i++) {*/
		for (var i in data.posts[qq].attachments) {
		
var phots = [];
for(var ii in data.posts[qq].attachments) {
phots [ii] = data.posts[qq].attachments[ii].url;
}
		
		}
	
	
	var myPhotoBrowserDark = myApp.photoBrowser({
		photos : phots,

	theme: 'dark', backLinkText: 'Закрыть', ofText: 'из'
	
		});
		
console.log (phots);
	
	myPhotoBrowserDark.open();
	
	});

	
});


		
		
		//Video in YouTube chanel BattleBrothrhood
	
		
		$$.getJSON('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&controls=0&playlistId=UUKCzm_RjV_PDqV-k6sINuIg&key=AIzaSyDvPwsV6dAigO7Ogol8al10IbdsUoELbVs', function (data) {
	
	var output="<ul class='video_content'>";
    for (var i in data.items) {
		output+="<div class='OneFeedInList'>";
        output+="<p><center><span class='feed_title'><b >"+data.items[i].snippet.title+"</b></span><br>";
		output+="<embed src='https://www.youtube.com/embed/" +data.items[i].snippet.resourceId.videoId+"?showinfo=0'/><br>";
		output+="</div>";
		
    }
    output+="</ul>";
    document.getElementById("placevideo").innerHTML=output;
	
});

	
$$(document).on('refresh','.pull-to-refresh-content',function(e){
  setTimeout(function(){
    myApp.pullToRefreshDone();
    location.reload();
  },500);
});
