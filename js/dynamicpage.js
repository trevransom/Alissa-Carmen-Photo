$(function() {

    if(Modernizr.history){

    var newHash      = "",
        $mainContent = $("body"),
        $pageWrap    = $("#page-wrap"),
        baseHeight   = 0,
        $el;
        
    // $pageWrap.height($pageWrap.height());
    // baseHeight = $pageWrap.height() - $mainContent.height();

    // console.log (baseHeight);
    
    $("#album_covers").delegate("img", "click", function() {
        var page = $(this).attr('href');
        history.pushState(null, null, page);
        loadContent( page );
        return false;
    });

    $("#menu").delegate("a", "click", function() {
        var page = $(this).attr('href');
        history.pushState(null, null, page);
        loadContent( page );
        return false;
    });

    // $('.gallery_item img').click(function () {
    //   var page = $(this).attr('href');
    //   $('.gallery_body').load( page + '.php');
    //   return false;
    // });

    function loadContent(href){
        $mainContent
                // .find("#gallery_body")
                .fadeOut(200, function() {
                    $mainContent.hide().load(href , function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                // height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        // $("nav a").removeClass("current");
                        console.log(href);
                        // $("nav a[href$="+href+"]").addClass("current");
                    });
                });
    }
    
   // $(window).bind("popstate", function() {
   //      link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
   //      loadContent(link);

   //    //   var $container = $('#album_covers').imagesLoaded( function(){
   //    //   $container.isotope({
   //    //     itemSelector: '.gallery_item',
   //    //     masonry: {}
   //    //   });
   //    // });  
   //  });

   /* $(window).bind('popstate', function() {
        window.location.reload();
        return false;
    });*/


} // otherwise, history is not supported, so nothing fancy here.

    
});