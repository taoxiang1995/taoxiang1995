




$("#card").flip({
  axis: 'y',
  trigger: 'hover',
  reverse: false,

});


var blurFilter = {
  filter: "blur(5px)"
};
blurFilter["-webkit-filter"] = "blur(10px)";
blurFilter["-moz-filter"] = "blur(10px)";
blurFilter["-o-filter"] = "blur(10px)";
blurFilter["-ms-filter"] = "blur(10px)";



$(".portfolio-link").click(function(){
  $(".mainContent").addClass('blur')
})

$(".close-modal").click(function(){
  $(".mainContent").removeClass('blur')
})

$(".projectImg").mouseenter(function(){
  //$(this).addClass('scaleImg');
   $(this).animate({
     width:'200%',
     height:'200%'
   }, 1000);
  //  $('#projects').animate({
   //
  //    left:'1000px',
   //
  //  }, 1000);
})

$(".grid-item img").mouseleave(function(){
  //$(this).removeClass('scaleImg');
  $(this).animate({
    width:'100%',
    height:'100%'
       })
})


$(".projectTitle").mouseenter(function(){
  $(this).addClass('increaseFontSize');
})

$(".projectTitle").mouseleave(function(){
  $(this).removeClass('increaseFontSize');
})


var selectedSectionClass='';
var currentSectionTabClass='.ProjectsTab';
var currentSectionClass='.Projects';

$(".projectTitle").click(function(){
  console.log("!!!!");
  // console.log($(this).text());
  selectedSectionClass = '.'+$(this).text();
  selectedSectionTabClassName = '.'+$(this).text()+'Tab';
  $(currentSectionTabClass).removeClass('currentTab');
  currentSectionTabClass = selectedSectionTabClassName;
  $(selectedSectionTabClassName).addClass('currentTab');
  if (selectedSectionClass == '.Experiences')
  {
    document.getElementById("iframe").contentWindow.focus();
  }
  // console.log("slectedSectionClass:",selectedSectionClass);
  $(currentSectionClass).addClass('navTransitionEffect');
  $(currentSectionClass).one($.support.transition.end,
      function() {
       $(currentSectionClass).addClass('disapper');
       $(selectedSectionClass).removeClass('disapper');
       $(selectedSectionClass).removeClass('navTransitionEffect');
       currentSectionClass = selectedSectionClass;
      });

})



//fix nav bar
$('.mainContent').on('scroll', function(e){
  if (this.scrollTop > 147) {
    console.log("=====>");
  } else {
    console.log("-=====>");
  }
})
