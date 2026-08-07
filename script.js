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
        .replace(/\s+/g,"-");

}



// ==========================
// DOM REFERENCES
// ==========================

const dictionaryGrid = document.getElementById("dictionaryGrid");
const searchInput = document.getElementById("searchInput");
const categoryContainer = document.querySelector(".category-buttons");

const wordContainer = document.getElementById("wordOfDay");
const countdown = document.getElementById("countdown");

const modal = document.getElementById("termModal");
const termDetails = document.getElementById("termDetails");
const closeTerm = document.getElementById("closeTerm");


let currentCategory = "All";





// ==========================
// AUTO CATEGORY BUTTONS
// ==========================

function createCategoryButtons(){

    if(!categoryContainer) return;


    const categories = [
        "All",
        ...new Set(
            dictionary.map(item=>item.category)
        )
    ];


    categoryContainer.innerHTML =
    categories.map(category=>`

        <button 
        class="category-btn ${category === "All" ? "active":""}"
        data-category="${category}">

        ${category}

        </button>

    `).join("");



    document
    .querySelectorAll(".category-btn")
    .forEach(button=>{

        button.addEventListener(
        "click",
        ()=>{


            document
            .querySelectorAll(".category-btn")
            .forEach(btn=>
                btn.classList.remove("active")
            );


            button.classList.add("active");


            currentCategory =
            button.dataset.category;


            renderDictionary();


        });


    });


}







// ==========================
// WORD OF THE DAY
// ==========================

function getDailyWord(){

    const reset = new Date();

    reset.setHours(8,0,0,0);


    const now = new Date();


    if(now < reset){

        reset.setDate(
            reset.getDate()-1
        );

    }


    const day =
    Math.floor(
        reset.getTime()/86400000
    );


    return dictionary[
        day % dictionary.length
    ];

}





