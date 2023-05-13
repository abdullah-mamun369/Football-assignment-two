// Calculate==========================================================
document.getElementById('calculate-btn').addEventListener('click', function(){
    // number of player in select-V
    const bestFivePlayer = document.getElementById("best-five").childElementCount;

    const perPlayerPrice = inputValueCall('player-price')

    const playerExpanses = perPlayerPrice * bestFivePlayer;

    const playerExpansesString = document.getElementById('player-expanses');
    
    playerExpansesString.innerText = playerExpanses;
   
});

// Total Calculate====================================================
document.getElementById('calculate-total-btn').addEventListener('click', function(){
    // manager
    const managerSalary = inputValueCall('manager-salary')

    // Coach
    const coachSalary = inputValueCall('coach-salary')

    const playerExpansesString = (document.getElementById('player-expanses')).innerText;
    const playerExpansesValue = parseInt (playerExpansesString);

    const inTotalExpanses = playerExpansesValue + managerSalary + coachSalary;

    // Total Expanses
    const totalExpanses = document.getElementById('total-expanses');

    totalExpanses.innerText = inTotalExpanses;
});

