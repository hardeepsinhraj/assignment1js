//creat Array for the subjects, actions and objects
const subjects = ["Iron Man", "Thor", "Captain America", "Hulk", "Black Widow"];
const actions = ["fights against", "teams up with", "defends", "rescues", "takes down"];
const objects = ["Thanos", "Ultron", "the Chitauri army", "Hydra agents", "a giant robot"];

//store selected words from each type
let selectedWords = { subject: '', action: '', object: '' };

//Create function for selected words
function selectWord(type) {
    let words = type === 'subject' ? subjects : type === 'action' ? actions : objects;
    selectedWords[type] = words[Math.floor(Math.random() * words.length)];
    localStorage.setItem(type, selectedWords[type]);
    // Display an alert message for selected word 
    alert(`${selectedWords[type]} selected!`);
}
//made Event listener for run when all type selected
document.addEventListener("DOMContentLoaded", () => {
    let storyLine = document.getElementById("story");
    if (storyLine) {
        let subject = localStorage.getItem("subject") || "Something";
        let action = localStorage.getItem("action") || "does something";
        let object = localStorage.getItem("object") || "somewhere";
        //Display story
        storyLine.textContent = `${subject} ${action} ${object}!`;
    }
});
