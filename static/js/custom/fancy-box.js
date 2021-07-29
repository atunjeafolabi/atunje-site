// (function ($) {
//     "use strict";

//     // $('[data-fancybox="gallery"]').fancybox({
//     //     animationEffect: "zoom-in-out",
//     //     transitionEffect: "slide",
//     //     transitionEffect: "slide",
//     // });

//     $('[data-fancybox="gallery"]').each(function () {
//         var that = this;
//         $(this).fancybox({
//             beforeLoad: function () {
//                 var id = $(that).attr('id');
//                 console.log($(that).attr('data-website'))
//                 console.log("id of element clicked is: " + id)
//             },
//             afterShow: function () {
//                 $('img.fancybox-image').each(function () {
//                     $(this).wrap($('<a/>', {
//                         href: "http://ww3.com",
//                         class: "fancybox",
//                         rel: "fancyimage"
//                     }));
//                 });
//             }
//         });
//     });
// })(jQuery)