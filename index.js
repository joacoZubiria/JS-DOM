import menuHamburger, { alarm, ball, buscador, clock, countDown, darkTheme, localization, luck, networkStatus, responsiveJs, responsiveTester, rSlider, scrollSpy, scrollToTop, userAgent, webcamId, videoInteligente, validacionForm, speech} from "./js.js";

document.addEventListener("DOMContentLoaded", e => {

    menuHamburger(".hamburger", ".panel", ".menu-abs a");

    clock("#reloj","#startClock","#stopClock");
        
    alarm("assets/alarma.mp3","#startAlarm","#stopAlarm");
    
    countDown("countdown","Dec 03, 2021 18:00:00", "cringe");
    
    scrollToTop(".scroll-top-btn");
    
    responsiveJs(
        "youtube", 
        "(max-width: 600px)", 
        `<a href ="https://www.youtube.com/watch?v=8nzriFw-kA8&list=RD8nzriFw-kA8&t=1s">Ver Video</a>`, 
        `<iframe width="896" height="504" src="https://www.youtube.com/embed/8nzriFw-kA8?list=RD8nzriFw-kA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="gregory"></iframe>`);
    
    responsiveJs("gmaps", 
    "(max-width: 600px)", 
    `<a href ="https://goo.gl/maps/2jbc3KDbfqNWiUzSA">Ver Video</a>`, 
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7845678.175768865!2d-68.0438400546576!3d-16.22570599142805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8977bba295%3A0x1c9ec2bb0115edbf!2sBolivia!5e0!3m2!1ses!2sar!4v1634856003550!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    
    //responsiveTester(".input-form",".open",".close");
    responsiveTester("responsive-form");

    userAgent("user-device");

    webcamId("webcam-video","#mute","#video");

    localization("geo");

    buscador(".card-filter", ".card");

    luck( "#btn-giveaway",".lenguages");

    rSlider(".content-slide","btn-left","btn-right");

    scrollSpy("section[data-scroll-spy]");

    videoInteligente("video[data-smart-video]");

    validacionForm();

});

document.addEventListener("keydown", e=>{
    ball(e,".space",".bola");
});

darkTheme(".dark-theme-btn","data-dark");

networkStatus();
speech("select",".speech",".btn-speech");
