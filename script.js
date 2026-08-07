
const dictionary = [

{
word: "Gangrene",
category: "The Basics / Materials",
meaning: "Bad weed"
},

{
word: "Laundry",
category: "The Basics / Materials",
meaning: "Weed"
},

{
word: "Drying",
category: "The Basics / Materials",
meaning: "Grinding"
},

{
word: "Dryer",
category: "The Basics / Materials",
meaning: "Grinder"
},

{
word: "Laundry powder",
category: "The Basics / Materials",
meaning: "Finely ground powder at the bottom of the grinder"
},

{
word: "Canopy",
category: "The Basics / Materials",
meaning: "Papers"
},

{
word: "Carti",
category: "The Basics / Materials",
meaning: "Cardboard filter"
},

{
word: "Breezy Backdoor",
category: "The Basics / Materials",
meaning: "Loose carti"
},

{
word: "Juno",
category: "Rolling / Assembly",
meaning: "Rolling the j"
},

{
word: "Keyhole",
category: "Rolling / Assembly",
meaning: "Twisty tip at the end"
},

{
word: "Set the Canopy",
category: "Rolling / Assembly",
meaning: "Licking/sealing the j"
},

{
word: "Flooded Engine",
category: "Rolling / Assembly",
meaning: "Too wet from setting the canopy"
},

{
word: "Blueberry",
category: "Blueberry Family",
meaning: "The j (addressed as a person)"
},

{
word: "Raspberry",
category: "Blueberry Family",
meaning: "A blunt"
},

{
word: "Snaps",
category: "Blueberry Family",
meaning: "The lighter"
},

{
word: "Cherry",
category: "Light-Up & Ignition",
meaning: "The red burning tip"
},

{
word: "Welding",
category: "Light-Up & Ignition",
meaning: "Heating the canopy once you set it"
},

{
word: "Low Battery",
category: "Light-Up & Ignition",
meaning: "Can't see the cherry but it's still burning"
},

{
word: "Bluetooth",
category: "Light-Up & Ignition",
meaning: "Being skilled enough to snap the blueberry without touching the snaps to it"
},

{
word: "Afterburner",
category: "Light-Up & Ignition",
meaning: "The entire tip is red and nothing but cherry"
},

{
word: "Tightrope",
category: "Smoke Flow",
meaning: "Burning perfectly even"
},

{
word: "Puffington Express",
category: "Smoke Flow",
meaning: "Lots of smoke produced per puff"
},

{
word: "Fog Machine",
category: "Smoke Flow",
meaning: "Ridiculous exhale cloud"
},

{
word: "LP",
category: "Smoke Flow",
meaning: "Last puff"
},

{
word: "Volcano Mode",
category: "Burn Events",
meaning: "Burning super fast"
},

{
word: "Tundra / Tunny / Albino",
category: "Burn Events",
meaning: "The j has gone out"
},

{
word: "Taniwha",
category: "Burn Events",
meaning: "Stomping the j out"
},

{
word: "Campfire Story",
category: "Burn Events",
meaning: "Someone holding the blueberry and talking instead of smoking"
},

{
word: "Cherrymatics",
category: "Cherrymatics",
meaning: "Any event involving the cherry"
},

{
word: "Cherrymancer",
category: "Cherrymatics",
meaning: "Someone skilled at reviving the cherry"
},

{
word: "Frostbite",
category: "Cherrymatics",
meaning: "Ash on the end"
},

{
word: "Avalanche",
category: "Cherrymatics",
meaning: "Ash falls everywhere"
},

{
word: "Smurfing It",
category: "Cherrymatics",
meaning: "Ashing the frostbite/cherry"
},

{
word: "Crimson Curse",
category: "Cherrymatics",
meaning: "Cherry touched you"
},

{
word: "Crimson Curse Mark",
category: "Cherrymatics",
meaning: "Burn mark on skin"
},

{
word: "The crimson deceiver",
category: "Cherrymatics",
meaning: "Thinking you lost the cherry but it was actually a low battery"
},

{
word: "Frostbite factory",
category: "Cherrymatics",
meaning: "When the blueberry has lots of frostbite built up"
},

{
word: "The crimson cherry",
category: "Cherrymatics",
meaning: "Scooby Snack but cherry"
},

{
word: "Frohawk",
category: "Cherrymatics",
meaning: "When it's cannoning and there is frostbite on it"
},

{
word: "Scooby Snack",
category: "Inhale Events",
meaning: "Inhaling a nug"
},

{
word: "Stinging Rodger / Stinnie Roni",
category: "Inhale Events",
meaning: "Throat burn"
},

{
word: "Phantom Pull",
category: "Inhale Events",
meaning: "Pretending to inhale / pulling when it's not lit"
},

{
word: "Cloud Farming",
category: "Social / Lore",
meaning: "Hogging the j"
},

{
word: "Freeloader",
category: "Social / Lore",
meaning: "Only shows up when Blueberry's around"
},

{
word: "Tourist",
category: "Social / Lore",
meaning: "Can't inhale properly / coughing"
},

{
word: "Dusting",
category: "Social / Lore",
meaning: "Non-verbal"
},

{
word: "Couch Lock Protocol (CLP)",
category: "Social / Lore",
meaning: "Glued to your seat"
},

{
word: "El wiro",
category: "Social / Lore",
meaning: "Police"
},

{
word: "Obsidian obelisk",
category: "Social / Lore",
meaning: "Using a bong"
},

{
word: "Demetrius lime trinket (DLT)",
category: "Social / Lore",
meaning: "Cigarette"
},

{
word: "Hashbrown",
category: "Social / Lore",
meaning: "Weed brownies"
},

{
word: "Trailblazer",
category: "Social / Lore",
meaning: "Someone who you know blazes a lot"
},

{
word: "TBF",
category: "Social / Lore",
meaning: "Two Fat Buns"
}

];

