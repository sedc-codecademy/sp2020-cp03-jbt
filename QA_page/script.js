let settings_btn = document.getElementById("settings");
let settings_btn2 = document.getElementById("settings2");
let languages = document.getElementById("languages");
let mk = document.getElementById("mk");
let en = document.getElementById("en");
let al = document.getElementById("al");
let sound = document.getElementById("sound");
let mute = document.getElementById("mute");
let lng = document.getElementsByClassName("lng");


function hideSettings() {
    settings_btn.style.visibility = "visible";
    settings_btn2.style.visibility = "hidden";
    languages.style.visibility = "hidden";
    sound.style.visibility = "hidden";
    mute.style.visibility = "hidden";
}
hideSettings();

function showMkLng() {
    en.style.visibility = "hidden";
    al.style.visibility = "hidden";
    languages.style.display = "block";
}

function showEnLng() {
    mk.style.visibility = "hidden";
    al.style.visibility = "hidden";
    en.style.position = "absolute";
    en.style.top = "0px";
    en.style.right = "0px";
}

function showAlLng() {
    en.style.visibility = "hidden";
    mk.style.visibility = "hidden";
}

function showAllLanguageBtns() {
    settings_btn.style.visibility = "hidden";
    settings_btn2.style.visibility = "visible";
    languages.style.visibility = "visible";
}

function showMute() {
    sound.style.visibility = "hidden";
    mute.style.visibility = "visible";
}

function showSound() {
    sound.style.visibility = "visible";
    mute.style.visibility = "hidden";
}

function showAllSettingsBtns() {
    settings_btn.style.visibility = "hidden";
    settings_btn2.style.visibility = "visible";
    languages.style.visibility = "visible";
    sound.style.visibility = "visible";
}

settings_btn.addEventListener('click', function() {
    showAllSettingsBtns();
    if (mk) {
        mk.addEventListener("click", function() {
            showMkLng();
        });
    }
    if (en) {
        en.addEventListener("click", function() {
            showEnLng();
        });
    }
    if (al) {
        al.addEventListener("click", function() {
            showAlLng();
            if (lng) {
                al.addEventListener("click", function() {
                    showAllLanguageBtns();
                });
            }
        });
    }
})

settings_btn2.addEventListener('click', function() {
    hideSettings();
})



sound.addEventListener("click", function() {
    sound.style.visibility = "hidden";
    mute.style.visibility = "visible";
})


mute.addEventListener("click", function() {
    sound.style.visibility = "visible";
    mute.style.visibility = "hidden";
})

lng.addEventListener("click", function() {
    settings_btn.style.visibility = "hidden";
    settings_btn2.style.visibility = "visible";
    languages.style.visibility = "visible";
})