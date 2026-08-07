const dictionary = [

{
    word: "Gangrene",
    category: "The Basics / Assembly",
    meaning: "Bad weed",
    image: "gangrene.jpg.png",
    rarity: "Rare"
},

{
    word: "Laundry",
    category: "The Basics / Materials",
    meaning: "Weed",
    rarity: "Common"
},

{
    word: "Drying",
    category: "The Basics / Materials",
    meaning: "Grinding",
    rarity: "Common"
},

{
    word: "Dryer",
    category: "The Basics / Materials",
    meaning: "Grinder",
    rarity: "Common"
},

{
    word: "Laundry powder",
    category: "The Basics / Materials",
    meaning: "Finely ground powder at the bottom of the grinder",
    rarity: "Uncommon"
},

{
    word: "Canopy",
    category: "The Basics / Materials",
    meaning: "Papers",
    rarity: "Common"
},

{
    word: "Carti",
    category: "The Basics / Materials",
    meaning: "Cardboard filter",
    rarity: "Common"
},

{
    word: "Breezy Backdoor",
    category: "The Basics / Materials",
    meaning: "Loose carti",
    rarity: "Rare"
},

{
    word: "Juno",
    category: "Rolling / Assembly",
    meaning: "Rolling the j",
    rarity: "Uncommon"
},

{
    word: "Keyhole",
    category: "Rolling / Assembly",
    meaning: "Twisty tip at the end",
    rarity: "Uncommon"
},

{
    word: "Set the Canopy",
    category: "Rolling / Assembly",
    meaning: "Licking/sealing the j",
    rarity: "Common"
},

{
    word: "Flooded Engine",
    category: "Rolling / Assembly",
    meaning: "Too wet from setting the canopy",
    rarity: "Rare"
},

{
    word: "Blueberry",
    category: "Blueberry Family",
    meaning: "The j (addressed as a person)",
    rarity: "Common"
},

{
    word: "Raspberry",
    category: "Blueberry Family",
    meaning: "A blunt",
    rarity: "Common"
},

{
    word: "Snaps",
    category: "Blueberry Family",
    meaning: "The lighter",
    rarity: "Common"
},

{
    word: "Cherry",
    category: "Light-Up & Ignition",
    meaning: "The red burning tip",
    rarity: "Common"
},

{
    word: "Low Battery",
    category: "Light-Up & Ignition",
    meaning: "Can't see the cherry but it's still burning",
    rarity: "Rare"
},

{
    word: "Bluetooth",
    category: "Light-Up & Ignition",
    meaning: "Being skilled enough to snap the blueberry without touching the snaps to it",
    rarity: "Rare"
},

{
    word: "Afterburner",
    category: "Light-Up & Ignition",
    meaning: "The entire tip is red and nothing but cherry",
    rarity: "Uncommon"
},

{
    word: "Tightrope",
    category: "Smoke Flow",
    meaning: "Burning perfectly even",
    rarity: "Uncommon"
},

{
    word: "Puffington Express",
    category: "Smoke Flow",
    meaning: "Lots of smoke produced per puff",
    rarity: "Uncommon"
},

{
    word: "Fog Machine",
    category: "Smoke Flow",
    meaning: "Ridiculous exhale cloud",
    rarity: "Rare"
},

{
    word: "LP",
    category: "Smoke Flow",
    meaning: "Last puff",
    rarity: "Common"
},

{
    word: "Volcano Mode",
    category: "Burn Events",
    meaning: "Burning super fast",
    rarity: "Rare"
},

{
    word: "Tundra / Tunny / Albino",
    category: "Burn Events",
    meaning: "The j has gone out",
    rarity: "Common"
},

{
    word: "Taniwha",
    category: "Burn Events",
    meaning: "Stomping the j out",
    rarity: "Rare"
},

{
    word: "Campfire Story",
    category: "Burn Events",
    meaning: "Someone holding the blueberry and talking instead of smoking",
    rarity: "Common"
},

{
    word: "Cherrymatics",
    category: "Cherrymatics",
    meaning: "Any event involving the cherry",
    rarity: "Uncommon"
},

{
    word: "Cherrymancer",
    category: "Cherrymatics",
    meaning: "Someone skilled at reviving the cherry",
    rarity: "Rare"
},

{
    word: "Frostbite",
    category: "Cherrymatics",
    meaning: "Ash on the end",
    rarity: "Common"
},

{
    word: "Avalanche",
    category: "Cherrymatics",
    meaning: "Ash falls everywhere",
    rarity: "Uncommon"
},

{
    word: "Smurfing It",
    category: "Cherrymatics",
    meaning: "Ashing the frostbite/cherry",
    rarity: "Uncommon"
},

{
    word: "Crimson Curse",
    category: "Cherrymatics",
    meaning: "Cherry touched you",
    rarity: "Legendary"
},

{
    word: "Crimson Curse Mark",
    category: "Cherrymatics",
    meaning: "Burn mark on skin",
    rarity: "Legendary"
},

{
    word: "The crimson deceiver",
    category: "Cherrymatics",
    meaning: "Thinking you lost the cherry but it was actually a low battery",
    rarity: "Legendary"
}

];


