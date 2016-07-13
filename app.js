var myApp = new Framework7(); 

/*=== Standalone Dark ===*/
var myPhotoBrowserDark = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    theme: 'dark', backLinkText: 'Закрыть'
});


$$('.pb-standalone-dark').on('click', function () {
    myPhotoBrowserDark.open();
	
	$$.getJSON('http://battlebrotherhood.ru/api/core/get_category_posts/?slug=photo', function (data) {

	
});

	
});



// Export selectors engine
var $$ = Dom7;
$$.getJSON('http://battlebrotherhood.ru/api/core/get_category_posts/?slug=photo', function (data) {
	
	var output="<ul class='photo_content'>";
    for (var i in data.posts) {
		
        output+="<p class='pb-standalone-dark'><center><b><a class='pb-standalone-dark' href='#'>"+data.posts[i].title+"</a></b><br>";
         output+="<img src='"+ data.posts[i].thumbnail_images.medium.url + " ' class='pb-standalone-dark'/></center></p>";
		  
    }
    output+="</ul>";
    document.getElementById("placephoto").innerHTML=output;
	
});





		
		
		//Video in YouTube chanel BattleBrothrhood
		
		
		$$.getJSON('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUKCzm_RjV_PDqV-k6sINuIg&key=AIzaSyDvPwsV6dAigO7Ogol8al10IbdsUoELbVs', function (data) {
	
	var output="<ul class='video_content'>";
    for (var i in data.items) {
		
        output+="<p><center><b>"+data.items[i].snippet.title+"</b><br>";
		output+="<iframe src='https://www.youtube.com/embed/" +data.items[i].snippet.resourceId.videoId+"' frameborder='0' allowfullscreen></iframe><br>";

		
    }
    output+="</ul>";
    document.getElementById("placevideo").innerHTML=output;
	
});
