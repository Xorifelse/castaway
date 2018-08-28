var Fakerator = require("fakerator");
var fakerator = Fakerator("de-DE");



var person = {
  name: ''
}



if(fakerator.random.boolean()){
  // Male
  person.firstName = fakerator.names.firstNameM()
  person.lastName = fakerator.names.lastNameM()
  person.gender = 'male'
} else {
  person.firstName = fakerator.names.firstNameF()
  person.lastName = fakerator.names.lastNameF()
  person.gender = 'female'
}



