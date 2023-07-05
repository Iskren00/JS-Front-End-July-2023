function solve (group, type, day ) {
    let price = 0;
    let totalPrice = 0;


    if (type === 'Students') {
        switch (day) {
            case 'Friday':
                price = 8.45;
                break;
            case 'Saturday':
                price = 9.80;
                break;
            case 'Sunday':
                price = 10.46;
            break;
        }

        totalPrice = price * group;

        if (group >= 30) {
            totalPrice -= totalPrice * 0.15;
        }
    }
    else if (type === 'Business') {
        switch (day) {
            case 'Friday':
                price = 10.90;
                break;
            case 'Saturday':
                price = 15.60;
                break;
            case 'Sunday':
                price = 16;
            break;
        }

        if (group >= 100) {
            group -= 10;
        }

        totalPrice = price * group;
    }
    else if (type === 'Regular') {
        switch (day) {
            case 'Friday':
                price = 15;
                break;
            case 'Saturday':
                price = 20;
                break;
            case 'Sunday':
                price = 22.50;
            break;
        }

        totalPrice = price * group;

        if (group >= 10 && group <= 20) {
            totalPrice -= totalPrice * 0.05;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");