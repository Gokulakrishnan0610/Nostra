function onclicked1() {
    offer.style.display = "none"
}

function onclicked3() {
    side__nav.style.left = 0
}

function onclicked2() {
    side__nav.style.left = "-50%"
}
function onclickblack1() {
    b__heart1.style.display = "none"
    r__heart1.style.display = "block"
}
function onclickred1() {
    b__heart1.style.display = "block"
    r__heart1.style.display = "none"
}
function onclickblack2() {
    b__heart2.style.display = "none"
    r__heart2.style.display = "block"
}
function onclickred2() {
    b__heart2.style.display = "block"
    r__heart2.style.display = "none"
}
function onclickblack3() {
    b__heart3.style.display = "none"
    r__heart3.style.display = "block"
}
function onclickred3() {
    b__heart3.style.display = "block"
    r__heart3.style.display = "none"
}
function onclickblack4() {
    b__heart4.style.display = "none"
    r__heart4.style.display = "block"
}
function onclickred4() {
    b__heart4.style.display = "block"
    r__heart4.style.display = "none"
}
function onclickblack5() {
    b__heart5.style.display = "none"
    r__heart5.style.display = "block"
}
function onclickred5() {
    b__heart5.style.display = "block"
    r__heart5.style.display = "none"
}
function onclickblack6() {
    b__heart6.style.display = "none"
    r__heart6.style.display = "block"
}
function onclickred6() {
    b__heart6.style.display = "block"
    r__heart6.style.display = "none"
}
function onclickblack7() {
    b__heart7.style.display = "none"
    r__heart7.style.display = "block"
}
function onclickred7() {
    b__heart7.style.display = "block"
    r__heart7.style.display = "none"
}
function onclickblack8() {
    b__heart8.style.display = "none"
    r__heart8.style.display = "block"
}
function onclickred8() {
    b__heart8.style.display = "block"
    r__heart8.style.display = "none"
}

var slide = document.querySelector(".slide__image__container")
var right = document.getElementById("slide--right")
var left = document.getElementById("slide--left")

var sliding = 0

left.addEventListener("click", function () {
    if (sliding >= 0) {
        slide.style.marginLeft = "-850px"
        sliding = -100
    }
})

right.addEventListener("click", function () {

    if (sliding < 0) {
        slide.style.marginLeft = "-0px"
        sliding = +100
    }
})

