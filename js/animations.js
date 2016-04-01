$(document).ready(function() {

// On click into the .tweet-compose field, this makes the "Tweet" button appear - Part 1

$('#tweet-controls').hide();
$('.tweet-compose').on("click", function() {
$('#tweet-controls').show();

// Doubles the size of .tweet-compose (text input) when you click into it ".on('click')" - Part 1
  $('.tweet-compose').css('height', '5em');

});

// Enables the "tweet-content" box to stay open if their is at least 1 character in the text input.  Also, keeps the "Tweet" button from disappearing.
$('.tweet-compose').on('blur', function() {
  if ($('.tweet-compose').val().length < 0) {
    $('#tweet-controls').hide();
  }

});

var $tweetSubmit = $('#tweet-submit');
  $tweetSubmit.on('click', function() {
    if ($('.tweet-compose').val()) {
    $('#stream').prepend(
      '<div class="tweet">' +
        '<div class="content">' +
        '<div class="top-wrapper">' +
          '<span class="top-left">' +
            '<img class="avatar" src="img/mslends.jpg" />' +
            '<strong class="fullname">' + $('.myName').text() + '</strong>' +
            '<span class="username">' + '@mslends' + '</span>' +
          '</span>' +
          '<div class="images">' +
            '<span class="favorited"><img class= "fav-pic" src="img/favorite-img.jpeg"/></span>' +
            '<span class="retweeted"><img class= "retweet-pic" src="img/arrow-retweet.png"/></span></div></div>' +
          '<p class="tweet-text">' + $('.tweet-compose').val() + '</p>' +
          '<div class="tweet-actions" style="display: none"><ul><li><span class="icon action-more"></span> More</li></ul></div>' +
          '<div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div>' +
            '<div class="time">' + '<time class="timeago" datetime="2016-02-12T15:44:17Z" title="February 12, 2016">' + jQuery.timeago(new Date()) + '</time>' + '</div></div></div></div>')
    $('.tweet-compose').val('');
    $('#char-count').text('140');
    $('#char-count').css('color', '#999');
    }
  })

// Code enables the character count to count down with each keystroke using .keyup - Part 1
var maxLength = 140;
$('.tweet-compose').keyup(function() {
var length = $(this).val().length;
var length = maxLength-length;
$('#char-count').text(length);
var count = $('#char-count').text();
// Changes the character count to red when you are at 10 characters or less - Part 1
  if(count <= 10) {
    $('#char-count').css('color','red')
// Changes the character count back to black when you are at any number above 10 characters - Part 1
  }else {
    $('#char-count').css('color','black')
  }

  // Disables and enables the button based on the character count. If count is <= 0 then the button is disabled. If it is 1 or above, button is enabled.
  if(count <= 0) {
    $('#tweet-submit').attr('disabled', true)
  }else {
    $('#tweet-submit').attr('disabled', false)
  }
});

// Makes the "tweet-actions" (i.e, retweet, favorite, reply) appear when you mouseover a specific tweet.  - Step 2
$(document).on('mouseover', '.tweet', function() {
  $(this).find('.tweet-actions').css('display', 'inline-block');
});

// Makes the "tweet-actions" (i.e, retweet, favorite, reply) dissapear when your mouse leaves the tweet you were hovering over  - Step 2
$(document).on('mouseout', ".tweet", function() {
  $('.tweet-actions').css('display', 'none');

});
// Makes the stats portion of the tweet dissapear and reappear when you click on it. - Step 2
$('.stats').hide();
$(document).on("click", '.tweet', function() {
$(this).find('.stats').toggle();
$("abbr.timeago").timeago();
});







});
