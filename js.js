const d = document,
 w = window;
export default function menuHamburger(panelBtn,panel,menuLink){
    document.addEventListener("click",(e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            document.querySelector(panelBtn).classList.toggle("is-active");
            document.querySelector(panel).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            document.querySelector(panelBtn).classList.remove("is-active");
            document.querySelector(panel).classList.remove("is-active");
        }
    })
}

/*const $button = document.querySelector(".hamburger"),
 $menuAbs = document.querySelector(".menu-abs");

$button.addEventListener("click", e => {
    if(!$button.classList.contains("is-active")){
        $button.classList.toggle("is-active");
        $menuAbs.style.setProperty("left", "0");
    }else if($menuAbs.style.getPropertyValue("left") == "0px"){
        $button.classList.toggle("is-active");
        $menuAbs.style.setProperty("left", "-100%");
    }
})*/


// SECCION 1

// Reloj

const $btnStart = document.querySelector("#startClock"); 
let interval;
export function clock(clock,sButton,pButton){
    document.addEventListener("click", e => {
        if(e.target.matches(sButton)){
             interval = setInterval(() =>{
                const reloj = document.querySelector(clock);
                let now = new Date().toLocaleTimeString();
                reloj.innerHTML = `<h3>${now}</h3>`;
            },1000);
            e.target.disabled = true;
        }
        
        if(e.target.matches(pButton)){
            clearInterval(interval);
            document.querySelector("#reloj").innerHTML = null;
            $btnStart.disabled = false;
        }
    })
}

// Alarma

export function alarm(sound,sButton,pButton){
    const $alarm = document.createElement("audio");
    $alarm.src = sound; 
    document.addEventListener("click", e => {
        if(e.target.matches(sButton)){
            $alarm.play();
            e.target.disabled = true;
        }
        if(e.target.matches(pButton)){
            $alarm.pause()
            $alarm.currentTime = 0;
            document.querySelector("#startAlarm").disabled = false;
        }
    })
}
/*const $btnStartAlarm = document.querySelector("#startAlarm")
let audio = new Audio("assets/alarma.mp3");
function alarm(sButton,pButton){
    document.addEventListener("click", e =>{
        if(e.target.matches(sButton)){
            audio.play();
            audio.volume = 0.3;
            e.target.disabled = true;
        }

        if(e.target.matches(pButton)){
            $btnStartAlarm.disabled = false;
            audio.pause();
            audio.currentTime = 0;
        }
    })
}*/

// SECCION 2 
let x = 0,
y = 0;  
export function ball(e,space,bola){
    const $space = document.querySelector(space),
     $ball = document.querySelector(bola),
     limitSpace = $space.getBoundingClientRect(),
     limitBall = $ball.getBoundingClientRect();
    //console.log(limitSpace,limitBall);
     switch(e.keyCode){
            case 37:
                if(limitSpace.left < limitBall.left){
                    e.preventDefault();
                    x--;
                }
                break;
            case 38:
                if(limitSpace.top < limitBall.top){
                    e.preventDefault();
                    y--;
                }
                break;
            case 39:
                if(limitSpace.right > limitBall.right){
                    e.preventDefault();
                    x++;
                }
                break;
            case 40:
                if(limitSpace.bottom > limitBall.bottom){
                    e.preventDefault();
                    y++;
                }
                break;
            default:
                break;    
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
}

// SECCION 3 

export function countDown(id, limitDate, msj){
    
    const $countdown = d.getElementById(id);
    let countdown = new Date(limitDate).getTime();

    let countdownTempo = setInterval(e =>{
        let actualDate = new Date().getTime(),
        limitTime = countdown - actualDate,
        days = Math.floor(limitTime / (1000*60*60*24)),
        hours = ("0" + Math.floor(limitTime % (1000*60*60*24) / (1000*60*60))).slice(-2),
        minutes = ("0" + Math.floor(limitTime % (1000*60*60) / (1000*60))).slice(-2),
        seconds = ("0" + Math.floor(limitTime % (1000*60) / (1000))).slice(-2);
        
        $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos para rendir.</h3>`
        
        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${msj}</h3>`;
        }
    }, 1000);
    
};

