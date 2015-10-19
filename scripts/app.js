$(document).ready(function(){
  // Tabs
  $(".js-tabs").tabs({ active: 1 });

  // On Tab Click
  $(".js-tabs").on( "tabsactivate", function( event, ui ) {
    // Set Syntax Label
    var syntax = $(ui.newPanel).data("syntax");
    $("#syntax-label").text(syntax);
    // Donate Button
    $('.donate-btn').addClass('donate-btn-in');
  });

  $(".predawn-tabs").sortable({ axis: "x", revert: 150 });

  // Share Buttons
  setTimeout(function(){
    $('.share-btn-wrap').addClass('share-btn-wrap-in');
  }, 1000);
});
