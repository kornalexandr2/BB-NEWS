// Export selectors engine
var $$ = Dom7;
$$.getJSON('proxy.php?url=http://api.vk.com/method/wall.get?domain=battlebrotherhood', function (data) {
	
	var output="<ul class='soc_content'>";
    for (var i in data.response) {
		
        output+="<li> " + data.response[i].text + "</li><br>";
		output+="******";
		
    }
    output+="</ul>";

    document.getElementById("placeholder").innerHTML=output;
	
});
$$.getJSON('http://battlebrotherhood.ru/api/core/get_category_posts/?slug=photo', function (data) {
	
	var output="<ul class='photo_content'>";
    for (var i in data.posts) {
		
        output+="<p><center><b><a href='"+data.posts[i].url+"' class='pb-standalone-dark'>"+data.posts[i].title+"'</b><br>";
         output+="<img src='"+ data.posts[i].thumbnail_images.medium.url + "'/></center></p>";
    }
    output+="</ul>";
    document.getElementById("placephoto").innerHTML=output;
	
});



