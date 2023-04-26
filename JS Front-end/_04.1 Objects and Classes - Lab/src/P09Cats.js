function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let element of array) {
        let info = element.split(' ');
        let catName = info[0];
        let catAge = info[1];
        let cat = new Cat(catName, catAge);
        cat.meow();
    }
}