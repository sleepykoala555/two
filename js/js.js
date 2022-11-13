//code
$(window).resize(function(){
  location.reload();
});

var wwidth = document.body.clientWidth;

$('.menu').click(function (e) {
  if (wwidth < 768) {
    var _this = $(this);
    if ($('.left ul').is(':hidden')) {
      $('.left ul').show();
      $('.left ul').css('position', 'fixed');
      _this.addClass('menucur');
    } else {
      $('.left ul').hide();
      _this.removeClass('menucur');
    }
  }
});

$('.left ul').click(function (e) {
  if (wwidth < 768) {
    $('.left ul').hide();
    $('.menu').removeClass('menucur');
  }
});
$('#Obtitle0').click(function (e) { 
  e.preventDefault();
  if ($('#Oblist0').is(':hidden')) {
    $('#Oblist0').show();
    $('#Obtitle0').addClass('cur')
  } else {
    $('#Oblist0').hide();
    $('#Obtitle0').removeClass('cur')
  }
});

$('#Obtitle').click(function (e) { 
  e.preventDefault();
  if ($('#Oblist').is(':hidden')) {
    $('#Oblist').show();
    $('#Obtitle').addClass('cur')
  } else {
    $('#Oblist').hide();
    $('#Obtitle').removeClass('cur')
  }
});

$('#Obtitle2').click(function (e) { 
  e.preventDefault();
  if ($('#Oblist2').is(':hidden')) {
    $('#Oblist2').show();
    $('#Obtitle2').addClass('cur')
 
  } else {
    $('#Oblist2').hide();
    $('#Obtitle2').removeClass('cur')
  }
});

 