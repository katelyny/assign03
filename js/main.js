window.onload = init;

function init() {

	   $("#enter").on("click", function (){
       $("#main").scrollIntoView(); 
    })

	var xhr = new XMLHttpRequest();
		
	xhr.open("GET", "twitter.php", true); //open request	

	xhr.send(); //request data

	xhr.onload = function(){ //what happens when we recieve the data
		if(xhr.status == 200){
			var twitterObj = JSON.parse(xhr.responseText);
			console.log(twitterObj);

			var mediaHeight = 275;
			var count = 0;
			twitterObj.statuses.forEach(function(index){
				
				if (index.extended_entities == null){
					console.log("no media");
					count += 1;
					console.log(count);
				}
				
				else {
					index.entities.hashtags.forEach(function(tag){
					var tagText = tag.text;

						if (tag.text == "MarchForOurLives" || tag.text == "marchforourlives"){
							console.log("don't need this")
						} 
						else {
							console.log(tag.text);			
							
							var $tag = $("<p>",{
							id: "hashtag"
						});
						$tag.text("#"+tagText);
						$("#result-tag").append($tag)
						}
					})

					index.extended_entities.media.forEach(function(srcType){
						var mediaType = srcType.type;

						if (mediaType == "video" || mediaType == "animated_gif"){

							console.log(srcType.type);

							if (srcType.video_info.variants[0].content_type == "video/mp4") {
								var videotype = srcType.video_info.variants[0].content_type;
								var videosrc = srcType.video_info.variants[0].url;
								
								var $vid = $("<video />", {
									id: "video",
									src: videosrc,
									type: videotype,
									height: mediaHeight,
									controls: true
								})
								
								
							$("#result").append($vid)
							count += 1;
							console.log(count);
							
							}

							else if (srcType.video_info.variants[1].content_type == "video/mp4") {
								var videotype = srcType.video_info.variants[1].content_type;
								var videosrc = srcType.video_info.variants[1].url;
							
								var $vid = $("<video />", {
									src: videosrc,
									type: videotype,
									height: mediaHeight,
									controls: true
								});
							$("#result").append($vid)
							count += 1;
							console.log(count);
							}
							else if (srcType.video_info.variants[2].content_type == "video/mp4") {
								var videotype = srcType.video_info.variants[2].content_type;
								var videosrc = srcType.video_info.variants[2].url;
							
								var $vid = $("<video />", {
									src: videosrc,
									type: videotype,
									height: mediaHeight,
									controls: true
								});
							$("#result").append($vid)
							count += 1;
							console.log(count);
							}
							else if (srcType.video_info.variants[3].content_type == "video/mp4") {
								var videotype = srcType.video_info.variants[3].content_type;
								var videosrc = srcType.video_info.variants[3].url;
							
								var $vid = $("<video />", {
									src: videosrc,
									type: videotype,
									height: mediaHeight,
									controls: true
								});
							$("#result").append($vid)
							count += 1;
							console.log(count);
							}
								
							

						}
						
				else if (mediaType == "photo") {
					index.entities.hashtags.forEach(function(tag){
					var tagText = tag.text;

						if (tag.text == "MarchForOurLives" || tag.text == "marchforourlives"){
							console.log("don't need this")
						} 
						else {
							console.log(tag.text);			
							
							var $tag = $("<p>",{
							id: "hashtag"
						});
						$tag.text("#"+tagText);
						$("#result-tag").append($tag)
						}
					})
				
					console.log(mediaType);
					var imgsrc = srcType.media_url;
					var $img = $("<img >", {
						id: "photo",
						src: imgsrc,
						height: mediaHeight
					})
					$("#result").append($img);
					count += 1;
					console.log(count);

						}
					})
				}
			});
			
		}

	}
}

		