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
    })
})//jQuery