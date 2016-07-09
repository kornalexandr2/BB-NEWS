// Export selectors engine
var $$ = Dom7;
$$.getJSON('http://battlebrotherhood.ru/api/core/get_category_posts/?slug=photo', function (data) {
	
	var output="<ul class='photo_content'>";
    for (var i in data.posts) {
		
        output+="<p><center><b><a href='"+data.posts[i].url+"' class='pb-standalone-dark'>"+data.posts[i].title+"'</b><br>";
         output+="<img src='"+ data.posts[i].thumbnail_images.medium.url + "'/></center></p>";
		  
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
		output+="<p class='DescriptionVideo'>"+data.items[i].snippet.description+"</p><br>";

		
    }
    output+="</ul>";
    document.getElementById("placevideo").innerHTML=output;
	
});




