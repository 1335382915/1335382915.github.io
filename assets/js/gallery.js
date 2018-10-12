 // build items array
 var items = [{
    title: "日落",
    photos: [{
        src: '/assets/img/gallery/riluo/1.jpg',
        w: 1440,
        h: 1080,
        scale: 6
    }, {
        src: '/assets/img/gallery/riluo/4.jpg',
        w: 1440,
        h: 1080,
        scale: 6
    }, {
        src: '/assets/img/gallery/riluo/5.jpg',
        w: 1440,
        h: 1080,
        scale: 6
    }]
}, {
    title: "天津",
    photos: [{
        src: "/assets/img/gallery/tianjin/1.jpg",
        w: 1440,
        h: 1080,
        scale: 6
    }, {
        src: "/assets/img/gallery/tianjin/3.jpg",
        w: 1440,
        h: 1080,
        scale: 6
    }]
},  {
    title: "其他",
    photos: [{
        src: "/assets/img/gallery/other/2.jpg",
        w: 1440,
        h: 1080,
        scale: 6
    }, {
        src: "/assets/img/gallery/other/1.jpg",
        w: 1440,
        h: 1080,
        scale: 6
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
        hideAnimationDuration: 0,
        closeOnScroll: false,
        shareEl: false
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items[lIndex].photos, options);
    gallery.init();
};

var $base = $(".about-container");

items.map(function(item, lIndex) {
    var $div = $("<div class='flex flex-wrap flex-grow-0'></div>");
    $base.append($("<h2 style='margin:30px 0;'>"+item.title+"</h2>"));
    item.photos.map(function(photo, pIndex) {
        var $img = $("<div class='gallery-img' style='width:"+photo.w / photo.scale+"px;height:"+photo.h / photo.scale+"px;background:url("+photo.src+");background-size:cover;'/>");
        $img.on("click", function() {
            openPhotoSwipe(lIndex, pIndex)
        });
        $div.append($img);
    })
    $base.append($div);
})