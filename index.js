let lightmodedarkmodeicon = document.getElementById('lightmodedarkmodeicon');

let heightInput = document.getElementById('heightInput');
let wristInput = document.getElementById('wristInput');
let kneeInput = document.getElementById('kneeInput');

let shouldersInput = document.getElementById('shouldersInput');
let chestInput = document.getElementById('chestInput');
let waistInput = document.getElementById('waistInput');

let legsInput = document.getElementById('legsInput');
let calvesInput = document.getElementById('calvesInput');
let armsInput = document.getElementById('armsInput');
let forearmsInput = document.getElementById('forearmsInput');

var waistSlider = document.getElementById("waistSlider");

// toggle for light and dark modes
lightmodedarkmodeicon.onclick = () => {
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")) {
        lightmodedarkmodeicon.src="images/moon.png";
    } else {
        lightmodedarkmodeicon.src="images/sun.png";
    }
}

//  clears the textbox upon focus
function clearInput (input) {
    input.value = ""
};

function onBlur(input) {
    forceInputToTwoDecimalPlaces(input);
    onBlurPartTwo();
};

//  change the user's input to also always show with two decimal places AFTER their input
function forceInputToTwoDecimalPlaces (input) {
    if (input != "") {
        input.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(input.value)
    }
};

function onBlurPartTwo () {
    if (heightInput.value != "")
    {
        //  waist should be between 0.35 and 0.45 of height
        let notWaistOutput = heightInput.value * waistSlider.value / 100;
            notWaistOutput = parseFloat(notWaistOutput).toFixed(2);
        waistOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notWaistOutput);

        //  shoulders should be waist multiplied by golden ratio
        let notShouldersOutput = waistOutput.value * (1 + Math.sqrt(5))/2;
            notShouldersOutput = parseFloat(notShouldersOutput).toFixed(2);
        shouldersOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notShouldersOutput);
    }

    if (wristInput.value != "")
    {
        // chest should be wrist multipled by 6.5
        let notChestOutput = wristInput.value * 6.5;
            notChestOutput = parseFloat(notChestOutput).toFixed(2);
        chestOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notChestOutput);

        // calves should be wrist multiplied by 2.5
        let notCalvesOutput = wristInput.value * 2.5;
            notCalvesOutput = parseFloat(notCalvesOutput).toFixed(2);

        calvesOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notCalvesOutput);
        
        // arms should be wrist multiplied by 2.5
        armsOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notCalvesOutput);
        

        // forearms should be wrist multiplied by golden ratio
        let notForearmsOutput = armsOutput.value - wristInput.value/2;
            notForearmsOutput = parseFloat(notForearmsOutput).toFixed(2);
        forearmsOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notForearmsOutput);
    }

    if (kneeInput.value != "")
    {
        // legs should be knees multiplied by 1.75
        let notLegsOutput = kneeInput.value * 1.75;
            notLegsOutput = parseFloat(notLegsOutput).toFixed(2);
        legsOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLegsOutput);
    }

    if (shouldersInput.value != "")
    {
        let notShouldersDifference = shouldersOutput.value - shouldersInput.value;
            notShouldersDifference = parseFloat(notShouldersDifference).toFixed(2);
        shouldersDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notShouldersDifference);
    }

    if (chestInput.value != "")
    {
        let notChestDifference = chestOutput.value - chestInput.value;
            notChestDifference = parseFloat(notChestDifference).toFixed(2);
        chestDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notChestDifference);
    }

    if (waistInput.value != "")
    {
        let notWaistDifference = waistOutput.value - waistInput.value;
            notWaistDifference = parseFloat(notWaistDifference).toFixed(2);
        waistDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notWaistDifference);
    }

    if (legsInput.value != "")
    {
        let notLegsDifference = legsOutput.value - legsInput.value;
            notLegsDifference = parseFloat(notLegsDifference).toFixed(2);
        legsDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLegsDifference);
    }

    if (calvesInput.value != "")
    {
        let notCalvesDifference = calvesOutput.value - calvesInput.value;
            notCalvesDifference = parseFloat(notCalvesDifference).toFixed(2);
        calvesDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notCalvesDifference);
    }

    if (armsInput.value != "")
    {
        let notArmsDifference = armsOutput.value - armsInput.value;
            notArmsDifference = parseFloat(notArmsDifference).toFixed(2);
        armsDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notArmsDifference);
    }

    if (forearmsInput.value != "")
    {
        let notForearmsDifference = forearmsOutput.value - forearmsInput.value;
            notForearmsDifference = parseFloat(notForearmsDifference).toFixed(2);
        forearmsDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notForearmsDifference);
    }
};


