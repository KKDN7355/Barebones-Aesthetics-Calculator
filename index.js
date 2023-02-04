let icon = document.getElementById('lightmodedarkmodeicon');

let heightInput = document.getElementById('heightInput');
let wristInput = document.getElementById('wristInput');
let kneeInput = document.getElementById('kneeInput');

let shouldersInput = document.getElementById('shouldersInput');
let chestInput = document.getElementById('chestInput');
let waistInput = document.getElementById('waistInput');
let leftThighInput = document.getElementById('leftThighInput');
let rightThighInput = document.getElementById('rightThighInput');
let leftCalfInput = document.getElementById('leftCalfInput');
let rightCalfInput = document.getElementById('rightCalfInput');
let leftBicepInput = document.getElementById('leftBicepInput');
let rightBicepInput = document.getElementById('rightBicepInput');
let leftForearmInput = document.getElementById('leftForearmInput');
let rightForearmInput = document.getElementById('rightForearmInput');

var waistSlider = document.getElementById("waistSlider");

// toggle for light and dark modes
icon.onclick = () => {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")) {
        icon.src="images/sun.png";
    } else {
        icon.src="images/moon.png";
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
        let calfOutput = wristInput.value * 2.5;
            calfOutput = parseFloat(calfOutput).toFixed(2);

        leftCalfOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calfOutput);
        rightCalfOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calfOutput);

        // biceps should be wrist multiplied by 2.5
        leftBicepOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calfOutput);
        rightBicepOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calfOutput);

        // forearms should be wrist multiplied by golden ratio
        let notLeftForearmOutput = leftBicepOutput.value - wristInput.value/2;
            notLeftForearmOutput = parseFloat(notLeftForearmOutput).toFixed(2);
        leftForearmOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftForearmOutput);

        let notRightForearmOutput = rightBicepOutput.value - wristInput.value/2;
            notRightForearmOutput = parseFloat(notRightForearmOutput).toFixed(2);
        rightForearmOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightForearmOutput);
    }

    if (kneeInput.value != "")
    {
        // thighs should be knees multiplied by 1.75
        let notLeftThighOutput = kneeInput.value * 1.75;
            notLeftThighOutput = parseFloat(notLeftThighOutput).toFixed(2);
        leftThighOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftThighOutput);

        let notRightThighOutput = kneeInput.value * 1.75;
            notRightThighOutput = parseFloat(notRightThighOutput).toFixed(2);
        rightThighOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightThighOutput);
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

    if (leftThighInput.value != "")
    {
        let notLeftThighDifference = leftThighOutput.value - leftThighInput.value;
            notLeftThighDifference = parseFloat(notLeftThighDifference).toFixed(2);
        leftThighDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftThighDifference);
    }

    if (rightThighInput.value != "")
    {
        let notRightThighDifference = rightThighOutput.value - rightThighInput.value;
            notRightThighDifference = parseFloat(notRightThighDifference).toFixed(2);
        rightThighDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightThighDifference);
    }

    if (leftCalfInput.value != "")
    {
        let notLeftCalfDifference = leftCalfOutput.value - leftCalfInput.value;
            notLeftCalfDifference = parseFloat(notLeftCalfDifference).toFixed(2);
        leftCalfDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftCalfDifference);
    }

    if (rightCalfInput.value != "")
    {
        let notRightCalfDifference = rightCalfOutput.value - rightCalfInput.value;
            notRightCalfDifference = parseFloat(notRightCalfDifference).toFixed(2);
        rightCalfDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightCalfDifference);
    }

    if (leftBicepInput.value != "")
    {
        let notLeftBicepDifference = leftBicepOutput.value - leftBicepInput.value;
            notLeftBicepDifference = parseFloat(notLeftBicepDifference).toFixed(2);
        leftBicepDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftBicepDifference);
    }

    if (rightBicepInput.value != "")
    {
        let notRightBicepDifference = rightBicepOutput.value - rightBicepInput.value;
            notRightBicepDifference = parseFloat(notRightBicepDifference).toFixed(2);
        rightBicepDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightBicepDifference);
    }

    if (leftForearmInput.value != "")
    {
        let notLeftForearmDifference = leftForearmOutput.value - leftForearmInput.value;
            notLeftForearmDifference = parseFloat(notLeftForearmDifference).toFixed(2);
        leftForearmDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftForearmDifference);
    }

    if (rightForearmInput.value != "")
    {
        let notRightForearmDifference = rightForearmOutput.value - rightForearmInput.value;
            notRightForearmDifference = parseFloat(notRightForearmDifference).toFixed(2);
        rightForearmDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightForearmDifference);
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
    let calfOutput = wristInput.value * 2.5;
        calfOutput = parseFloat(calfOutput).toFixed(2);

    leftCalfOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calfOutput);
    rightCalfOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calfOutput);

    // biceps should be wrist multiplied by 2.5
    leftBicepOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calfOutput);
    rightBicepOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calfOutput);

    // forearms should be wrist multiplied by golden ratio
    let notLeftForearmOutput = leftBicepOutput.value - wristInput.value/2;
        notLeftForearmOutput = parseFloat(notLeftForearmOutput).toFixed(2);
    leftForearmOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftForearmOutput);

    let notRightForearmOutput = rightBicepOutput.value - wristInput.value/2;
        notRightForearmOutput = parseFloat(notRightForearmOutput).toFixed(2);
    rightForearmOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightForearmOutput);
}

