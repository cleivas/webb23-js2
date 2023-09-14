import $ from "jquery";

$( "button" ).first().on( "click", function() {
    $( "p" ).first().fadeToggle( "slow", "linear" );
  } );
  $( "button" ).last().on( "click", function() {
    $( "p" ).last().fadeToggle( "fast", function() {
      $( "#log" ).append( "<div>finished</div>" );
    } );
  } );