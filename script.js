// ==========================================================
// BLUEBEROLOGY DICTIONARY
// ==========================================================

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


// ==========================================================
// RARITY
// ==========================================================

function getRarityClass(rarity) {

    if (!rarity) {
        return "common";
    }

    return rarity
        .toLowerCase()
        .replace(/\s+/g, "-");

}


// ==========================================================
// DOM REFERENCES
// ==========================================================

const dictionaryGrid =
    document.getElementById("dictionaryGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryContainer =
    document.querySelector(".category-buttons");

const wordContainer =
    document.getElementById("wordOfDay");

const countdown =
    document.getElementById("countdown");

const modal =
    document.getElementById("termModal");

const termDetails =
    document.getElementById("termDetails");

const closeTerm =
    document.getElementById("closeTerm");

const startQuiz =
    document.getElementById("startQuiz");

const quizBox =
    document.getElementById("quizBox");


let currentCategory = "All";


// ==========================================================
// RANKS
// ==========================================================

const ranks = [

    {
        name: "🌱 Blueberry Seed",
        xp: 0
    },

    {
        name: "🍃 Berry Beginner",
        xp: 10
    },

    {
        name: "🌿 Blueberry Apprentice",
        xp: 25
    },

    {
        name: "🫐 Berry Scholar",
        xp: 50
    },

    {
        name: "🔥 Crimson Guardian",
        xp: 100
    },

    {
        name: "💨 Cloud Scholar",
        xp: 175
    },

    {
        name: "🔥 Cherry Keeper",
        xp: 300
    },

    {
        name: "🧪 Blaze Alchemist",
        xp: 500
    },

    {
        name: "🔮 Cherrymancer",
        xp: 750
    },

    {
        name: "👑 Grand Blueberologist",
        xp: 1000
    },

    {
        name: "🫐 Blueberry Master",
        xp: 1500
    },

    {
        name: "🌌 Supreme Blueberologist",
        xp: 2500
    },

    {
        name: "💎 Mythic Cherrymancer",
        xp: 4000
    },

    {
        name: "🌠 Cosmic Blaze Sage",
        xp: 6000
    },

    {
        name: "🐉 Demigod of Blueberology",
        xp: 10000
    }

];


// ==========================================================
// XP / PLAYER DATA
// ==========================================================

let blueberologyXP =
    Number(localStorage.getItem("blueberologyXP")) || 0;

let quizStreak =
    Number(localStorage.getItem("blueberologyStreak")) || 0;

let bestStreak =
    Number(localStorage.getItem("blueberologyBestStreak")) || 0;

let correctAnswers =
    Number(localStorage.getItem("blueberologyCorrect")) || 0;

let perfectQuizzes =
    Number(localStorage.getItem("blueberologyPerfect")) || 0;

let currentQuestion = 0;

let quizQuestions = [];

let roundScore = 0;

let answering = false;


// ==========================================================
// SHUFFLE
// ==========================================================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
            [array[j], array[i]];

    }

    return array;

}


// ==========================================================
// RANK FUNCTIONS
// ==========================================================

function getRankData(xp) {

    let current = ranks[0];

    let next = null;

    for (let i = 0; i < ranks.length; i++) {

        if (xp >= ranks[i].xp) {

            current = ranks[i];

            next =
                ranks[i + 1] || null;

        }

    }

    let progress = 100;

    if (next) {

        progress =
            (
                (xp - current.xp) /
                (next.xp - current.xp)
            ) * 100;

        progress =
            Math.max(
                0,
                Math.min(100, progress)
            );

    }

    return {
        current,
        next,
        progress
    };

}


function getCurrentRankIndex(xp) {

    let index = 0;

    for (let i = 0; i < ranks.length; i++) {

        if (xp >= ranks[i].xp) {

            index = i;

        }

    }

    return index;

}


// ==========================================================
// UPDATE RANK UI
// ==========================================================

