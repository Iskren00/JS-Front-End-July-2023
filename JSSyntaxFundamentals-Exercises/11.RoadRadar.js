function solve (speed, area) 
{
    let different = 0;
    let speedLimit = 0;
    let status;

    switch (area) 
    {
        case 'motorway':
            speedLimit = 130
            break;

        case 'interstate':
            speedLimit = 90
            break;

        case 'city':
            speedLimit = 50
            break;

        case 'residential':
            speedLimit = 20
            break;   
    }

    if (speedLimit >= speed) 
    {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);    
    } else {
        different = speed - speedLimit;
        
        if (different <= 20) {
            status = 'speeding';
        } else if (different <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${different} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}

solve(120, 'interstate');