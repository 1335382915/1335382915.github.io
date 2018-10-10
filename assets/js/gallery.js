 // build items array
 var items = [{
    title: "天津之旅",
    photos: [{
        src: '/assets/img/weixin.jpg',
        w: 678,
        h: 896,
        scale: 3
    }]
}, {
    title: "杂七杂八",
    photos: [{
        src: "/assets/img/kanong.jpg",
        w: 957,
        h: 720,
        scale: 4
    },
    {
        src: '/assets/img/mescalchuan.jpg',
        w: 803,
        h: 803,
        scale: 4
    }]
}];
var openPhotoSwipe = function(lIndex, pIndex) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
        history: false,
        focus: false,
        index: pIndex,
        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items[lIndex].photos, options);
    gallery.init();
};

var $base = $(".about-container");

items.map(function(item, lIndex) {
    var $div = $("<div class='flex flex-wrap flex-grow-0 justify-content-center'></div>");
    $base.append($("<h2 style='margin-bottom:30px;'>"+item.title+"</h2>"));
    item.photos.map(function(photo, pIndex) {
        var $img = $("<div style='width:"+photo.w / photo.scale+"px;height:"+photo.h / photo.scale+"px;background:url("+photo.src+");background-size:cover;display:inline-block'/>");
        $img.on("click", function() {
            openPhotoSwipe(lIndex, pIndex)
        });
        $div.append($img);
    })
    $base.append($div);
})