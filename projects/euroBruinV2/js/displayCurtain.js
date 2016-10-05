var isAnimating = false
// var textInterval = setInterval(function () { toggleSliderText() }, 10000)
var tumbnailTimeout = false
var seasonsTimeout = false

$(document).ready(function(){

  setSeasonText(1);
  showSliderText(1);
  setInterval(function(){
    switchSeason();
  }, 10000)
})

function switchSeason(){
    setSeason(nextSeason());
}

function nextSeason()
{
  var currentSeason = Number(getCurrentSeasonID());
  if (currentSeason<5)
  {
    return currentSeason + 1;
  }
  else
  {
    return 1;
  }
}

function setSeason(id, instantly)
{
    var time = 1000;
    if (isAnimating)
      return;
    var curSeason = getCurrentSeasonID();
    var screenWidth = $(window).width();

    if (isWithinSeasonRange(id))
    {
      isAnimating = true;
      // clearInterval(textInterval);
      // textInterval = setInterval(function () { toggleSliderText() }, 5000);
      moveSliderBullet(id);
      if (id < curSeason)
      {
        $(".seasonTextContainer").fadeOut(time, function () { setSeasonText(id) });
        $('#nextVideo').css('right', screenWidth + 'px');
        $('#nextVideo').show();
        $('#nextVideo img').attr('src', './img/landingPage/' + (id) + '.png');
        $('#nextVideo').animate({ right: '0px' }, time, 'linear');
        $('#curVideo').animate({ right: '-100px' }, time, 'linear', function () { setCurSeason(id); showSliderText(id); });
      }
      else if (id > curSeason) {
        $(".seasonTextContainer").fadeOut(time, function () { setSeasonText(id) });
        $('#nextVideo').css('right', '-' + screenWidth + 'px');
        $('#nextVideo').show();
        $('#nextVideo img').attr('src', './img/landingPage/' + (id) + '.png');
        $('#nextVideo').animate({ right: '0px' }, time, 'linear');
        $('#curVideo').animate({ right: '100px' }, time, 'linear', function () { setCurSeason(id); showSliderText(id); });
      }
    }
    isAnimating = false;
}

function getCurrentSeasonID()
{
  return $('#currentSeason').val()? $('#currentSeason').val(): 1;
}

function isWithinSeasonRange (id)
{
  return id >= 1 && id <= 12;
}

function setSeasonText(id) {
  switch (id) {
    case 1: {
      $('.seasonTextContainer').css('top', '20%');
      $('.seasonTextContainer').css('left', '43%');
      $('.seasonTextContainer  #textContainer2 .textContainer').html('YASSOU')
    break;
    }
    case 2: {
      $('.seasonTextContainer').css('top', '20%');
      $('.seasonTextContainer').css('left', '44%');
      $('.seasonTextContainer  #textContainer2 .textContainer').html('HELLO')
    break;
    }
    case 3: {
      $('.seasonTextContainer').css('top', '20%');
      $('.seasonTextContainer').css('left', '42%');
      $('.seasonTextContainer  #textContainer2 .textContainer').html('BONJOUR')
    break;
    }
    case 4: {
      $('.seasonTextContainer').css('top', '20%');
      $('.seasonTextContainer').css('left', '45%');
      $('.seasonTextContainer  #textContainer2 .textContainer').html('HOLA')
    break;
    }
    case 5: {
      $('.seasonTextContainer').css('top', '20%');
      $('.seasonTextContainer').css('left', '41%');
      $('.seasonTextContainer  #textContainer2 .textContainer').html('MERHABA')
    break;
    }
    case 6: {
      $('.seasonTextContainer').css('top', '20%');
      $('.seasonTextContainer').css('left', '70%');
      $('.seasonTextContainer').css('margin', 'auto');
      $('.seasonTextContainer  #textContainer2 .textContainer').html('Sed elementum')
    break;
    }
  }
}

function setCurSeason(id)
{
  $('#curVideo').attr('id', 'nextVideoNew');
  $('#nextVideo').attr('id', 'curVideo');
  $('#nextVideoNew').attr('id', 'nextVideo');
  $('#nextVideo').hide();
  $('#curVideo').css('z-index', '0');
  $('#nextVideo').css('z-index', '1');
  $('#currentSeason').val(id);
}

