const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
    //make a passenger object
    // add it on the bus
    const middleOfBus = (struggleBus.length/2);
    console.log(middleOfBus);
    const passenger = {
        name: name,
        wallet: wallet,
        isStruggling: isStruggling
    };

    if (seat === 'back') {
        struggleBus.push(passenger);
    } else if (seat === 'front') {
        struggleBus.unshift(passenger);
    } else if (seat === 'middle') {
        struggleBus.splice( middleOfBus, 0, passenger);
    };

};

const unloadPassenger = (bus, seat) => {
//remove passenger from bus
//return the passenger object
    if (seat === 'front') {
        return bus.shift();
    } else if (seat === 'back') {
        return bus.pop();
    }
};

const allAboard = (bus) => {
    //loop over passengers
    //given bus costs 5$
    //if passenger can afford it, charge them
    //if NOT kick them off
    const busFare = 5;
    const validPassengers = [];

    bus.forEach((passenger) => {
        if(passenger.wallet >= busFare){
            passenger.wallet -= busFare;
            validPassengers.push(passenger);
        };
    });
    return validPassengers;
};


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const busBuilder = (bus) => {
    let domString = '';
    for (let i = 0; i < bus.length; i++) {
        domString += `<div class="bus-seat">`;
        domString +=    `<h4>Passenger's name: ${bus[i].name}</h4>`;
        domString +=    `<p>How much money they got: ${bus[i].wallet} dollars!</p>`;
        domString +=    `<p>Are they struggling? ${bus[i].isStruggling}</p>`;
        domString +=  `</div>`;
    };
    printToDom('the-bus', domString);
};
const init = () => {
    addPassenger('Greg', 10, true, 'front');
    addPassenger('Zoe', 20, false, 'back');
    addPassenger('Brian', 10, true, 'front');
    addPassenger('Jeff', 100, false, 'back');
    addPassenger('Larry', 0, true, 'front');
    addPassenger('SpaceCat', 999, false, 'back');
    addPassenger('Regina', 400, false, 'middle');

    // const firstPassenger = unloadPassenger(struggleBus, 'front');
    // console.log(firstPassenger);
    const busPeople = allAboard(struggleBus);
    busBuilder(busPeople);
};

init();