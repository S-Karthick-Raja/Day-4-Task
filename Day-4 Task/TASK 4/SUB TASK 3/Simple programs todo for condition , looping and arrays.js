// Write a loop that makes seven calls to console.log to output the following triangle:
    let temp = "";
    for(let i=1; i<=7; i++){
        for(let j=1; j<=i; j++){
            temp += "*";
        }
        console.log(temp);
        temp = "";
    }

// Iterate through the string array and print it contents
var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]

      for(let content of strArray){
          console.log(content);
      }

// write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55];
let i = 0;
while(myarray){
    // console.log(myarray[i])
    if(myarray[i] % 1 === 0){
        i++;
    }
    else{
        break;
    }
}
console.log("Length of the array => ", i);

// Declare an empty array;
var foods = [];

// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
foods = ["dosa", "idly", "poha", "noodle", "pizza", "kichadi", "upma", "uthappam", "chapatti", "briyani", "kofta", "burgar", "sandwich", 
         "pongal", "fried_rice", "maggi", "pasta", "meatballs", "tofu_65", "gobi_manchurian"];
        
//  Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find 
    // your fifth favorite food?
console.log(foods[4]);

// Find the length of your foods array
console.log(foods.length);

// Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK_chandran"
    ];

    let friends_mari_to_munnabai = [];
    friends_mari_to_munnabai.push(...friends);

    friends_mari_to_munnabai[0] = "Munnabai";
    console.log(friends_mari_to_munnabai);

    // Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
    let limit;
    for(let index in friends){
        if(friends[index] == "CaptianAmerica"){
            limit = index;
            break;
        }
    }
    for(let i=0; i<limit; i++){
        console.log(friends[i]);
    }

    // Find the person is ur friend or not.

    (function (friend_name) {
        for(let names of friends){
            if(names === friend_name){
                console.log(`yes ${names} is my friend`);
            }
        }
    })
    ("Mari");

    // We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
    var friends1 = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK_chandran"
        ];

    var friends2 = [
        "Gabbar",
        "Rajinikanth",
        "Mass",
        "Spiderman",
        "Jeff",
        "ET"
        ];

    friends1.push(...friends2);
    friends1.sort();
    console.log(friends1);

    // Get the first item, the middle item and the last item of the array
        // First item
        console.log("First item :", friends1[0]);
    
        // Last item
        let last_array = friends1.length - 1;
        console.log("Last item :", friends1[last_array]);
    
        // Middele item
        let middle_second_array = friends1.length / 2;
        let middle_first_array = middle_second_array - 1;
        console.log("Middele first item :", friends1[middle_first_array]);
        console.log("Middele second item :", friends1[middle_second_array]);
    
        // Add your name to the end of the friends array, and add another name to beginning.
        // Adding my name
        friends1.push("Karthick");
        console.log(friends1)
        
        // Adding name to beginning
        let new_friends = ["Siva"];
        new_friends.push(...friends1);
        console.log(new_friends); 
    
    // Add Mr or Ms to the names in the friends array.
    let friends_with_MR_and_MS = [];
    for(let names of new_friends){
        if(names === "MaryJane"){
            names = "MS" + " " + names;
            friends_with_MR_and_MS.push(names);
        }
        else{
            names = "MR" + " " + names;
            friends_with_MR_and_MS.push(names);
        }
    }
    console.log(friends_with_MR_and_MS);
    
    // Concat all the names the friends array and return as comma "," seperated string
    (function (friends_name) {
        let temp = "";
        for(let names in friends_name){
            if(names == (friends_name.length - 1)){
                temp += friends_name[names];
            }
            else{
                temp += friends_name[names] + "," + " ";
            }
        }
        return console.log(temp);
    })
    (new_friends);
    
    // Find the friends names who has letter ‘a’ and return the list.
    (function (friends_name) {
        let names_with_a = [];
        for(let names of friends_name){
            let arr = names.split("");
            for(let letters of arr){
                if(letters == "a"){
                    let new_arr = arr.join("");
                    names_with_a.push(new_arr);
                    break; 
                }
            }  
        }
        return console.log(names_with_a);
    })
    (new_friends);
    
    // Find the avg length of all the friends names. Get the individual length of the names and do the avg.
    (function (friends_name) {
        let total_length = 0;
        let avg;
        for(let names of friends_name){
            let length = names.length;
            console.log(`the length of ${names} => ${length}`);
            total_length += length;
            avg = total_length / (friends_name.length);
        }
        return console.log(avg);
    })
    (new_friends);

    // Find the names and return the list starting with letter M
    (function (friends_name) {
        let names_with_a = [];
        for(let names of friends_name){
            let arr = names.split("");
            for(let letters in arr){
                if(letters == 0 ){
                    if(arr[letters] === "M"){
                        let new_arr = arr.join("");
                        names_with_a.push(new_arr);
                    }
                }
            }  
        }
        return console.log(names_with_a);
    })
    (new_friends);

    // Find the name with max characters and return the name.
    (function (friends_name) {
        let name_with_max;
        let min_num = -Infinity;
        for(let names of friends_name){
            let length = names.length;
            if(length > min_num){
                min_num = length;
                name_with_max = names;
            }
        }
        return console.log(name_with_max);
    })
    (new_friends);

    // Find the name with min characters and return the name.
    (function (friends_name) {
        let name_with_min;
        let min_num = Infinity;
        for(let names of friends_name){
            let length = names.length;
            if(length < min_num){
                min_num = length;
                name_with_min = names;
            }
        }
        return console.log(name_with_min);
    })
    (new_friends);

    // Find the average in the array below. Make sure you add only the numbers and do avg.
    const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
    let temp1 = 0;
    let initial = 0;
    for(let values of friendsInfo){
        if(values * 1 === values){
            console.log(values)
            temp1 += values;
            initial++;
        }
    }
    let avg = temp1 / initial;
    console.log(avg);
    
    // Print the contents of the input variable
    var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]

    for(let values of input){
        for(let values1 of values){
            console.log(values1);
        }
    }

    // What the output
    myobject = {1:"one","11":1,"name":"arun"}
    console.log(myobject[11]); 
    console.log(myobject.name);

    // Add a new key value pair to myobject
    // key : ten
    // value : ten
    myobject = {1:"one","11":1,"name":"arun"}
    myobject.ten = "ten";
    console.log(myobject);

    // Write out an object literal to represent the data below. Guvi, Geek, 6, IIT-M RP,Chennai.
    let guvi_object = {comapnay_first_name : "guvi",
                       company_last_name : "geek",
                       branch : 6,
                       incubated_with : "IIT-M RP",
                       place : "chennai"}

    console.log(guvi_object);

    // How would you represent the following data using a combination of object literals and arrays?
    // Guvi, Geek, 6, IIT-M RP,Chennai.
    // Amazon, Inc, 31, SP Infocity, Chennai.
    // Google, Alphabet, 34 Amphitheater Parkway, MountainView.
    // Tesla, Inc , 32, 333 Santana Row,San Jose.

    let details = [
        {
            comapnay_first_name : "guvi",
            company_last_name : "geek",
            branch : 6,
            incubated_with : "IIT-M RP",
            place : "chennai"
        }, 
        {
            comapnay_first_name : "Amazon",
            company_last_name : "Inc",
            branch : 31,
            incubated_with : "SP Infocity",
            place : "chennai"
        }, 
        {
            comapnay_first_name : "Google",
            company_last_name : "Alphabet",
            address : "34 Amphitheater Parkway",
            place : "MountainView"
        }, 
        {
            comapnay_first_name : "Tesla",
            company_last_name : "Inc",
            branch : "32",
            address : "333 Santana Row",
            place : "San Jose"
        }
    ];
    console.log(details);