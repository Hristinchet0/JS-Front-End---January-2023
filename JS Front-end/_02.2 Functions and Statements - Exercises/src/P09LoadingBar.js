function loadingBar(number){
    if(number === 100) {
        console.log('100% Complete!');
    } else {
        let step = number / 10;
        let percent = '%'.repeat(step);
        let points = '.'.repeat(10 -step);
        console.log(number + '% [' + percent + points + ']');
        console.log('Still loading...');
    }
}