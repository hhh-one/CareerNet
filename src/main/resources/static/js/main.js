
	$(document).ready(function(){ //공지사항 슬라이드
		/*if(getWebCookie('chk_notice0609')) { //공통팝업시 이용
			window.open('https://www.career.go.kr/webres/notice/stop-pc-popup.html','서비스 중단 안내','width=600px,height=646px,toolbar=no,menubar=no');
		}*/
		try {
            var NoticeSlider = $('.notice-slider').bxSlider({
                mode: 'vertical',
                auto: true,
                pager: true,
                controls: false,
                autoControls: true,
                autoControlsCombine: true,
                stopAutoOnClick: true,
                slideWidth: 613,
                onSliderLoad: function () {
                    $('.notice-item-warp .bx-stop').click(function () {
                        NoticeSlider.stopAuto();
                        return false;
                    });
                    $('.notice-item-warp .bx-start').click(function () {
                        NoticeSlider.stopAuto();
                        return false;
                    });
                }
            });
            var BannerSlider = $('.event .banner-slider').bxSlider({ //이벤트 슬라이드
                auto: true,
                pager: false,
                controls: true,
                autoControls: true,
                autoControlsCombine: true,
                stopAutoOnClick: true,
                slideWidth: 254,
                nextText: '다음 행사·이벤트',
                prevText: '이전 행사·이벤트',
                startText: '배너 롤링 시작',
                stopText: '배너 롤링 정지',
                onSliderLoad: function () {
                    $('.event .bx-stop').click(function () {
                        BannerSlider.stopAuto();
                        return false;
                    });
                    $('.event .bx-start').click(function () {
                        BannerSlider.stopAuto();
                        return false;
                    });
                }
            });
            var BannerSlider = $('.banner-slider').bxSlider({ //배너 슬라이드
                auto: true,
                pager: false,
                controls: true,
                autoControls: true,
                autoControlsCombine: true,
                stopAutoOnClick: true,
                slideWidth: 254,
                nextText: '다음 배너',
                prevText: '이전 배너',
                startText: '배너 롤링 시작',
                stopText: '배너 롤링 정지',
                onSliderLoad: function () {
                    $('.dream .bx-stop').click(function () {
                        BannerSlider.stopAuto();
                        return false;
                    });
                    $('.dream .bx-start').click(function () {
                        BannerSlider.stopAuto();
                        return false;
                    });
                }
            });
            var JinroMvSlider = $('.jinroMv-slider').bxSlider({ //진로동영상 슬라이드
                auto: true,
                pager: false,
                controls: true,
                autoControls: true,
                autoControlsCombine: true,
                stopAutoOnClick: true,
                slideWidth: 254,
                nextText: '다음 진로동영상',
                prevText: '이전 진로동영상',
                startText: '배너 롤링 시작',
                stopText: '배너 롤링 정지',
                onSliderLoad: function () {
                    $('.jinroMv .bx-stop').click(function () {
                        JinroMvSlider.stopAuto();
                        return false;
                    });
                    $('.jinroMv .bx-start').click(function () {
                        JinroMvSlider.stopAuto();
                        return false;
                    });
                }
            });
        } catch(e) {

		}
		$(".bx-start").attr('title','시작');
		$(".bx-stop").attr('title','멈춤');


		var main = "";
		var urlString = window.location.href;
		var urlStringSplit = urlString.split('/');
		for ( var i=0; i<=urlStringSplit.length; i++ ) {
			if(i == urlStringSplit.length-1){
				main = urlStringSplit[i];
			}
		}
		if(main == "main.do"){
			$(".top_bar").attr('class','top_bar renew_top_bar on');
		}

	});
