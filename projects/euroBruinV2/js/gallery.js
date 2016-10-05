$('.grid').packery({
  // options
  itemSelector: '.grid-item',
  gutter: 0,
  columnWidth:0
});

$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('http://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '243797116015643',
      version: 'v2.7' // or v2.1, v2.2, v2.3, ...
    });
    //$('#loginbutton,#feedbutton').removeAttr('disabled');
    //FB.getLoginStatus(updateStatusCallback);

    FB.api(
        "/eurobruins/photos",
        function (response) {
        //  if (response && !response.error) {
            /* handle the result */
            console.log("=====>",response);
        //  }
        }
    );
  });

});
