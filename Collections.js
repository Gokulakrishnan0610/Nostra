
function onclicked1() {
    offer.style.display = "none"
}
function onclicked3() {
    side__nav.style.left = 0
}

function onclicked2() {
    side__nav.style.left = "-50%"
}


let skill = [];
const occasions = document.getElementsByName("occasion");

const displayStyles = {
    Summer: [".Summer1", ".Summer2"],
    Beach: [".Beach1", ".Beach2", ".Beach3"],
    Party: [".Party1", ".Party2", ".Party3", ".Party4"],
    Black: [".Black"],
    White: [".White"],
    Old: [".Old"]
};

function updateDisplay() {
    Object.values(displayStyles).flat().forEach(selector => {
        document.querySelector(selector).style.display = "flex";
    });

    if (skill.includes("Summer")) {
        displayStyles.Beach.concat(displayStyles.Party).forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Black.concat(displayStyles.White).forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Old.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
    }

    if (skill.includes("Beach")) {
        displayStyles.Summer.concat(displayStyles.Party).forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Black.concat(displayStyles.White).forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Old.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
    }

    if (skill.includes("Party")) {
        displayStyles.Summer.concat(displayStyles.Beach).forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Black.concat(displayStyles.White).forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Old.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
    }


    if (skill.includes("Party") && skill.includes("Beach")) {
        displayStyles.Summer.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Black.concat(displayStyles.White).forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Old.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Beach.concat(displayStyles.Party).forEach(selector => {
            document.querySelector(selector).style.display = "flex";
        });
    }

    if (skill.includes("Party") && skill.includes("Summer")) {
        displayStyles.Beach.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Black.concat(displayStyles.White).forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Old.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Summer.concat(displayStyles.Party).forEach(selector => {
            document.querySelector(selector).style.display = "flex";
        });
    }

    if (skill.includes("Beach") && skill.includes("Summer")) {
        displayStyles.Party.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Black.concat(displayStyles.White).forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Old.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        displayStyles.Summer.concat(displayStyles.Beach).forEach(selector => {
            document.querySelector(selector).style.display = "flex";
        });
    }
}

occasions.forEach(occasion => {
    occasion.addEventListener("click", function (event) {
        if (event.target.checked) {
            skill.push(event.target.value);
        } else {
            skill = skill.filter(value => value !== event.target.value);
        }
        console.log(skill);
        updateDisplay();
    });
});

let Color = [];
const colors = document.getElementsByName("colors");

const Stylescolors = {
    Summer: [".Summer1", ".Summer2"],
    Beach: [".Beach1", ".Beach2", ".Beach3"],
    Party: [".Party1", ".Party2", ".Party3", ".Party4"],
    Black: [".Black"],
    White: [".White"],
    Old: [".Old"]
};

function updateDisplay2() {
    Object.values(Stylescolors).flat().forEach(selector => {
        document.querySelector(selector).style.display = "flex";
    });

    if (Color.includes("White")) {
        Stylescolors.Black.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Old.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Party.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Beach.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Summer.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
    }

    if (Color.includes("Black")) {
        Stylescolors.White.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Old.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Party.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Beach.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Summer.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
    }

    if (Color.includes("White") && Color.includes("Black")) {
        Stylescolors.Summer.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Beach.concat(Stylescolors.Party).forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Old.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        Stylescolors.Black.concat(displayStyles.White).forEach(selector => {
            document.querySelector(selector).style.display = "flex";
        });
    }
}

colors.forEach(colors => {
    colors.addEventListener("click", function (event) {
        if (event.target.checked) {
            Color.push(event.target.value);
        } else {
            Color = Color.filter(value => value !== event.target.value);
        }
        console.log(Color);
        updateDisplay2();
    });
});

let Arrival = [];

const StylesArrivals = {
    Summer: [".Summer1", ".Summer2"],
    Beach: [".Beach1", ".Beach2", ".Beach3"],
    Party: [".Party1", ".Party2", ".Party3", ".Party4"],
    Black: [".Black"],
    White: [".White"],
    Old: [".Old"]

};
const Arrivals = document.getElementsByName("Arrivals");

Arrivals.forEach(Arrivals => {
    Arrivals.addEventListener("click", function (event) {
        if (event.target.checked) {
            Arrival.push(event.target.value);
        } else {
            Arrival = Arrival.filter(value => value !== event.target.value);
        }
        console.log(Arrival);
        updateDisplay3();
    });
});

function updateDisplay3() {
    Object.values(StylesArrivals).flat().forEach(selector => {
        document.querySelector(selector).style.display = "flex";
    });

    if (Arrival.includes("Old")) {
        StylesArrivals.Black.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        StylesArrivals.White.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        StylesArrivals.Beach.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        StylesArrivals.Party.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
        StylesArrivals.Summer.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
    }
    if (Arrival.includes("New")) {
        StylesArrivals.Old.forEach(selector => {
            document.querySelector(selector).style.display = "none";
        });
    }
}


var Collections = document.getElementById("Collections")
var Search = document.getElementById("Search")
var CollectionsList1 = Collections.querySelectorAll("div")

Search.addEventListener("keyup", function () {

    var entered = event.target.value.toUpperCase()

    for (i = 0; i < CollectionsList1.length; i++) {

        var name = CollectionsList1[i].querySelector("h1").textContent

        if (name.toUpperCase().indexOf(entered) < 0) {
            CollectionsList1[i].style.display = "none"
        }
        else {
            CollectionsList1[i].style.display = "block"
        }
    }
})