const dictionaryGrid = document.getElementById("dictionaryGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

let currentCategory = "All";


// ==========================
// WORD OF THE DAY
// ==========================

function getDailyWord() {

    const now = new Date();

    const reset = new Date();

    reset.setHours(8,0,0,0);

    if (now < reset) {
        reset.setDate(reset.getDate() - 1);
    }

    const dayNumber = Math.floor(reset.getTime() / 86400000);

    return dictionary[dayNumber % dictionary.length];

}



function displayWordOfDay() {

    const container = document.getElementById("wordOfDay");

    if (!container) return;


    const word = getDailyWord();


    container.innerHTML = `

        <div class="category">
            ${word.category}
        </div>

        <h2>${word.word}</h2>

        <p>
            ${word.meaning}
        </p>

    `;

}



function updateCountdown(){

    const countdown =
    document.getElementById("countdown");


    if(!countdown) return;


    const now = new Date();

    let next = new Date();

    next.setHours(8,0,0,0);


    if(now >= next){

        next.setDate(next.getDate()+1);

    }


    const difference =
    next - now;


    const hours =
    Math.floor(difference / 3600000);


    const minutes =
    Math.floor(
        (difference % 3600000) / 60000
    );


    const seconds =
    Math.floor(
        (difference % 60000) / 1000
    );


    countdown.innerHTML =
    `
    Next discovery in:
    ${hours}h ${minutes}m ${seconds}s
    `;

}



// ==========================
// DICTIONARY
// ==========================


function createCard(entry){

return `

<div class="card" onclick="openTerm('${entry.word}')">

<div class="category">
${entry.category}
</div>

<h3>
${entry.word}
</h3>

<p>
${entry.meaning}
</p>

<button>
View Details
</button>

</div>

`;

}


function openTerm(word){

const entry = dictionary.find(
item => item.word === word
);

if(!entry) return;


const modal =
document.getElementById("termModal");

const details =
document.getElementById("termDetails");


details.innerHTML = `

<div class="category">
${entry.category}
</div>

<h2>
${entry.word}
</h2>

<div class="term-image">
Image coming soon
</div>

<p>
${entry.meaning}
</p>

<h3>
Blueberology Notes
</h3>

<p>
More lore and explanation will be added here.
</p>

`;


modal.style.display = "flex";

}

document
.getElementById("closeTerm")
.addEventListener(
"click",
()=>{

document
.getElementById("termModal")
.style.display="none";

});

function renderDictionary(){

const search =
searchInput.value
.toLowerCase()
.trim();


const filtered =
dictionary.filter(entry=>{


const matchesSearch =

entry.word
.toLowerCase()
.includes(search)

||

entry.meaning
.toLowerCase()
.includes(search);



const matchesCategory =

currentCategory === "All"

||

entry.category === currentCategory;



return matchesSearch && matchesCategory;


});



console.log("Filtered words:", filtered.length);

dictionaryGrid.innerHTML =

filtered
.map(createCard)
.join("");

}




searchInput.addEventListener(
"input",
renderDictionary
);



categoryButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


categoryButtons.forEach(btn=>

btn.classList.remove("active")

);


button.classList.add("active");


currentCategory =
button.dataset.category;


renderDictionary();


});
});


