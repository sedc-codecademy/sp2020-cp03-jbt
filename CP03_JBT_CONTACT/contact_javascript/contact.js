let settings_btn = document.getElementById("gear");
let settings_btn2 = document.getElementById("gear2");
// let languages = document.getElementById("languages");
let mk = document.getElementsByClassName("macedonian")[0];
let en = document.querySelector(".english");
let al = document.querySelector(".al");
let sound = document.querySelector(".voice");
// let audio = document.getElementById("audio");
// let mute = document.getElementById("mute");
// let lng = document.getElementsByClassName("lng");
let gimnazijaText = document.querySelector(".gimnazijaText");
let aside = document.getElementById("aside");
let content = document.getElementById("content");
function showAllLanguage(){
    mk.style.visibility = "visible";
    en.style.visibility = "visible";
    al.style.visibility = "visible";
    sound.style.visibility = "visible";
    settings_btn2.style.visibility = "hidden";
    settings_btn.style.visibility = "visible";
}
function changeToMacedonianText(){
    content.innerHTML = `<p>Повеќе информации</p>
    <br />
    <br />
    <p>Адреса: ул. "Димитрие Чуповски" бр27,1000 Скопје</p>
    <br />
    <br />
    <p>Телефон: +389 2 3214 314</p>
    <br />
    <br />
    <p>Е-пошта: </p>
    <a href="mailto: josipbrozmatura@yahoo.com" class="maturaMail">josipbrozmatura@yahoo.com</a>
    <br />
    <br />
    <p>Работно време: 07:30-19:15 ч. пон-пет</p>
    <br />
    <br />
    <p>Одговорно лице за информации од јавен карактер е Марта Горовска, 
      може да ја контактирате на бројот на училиштето. 
      <br />
      Писмено обраќање може да се испрати на </p>
      <a href="mailto: martagorovska@yahoo.com." class="martaMail">martagorovska@yahoo.com.</a>
      <a class="btn btn-outline-light btn-lg" href="https://josipbroztito.edu.mk/" target="_blank">VISIT OUR PAGE</a>`;
      gimnazijaText.innerHTML = `СУГС Гимназија "Јосип Броз Тито" - Прва Скопска Гимназија`;
}

function changeToEnglishText(){
    content.innerHTML = `<p>More information</p>
    <br />
    <br />
    <p>Adress: str. "Dimitrie Cupovski" No.27,1000 Skopje</p>
    <br />
    <br />
    <p>Telephone: +389 2 3214 314</p>
    <br />
    <br />
    <p>E-Mail: </p>
    <a href="mailto: josipbrozmatura@yahoo.com" class="maturaMail" style="left: 165px">josipbrozmatura@yahoo.com</a>
    <br />
    <br />
    <p>Work Time:: 07:30-19:15 h. Monday-Friday</p>
    <br />
    <br />
    <p>The person responsible for public information is Marta Gorovska, you can contact her at the school number. 
      <br />
      A written address can be sent to </p>
      <a href="mailto: martagorovska@yahoo.com." class="martaMail" style="left: 366px">martagorovska@yahoo.com.</a>
      <a class="btn btn-outline-light btn-lg" href="https://josipbroztito.edu.mk/" target="_blank">VISIT OUR PAGE</a>`;
      gimnazijaText.innerHTML = `SUGS High School "Josip Broz Tito" - First Skopje High School`;
}
function changeToAlbaniabText(){
    content.innerHTML = `<p>Më shumë informacion</p>
    <br />
    <br />
    <p>Adresë: rrugë. "Dimitrie Cupovski" Numër.27,1000 Skopje</p>
    <br />
    <br />
    <p>Telefon: +389 2 3214 314</p>
    <br />
    <br />
    <p>E-Mail: </p>
    <a href="mailto: josipbrozmatura@yahoo.com" class="maturaMail" style="left: 165px">josipbrozmatura@yahoo.com</a>
    <br />
    <br />
    <p>Koha e punës: 07:30-19:15. E hene e premte</p>
    <br />
    <br />
    <p>Personi përgjegjës për informacionin publik është Marta Gorovska, mund ta kontaktoni atë në numrin e shkollës. 
      <br />
      Mund t'i dërgohet një adresë me shkrim: </p>
      <a href="mailto: martagorovska@yahoo.com." class="martaMail" style="left: 430px">martagorovska@yahoo.com.</a>
      <a class="btn btn-outline-light btn-lg" href="https://josipbroztito.edu.mk/" target="_blank">VISIT OUR PAGE</a>`;
      gimnazijaText.innerText = `Shkolla e Mesme SUGS "Josip Broz Tito" - Shkolla e Mesme e Parë e Shkupit`;
      gimnazijaText.style = "font-size: 16px";
}

function hiddenLanguge(){
    // aside.style.visibility = "hidden";
    mk.style.visibility = "hidden";
    en.style.visibility = "hidden";
    al.style.visibility = "hidden";
    sound.style.visibility = "hidden";
    settings_btn2.style.visibility = "visible";
    settings_btn.style.visibility = "hidden";
}
function onlyEnglish(){
    // aside.style.visibility = "hidden";
    mk.style.visibility = "hidden";
    en.style.visibility = "visible";
    al.style.visibility = "hidden";
    sound.style.visibility = "visible";
    settings_btn2.style.visibility = "visible";
    settings_btn.style.visibility = "hidden";
}
function onlyMAcedonian(){
    // aside.style.visibility = "hidden";
    mk.style.visibility = "visible";
    en.style.visibility = "hidden";
    al.style.visibility = "hidden";
    sound.style.visibility = "visible";
    settings_btn2.style.visibility = "visible";
    settings_btn.style.visibility = "hidden";
}
function onlyAlbanian(){
    // aside.style.visibility = "hidden";
    mk.style.visibility = "hidden";
    en.style.visibility = "hidden";
    al.style.visibility = "visible";
    sound.style.visibility = "visible";
    settings_btn2.style.visibility = "visible";
    settings_btn.style.visibility = "hidden";
}
settings_btn2.addEventListener("click",function(){
    showAllLanguage();
    en.addEventListener("click",function(){
        changeToEnglishText();
    });
    al.addEventListener("click",function(){
        changeToAlbaniabText();
    })
    mk.addEventListener("click",function(){
        changeToMacedonianText();
    })
});
settings_btn.addEventListener("click",function(){
    hiddenLanguge();
});

en.addEventListener("mouseover",function(){
    onlyEnglish();
});
mk.addEventListener("mouseover",function(){
    onlyMAcedonian();
});
al.addEventListener("mouseover",function(){
    onlyAlbanian();
});
