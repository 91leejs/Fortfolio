$(function(){
    $("a").click(function(e){
        var attr = $(this).attr("href");
        if(attr == "#" || attr == ""){
            e.preventDefault();
        }
    })

    $(".wrap").fullpage({
        navigation: true,
        scrollOverflow: false,
        navigationTooltips:[
            "INTRO",
            "ABOUT ME",
            "CONTENT",
            "PROJECT 01",
            "PROJECT 02",
            "PROJECT 03",
            // "PROJECT 04",
            // "PROJECT 05",
            // "PROJECT 06",
            "HOMEPAGE REDESIGN",
            "HWATU REDESIGN",
            "UI / UX FIGMA01",
            "UI / UX FIGMA02",
            "SNACK PACKAGE DESIGN",
        ],
        slidesNavigation: false,
        slidesNavPosition: 'top',
        autoScrolling: true,
        scrollHorizontally: true, 
        controlArrows: false,
    })


    $(document).on('click', '.fp-next-link', function(e) {
        e.preventDefault(); // 기본 링크 동작 방지
        $.fn.fullpage.moveSlideRight(); // 오른쪽 슬라이드로 이동
    });


})//jQuery
