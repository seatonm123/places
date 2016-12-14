$(document).ready(function(){

  var cityURL = 'http://localhost:3000';

  $.get(cityURL, function(data){
    var $li = $('<li id="list-boy">' + data.name + '</li>');
    $('#list-guy').append($li);
  });
});