function displayWordOfDay(){

    if(!wordContainer) return;


    const word =
    getDailyWord();



    wordContainer.innerHTML = `


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

    if(!countdown) return;


    const now = new Date();


    let next =
    new Date();


    next.setHours(
        8,
        0,
        0,
        0
    );


    if(now >= next){

        next.setDate(
            next.getDate()+1
        );

    }



    const time =
    next-now;



    const hours =
    Math.floor(
        time/3600000
    );


    const minutes =
    Math.floor(
        (time%3600000)/60000
    );


    const seconds =
    Math.floor(
        (time%60000)/1000
    );



    countdown.innerHTML = `

    Next discovery in:
    ${hours}h ${minutes}m ${seconds}s

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






function renderDictionary(){

    if(!dictionaryGrid) return;



    const search =
    searchInput.value
    .toLowerCase()
    .trim();




    const filtered =
    dictionary.filter(entry=>{


        const searchMatch =

        entry.word
        .toLowerCase()
        .includes(search)

        ||

        entry.meaning
        .toLowerCase()
        .includes(search);



        const categoryMatch =

        currentCategory === "All"

        ||

        entry.category === currentCategory;



        return searchMatch && categoryMatch;


    });




    dictionaryGrid.innerHTML =

    filtered
    .map(createCard)
    .join("");


}






// ==========================
// SEARCH
// ==========================

if(searchInput){

    searchInput.addEventListener(
        "input",
        renderDictionary
    );

}







// ==========================
// TERM MODAL
// ==========================


function openTerm(index){


    const entry =
    dictionary[index];


    if(!entry) return;



    termDetails.innerHTML = `


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

    More lore will be discovered...

    </p>



    `;



    modal.style.display="flex";


}





if(closeTerm){

closeTerm.addEventListener(
"click",
()=>{

modal.style.display="none";

});

}





if(modal){

modal.addEventListener(
"click",
(e)=>{

if(e.target === modal){

modal.style.display="none";

}

});

}






// ==========================
// START ARCHIVE
// ==========================

createCategoryButtons();

displayWordOfDay();

updateCountdown();

setInterval(updateCountdown,1000);

renderDictionary();


// ==========================
// BLUEBEROLOGY XP SYSTEM
// ==========================


const startQuiz = document.getElementById("startQuiz");
const quizBox = document.getElementById("quizBox");


let blueberologyXP =
Number(localStorage.getItem("blueberologyXP")) || 0;


let currentQuestion = 0;
let quizQuestions = [];
let roundScore = 0;
let answering = false;



// ==========================
// SHUFFLE
// ==========================

function shuffle(array){

return array.sort(
()=>Math.random()-0.5
);

}



// ==========================
// RANKS
// ==========================

const ranks = [

{
name:"🌱 Blueberry Seed",
xp:0
},

{
name:"🍃 Berry Beginner",
xp:10
},

{
name:"🌿 Blueberry Apprentice",
xp:25
},

{
name:"🔥 Cherry Keeper",
xp:50
},

{
name:"💨 Cloud Scholar",
xp:100
},

{
name:"📖 Lore Master",
xp:250
},

{
name:"👑 Grand Blueberologist",
xp:500
},

{
name:"🌌 Supreme Blueberologist",
xp:1000
}

];





function getRankData(xp){


let current = ranks[0];
let next = null;



for(let i=0;i<ranks.length;i++){


if(xp >= ranks[i].xp){

current = ranks[i];
next = ranks[i+1] || null;

}

}



let progress = 100;



if(next){

progress = Math.min(
100,
(
(xp-current.xp)
/
(next.xp-current.xp)
)
*100
);

}



return {

current,
next,
progress

};


}







function updateRank(){


const data =
getRankData(blueberologyXP);



const title =
document.getElementById("rankTitle");


const count =
document.getElementById("correctCount");


const bar =
document.getElementById("rankProgress");


const next =
document.getElementById("nextRank");



if(title)
title.innerHTML = data.current.name;



if(count)
count.innerHTML = blueberologyXP + " XP";



if(bar)
bar.style.width = data.progress + "%";



if(next){

next.innerHTML =

data.next

?

`Next Rank: ${data.next.name} (${data.next.xp} XP)`

:

"Maximum Rank Achieved";

}


}







// ==========================
// XP REWARDS
// ==========================


function getXPReward(rarity){


switch(rarity){


case "Legendary":
return 25;


case "Rare":
return 10;


case "Uncommon":
return 5;


default:
return 2;


}


}







// ==========================
// START QUIZ
// ==========================


function createQuiz(){


if(!quizBox)
return;



quizQuestions = shuffle(
[...dictionary]
).slice(0,5);



currentQuestion = 0;
roundScore = 0;


showQuestion();


}








// ==========================
// SHOW QUESTION
// ==========================


function showQuestion(){


if(!quizQuestions[currentQuestion]){

finishQuiz();
return;

}



answering = false;



const question =
quizQuestions[currentQuestion];



const wrongAnswers = shuffle(

[...dictionary]

.filter(
item =>
item.word !== question.word
)

).slice(0,2);




const answers = shuffle([

question,

...wrongAnswers

]);





quizBox.innerHTML = `


<h3>
Question ${currentQuestion+1}/5
</h3>


<h2>
What does "${question.word}" mean?
</h2>


<div class="answers">


${answers.map(answer=>`


<button
class="quiz-answer"
data-word="${answer.word}">

${answer.meaning}

</button>


`).join("")}


</div>


`;







document
.querySelectorAll(".quiz-answer")
.forEach(button=>{


button.onclick = function(){



if(answering)
return;


answering = true;



const chosen =
dictionary.find(
item =>
item.word === button.dataset.word
);



if(chosen.word === question.word){


const xp =
getXPReward(question.rarity);



blueberologyXP += xp;

roundScore++;



localStorage.setItem(
"blueberologyXP",
blueberologyXP
);



button.classList.add(
"correct"
);



button.innerHTML +=
`
<br>
+${xp} XP
`;



}

else{


button.classList.add(
"wrong"
);



document
.querySelectorAll(".quiz-answer")
.forEach(btn=>{


if(btn.dataset.word === question.word){

btn.classList.add(
"correct"
);

}


});


}



document
.querySelectorAll(".quiz-answer")
.forEach(btn=>{

btn.disabled=true;

});




setTimeout(()=>{


currentQuestion++;



if(currentQuestion < quizQuestions.length){

showQuestion();

}

else{

finishQuiz();

}



},800);



};


});


}







// ==========================
// FINISH QUIZ
// ==========================


function finishQuiz(){


if(!quizBox)
return;



quizBox.innerHTML = `


<h2>
Archive Complete
</h2>


<h3>
Round Score:
${roundScore}/5
</h3>


<p>
Total XP:
${blueberologyXP}
</p>


<button
id="restartQuiz"
class="cta-button">

Run Again

</button>


`;



updateRank();



const restart =
document.getElementById("restartQuiz");



if(restart){

restart.onclick = createQuiz;

}


}







if(startQuiz){

startQuiz.onclick = createQuiz;

}



updateRank();
