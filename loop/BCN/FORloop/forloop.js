
/* The For Of Loop */

{
    /* for...of with Arrays */

    
    const students = ['John', 'Sara', 'Jack'];
    for ( let element of students ) {
        console.log(element);
    }
}

{
    // for...of with Strings
    const string = 'code';
    for (let i of string) {
        console.log(i);
    }
}

{
    // for...of with Sets
    const set = new Set([1, 2, 3]);
    for (let i of set) {
        console.log(i);
    }
}

{
    // for...of with Maps
    let map = new Map();
   map.set('name', 'Jack');
    map.set('age', '27');

    // looping through Map
    for (let [key, value] of map) {
        console.log(key + '- ' + value);
    }
}


// The For In Loop

{
    for (key in object) {

    }
}

// Iterate Through an Object

{
    const student = {
        name: 'Monica',
        class: 7,
        age: 12
    }
   
    // using for...in
    for ( let key in student ) {
        console.log(`${key} => ${student[key]}`);
    }
}

// Update Values of Properties

{
    const salaries= {
        Jack : 24000,
        Paul : 34000,
        Monica : 55000
    }
   
    // using for...in
    for ( let i in salaries) {
        let salary = "$" + salaries[i];
        console.log(`${i} : ${salary}`);
    }
}

// You can also use for...in loop to iterate over string values.

{
    const string = 'code'
    for (let i in string) {
        console.log(string[i]);
    }
}

// for...in with Arrays

{
    // define array
   const arr = [ 'hello', 1, 'JavaScript' ];
    for (let x in arr) {
        console.log(arr[x]);
    }

}

/* JavaScript forEach() */


/* forEach with Arrays */

{
    let students = ['John', 'Sara', 'Jack'];

    // using forEach
    students.forEach(myFunction);

    function myFunction(item) {

        console.log(item);
      }


}

/* Updating the Array Elements */


{
    let students = ['John', 'Sara', 'Jack'];
    students.forEach(myFunction);
    function myFunction(item, index, arr) {
        arr[index] = 'Hello ' + item;
    }

    console.log(students);
}


/* for...of with Sets */

{
    
    const set = new Set([1, 2, 3]);

    set.forEach(myFunction);

    function myFunction(item) {
        console.log(item);
    }
}

/* forEach with Maps */

{
    let map = new Map();

  
    map.set('name', 'Jack');
    map.set('age', '27');

    map.forEach (myFunction);

    function myFunction(value, key) {
       
        console.log(key + '- ' + value);
    }
}
