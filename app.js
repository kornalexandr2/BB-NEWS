var myApp = new Framework7(); 

// Export selectors engine
var $$ = Dom7;

$$.getJSON('http://battlebrotherhood.ru/api/core/get_category_posts/?id=2/?count=15', function (data) {

	var output="<ul class='photo_content list-block' id='myid'>";
    for (var i in data.posts) {

        output+="<li class='OneFeedInList' id="+data.posts[i].id+"><center><b><a class='pb-standalone-dark feed_title' href='#'>"+data.posts[i].title+"</b><br>";
        output+="<img src='"+ data.posts[i].thumbnail_images.medium.url + " ' /></center></a></li>";


    }
	
    output+="</ul>";
    document.getElementById("placephoto").innerHTML=output;

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
		output+="<iframe src='https://www.youtube.com/embed/" +data.items[i].snippet.resourceId.videoId+"?showinfo=0'  frameborder='0' allowfullscreen></iframe><br>";
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


/* Inf scroll */

//http://battlebrotherhood.ru/feed/?paged=3


// Loading flag
var loading = false;
 
// Last loaded index
var lastIndex = 1;
 
// Max items to load
var maxItems = 50;
 
// Append items per load
var itemsPerLoad = 1;


// Attach 'infinite' event handler
$$('.infinite-scroll').on('infinite', function () {
 
  // Exit, if loading in progress
  if (loading) return;
 
  // Set loading flag
  loading = true;
 
  // Emulate 1s loading
  setTimeout(function () {
    // Reset loading flag
    loading = false;
 
    if (lastIndex >= maxItems) {
      // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
      myApp.detachInfiniteScroll($$('.infinite-scroll'));
      // Remove preloader
      $$('.infinite-scroll-preloader').remove();
      return;
    }
 
    // Generate new items HTML
    var html = '';
	lastIndex ++; 
   
 for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
	 console.log (i);
 html +=    '{{#each items}}' +
                '<div class="OneFeedInList">' +
				    '<li>' +
                  
							'<a href="#" class="item-link feeds-item-link" data-index="{{@index}}">' +
                                '<li><div class="item-content feed_title">{{title}}</div></li>' +
								'<li><div class="item-title feed_description">{{description}}</div></li>' +
                            '</a>' +
						
                       
                    '</li>' +
				'</div>' +
                '{{/each}}';
    }
	 // Append new items
    $$('.list-block ul').append(html);
    // Update last loaded index
	lastIndex = $$('.list-block li').length;
  }, 1000);
});