/*const $buttonReady = document.querySelector(".btnReady"); una mierda

$buttonReady.addEventListener("click", e=>{
    const $hours = document.querySelector(".hours"),
    $minutes = document.querySelector(".minutes"),
    $seconds = document.querySelector(".seconds"),
    contador = document.createElement("div"),
    $btnStop =  document.createElement("button");
   document.querySelector(".input-container").appendChild(contador);
   contador.appendChild($btnStop);
   const tempo = setInterval(e =>{
       console.log("working");
       do{
           $buttonReady.disabled = true;
           $hours.disabled = true;
           $minutes.disabled = true;
           $seconds.disabled = true;
           contador.innerHTML = `${$hours.value} : ${$minutes.value} : ${$seconds.value}`;  
       }while(($hours.value >= 0) && ($minutes.value >=0 || $minutes.value == undefined) && ($seconds.value >= 0 || $seconds.value == undefined)){
           for(let i=0; $seconds.value > i; i++){
               $seconds.value-i;
               break
           }
           if($seconds.value == 0 || $seconds.value == undefined){
               $seconds.value = 59;
               for(let i = 0; $minutes.value > i; i++){
                   $minutes.value-i;
                   break
               }
           }else if($minutes.value == 0 && $hours.value > 0){
               $minutes.value = 59;
               for(let i = 0; $hours.value > i; i++){
                   $hours.value-i;
                   break
               }
           }
           if(($hours.value == 0 || $hours.value == undefined) && ($minutes.value ==0 || $minutes.value == undefined) && ($seconds.value == 0 || $seconds.value == undefined)){
               clearInterval(tempo);
               $buttonReady.disabled = false;
               $hours.disabled = false;
               $minutes.disabled = false;
               $seconds.disabled = false;
               contador.innerHTML = `Listo!`;  

           }
       }
   },1000);
   $btnStop.addEventListener("click", e=>{
       $buttonReady.disabled = false;
       $hours.disabled = false;
       $minutes.disabled = false;
       $seconds.disabled = false;
       clearInterval(tempo);
       contador.innerHTML = `Listo!`;    
   })
})*/
export function scrollToTop(btn){
    const $btn = d.querySelector(btn);
    w.addEventListener("scroll", e =>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        //console.log(w.pageYOffset, d.documentElement.scrollTop) 
        if(scrollTop > 600){
            $btn.classList.remove("hidden");
        }else{
            $btn.classList.add("hidden");
        }
    })
    $btn.addEventListener("click", e=>{
        if(!$btn.classList.contains("hidden")){
            w.scrollTo(0,0);
        }
    });
}

export function darkTheme(btn,datatheme){
    const $btnMoon = d.querySelector(btn),
     $selectors = document.querySelectorAll("[data-dark]");
     
    let moon = "🌙",
     sun = "☀️";

    const darkMode = () =>{
        $selectors.forEach(el => el.classList.add(datatheme));
        $btnMoon.textContent = sun;
        localStorage.setItem("theme", "dark");
    }

    const lightMode = () => {
        $btnMoon.textContent = moon;
        $selectors.forEach(el => el.classList.remove(datatheme));
        localStorage.setItem("theme", "light");
    }
    
    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            if($btnMoon.textContent === moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", e => {
        if(localStorage.getItem("theme") === null) localStorage.setItem("theme", "light");
        if(localStorage.getItem("theme") ==="light") lightMode();
        if(localStorage.getItem("theme") === "dark") darkMode();
    });
}
// SECCION 4
/*export function responsiveJs(id,mq,mobileContent,desktopContent){

    let breakpoint = w.matchMedia(mq);
    
    const $iframes = document.querySelectorAll(desktopContent),
     $section = document.getElementById(id),
     
     $mobileContent = document.createElement(mobileContent);    
     $mobileContent.setAttribute("href", "https://www.youtube.com/watch?v=8nzriFw-kA8&list=RD8nzriFw-kA8&t=1s");
     $mobileContent.innerHTML = "Ver Video";
    
     const $mobileContentMap = document.createElement(mobileContent);
    $mobileContentMap.setAttribute("href", "https://goo.gl/maps/2jbc3KDbfqNWiUzSA");
    $mobileContentMap.innerHTML = "Ver Mapa";
     
    const resize = () => {
        if(breakpoint.matches){
            $section.replaceChild($mobileContent,$iframes[0]);
            $section.replaceChild($mobileContentMap,$iframes[1]);
        console.log(breakpoint.matches)
        }else{
            if(breakpoint.matches == false){
                $section.replaceChild($iframes[0],$mobileContent);
                $section.replaceChild($iframes[1],$mobileContentMap);
            }
        }
    }
    resize()

    w.addEventListener("resize", e=>{
        console.log(w.innerWidth)
        resize();
    })

}*/

