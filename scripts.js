/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() */
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let modelText = document.getElementById("model-text");

    let cost = 0;
    if (modelName === "XYZ") {
        cost = duration * 100;
    } else if (modelName === "CPRG") {
        cost = duration * 213;
    }
    
    costLabel.innerHTML = cost.toFixed(2);
}

/****************** model button logic ******************/
/* create a function called changeModel() */
function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}

// Attach the changeModel function to the "Switch Model" pseudo-button
let modelButton = document.getElementById("model-button");
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/* create a function called changeDuration() */
function changeDuration() {
    let durationText = document.getElementById("duration-text");

    // Prompt the user for a new duration
    let newDuration = prompt("Enter the new duration in days:");

    // Check if the user input is a valid number
    if (!isNaN(newDuration) && newDuration > 0) {
        duration = parseInt(newDuration, 10);
        durationText.innerHTML = duration;
        recalculate();
    } else {
        alert("Please enter a valid number for the duration.");
    }
}

// Attach the changeDuration function to the "Change Duration" pseudo-button
let durationButton = document.getElementById("duration-button");
durationButton.addEventListener("click", changeDuration);