// ==========================
// QUIZ SYSTEM
// ==========================


const startQuiz =
document.getElementById("startQuiz");

const quizBox =
document.getElementById("quizBox");


let quizScore =
Number(
localStorage.getItem("blueberologyScore")
)
||
0;


let currentQuestion = 0;

let quizQuestions = [];





function getRank(score){


if(score >= 500){

return {
title:"👑 Grand Blueberologist",
next:"Maximum Rank",
progress:100
};

}


if(score >= 200){

return {
title:"📖 Lore Master",
next:"500 correct answers",
progress:(score/500)*100
};

}


if(score >= 100){

return {
title:"💨 Cloud Scholar",
next:"200 correct answers",
progress:(score/200)*100
};

}


if(score >= 50){

return {
title:"🔥 Cherry Keeper",
next:"100 correct answers",
progress:(score/100)*100
};

}


if(score >= 25){

return {
title:"🌿 Blueberry Apprentice",
next:"50 correct answers",
progress:(score/50)*100
};

}


if(score >= 10){

return {
title:"🍃 Berry Beginner",
next:"25 correct answers",
progress:(score/25)*100
};

}


return {
title:"🌱 Blueberry Seed",
next:"10 correct answers",
progress:(score/10)*100
};


}





function updateRank(){


const rank =
getRank(quizScore);


const title =
document.getElementById("rankTitle");


const count =
document.getElementById("correctCount");


const bar =
document.getElementById("rankProgress");


const next =
document.getElementById("nextRank");



if(title){

title.innerHTML =
rank.title;

}


if(count){

count.innerHTML =
quizScore;

}


if(bar){

bar.style.width =
rank.progress + "%";

}


if(next){

next.innerHTML =
"Next Rank: " + rank.next;

}


}





function createQuiz(){

    if(dictionary.length === 0){
        quizBox.innerHTML = "No terms available.";
        return;
    }

    quizQuestions = dictionary
        .sort(() => 0.5 - Math.random())
        .slice(0,5);

    currentQuestion = 0;

    showQuestion();

}





function showQuestion(){

    console.log("Quiz started", quizQuestions);

    const question = quizQuestions[currentQuestion];



const answers =
[
question.meaning,
dictionary[
Math.floor(Math.random()*dictionary.length)
].meaning,
dictionary[
Math.floor(Math.random()*dictionary.length)
].meaning
]
.sort(
()=>0.5-Math.random()
);



quizBox.innerHTML = `


<h3>
What does "${question.word}" mean?
</h3>


<div class="answers">

${answers.map(answer=>`

<button class="quiz-answer">

${answer}

</button>

`).join("")}


</div>


`;



document
.querySelectorAll(".quiz-answer")
.forEach(button=>{


button.addEventListener(
"click",
()=>{


if(button.innerHTML.trim()
===
question.meaning){

quizScore++;

localStorage.setItem(
"blueberologyScore",
quizScore
);

}


currentQuestion++;


if(currentQuestion < quizQuestions.length){

showQuestion();

}

else{

finishQuiz();

}


});

});


}





function finishQuiz(){


quizBox.innerHTML = `

<h3>
Quiz Complete
</h3>

<p>
Total correct answers:
${quizScore}
</p>

<button id="startQuiz" class="cta-button">
Play Again
</button>

`;


updateRank();


document
.getElementById("startQuiz")
.addEventListener(
"click",
createQuiz
);


}





if(startQuiz){

startQuiz.addEventListener(
"click",
createQuiz
);

}


updateRank();

// Refresh cards after changing favorites

document.addEventListener(
"click",
function(event){

    if(
    event.target.classList.contains("favorite-btn")
    ){

        renderDictionary();

    }

});


// Start page features

displayWordOfDay();

updateCountdown();

setInterval(
updateCountdown,
1000
);


renderDictionary();
