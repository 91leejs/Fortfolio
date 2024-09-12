$(function(){
    $("a").click(function(e){
        var attr = $(this).attr("href");
        if(attr == "#" || attr == ""){
            e.preventDefault();
        }
    })


    $(".mlb_g").click(function(){
        $(".mlb_gallery").addClass("show");
        
    })//

    $(".figma_g").click(function(){
        $(".figma_gallery").addClass("show");
        
    })//

    $(".hwatu_g").click(function(){
        $(".hwatu_gallery").addClass("show");
        
    })//

    $(".close").click(function(){
        $(".mlb_gallery, .figma_gallery, .hwatu_gallery").removeClass("show");
    })//

    $(".mg_inner .img").slick({
        dots: true, 
        arrows: false, 
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $(".fm_inner .img").slick({
        dots: true, 
        arrows: false, 
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $(".ht_inner .img").slick({
        dots: true, 
        arrows: false, 
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })


})//jQuery

$(window).scroll(function(){
    var top = $(this).scrollTop();
    console.log(top);

    if( top >= 1100 ){
        $(".top_btn").slideDown();
    }else{
        $(".top_btn").slideUp();
    }

    $(".top_btn").click(function(){
        window.scrollTo({ top: 0, behavior: "smooth" });
    })

})//scroll