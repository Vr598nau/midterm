const story = {
    start: {
        text: "You find yourself in a dark alley. What do you do?",
        choices: [
            { text: "Investigate the noise", consequence: "noisyStreet" },
            { text: "Run away", consequence: "runAway" }
        ],
	image: 'alley1.jpg',

    },
    noisyStreet: {
        text: "You follow the noise and reach a busy street. What's your next move?",
        choices: [
            { text: "Hail a cab", consequence: "takeCab", image: "image3.jpg" },
            { text: "Continue on foot", consequence: "onFoot", image: "image4.jpg" }
        ],
	image: 'noisystreet.jpg',
    },
    runAway: {
        text: "You panic and run blindly. Suddenly, you find yourself in a dead-end. What now?",
        choices: [
            { text: "Turn and confront", consequence: "confrontation", image: "image5.jpg" },
            { text: "Hide and observe", consequence: "observation", image: "image6.jpg" },
	    { text: "Discover a Hidden Portal", consequence: "discoverPortal", image: "discover_portal.jpg" },
        ],
        image: 'deadend.jpg',
    },
    takeCab: {
        text: "The cab takes you to a mysterious building. You enter and find a room full of clues. What's your next move?",
        choices: [
            { text: "Solve the mystery", consequence: "solveMystery", image: "image7.jpg" },
            { text: "Leave the building", consequence: "leaveBuilding", image: "image8.jpg" }
        ],
        image: 'room.jpg_large',
    },
    onFoot: {
        text: "You walk down the street and encounter a stranger. They offer you a chance to join a secret organization. What do you decide?",
        choices: [
            { text: "Join the organization", consequence: "joinOrganization", image: "image9.jpg" },
            { text: "Decline and walk away", consequence: "walkAway", image: "image10.jpg" }
        ], 
        image: 'stranger.jpg',
    },
    confrontation: {
        text: "You confront the mysterious figure, who turns out to be a friend playing a prank. The adventure ends on a humorous note.",
        choices: [],
        image: "prank.jpg"
    },
    observation: {
        text: "You hide and observe the situation. You gather valuable information and become a successful detective. Congratulations, you've solved the case!",
        choices: [],
        image: "detective2.jpg"
    },
    solveMystery: {
        text: "You successfully solve the mystery and become a legendary detective. The city is safe thanks to your skills.",
        choices: [],
        image: "detective1.jpg"
    },
    leaveBuilding: {
        text: "You leave the mysterious building without exploring further. The story ends with unanswered questions.",
        choices: [],
        image: "building.jpg"
    },
    joinOrganization: {
        text: "You join the secret organization and embark on thrilling missions. Your life takes an unexpected turn.",
        choices: [],
        image: "thrillingmissions.jpg"
    },
    walkAway: {
        text: "You decline the offer and continue walking. The story ends with you living a normal life.",
        choices: [],
        image: "walking.jpg"
    },
    discoverPortal: {
        text: "While exploring the alley, you discover a hidden portal. What's your next move?",
        choices: [
            { text: "Step through the portal", consequence: "stepThroughPortal", image: "portal.jpg" },
            { text: "Ignore the portal and continue exploring", consequence: "continueExploringPortal", image: "explore_alley.jpg" }
        ],
        image: "hidden.jpg"
    },
    stepThroughPortal: {
        text: "You step through the portal and find yourself in a fantastical realm. Your adventure continues in this magical land.",
        choices: [],
        image: "land.jpg"
    },
    continueExploringPortal: {
        text: "You decide to ignore the portal and continue exploring the dark alley. The story ends.",
        choices: [],
        image: "darkalley.jpg"
    },
};

let currentStage;

// Function to start/restart the game
function startGame() {
    currentStage = "start";
    updatePage();
}

// Function to update the page based on the current stage of the story
function updatePage() {
    const stage = story[currentStage];
    document.getElementById("story-text").innerText = stage.text;

    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = "";

    stage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.addEventListener("click", () => makeChoice(choice));
        choicesElement.appendChild(button);
    });

    const imageElement = document.getElementById("story-image");
    imageElement.src = stage.image;
}

// Function to handle the consequences of the player's choice
function makeChoice(choice) {
    currentStage = choice.consequence;
    updatePage();

    if (currentStage.startsWith("ending")) {
        endGame();
    }
}

// Function to end the game
function endGame() {
    const endingText = "The story has ended. Thanks for playing!";
    document.getElementById("story-text").innerText = endingText;
    document.getElementById("choices").innerHTML = "";
    document.getElementById("story-image").src = story[currentStage].image;
}

// Initialize the game
startGame();
