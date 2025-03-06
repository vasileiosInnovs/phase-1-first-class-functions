/* function Monday() {
    exerciseRoutine(liftWeights)
}

function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function Wednesday() {
    exerciseRoutine(runFiveMiles)
}

function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function runFiveMiles() {
    console.log("Go for a five-mile run")
}

function liftWeights() {
    console.log("Pump iron")
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        console.log (breakfast = 'protein bar');
    } else if (exercise === runFiveMiles) {
        console.log (breakfast = 'kale smoothie');
    } else {
        console.log (breakfast = 'granola');
    }

   /*  exerciseRoutine(exercise); */

    /* return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    }
}

Wednesday()
morningRoutine() */

function receivesAFunction (secondCallbackFunction) {
    firstCallbackFunction();
    secondCallbackFunction();
}

function firstCallbackFunction() {
    return 'This is the first callback function'
}

function secondCallbackFunction() {
    return 'This is the second callback function'
}

function returnsANamedFunction() {
    return function named() {
        console.log('This returns a named function')
    }
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function () {
        console.log('This returns a named function')
    }
}
returnsAnAnonymousFunction();