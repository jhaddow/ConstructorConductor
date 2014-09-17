/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  users.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));
  users.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));
  users.push(new User('Lenny', 'lenny@theLenster', 'iLoveLentilSoup'));
console.log(users);
console.log('Tyler\'s information is ');
//Console.log all of Tylers information

for (var key in users[0]) {
  if(users[0].hasOwnProperty(key)) {
    console.log(key + ': ' + users[0][key]);
  } 
}

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information
for (var key in users[2]) {
  if(users[2].hasOwnProperty(key)) {
    console.log(key + ': ' + users[2][key]);
  } 
}
//Now create another instance of User using your own information and then add that to your users array.

  users.push(new User('Jess', 'jess.haddow@gmail.com', 'iLoveSports'));

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  for (var i=0; i < users.length; i++) {
    if(users[i].hasOwnProperty('name')) {
      console.log(users[i]['name']);
    }
  }