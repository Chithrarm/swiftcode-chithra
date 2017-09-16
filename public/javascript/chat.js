var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope,$sce) {

   $scope.messages = [{
           sender: "BOT",
           text: "What can I do for you ?",
           time:"1:15pm"
       },
       {
           sender: "USER",
           text: "What is 1 +1 ",
           time:"1:18pm"
       },
       {
           sender: "BOT",
           text: "2",
           time:"1:19pm"
       }
   ];

   var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
    exampleSocket.onmessage  =   function  (event)
     {
        var jsonData = JSON.parse(event.data);
        jsonData.time = new Date().toLocaleTimeString();
        $scope.messages.push(jsonData);
        $scope.$apply(); 
        console.log(jsonData);    
    };
    $scope.sendMessage = function () {    
        exampleSocket.send($scope.userMessage);
        $scope.userMessage = "";
};
$scope.trust = $sce.trustAsHtml;

});