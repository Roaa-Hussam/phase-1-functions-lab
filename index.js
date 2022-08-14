function distanceFromHqInBlocks(value) {
    let distanceINBlock = value - 42;
    if (distanceINBlock < 0) {
        distanceINBlock = Math.abs(distanceINBlock);
    }
    return distanceINBlock;
}

function distanceFromHqInFeet(value) {
    let distanceInFeet = distanceFromHqInBlocks(value) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, distination) {
    if (distination > start) {
        return ((distination - start) * 264);
    }
    else
        return ((start - distination) * 264);
}

function calculatesFarePrice(start, distination) {
    let distance = distanceTravelledInFeet(start, distination);
    if (distance <= 400)
        return 0;
    if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance >= 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }

}




