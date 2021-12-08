$(document).ready(function(){

    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        // console.log(sct);

        var sct_con_1 = $(".section_1").offset().top; 
        var sct_con_2 = $(".section_2").offset().top; 
        var sct_con_3 = $(".section_3").offset().top; 
        var sct_con_4 = $(".section_4").offset().top; 
        var sct_con_5 = $(".section_5").offset().top; 
        var sct_con_6 = $(".section_6").offset().top;

        var sct_img_2 = $('.img_wrap_2').offset().top;


        // pop motion end


        if(sct >= sct_img_2 * 0.5){
            $('.right_img_box .move_1').css({
                display: 'block',
                opacity: '1'
            });

            $('.right_img_box .move_2').css({
                display: 'none'
            });
            
            $('.right_img_box .move_3').css({
                display: 'none'
            });

        }

        if(sct >= sct_img_2 * 1.2){
            $('.right_img_box .move_1').css({
                display: 'none'
            });

            $('.right_img_box .move_2').css({
                display: 'block'
            });

            $('.right_img_box .move_3').css({
                display: 'none'
            });

        }

        if(sct >= sct_img_2 * 1.7){
            $('.right_img_box .move_1').css({
                display: 'none'
            });

            $('.right_img_box .move_2').css({
                display: 'none'
            });

            $('.right_img_box .move_3').css({
                display: 'block'
            });
        }



        if(sct >= sct_img_2 * 2.1){
            $('.right_img_box .move_1').css({
                display: 'none'
            });

            $('.right_img_box .move_2').css({
                display: 'none'
            });

            $('.right_img_box .move_3').css({
                display: 'none',
            });
        }

    
        // section_2 move motion end

        if(sct >= sct_con_3){
            $('.section_3 .title_wrap_3').addClass('active_4');
        }

        if(sct >= sct_con_3){
            $('.section_3 .tech_wrap').addClass('active_4');
        }

        if(sct >= sct_con_5){
            $('.section_5 .left_img_box').addClass('active_5');
        }

        if(sct >= sct_con_5){
            $('.section_5 .right_img_box').addClass('active_6');
        }

    });

});