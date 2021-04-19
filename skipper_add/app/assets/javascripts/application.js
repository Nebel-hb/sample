// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// =require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .



$(document).ready(function(){
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});

$(document).ready(function(){
  $('#theTarget').skippr({
    transition : 'slide',
    speed : 1000,
    easing : ' easeOutQuart',
    navType : 'bubble',
    childrenElementType : 'div',
    arrows :true,
    autoPlay:true,
    autoPlayDuration : 3000,
    keyboardOnAlways : true,
    hidePrevious : false

  });
});

$(function check(){
  $('#check').on('click', function(){
    var a = $("#i0").val();
    var b = $("#i1").val();

    for(var t =0; t<=5; t++){
      if(t == 0){
        if(a == b){
          $('#r0').html('same');
        }else if( a != b){
          $('#r0').html('not same');
        }
      }
      if(t == 1){
        if(a != b){
          $('#r1').html('same');
        }else if( a == b){
          $('#r1').html('not same');
        }
      }
      if(t == 2){
        if(a < b){
          $('#r2').html('same');
        }else if( a > b){
          $('#r2').html('not same');
        }
      }
        if(t == 3){
          if(a > b){
            $('#r3').html('same');
          }else if( a < b){
            $('#r3').html('not same');
          }
        }
        if(t == 4){
          if(a <= b){
            $('#r4').html('same');
          }else if( a > b){
            $('#r5').html('not same');
          }
        }
        if(t == 5){
          if(a >= b){
            $('#r5').html('same');
          }else if( a < b){
           $('#r5').html('not same');
          }
        }
      }
  });
});

var tiles =[];

function init(){
  // var table = $('#table');
var table = document.getElementById('table');

  for(var i = 0; i < 4 ; i++ ){
    // var tr = $('tr').create();
    var tr = document.createElement('tr');
    for (var j = 0; j < 4 ; j++){
      // var td = $('td').create();
          var td = document.createElement('td');
      var index = i * 4 + j;
      td.className = "tile";
      td.index = index;
      td.value = index;
      td.textContent = index == 0 ? "" : index;
      td.onclick = click;
      tr.appendChild(td);
      tiles.push(td)
    }
    table.appendChild(tr);
  }
  for (var i = 0 ; i < 1000 ; i++){
    click({ srcElement: {index: Math.floor(Math.random() * 16)}});
  }
}

function click(e){
  var i = e.Element.index;

  if(i - 4 >= 0 && tiles[i - 4].value == 0){
    swap(i , i - 4);
  }else if (i + 4 < 16 && tiles[i + 4].value == 0){
    swap(i , i + 4);
  }else if (i % 4 != 0 && tiles[i - 1].value == 0){
    swap(i , i - 1 );
  }else if (i % 4 != 3 && tiles[i + 1].value == 0){
    swap(i , i + 1);
  }
}

function swap(i,j){
  var tmp = tiles[i].value;
  tiles[i].textContent = tiles[j].textContent;
  tiles[i].value = tiles[j].value;
  tiles[j].textContent = tmp;
  tiles[j].value = tmp;
}
