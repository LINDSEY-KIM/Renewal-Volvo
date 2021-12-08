$(document).ready(function  () {

    $(window).scroll(function () {

        var sct = $(window).scrollTop();
        console.log(sct);


        var sec_1_top = $(".section_1").offset().top;
        var sec_2_top = $(".section_2").offset().top;
        var useScroll = sct / sec_2_top;

        if (sct >= sec_1_top && sct < sec_2_top)  {
            console.log(useScroll);
            $(".section_2").css({
                opacity: useScroll,
            });
            $(".title_wrap_2").css({
                opacity: useScroll,
                position: "fixed",
                top: "50%",
                left: "50%",
            });
        }else {
            $(".title_wrap_2").css({
                position: "unset",
            });
        }

        var sec_5_top = $(".section_5").offset().top;
        var sec_6_top = $(".section_6").offset().top;
        var useScroll = sct / sec_6_top;

        if (sct >= sec_5_top && sct < sec_6_top)  {
            console.log(useScroll);

            $(".section_5").css({
                position: "fixed",
            });
        }else {
            $(".section_5").css({
                position: "unset",
            });
        }




        // 스크롤로 헤더 변경해주기

        $(window).scroll(function () {

            var sct = $(window).scrollTop();
            console.log(sct);

            // on.css X

            if(sct >= 500){
                $('header').css({
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    // css헤더에서 z-index값 넣어주기
                    // transition: '1s',
                });
            }else{
                $('header').css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: 'transparent'
                    // transition: '1s', -> 2갸의 트랜지션을 넣는것 보다 header자체에 넣어두는게 좋음
                });
            }

            // css에서 addclass넣고 removeclass쓰면 더 간단



        });

        // secroll handler end 이벤트 핸들러라고도 함
        
        
        
        
        
        // ----------------------------------------------------------------





        // 스크롤이 움직일때 스크롤 자체가 움직이는 것이 아니라 
        // body와 html이 움직이는 것
        
        $('.top_tap').click(function(){
            $('html,body').animate({
                scrollTop:0
            })
        });

        // sct의 스크롤탑과
        // scrollTop 을 분리시켜 볼 수 잇음
        // a태그 잇으면 a 태그가 작동 될 수 있음 (링크로 이동 될 수 잇음) -> 절대로  a태그를 쓰지 말것

        // $('.top_tap').click(function (e) {
        //     e.preventDefault();
        //     개발에 사용됨

        //     $('html,body').animate({
        //         scrollTop:0
        //     })
        // });



        // ----------------------------------------------------------------



        // 서비스 글을 클릭하면 그 섹션으로 이동


        console($('.section_2').offset().top);
        var sec_2_top = $('section_2').offset().top;

        $('.service').click(function(){
            $('html,body').animate({
                scrollTop: sec_2_top,
            });
        });



        // ----------------------------------------------------------------




    });
});

// 변경하고 싶은 값 / 상위 부모 값 * 100