function updateRank() {

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


    if (title) {

        title.textContent =
            data.current.name;

    }


    if (count) {

        count.textContent =
            blueberologyXP + " XP";

    }


    if (bar) {

        bar.style.width =
            data.progress + "%";

    }


    if (next) {

        next.textContent =
            data.next
                ? `Next Rank: ${data.next.name} (${data.next.xp} XP)`
                : "Maximum Rank Achieved";

    }

}


// ==========================================================
// RANK-UP POPUP
// ==========================================================

const rankUpPopup =
    document.getElementById("rankUpPopup");

const closeRankUp =
    document.getElementById("closeRankUp");

const rankUpRank =
    document.getElementById("rankUpRank");

const rankUpMessage =
    document.getElementById("rankUpMessage");


function showRankUp(rank) {

    if (!rankUpPopup) return;

    if (rankUpRank) {
        rankUpRank.textContent = rank.name;
    }

    if (rankUpMessage) {
        rankUpMessage.textContent =
            `You've reached ${rank.xp} XP!`;
    }

    rankUpPopup.classList.add("show");

}


// CLOSE BUTTON

if (closeRankUp) {

    closeRankUp.onclick = function(event) {

        event.preventDefault();
        event.stopPropagation();

        rankUpPopup.classList.remove("show");

    };

}


// CLICK OUTSIDE POPUP

if (rankUpPopup) {

    rankUpPopup.onclick = function(event) {

        if (event.target === rankUpPopup) {

            rankUpPopup.classList.remove("show");

        }

    };

}


// ESC KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        if (rankUpPopup) {

            rankUpPopup.classList.remove("show");

        }

    }

});

// ==========================================================
// CATEGORY BUTTONS
// ==========================================================

function createCategoryButtons() {

    if (!categoryContainer) {
        return;
    }


    const categories = [
        "All",
        ...new Set(
            dictionary.map(
                item => item.category
            )
        )
    ];


    categoryContainer.innerHTML =
        categories.map(category => `

            <button
                class="category-btn ${category === "All" ? "active" : ""}"
                data-category="${category}"
                type="button"
            >
                ${category}
            </button>

        `).join("");


    categoryContainer
        .querySelectorAll(".category-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    categoryContainer
                        .querySelectorAll(".category-btn")
                        .forEach(btn => {

                            btn.classList.remove("active");

                        });


                    button.classList.add("active");


                    currentCategory =
                        button.dataset.category;


                    renderDictionary();

                }
            );

        });

}


// ==========================================================
// DAILY WORD
// ==========================================================

function getDailyWord() {

    const now = new Date();

    const reset = new Date();

    reset.setHours(
        8,
        0,
        0,
        0
    );


    if (now < reset) {

        reset.setDate(
            reset.getDate() - 1
        );

    }


    const day =
        Math.floor(
            reset.getTime() / 86400000
        );


    return dictionary[
        ((day % dictionary.length) +
            dictionary.length) %
        dictionary.length
    ];

}


function displayWordOfDay() {

    if (!wordContainer) {
        return;
    }


    const word =
        getDailyWord();


    wordContainer.innerHTML = `

        <div class="daily-card">

            <div class="daily-header">
                <span>📖 Daily Discovery</span>
            </div>

            <div class="category">
                ${word.category}
            </div>

            <div class="rarity ${getRarityClass(word.rarity)}">
                ${word.rarity}
            </div>

            <h2>
                ${word.word}
            </h2>

            ${
                word.image
                    ? `
                        <img
                            class="daily-image"
                            src="${word.image}"
                            alt="${word.word}"
                        >
                    `
                    : ""
            }

            <p>
                ${word.meaning}
            </p>

        </div>

    `;

}


// ==========================================================
// COUNTDOWN
// ==========================================================

function updateCountdown() {

    if (!countdown) {
        return;
    }


    const now = new Date();

    const next = new Date();


    next.setHours(
        8,
        0,
        0,
        0
    );


    if (now >= next) {

        next.setDate(
            next.getDate() + 1
        );

    }


    const time =
        next.getTime() - now.getTime();


    const hours =
        Math.floor(
            time / 3600000
        );


    const minutes =
        Math.floor(
            (time % 3600000) / 60000
        );


    const seconds =
        Math.floor(
            (time % 60000) / 1000
        );


    countdown.textContent =
        `Next discovery in: ${hours}h ${minutes}m ${seconds}s`;

}