// ==========================
// RARITY SYSTEM
// ==========================

function getRarityClass(rarity){

    if(!rarity) return "common";

    return rarity
        .toLowerCase()
        .replace(/\s+/g, "-");

}


// ==========================
// DOM REFERENCES
// ==========================

const dictionaryGrid = document.getElementById("dictionaryGrid");

const searchInput = document.getElementById("searchInput");

const categoryButtons =
document.querySelectorAll(".category-btn");


let currentCategory = "All";



// ==========================
// WORD OF THE DAY
// ==========================

function getDailyWord(){

    const now = new Date();

    const reset = new Date();

    reset.setHours(8,0,0,0);


    if(now < reset){
        reset.setDate(reset.getDate() - 1);
    }


    const dayNumber =
    Math.floor(reset.getTime() / 86400000);


    return dictionary[
        dayNumber % dictionary.length
    ];

}



function displayWordOfDay(){

    const container =
    document.getElementById("wordOfDay");


    if(!container) return;


    const word =
    getDailyWord();



    container.innerHTML = `

    <div class="category">
        ${word.category}
    </div>


    <div class="rarity ${getRarityClass(word.rarity)}">
        ${word.rarity}
    </div>


    <h2>
        ${word.word}
    </h2>


    <p>
        ${word.meaning}
    </p>

    `;

}



// ==========================
// COUNTDOWN
// ==========================

function updateCountdown(){

    const countdown =
    document.getElementById("countdown");


    if(!countdown) return;


    const now = new Date();

    let next = new Date();


    next.setHours(8,0,0,0);



    if(now >= next){

        next.setDate(
            next.getDate()+1
        );

    }



    const difference =
    next - now;



    const hours =
    Math.floor(
        difference / 3600000
    );


    const minutes =
    Math.floor(
        (difference % 3600000) / 60000
    );


    const seconds =
    Math.floor(
        (difference % 60000) / 1000
    );



    countdown.innerHTML = `

    Next discovery in:

    ${hours}h
    ${minutes}m
    ${seconds}s

    `;

}



// ==========================
// DICTIONARY CARDS
// ==========================


function createCard(entry){

    const index =
    dictionary.indexOf(entry);



return `

<div class="card"
onclick="openTerm(${index})">


<div class="category">

${entry.category}

</div>



<div class="rarity ${getRarityClass(entry.rarity)}">

${entry.rarity}

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




function openTerm(index){


const entry =
dictionary[index];


if(!entry) return;



const modal =
document.getElementById("termModal");


const details =
document.getElementById("termDetails");



details.innerHTML = `


<div class="category">

${entry.category}

</div>



<div class="rarity ${getRarityClass(entry.rarity)}">

${entry.rarity}

</div>



<h2>

${entry.word}

</h2>



<div class="term-image">

${
entry.image

?

`<img src="${entry.image}" alt="${entry.word}">`

:

"Blueberology Archive"

}

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



modal.style.display =
"flex";


}




