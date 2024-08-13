// Hanatour fullpage.js객체:{}-배열[]
//데이터 유형 1. 숫자 2. 문자열 3. 불 4. undefined 5. 객체: {속성: 값 , 속성: 값,} -배열 :[값, 값, 값, 값...]

//jQurey fullpage.js plug-in
 $(function(){
    
    $('#wrap').fullpage({
        menu: '#hana_nav',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
        navigation: true,
        navigationTooltips: ['home','best','tour','culture'],
        showActiveTooltip: true,
        //slidesNavigation: true,
        //loopHorizontal: false,
    });
});

