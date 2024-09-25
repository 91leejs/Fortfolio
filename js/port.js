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

        afterLoad: function(origin, destination, direction) {
            if (destination.index === 1) { // 두 번째 섹션

                    $('.p_left').addClass('l_ani'); // 애니메이션 클래스 다시 추가
                    $('.p_right').addClass('r_ani'); // 애니메이션 클래스 다시 추가
            }
            if (destination.index === 2) { // 세 번째 섹션

                    $('.cont_inner').addClass('cont_move'); // 애니메이션 클래스 다시 추가
            }
            if (destination.index === 3) { // 네 번째 섹션
                
                $('.pi2').addClass('parallax'); // 애니메이션 클래스 다시 추가
            }
            if (destination.index === 4) { // 다섯 번째 섹션
                
                    $('.pi1').addClass('parallax'); // 애니메이션 클래스 다시 추가
            }
            if (destination.index === 5) { // 여섯 번째 섹션
                
                    $('.pi11').addClass('parallax'); // 애니메이션 클래스 다시 추가
            }
            if (destination.index === 6) { // 일곱 번째 섹션
                
                    $('.pi6').addClass('parallax'); // 애니메이션 클래스 다시 추가
            }
            if (destination.index === 7) { // 여덟 번째 섹션
                
                    $('.pi7').addClass('parallax'); // 애니메이션 클래스 다시 추가
            }
            if (destination.index === 8) { // 아홉 번째 섹션
                
                    $('.pi9').addClass('parallax'); // 애니메이션 클래스 다시 추가
            }
            if (destination.index === 9) { // 열 번째 섹션
                
                    $('.pi8').addClass('parallax'); // 애니메이션 클래스 다시 추가
            }
            if (destination.index === 10) { // 열한 번째 섹션
                
                    $('.pi10').addClass('parallax'); // 애니메이션 클래스 다시 추가
            }
        }
    })


    $(document).on('click', '.fp-next-link', function(e) {
        e.preventDefault(); // 기본 링크 동작 방지
        $.fn.fullpage.moveSlideRight(); // 오른쪽 슬라이드로 이동
    });


})//jQuery
