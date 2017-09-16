var app=angular.module('chatApp',['ngMaterial']);
app.controller('chatController',function($scope){
	$scope.messages=[
	{
		sender:"BOT",
		text:"Hey",
		time:"1:15"
	},
	{
		sender:"USER",
		text:"Hello",
		time:"1:18"
	}
	];
var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
   };

});
