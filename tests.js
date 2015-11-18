/**
 * Created by kevin on 11/17/15.
 */

var round = require('./index')

var hasError = false

function end(){
  if(!hasError){
    console.log('All test cases passed!');
  }
}

function test(value, places, expected){
  var actual = round(value, places)
  if(actual !== expected){
    hasError = true;
    console.error(`Failed on case round(${value}, ${places}).  Expected ${expected} but was ${actual}`)
  }
}

test(3.465, 2, 3.47)
test(3.455, 2, 3.46)
test(3.445, 2, 3.45)
test(3.435, 2, 3.44)
test(3.425, 2, 3.43)
test(3.415, 2, 3.42)

test(0.345, 2, 0.35)

test(635.3, -1, 640)

end()