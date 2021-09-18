//Sample json
let json = [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    },
    {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
        ]
    }
]


//Basic for loop
console.log("Using BASIC FOR");
for (let i = 0; i < json.length; i++) {
    console.log(json[i].name,json[i].age,json[i].secretIdentity);
}

//For in
console.log("Using FOR IN");
for(value in json){
    console.log(value);
}

//For of
console.log("Using FOR OF");
for(value of json){
    console.log(value.name,value.age,value.secretIdentity);
}

//ForEach
console.log("Using FOREACH");
json.forEach((value)=>{
    console.log(value.name,value.age,value.secretIdentity);

});


//My basic data in JSON format
let myResume  = {
    "fname":"Darshan",
    "lname":"Raut",
    "age":27,
    "location":"Pusad",
    "state":"Maharashtra",
    "country":"India",
    "marks" : {
        "math":67,
        "science":78,
        "english":58,
        "history":54
    },
    "email":"darshanraut@yahoo.com",
    "occupation":"software Engineer",
    "gender":"male"
}

//Window is a browser object which is nothing but a browser window. Its a global object (root or parent of all)
//It contains all useful methods by default.
//Such as windown.open(url), window.close(), window.addEventlistener(),window.seTtimeout(), window.seTInterval() etc
//Window object contains screen object which can have its height and width.
//And the document is where the elements are located such as html,body,divs,etc