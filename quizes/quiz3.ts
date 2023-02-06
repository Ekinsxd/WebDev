//Question 1
const firstName = "Ethan Tran";
const highSchool: string = "East Kentwood";
var avgMsg: number = 123;
console.log(firstName, highSchool, avgMsg);

//Question 2
console.log("I receive " + avgMsg + " messages daily");
console.log(`i receive ${avgMsg} messages daily`);
console.log(`i receive ${avgMsg * 69} messages daily`);

//Question 3
var cities: Array<string> = ["Grand Rapids", "Allendale", "Chicago"];
var count: number = 0;
for (var city in cities) {
    console.log(`My city choice #${++count} is ${cities[city]}`);
}
var books: Array<string> = [];
books.push("Harry Potter");
books.push("Narnia");
books.push("Classical Physics 2nd edition");

for (var book of books) {
    console.log(`Title ${book} is ${book.length} characters long`);
}

//Question 4
function sayHello(name: string) {
    console.log(`Hello ${name}. Nice to meet you!`);
}

//question 5
sayHello("poopyhead");

//Question 6
function sayRepeatedHello(name: string, repeat: number) {
    var st: string = "";
    for (var i = 0; i < repeat; i++) {
        st += `hello `;
    }
    console.log(`${st}${name}`);
}
sayRepeatedHello("poopyhead", 5);

//question 7
var asd: number | string;
asd = "haha stinky";
console.log(typeof asd);
asd = 5;
console.log(typeof asd);

//question 8
function showDetails(param: number | string) {
    if (typeof param == "string") {
        console.log(`the string ${param} has ${param.length} characters`);
    }
    if (typeof param == "number") {
        console.log(
            `the number ${param} is ${param % 2 == 1 ? "odd" : "even"}`
        );
    }
}
showDetails("Poop");
showDetails(122);

//question 9
type PlanetType = {
    name: string;
    daysOfOrbit: number;
    isInnerPlanet: boolean;
};

//question 10
var earth: PlanetType = {
    name: "earth",
    daysOfOrbit: 365,
    isInnerPlanet: true,
};
var venus: PlanetType = {
    name: "venus",
    daysOfOrbit: 123,
    isInnerPlanet: true,
};
var KSP: PlanetType = {
    name: "kerbal",
    daysOfOrbit: 999,
    isInnerPlanet: true,
};

var solarSystem: Array<PlanetType> = [];
solarSystem.push(earth);
solarSystem.push(KSP);
solarSystem.push(venus);

var avg: number = 0;
for (var planet of solarSystem) {
    avg += planet.daysOfOrbit;
}
console.log(`average days in orbit: ${avg / solarSystem.length}`);