// ==========================================================
// DICTIONARY
// ==========================================================

function createCard(entry) {

    const index =
        dictionary.indexOf(entry);


    return `

        <div
            class="card"
            onclick="openTerm(${index})"
        >

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

            <button
                type="button"
                onclick="event.stopPropagation(); openTerm(${index})"
            >
                View Details
            </button>

        </div>

    `;

}


function renderDictionary() {

    if (!dictionaryGrid) {
        return;
    }


    const search =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    const filtered =
        dictionary.filter(entry => {

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


            return (
                searchMatch &&
                categoryMatch
            );

        });


    if (filtered.length === 0) {

        dictionaryGrid.innerHTML = `

            <div class="empty-state">

                <h3>
                    No terms found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    dictionaryGrid.innerHTML =
        filtered
            .map(createCard)
            .join("");

}


// ==========================================================
// SEARCH
// ==========================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        renderDictionary
    );

}


// ==========================================================
// TERM MODAL
// ==========================================================

function openTerm(index) {

    const entry =
        dictionary[index];


    if (
        !entry ||
        !termDetails ||
        !modal
    ) {
        return;
    }


    discoverTerm(entry.word);


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
                    ? `
                        <img
                            src="${entry.image}"
                            alt="${entry.word}"
                        >
                    `
                    : `
                        <span>
                            Blueberology Archive
                        </span>
                    `
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


    modal.style.display = "flex";

}


if (closeTerm && modal) {

    closeTerm.addEventListener(
        "click",
        () => {

            modal.style.display = "none";

        }
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                modal.style.display = "none";

            }

        }
    );

}


// ==========================================================
// ESCAPE KEY FOR MODALS
// ==========================================================

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        if (modal) {

            modal.style.display = "none";

        }


        if (rankUpPopup) {

            rankUpPopup.classList.remove("show");

        }

    }
);


// ==========================================================
// STREAK
// ==========================================================

function updateStreakDisplay() {

    const streak =
        document.getElementById("quizStreak");

    const best =
        document.getElementById("bestStreak");


    if (streak) {

        streak.textContent =
            quizStreak;

    }


    if (best) {

        best.textContent =
            bestStreak;

    }

}


function saveStreak() {

    localStorage.setItem(
        "blueberologyStreak",
        quizStreak
    );

    localStorage.setItem(
        "blueberologyBestStreak",
        bestStreak
    );

}


// ==========================================================
// ACHIEVEMENTS
// ==========================================================

const achievements = [

    {
        id: "first_quiz",
        icon: "🫐",
        name: "First Berry",
        description: "Answer your first quiz question correctly.",
        condition: () => correctAnswers >= 1
    },

    {
        id: "five_correct",
        icon: "🔥",
        name: "Hot Start",
        description: "Answer 5 questions correctly.",
        condition: () => correctAnswers >= 5
    },

    {
        id: "perfect_quiz",
        icon: "💨",
        name: "Puffington",
        description: "Get a perfect 5/5 quiz.",
        condition: () => perfectQuizzes >= 1
    },

    {
        id: "ten_terms",
        icon: "📚",
        name: "Berry Collector",
        description: "Discover 10 dictionary terms.",
        condition: () => getDiscoveredTerms().length >= 10
    },

    {
        id: "twenty_terms",
        icon: "📖",
        name: "Dictionary Hunter",
        description: "Discover 20 dictionary terms.",
        condition: () => getDiscoveredTerms().length >= 20
    },

    {
        id: "cherrymancer",
        icon: "🔮",
        name: "Cherrymancer",
        description: "Reach 750 XP.",
        condition: () => blueberologyXP >= 750
    },

    {
        id: "mythic",
        icon: "💎",
        name: "Mythic",
        description: "Reach 4,000 XP.",
        condition: () => blueberologyXP >= 4000
    },

    {
        id: "demigod",
        icon: "🐉",
        name: "Demigod",
        description: "Reach 10,000 XP.",
        condition: () => blueberologyXP >= 10000
    }

];


function getUnlockedAchievements() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "blueberologyAchievements"
            )
        ) || [];

    }

    catch {

        return [];

    }

}


function saveUnlockedAchievements(list) {

    localStorage.setItem(
        "blueberologyAchievements",
        JSON.stringify(list)
    );

}


function checkAchievements() {

    const unlocked =
        getUnlockedAchievements();


    let changed = false;


    achievements.forEach(
        achievement => {

            if (
                achievement.condition()
                &&
                !unlocked.includes(
                    achievement.id
                )
            ) {

                unlocked.push(
                    achievement.id
                );

                changed = true;

            }

        }
    );


    if (changed) {

        saveUnlockedAchievements(
            unlocked
        );

    }


    renderAchievements();

}


function renderAchievements() {

    const grid =
        document.getElementById(
            "achievementGrid"
        );


    if (!grid) {
        return;
    }


    const unlocked =
        getUnlockedAchievements();


    grid.innerHTML =
        achievements.map(
            achievement => {

                const isUnlocked =
                    unlocked.includes(
                        achievement.id
                    );


                return `

                    <div class="
                        achievement-card
                        ${isUnlocked ? "unlocked" : ""}
                    ">

                        <div class="achievement-icon">
                            ${achievement.icon}
                        </div>

                        <h3>
                            ${achievement.name}
                        </h3>

                        <p>
                            ${achievement.description}
                        </p>

                        <span class="achievement-status">

                            ${
                                isUnlocked
                                    ? "Unlocked"
                                    : "Locked"
                            }

                        </span>

                    </div>

                `;

            }
        ).join("");

}


// ==========================================================
// DICTIONARY DISCOVERY
// ==========================================================

function getDiscoveredTerms() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "blueberologyDiscovered"
            )
        ) || [];

    }

    catch {

        return [];

    }

}


function discoverTerm(word) {

    const discovered =
        getDiscoveredTerms();


    if (!discovered.includes(word)) {

        discovered.push(word);


        localStorage.setItem(
            "blueberologyDiscovered",
            JSON.stringify(discovered)
        );

    }


    updateCollection();

    checkAchievements();

}


function updateCollection() {

    const discovered =
        getDiscoveredTerms();


    const total =
        dictionary.length;


    const amount =
        discovered.length;


    const percentage =
        total > 0
            ? (amount / total) * 100
            : 0;


    const text =
        document.getElementById(
            "collectionProgress"
        );


    const bar =
        document.getElementById(
            "collectionProgressBar"
        );


    if (text) {

        text.textContent =
            `${amount} / ${total} Terms Discovered`;

    }


    if (bar) {

        bar.style.width =
            percentage + "%";

    }

}


// ==========================================================
// XP REWARDS
// ==========================================================

function getXPReward(rarity) {

    switch (rarity) {

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


// ==========================================================
// QUIZ
// ==========================================================

function createQuiz() {

    if (!quizBox) {
        return;
    }


    quizQuestions =
        shuffle([...dictionary])
            .slice(0, 5);


    currentQuestion = 0;

    roundScore = 0;

    answering = false;


    showQuestion();

}


function showQuestion() {

    if (
        !quizQuestions[currentQuestion]
    ) {

        finishQuiz();

        return;

    }


    answering = false;


    const question =
        quizQuestions[currentQuestion];


    const wrongAnswers =
        shuffle(

            dictionary.filter(
                item =>
                    item.word !== question.word
            )

        ).slice(0, 2);


    const answers =
        shuffle([
            question,
            ...wrongAnswers
        ]);


    quizBox.innerHTML = `

        <h3>
            Question ${currentQuestion + 1}/5
        </h3>

        <h2>
            What does "${question.word}" mean?
        </h2>

        <div class="answers">

            ${answers.map(answer => `

                <button
                    class="quiz-answer"
                    data-word="${answer.word}"
                    type="button"
                >
                    ${answer.meaning}
                </button>

            `).join("")}

        </div>

    `;


    quizBox
        .querySelectorAll(".quiz-answer")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    if (answering) {
                        return;
                    }


                    answering = true;


                    const chosen =
                        dictionary.find(
                            item =>
                                item.word ===
                                button.dataset.word
                        );


                    if (
                        chosen &&
                        chosen.word ===
                        question.word
                    ) {

                        handleCorrectAnswer(
                            button,
                            question
                        );

                    }

                    else {

                        handleWrongAnswer(
                            button,
                            question
                        );

                    }


                    quizBox
                        .querySelectorAll(
                            ".quiz-answer"
                        )
                        .forEach(btn => {

                            btn.disabled = true;

                        });


                    setTimeout(
                        () => {

                            currentQuestion++;


                            if (
                                currentQuestion <
                                quizQuestions.length
                            ) {

                                showQuestion();

                            }

                            else {

                                finishQuiz();

                            }

                        },
                        800
                    );

                }
            );

        });

}


function handleCorrectAnswer(
    button,
    question
) {

    const xp =
        getXPReward(
            question.rarity
        );


    const oldRankIndex =
        getCurrentRankIndex(
            blueberologyXP
        );


    blueberologyXP += xp;

    roundScore++;

    quizStreak++;

    correctAnswers++;


    if (quizStreak > bestStreak) {

        bestStreak =
            quizStreak;

    }


    localStorage.setItem(
        "blueberologyXP",
        blueberologyXP
    );


    localStorage.setItem(
        "blueberologyCorrect",
        correctAnswers
    );


    saveStreak();


    updateRank();

    updateStreakDisplay();


    const newRankIndex =
        getCurrentRankIndex(
            blueberologyXP
        );


    if (
        newRankIndex >
        oldRankIndex
    ) {

        showRankUp(
            ranks[newRankIndex]
        );

    }


    button.classList.add(
        "correct"
    );


    button.innerHTML += `
        <br>
        +${xp} XP
    `;


    checkAchievements();

}


function handleWrongAnswer(
    button,
    question
) {

    quizStreak = 0;

    saveStreak();

    updateStreakDisplay();


    button.classList.add(
        "wrong"
    );


    quizBox
        .querySelectorAll(".quiz-answer")
        .forEach(btn => {

            if (
                btn.dataset.word ===
                question.word
            ) {

                btn.classList.add(
                    "correct"
                );

            }

        });

}


// ==========================================================
// FINISH QUIZ
// ==========================================================

function finishQuiz() {

    if (!quizBox) {
        return;
    }


    if (roundScore === 5) {

        perfectQuizzes++;


        localStorage.setItem(
            "blueberologyPerfect",
            perfectQuizzes
        );

    }


    checkAchievements();


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

        <p>
            🔥 Current Streak:
            ${quizStreak}
        </p>

        <p>
            🏆 Best Streak:
            ${bestStreak}
        </p>

        ${
            roundScore === 5
                ? `
                    <p>
                        💨 Perfect Quiz!
                    </p>
                `
                : ""
        }

        <button
            id="restartQuiz"
            class="cta-button"
            type="button"
        >
            Run Again
        </button>

    `;


    updateRank();

    updateStreakDisplay();


    const restart =
        document.getElementById(
            "restartQuiz"
        );


    if (restart) {

        restart.addEventListener(
            "click",
            createQuiz
        );

    }

}


// ==========================================================
// START QUIZ BUTTON
// ==========================================================

if (startQuiz) {

    startQuiz.addEventListener(
        "click",
        createQuiz
    );

}


// ==========================================================
// INITIALIZE EVERYTHING
// ==========================================================

createCategoryButtons();

displayWordOfDay();

updateCountdown();

setInterval(
    updateCountdown,
    1000
);

renderDictionary();

updateRank();

updateStreakDisplay();

updateCollection();

renderAchievements();

checkAchievements();