// CLOSE MODAL

const closeTerm =
document.getElementById("closeTerm");


if(closeTerm){

closeTerm.addEventListener(
"click",
()=>{

document
.getElementById("termModal")
.style.display="none";

});

}




// ==========================
// RENDER DICTIONARY
// ==========================


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



return (

matchesSearch

&&

matchesCategory

);


});





dictionaryGrid.innerHTML =

filtered
.map(createCard)
.join("");

}




// SEARCH

searchInput.addEventListener(
"input",
renderDictionary
);




// CATEGORY BUTTONS

categoryButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


categoryButtons.forEach(btn=>{

btn.classList.remove("active");

});



button.classList.add("active");



currentCategory =
button.dataset.category;



renderDictionary();


});

});


// ==========================
// QUIZ SYSTEM
// ==========================

const startQuiz = document.getElementById("startQuiz");
const quizBox = document.getElementById("quizBox");

let quizScore = Number(
    localStorage.getItem("blueberologyScore")
) || 0;

let currentQuizScore = 0;
let currentQuestion = 0;
let quizQuestions = [];



// ==========================
// RANK SYSTEM
// ==========================

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

    const rank = getRank(quizScore);

    const title = document.getElementById("rankTitle");
    const count = document.getElementById("correctCount");
    const bar = document.getElementById("rankProgress");
    const next = document.getElementById("nextRank");


    if(title)
        title.innerHTML = rank.title;


    if(count)
        count.innerHTML = quizScore;


    if(bar)
        bar.style.width = rank.progress + "%";


    if(next)
        next.innerHTML = "Next Rank: " + rank.next;

}




// ==========================
// START QUIZ
// ==========================

function createQuiz(){

    if(dictionary.length < 3){
        quizBox.innerHTML = "Not enough terms available.";
        return;
    }


    quizQuestions = [...dictionary]
        .sort(() => 0.5 - Math.random())
        .slice(0,5);


    currentQuestion = 0;
    currentQuizScore = 0;

    showQuestion();

}




// ==========================
// QUESTIONS
// ==========================

function showQuestion(){

    const question = quizQuestions[currentQuestion];


    let wrongAnswers = [...dictionary]
        .filter(item => item.word !== question.word)
        .sort(() => 0.5 - Math.random())
        .slice(0,2);


    let answers = [
        question,
        ...wrongAnswers
    ];


    answers.sort(() => 0.5 - Math.random());



    quizBox.innerHTML = `

    <h3>
    Question ${currentQuestion + 1}/5
    </h3>

    <h2>
    What does "${question.word}" mean?
    </h2>


    <div class="answers">

    ${answers.map(answer => `

        <button class="quiz-answer"
        data-answer="${answer.meaning}">

        ${answer.meaning}

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


            const selected =
            button.dataset.answer;


            if(selected === question.meaning){

                currentQuizScore++;

                quizScore++;

                localStorage.setItem(
                    "blueberologyScore",
                    quizScore
                );


                button.style.background = "#4CAF50";

            }

            else{

                button.style.background = "#d9534f";

            }



            setTimeout(()=>{

                currentQuestion++;


                if(currentQuestion < quizQuestions.length){

                    showQuestion();

                }

                else{

                    finishQuiz();

                }


            },600);



        });


    });


}




// ==========================
// FINISH QUIZ
// ==========================

function finishQuiz(){


quizBox.innerHTML = `

<h2>
Quiz Complete
</h2>


<p>
Score this round:
${currentQuizScore}/5
</p>


<p>
Total Blueberology XP:
${quizScore}
</p>


<button id="restartQuiz" class="cta-button">
Play Again
</button>


`;


updateRank();


document
.getElementById("restartQuiz")
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