function moveSliderBullet(id)
{
  var currentID = parseInt($('#currentSeason').val());
  var EndPxs = (id - 1) * 35;
  var CenterPxs = CenterPxs + Math.abs((id - currentID - 1) * 35 / 2);
  $('#selector').animate({ width: '20px', height: '5px', left: CenterPxs + 'px', top: '2px' }, 200, function () {
  $('#selector').animate({ width: '18px', height: '18px', left: EndPxs + 'px', top: '-4px' }, 100, function () {
  $('#selector').animate({ width: '17px', height: '17px', top: '-2px' }, 100) }) })
}

function showSliderText(id)
{
    $(".seasonTextContainer").show();
    $("#textContainer2 .textContainer").css("opacity", "0");
    $("#textContainer2").css("padding-left", "500px");
    $('#seasonTextSlider').css('opacity', '0');
    $('#seasonTextSlider').css('left', '500px');
    $("#textContainer2").show();
    $("#textContainer1").hide();
    setTimeout(function () {
      $('#textContainer2').animate({
        paddingLeft: "0"
      },300, 'easeInExpo');
      $('#textContainer2 .textContainer').animate({
      opacity: "1"
      }, 300, 'easeInExpo', function () {
      $('#selectorSeason').animate(
        { width: '20px', height: '5px', left: 14 + 'px', top: '2px' }, 200,
        function () {
          $('#selectorSeason').animate({ width: '18px', height: '18px', left: '0', top: '-4px' }, 100,
          function () { $('#selectorSeason').animate({ width: '14px', height: '14px', top: '-2px' }, 100) }) });
      $('#seasonTextSlider').css('top', $('#textContainer2').height() + 20 + 'px');
      $('#seasonTextSlider').animate({
        left: 0,
        opacity: 1
        }, 300)
        })

        }, 100)

    isAnimating = false;
}

function toggleSliderText() {
  // clearInterval(textInterval)
  // textInterval = setInterval(function () { toggleSliderText() }, 5000)
  if ($("#textContainer1").css("display") == "none")
  {
    if ($("#textContainer1 .textContainer").html() == "")
      return
    $("#textContainer1 .textContainer").css("opacity", "0")
    $("#textContainer1").css("margin-left", "-500px")
    $('#selectorSeason').animate({ width: '20px', height: '5px', left: 14 + 'px', top: '2px' }, 200,
      function () { $('#selectorSeason').animate({ width: '18px', height: '18px', left: 28 + 'px', top: '-4px' }, 100,
        function () { $('#selectorSeason').animate({ width: '14px', height: '14px', top: '-2px' }, 100) }) })
    $('#textContainer2').animate({
    paddingLeft: "500px"
    }, 300, 'easeInExpo')
    $('#textContainer2 .textContainer').animate({
    opacity: "0"
    }, 300, 'easeInExpo', function () {
    $("#textContainer2").hide();
    $("#textContainer2").css("padding-left", "0");
    $("#textContainer2 .textContainer").css("opacity", "0");
    setTimeout(function () {
    $("#textContainer1").show()
    $('#textContainer1').animate({
    marginLeft: "0"
    }, 300, 'easeInExpo')
    $('#textContainer1 .textContainer').animate({
    opacity: "1"
    }, 300, 'easeInExpo')
    }, 300)
    })
  }
  else {
    $('#selectorSeason').animate({ width: '20px', height: '5px', left: 14 + 'px', top: '2px' }, 200,
      function () { $('#selectorSeason').animate({ width: '18px', height: '18px', left: '0', top: '-4px' }, 100,
        function () { $('#selectorSeason').animate({ width: '14px', height: '14px', top: '-2px' }, 100) }) })
    $('#textContainer1').animate({
    marginLeft: "-500px"
    }, 300, 'easeInExpo')
    $('#textContainer1 .textContainer').animate({
    opacity: "0"
    }, 300, 'easeInExpo', function () {
    $("#textContainer1").hide();
    $("#textContainer1").css("margin-left", "0");
    //$("#textContainer1 .textContainer").css("opacity", "0");
    setTimeout(function () {
    $("#textContainer2 .textContainer").css("opacity", "0")
    $("#textContainer2").css("padding-left", "500px")
    $("#textContainer2").show();
    $('#textContainer2 .textContainer').animate({
    opacity: "1"
    }, 300, 'easeInExpo')
    $('#textContainer2').animate({
    paddingLeft: "0"
    }, 300, 'easeInExpo')
    }, 300)
    })
  }
}
