// JQuery Global with Toolkit.
// Author Matthew Johnson
// @mattsidjohn
// http://github.com/mattsidjohn

function hideAddressBar()
{
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
  }
}

window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
window.addEventListener("orientationchange", hideAddressBar );

$document.ready(function(){

// Fancybox Call
    $('.fancybox').fancybox({
        autoSize        : true,
        helpers : {
            title : {
                type : 'inside'
            }
        }
    });
// End Fancybox Call

// Toggle
    $('.clickSlideToggle').click(function(){
        $(this).next().slideToggle();
    });
    
    $('.hoverSlideToggle').hover(function(){
        $(this).next().toggle();
    });

    $('.clickToggle').click(function(){
        $(this).next().slideToggle();
    });
    
    $('.hoverToggle').hover(function(){
        $(this).next().toggle();
    });
// end Slide Toggle 

// Slide Down Navigation
    $('.parent-nav').hover(function() {
        $(this).find('.sub-nav').toggle();
    });
//

/*
// Mobile Dropdown Navigation
    
    // Create the dropdown base
    $("<select><select />").appendTo("span.mobile-nav");   
    
    // Populate dropdown with menu itemspull
    $("nav > ul > li").each(function() {
        var url = $(this).children().attr("href");
        var cur_url = window.location.href;
        var dont_use = $(this).attr('class');
        

    	var el = $(this);

    	var hasChildren = el.find("ul"),
    	    children    = el.find("li");

    	if (hasChildren.length) {
    		$("<optgroup />", {
    			"label": el.find("> a").text()
    		}).appendTo("nav select");
    		
    		children.each(function() {
    			$("<option />", {
                    "value": $(this).children().attr("href"),
    				"text": " - " + $(this).text()
    			}).appendTo("optgroup:last");
    		});
    	} 

    	else if (cur_url == url) {
    		$("<option />", {
    		   "selected": "selected",
    		   "disabled": "disabled",
               "value"   : $(this).children().attr("href"),
               "text"    : el.text()
           }).appendTo("nav select");
    	} 
    	
    	else if (dont_use == "no-mob")
    	{
    	}
    	else {
    		$("<option />", {
               "value"   : $(this).children().attr("href"),
               "text"    : el.text()
           }).appendTo("nav select");
    	} 
    	
    	
    });

    $("span.mobile-nav select").change(function() {
        window.location = $(this).find("option:selected").val();
    });
//
*/
});