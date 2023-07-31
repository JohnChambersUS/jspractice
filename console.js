console.group("User Details");
console.log("name: Sudheer Jonna");
console.log("job: Software Developer");

// Nested Group
console.group("Address");
console.log("Street: Commonwealth");
console.log("City: Los Angeles");
console.log("State: California");

// Close nested group
console.groupEnd();

// Close outer group
console.groupEnd()

function foo() {
    //let x = (y = 0);
    x++;
    y++;
    return x;
  }
  
  console.log(foo(), typeof x, typeof y);