heightInput.oninput = () => {
    //  format of all oninputs will be as follows:
    //      1: Mathematical calculations.
    //      2: Rounding the number to two decimal places.
    //      3: Displaying the number to always show with two decimal places.

    //  waist should be between 0.35 and 0.45 of height
    let notWaistOutput = heightInput.value * waistSlider.value / 100;
        notWaistOutput = parseFloat(notWaistOutput).toFixed(2);
    waistOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notWaistOutput);

    //  shoulders should be waist multiplied by golden ratio
    let notShouldersOutput = waistOutput.value * (1 + Math.sqrt(5))/2;
        notShouldersOutput = parseFloat(notShouldersOutput).toFixed(2);
    shouldersOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notShouldersOutput);
}

wristInput.oninput = () => {
    // chest should be wrist multipled by 6.5
    let notChestOutput = wristInput.value * 6.5;
        notChestOutput = parseFloat(notChestOutput).toFixed(2);
    chestOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notChestOutput);

    // calves should be wrist multiplied by 2.5
    let notCalvesOutput = wristInput.value * 2.5;
        notCalvesOutput = parseFloat(notCalvesOutput).toFixed(2);

    calvesOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notCalvesOutput);
    
    // arms should be wrist multiplied by 2.5
    armsOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notCalvesOutput);
    
    // forearms should be wrist multiplied by golden ratio
    let notForearmsOutput = armsOutput.value - wristInput.value/2;
        notForearmsOutput = parseFloat(notForearmsOutput).toFixed(2);
    forearmsOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notForearmsOutput);
}

kneeInput.oninput = () => {
    // legs should be knees multiplied by 1.75
    let notLegsOutput = kneeInput.value * 1.75;
        notLegsOutput = parseFloat(notLegsOutput).toFixed(2);
    legsOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLegsOutput);
}

shouldersInput.oninput = () => {
    let notShouldersDifference = shouldersOutput.value - shouldersInput.value;
        notShouldersDifference = parseFloat(notShouldersDifference).toFixed(2);
    shouldersDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notShouldersDifference);
}

chestInput.oninput = () => {
    let notChestDifference = chestOutput.value - chestInput.value;
        notChestDifference = parseFloat(notChestDifference).toFixed(2);
    chestDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notChestDifference);
}

waistInput.oninput = () => {
    let notWaistDifference = waistOutput.value - waistInput.value;
        notWaistDifference = parseFloat(notWaistDifference).toFixed(2);
    waistDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notWaistDifference);
}

legsInput.oninput = () => {
    let notLegsDifference = legsOutput.value - legsInput.value;
        notLegsDifference = parseFloat(notLegsDifference).toFixed(2);
    legsDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLegsDifference);
}

calvesInput.oninput = () => {
    let notCalvesDifference = calvesOutput.value - calvesInput.value;
        notCalvesDifference = parseFloat(notCalvesDifference).toFixed(2);
    calvesDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notCalvesDifference);
}

armsInput.oninput = () => {
    let notArmsDifference = armsOutput.value - armsInput.value;
        notArmsDifference = parseFloat(notArmsDifference).toFixed(2);
    armsDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notArmsDifference);
}

forearmsInput.oninput = () => {
    let notForearmsDifference = forearmsOutput.value - forearmsInput.value;
        notForearmsDifference = parseFloat(notForearmsDifference).toFixed(2);
    forearmsDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notForearmsDifference);
}

slider.oninput = () => {
    let notWaistOutput = heightInput.value * waistSlider.value / 100;
    notWaistOutput = parseFloat(notWaistOutput).toFixed(2);
    waistOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notWaistOutput);

    let notShouldersOutput = waistOutput.value * (1 + Math.sqrt(5))/2;
    notShouldersOutput = parseFloat(notShouldersOutput).toFixed(2);
    shouldersOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notShouldersOutput);
}