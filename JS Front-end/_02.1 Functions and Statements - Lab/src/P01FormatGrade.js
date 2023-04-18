function formatGrade(grade) {
    if(grade >= 5.50) {
        return `Excellent (${formatToSecondDecimal(grade)})`;
    } else if (grade < 5.50 && grade >= 4.50) {
        return `Very good (${formatToSecondDecimal(grade)})`;
    } else if( grade < 4.50 && grade >= 3.50) {
        return `Good (${formatToSecondDecimal(grade)})`;
    } else if (grade < 3.50 && grade >= 3) {
        return `Poor (${formatToSecondDecimal(grade)})`;
    }

    return `Fail (2)`;

    function formatToSecondDecimal(gr) {
        return gr.toFixed(2);
    }
}

console.log (
    formatGrade(3.33)
);

console.log (
    formatGrade(4.50)
);

console.log (
    formatGrade(2.99)
);

