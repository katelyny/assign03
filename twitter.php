<?php 
require_once('TwitterAPIExchange.php'); 

$settings = array(
   
);
	

	//search tweets

		$url = 'https://api.twitter.com/1.1/search/tweets.json';
		$getfield = '?q=#marchforourlives filter:media&return_results=recent&count=100';
		$requestMethod = 'GET';
	
	
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	    ->buildOauth($url, $requestMethod)
	    ->performRequest();
	
?>