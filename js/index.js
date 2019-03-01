$(function () {

    $('#itcast').fullpage({

        navigation: true,
        sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],

        afterLoad: function (a, index) {

            // 自己写的div
            $('.section>div div').removeAttr('style');
            $('.section>div img').removeAttr('style');
            // 单独让第二屏的src换回来
            $('.section2 .search').attr('src', 'images/02/search01.png');


            // transition动画的扩展写法
            $('.section').eq(index - 1).addClass('animation').siblings().removeClass('animation');

            if (index == 2) {
                //如果是第二屏，加jQuery动画
                $('.section2 .search').animate({
                    right: '50%',
                    marginRight: -111

                }, 1000, 'easeOutBack', function () {

                    //替换图片
                    $('.section2 .search').attr('src', 'images/02/search02.png');

                    //往右上走并缩小
                    $('.section2 .search').delay(500).animate({
                        marginBottom: 448,
                        marginRight: -260,
                        width: 160
                    }, 1000);

                    //同时写图片放大
                    $('.section2 .sofas').delay(500).animate({
                        width: 441
                    }, 1000);
                });

            } else if (index == 4) {

                $('.section4 .carBox').animate({

                    marginLeft: 2000

                }, 2500, 'easeInElastic', function () {

                    //把键盘显示出来
                    $('.section4 .keyboard').animate({
                        opacity: 1
                    }, 1000);
                });
            } else if (index == 6) {

                // 让空投掉下来
                $('.section6 .airBox').animate({

                    top: 20
                    
                }, 1500, function () {

                    // 第六屏让小车动起来
                    $('.section6 .street').animate({

                        backgroundPositionX: -1200

                    }, 2500,function(){

                        // 车停了后让快递小哥出来
                        $('.section6 .man').animate({

                            height:140

                        },1000,function(){

                            //小哥出来后往右走
                            $('.section6 .man').animate({

                                right:-140

                            },1000,function(){

                                $('.section6 .door').show();
                                
                                //小女孩延迟0.5秒出来，delay只能在有动画效果的时候有用
                                // $('.section6 .girl').delay(500).show();
                           
                                setTimeout(function(){

                                    $('.section6 .girl').show();
                                },500);
                            });
                        });
                    });
                });



            }
        }
    });


    // 给第八屏加鼠标移动事件
    $('.section8').mousemove(function(e){

        // console.log('....');
        // 拿到pageX，pageY分别赋值给手的left和top
        $('.section8 .hand').css('left',e.pageX - 70);
        $('.section8 .hand').css('top',e.pageY - 15);
        
    });

    // 再来一次的点击事件
    $('.section8 .again').click(function(){

        // location.reload();
        // 滚到某一屏，不是传下标，而是传页码数
        $.fn.fullpage.moveTo(1);
    });

 
})