export function responsiveJs(id,mq,mobileContent,desktopContent){
    const $youtube = d.getElementById(id),
     $gmpas = d.getElementById(id);
    let breakpoint = w.matchMedia(mq);

    function responsive(e){
        if(e.matches){
            $youtube.innerHTML = mobileContent;
            $gmpas.innerHTML = mobileContent;        // IMPORTANTISIMO INNER HTML CLAVE DOU;
        }else{
            $youtube.innerHTML = desktopContent;
            $gmpas.innerHTML = desktopContent;
        }

    }
    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint); // Cuando abro la pagina se ejecuta para ver.
}

/*export function responsiveTester(input,open,close){

    const $inputs = document.querySelectorAll(input);
    let arr = [];
    function openWin(){
         window.open(arr[0], "_blank", `width=${arr[2]}, height=${arr[1]}`, false);    
    }
    d.addEventListener("click", e =>{
        if(e.target.matches(open)){
            
            $inputs.forEach(input => {
                arr.push(input.value);
            });
            openWin()

        }
        if(e.target.matches(close)){
            window.close(arr[0]);
            arr.splice(0,3)
        }
    });
}*/

export function responsiveTester(form){ //podes llamar a los valores de los inputs dentro del form por los name.
    const $form = d.getElementById(form);
    let tester;
    d.addEventListener("submit", e => {
        if(e.target === $form){
            e.preventDefault();
            tester = w.open($form.direccion.value,"tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
        }
    });
    d.addEventListener("click", e => {
        if(e.target === $form.cerrar) tester.close();     
    });
}

export function userAgent(userDiv){
    const $user = d.getElementById(userDiv);
    $user.innerHTML = `<h3> User: ${navigator.userAgent} </h3>`

    const isMobile = {
        android: () => navigator.userAgent.match(/android/i),
        ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
        any: function (){
            return this.android || this.ios();
        }
    },
    isDesktop = {
        linux:() => navigator.userAgent.match(/linux/i),
        windows:() => navigator.userAgent.match(/windows nt/i),
        mac:() => navigator.userAgent.match(/mac os/i),
        any: function () {
            return this.linux()||this.windows()||this.mac();
        }
    },
    isBrowser = {
        chrome: () => navigator.userAgent.match(/chrome/i),
        safari: () => navigator.userAgent.match(/safari/i),
        firefox: () => navigator.userAgent.match(/firefox/i),
        opera: () => navigator.userAgent.match(/opera|oprea mini/i),
        ie: () => navigator.userAgent.match(/msie|iemobile/i),
        edge: () => navigator.userAgent.match(/edge/i),
        any: function () {
            return(
                this.chrome||
                this.safari||
                this.firefox||
                this.opera||
                this.ie||
                this.edge
                );
        } 
    }

    if(isBrowser.chrome()) $user.innerHTML += `<p>Navegador:<b>Chrome</b></p>`;
    if(isDesktop.windows()) $user.innerHTML += `<p>SO:<b>Windows</b></p>`;
    if(isMobile.android() && isDesktop.any() === false) $user.innerHTML += `<p>SO:<b>Android</b></p>`;
    
}

export function networkStatus(){

    function isOnline(){
        const $divOn = d.createElement("div");
        if(navigator.onLine){
            $divOn.textContent = "Conexión Restablecida";
            $divOn.classList.add("online");
            $divOn.classList.remove("offline");
        }else{
            $divOn.textContent = "Conexión Perdida";
            $divOn.classList.add("offline");
            $divOn.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin", $divOn);
        setTimeout(() => d.body.removeChild($divOn), 2400);
    }

    w.addEventListener("online", e => isOnline());
    w.addEventListener("offline", e => isOnline());
}

export function webcamId(id,mute,video){
    const $video = d.getElementById(id);
    let localstream;
    function cameraOn(){
        navigator.mediaDevices.getUserMedia({video:true, audio:true}).then(stream => {
            console.log(stream);
            localstream = stream;
            $video.srcObject = stream;
            $video.play();
        }).catch(err => {
            $video.insertAdjacentHTML("beforebegin",`<p>Sucedió un error! : ${err}`);
        });
    }
    if(navigator.mediaDevices.getUserMedia){
        cameraOn()
    }
    d.addEventListener("click", e => {
        if(e.target.matches(video)){
                $video.pause();
                $video.src = "";
                localstream.getTracks()[1].stop();
            }
    });
}


export function localization(div){
    const $div = d.getElementById(div);
    
    let pos = {
        enableHighAccuracy : true,
        timeout:5000,
        maximumAge: 0
    }
    
    const err = (err) => {
        $div.innerHTML = `<p><mark>Error ${err.code}: ${err.message} </mark></p>` 
    }

    function innerPosition (position){
        //console.log(position);
        $div.innerHTML = 
        `<p>Latitud: ${position.coords.latitude} </p> <br>
        <p>Longitude: ${position.coords.longitude}</p> <br>
        <p>Precisión: ${position.coords.accuracy}</p>
        <br>
        <br>
        <a href = "https://www.google.com.ar/maps/@${position.coords.latitude},${position.coords.longitude},20z?hl=es" 
        target="_blank" rel="noopener">Ver en Google Maps</a>`;

    }

    navigator.geolocation.getCurrentPosition(innerPosition, err, pos); // watchPosition sape

}

export function buscador(selector, selecteados){
    const $cards = d.querySelectorAll(selecteados);
    const $search = d.querySelector(selector);
    let words;
    d.addEventListener("keyup", e =>{
        if(e.target.matches(selector)){
        words = $search.value;
        console.log(words);
        if(e.keyUp === "Escape"){
            e.target.value = "";
        }
        $cards.forEach(el => {
            //console.log(el.textContent.toLowerCase().trim())
            let exp = new RegExp(words, "gi");
            !exp.test(el.textContent.toLowerCase())
            ?el.classList.add("filter")
            :el.classList.remove("filter");
        })
        }
    });

}

/*export function luck(btnG, lenguages){
    const $lenguages = d.querySelectorAll(lenguages),
    $btn = d.getElementById(btnG);
    console.log($lenguages);
    let arr = [];
    d.addEventListener("click", e => {
        
        if(e.target.matches(btnG)){
            if(arr.length < 8){
            $lenguages.forEach(el =>{
                let language= el.textContent.trim();
                arr.push(language);
                console.log(arr);
            })
            let i = Math.floor(Math.random()*arr.length);
            console.log(i);
            alert(arr[i]);
        }else{
            let i = Math.floor(Math.random()*arr.length);
            console.log(i);
            alert(arr[i]);
        }
        }
    
    })
}*/

export function luck(btnG, lenguages){
    const $lenguages = d.querySelectorAll(lenguages);
    d.addEventListener("click", e => {
        if(e.target.matches(btnG)){
            let i = Math.floor(Math.random()*$lenguages.length);
            alert(`El ganador es ${$lenguages[i].textContent}`);
        }
    });
}

export function rSlider(cnt,prev,forw){
const $cnt = document.querySelectorAll(cnt),
    $prev = document.querySelector(prev),
    $forw = document.querySelector(forw);

    let i = 0;
    d.addEventListener("click", e => {
        if(e.target.matches(".btn-left")){
            e.preventDefault();
            $cnt[i].classList.remove("active");
            i--;
            if(i < 0){
                i=$cnt.length -1;
            }
            $cnt[i].classList.add("active");    
        }
        if(e.target.matches(".btn-right")){
            e.preventDefault();
            $cnt[i].classList.remove("active");
            i++
            if(i > $cnt.length-1){
                i=0; 
            }
            $cnt[i].classList.add("active");
        }
    })
}

//intersection observer API

export function scrollSpy(sectionContainer){
    const $data = d.querySelectorAll(sectionContainer);

     let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

     const entries = entries => {
        entries.forEach(entry => {

            const id = entry.target.id;
            let $targeted = d.querySelector(`a[data-scroll-spy][href="#${id}"]`);

            if(entry.isIntersecting){
                $targeted.classList.add("menu-active");
            }else{
                $targeted.classList.remove("menu-active");
            }
        })
    }

    let observer = new IntersectionObserver(entries, options);

    $data.forEach(el => {
        observer.observe(el);
    })
}

//visibility change y intersection observer

export function videoInteligente(video){
    const $video = d.querySelectorAll(video);
    
    let options = {
        root:null,
        rootMargin:"0px",
        threshold: 0.5
    }

    const entries = entries => {
        entries.forEach(entry => {
            w.addEventListener("visibilitychange", () => {
                if(d.visibilityState == "hidden") {
                    entry.target.pause();
                }if(d.visibilityState == "visible"){
                    if(entry.isIntersecting){
                        entry.target.play();
                    }else{
                        entry.target.pause();
                    }
                }
            });
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }
        });  
    }

    let observer = new IntersectionObserver(entries, options);

   $video.forEach(video => {
    observer.observe(video);
   }) 
}

export function validacionForm(){
    const $inputs = d.querySelectorAll(".contact-form [required]");
    d.querySelector(".nombre").setAttribute("pattern", "^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$");
    d.querySelector(".email").pattern = "^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
    d.querySelector(".consulta").dataset.pattern = "^.{1,255}$"
    $inputs.forEach(input => {
            const $span = d.createElement("span");
            $span.setAttribute("id", `${input.name}`);
            $span.textContent = input.title;
            $span.classList.add("contact-form-error", "none");
            input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", e => {
        if(e.target.matches(".contact-form [required]")){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;

            if(pattern && $input.value !== ""){
                let regexp = new RegExp(pattern);
                return !regexp.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }

            if(!pattern){
                return $input.value === ""
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }
        }
    })

    d.addEventListener('submit', e => {
        if(e.target.matches('.contact-form')){
            e.preventDefault();
        }
    })
}

/*export function speech(select, txt, btn){
    const $select = d.getElementById(select),
     $inputTxt = d.querySelector(txt),
     $btn = d.querySelector(btn),
     $form = d.querySelector(".speech-form"); 

    let voices = [];
    function populateVoiceList(){
        voices = speechSynthesis.getVoices();
        
        for(let i=0; i < voices.length; i++){
            const $option = d.createElement("option");

            $option.textContent = voices[i].name + '(' + voices[i].lang + ')';
            
            if(voices[i].default){
                $option.textContent +=" --DEFAULT";
            }
            $option.setAttribute('data-lang',voices[i].lang);
            $option.setAttribute('data-name', voices[i].name);
            $select.appendChild($option);
        }
    }
    populateVoiceList();
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    d.addEventListener("submit", e=>{
        if(e.target.matches(".speech-form")){
            e.preventDefault();
            
            let utterThis = new SpeechSynthesisUtterance($inputTxt.value);
            let selectedOption = $select.selectedOptions[0].getAttribute('data-name');
            for(let i=0; i < voices.length; i++){
                if(voices[i].name === selectedOption){
                    utterThis.voice = voices[i];
                }
            }
            w.speechSynthesis.speak(utterThis);
        }
    })
}*/

export function speech(select,txt,btn){
    const $select = d.getElementById(select),
    $text = d.querySelector(txt),
    $btn = d.querySelector(btn),
    $form = d.querySelector(".speech-form"),
    messageSpeech = new SpeechSynthesisUtterance();
    
    let values = [];
    d.addEventListener("DOMContentLoaded", e => {
        speechSynthesis.addEventListener("voiceschanged", e=>{
            values = speechSynthesis.getVoices();
            values.forEach(voice => {
                const $option = d.createElement("option");
                $option.textContent = voice.name + " -- (" + voice.lang +")";
                $option.value = voice.name;
                $select.appendChild($option);
                if(voice.default){
                    $option.textContent += " --DEFAULT"
                }
            });
        });
    });

    d.addEventListener("change", e=>{
        if(e.target.matches("#select")){ // le otorgo la voz al speech
            messageSpeech.voice = values.find(voice => voice.name == e.target.value);
        }
        console.log(e.target.value);
        console.log(messageSpeech);
    });

    d.addEventListener("submit", e=>{
        if(e.target === $form){
            e.preventDefault();
            messageSpeech.text = $text.value;
            speechSynthesis.speak(messageSpeech);
        }
    });
};