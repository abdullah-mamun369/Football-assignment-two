// Player name finding function--------------------------

function playerSelectByIdAndAddNewPlayer(playerId, selectBtn) {
    const playerElement = document.getElementById(playerId);
    const playerName = playerElement.innerText;

    const bestFiveOl = document.getElementById('best-five');
    const newLi = document.createElement('li');
    newLi.innerText = playerName;

    let playerNumber = bestFiveOl.childElementCount;

    if (playerNumber === 5) {
        return (alert('You can select only five Monster'));
    }

    const newPlayerAdd = bestFiveOl.appendChild(newLi);

    document.getElementById(selectBtn).disabled = true;

    return newPlayerAdd;
}

// Input Value Calling-------------------------------------

function inputValueCall(inputId) {
    const inputCall = document.getElementById(inputId);
    const inputValueString = inputCall.value;
    const inputValue = parseInt(inputValueString);

    if (isNaN(inputValueString)) {
        alert('Plase input a valid number');
        return;
    }

    return inputValue;
}







