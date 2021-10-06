// Declare four variables without assigning values and print them in console
    var a;
    var b;
    var c;
    var d;

    console.log(a, b, c, d);

// How to get value of the variable myvar as output
    var myvar= 1;
    // console.log("myvar");
    
    console.log(myvar);

// Declare variables to store your first name, last name, marital status, country and age in multiple lines
    var first_name = "KARTHICK";
    var second_name = "RAJA";
    var marital_status = "Unmarried";
    var country = "India";
    var age = "25";

    console.log(first_name);
    console.log(second_name);
    console.log(marital_status);
    console.log(country);
    console.log(age);

// Declare variables to store your first name, last name, marital status, country and age in a single line
    var first_name = "KARTHICK";
    var second_name = "RAJA";
    var marital_status = "Unmarried";
    var country = "India";
    var age = "25";

    console.log(first_name, second_name, marital_status, country, age);

// Declare variables and assign string, boolean, undefined and null data types
    var str = "KARTHICK";
    var bool = true;
    var undef;
    var nothing = null;
    
    console.log(typeof(str));
    console.log(typeof(bool));
    console.log(typeof(undef));
    console.log(typeof(nothing));

// Convert the string to integer
    var num1 = "24";
    var num2 = "25";
    var num3 = "26";

    num1 = parseInt(num1);
    num2 = Number(num2);
    num3 = +num3;
    
    console.log(num1);
    console.log(num2);
    console.log(num3);

// Write 6 statement which provide truthy & falsey values.
    console.log(1 === 1);
    console.log(Boolean("false"));
    console.log(Boolean("0"));
    console.log(Boolean([]));
    console.log(Boolean({}));
    console.log(Boolean(function(){}));

    console.log(false);
    console.log(Boolean(-0));
    console.log(Boolean(0));
    console.log(Boolean(null));
    console.log(Boolean(undefined));
    console.log(Boolean(NaN));


