
    (function ($) {
   jQuery.fn.slideShow=function (child_div,button_container,speed_value) {
    var parent_div=$(this).selector;

       var viewUl=$(parent_div)
               .css('overflow','hidden')
               .children(child_div),
           imgs=viewUl.find('img'),
           imgW=imgs[0].width,
           imgsLen=imgs.length,
           totalImgsW = imgW * imgsLen,
           current=1;
       $(button_container).show()
           .find('button')
           .on('click',function () {
               var direction = $(this).attr('id');
               var position=imgW;
               (direction==='next') ? ++current : --current;
               if(current===0){
                   current=imgsLen;
                   direction='next';
                   position=totalImgsW - imgW;
               }else if(current-1===imgsLen){
                   current=1;
                   position=0;

               }
               doIt(viewUl,position,direction);

           });

       function doIt(container,position, direction) {
           var sign; //-= OR +=
           if(direction && position!==0){
               sign= (direction==='next') ? '-=' : '+=';
           }


           container.animate({
               'margin-left': sign ? (sign+position) :position
           },{duration:speed_value});
       }
   };







    })(jQuery);
