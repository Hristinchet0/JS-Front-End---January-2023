function solve(number) {

    let output = 'true';
    let text=''+number;

    let sum=0;

    for (let i = 0; i < text.length; i++) {
        let current = text[i];
        for (let j = 0; j < text.length; j++) {
            if (current !== text[j]) {
                output = 'false';
            }
        }
        sum+= Number(text[i]);

    }
    console.log(output);
    console.log(sum);

}