kneeInput.oninput = () => {
    // thighs should be knees multiplied by 1.75
    let notLeftThighOutput = kneeInput.value * 1.75;
        notLeftThighOutput = parseFloat(notLeftThighOutput).toFixed(2);
    leftThighOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftThighOutput);

    let notRightThighOutput = kneeInput.value * 1.75;
        notRightThighOutput = parseFloat(notRightThighOutput).toFixed(2);
    rightThighOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightThighOutput);
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

leftThighInput.oninput = () => {
    let notLeftThighDifference = leftThighOutput.value - leftThighInput.value;
        notLeftThighDifference = parseFloat(notLeftThighDifference).toFixed(2);
    leftThighDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftThighDifference);
}

rightThighInput.oninput = () => {
    let notRightThighDifference = rightThighOutput.value - rightThighInput.value;
        notRightThighDifference = parseFloat(notRightThighDifference).toFixed(2);
    rightThighDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightThighDifference);
}

leftCalfInput.oninput = () => {
    let notLeftCalfDifference = leftCalfOutput.value - leftCalfInput.value;
        notLeftCalfDifference = parseFloat(notLeftCalfDifference).toFixed(2);
    leftCalfDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftCalfDifference);
}

rightCalfInput.oninput = () => {
    let notRightCalfDifference = rightCalfOutput.value - rightCalfInput.value;
        notRightCalfDifference = parseFloat(notRightCalfDifference).toFixed(2);
    rightCalfDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightCalfDifference);
}

leftBicepInput.oninput = () => {
    let notLeftBicepDifference = leftBicepOutput.value - leftBicepInput.value;
        notLeftBicepDifference = parseFloat(notLeftBicepDifference).toFixed(2);
    leftBicepDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftBicepDifference);
}

rightBicepInput.oninput = () => {
    let notRightBicepDifference = rightBicepOutput.value - rightBicepInput.value;
        notRightBicepDifference = parseFloat(notRightBicepDifference).toFixed(2);
    rightBicepDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightBicepDifference);
}

leftForearmInput.oninput = () => {
    let notLeftForearmDifference = leftForearmOutput.value - leftForearmInput.value;
        notLeftForearmDifference = parseFloat(notLeftForearmDifference).toFixed(2);
    leftForearmDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notLeftForearmDifference);
}

rightForearmInput.oninput = () => {
    let notRightForearmDifference = rightForearmOutput.value - rightForearmInput.value;
        notRightForearmDifference = parseFloat(notRightForearmDifference).toFixed(2);
    rightForearmDifference.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notRightForearmDifference);
}

slider.oninput = () => {
    let notWaistOutput = heightInput.value * waistSlider.value / 100;
    notWaistOutput = parseFloat(notWaistOutput).toFixed(2);
    waistOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notWaistOutput);

    let notShouldersOutput = waistOutput.value * (1 + Math.sqrt(5))/2;
    notShouldersOutput = parseFloat(notShouldersOutput).toFixed(2);
    shouldersOutput.value = Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(notShouldersOutput);
}