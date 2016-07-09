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





		
		
		//Video in YouTube chanel BattleBrothrhood
		
		
		$$.getJSON('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UUKCzm_RjV_PDqV-k6sINuIg&key=AIzaSyDvPwsV6dAigO7Ogol8al10IbdsUoELbVs', function (data) {
	
	var output="<ul class='video_content'>";
    for (var i in data.items) {
		
        output+="<p><center><b>"+data.items[i].snippet.title+"</b><br>";
    }
    output+="</ul>";
    document.getElementById("placevideo").innerHTML=output;
	
});


      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var BBVideo;
      function onYouTubeIframeAPIReady() {
        BBVideo = new YT.Player('BBVideo', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        BBVideo.stopVideo();
      }




