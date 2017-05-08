// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// testing stringifyable objects and unstrifiableValues
// num => str num.toString();
// obj => str obj.toString();
var stringifyJSON = function(obj) {
  if (obj === null) {
  	return "null";
  } else if (typeof obj === 'string') {
  	return `"${obj}"`;
  } else if (typeof obj === 'boolean') {
  	return obj ? "true" : "false";
  } else if (typeof obj === 'number') {
  	return `${obj}`
  }
  if (Array.isArray(obj)) {
  	if (!obj.length) {
  		return "[]";
  	} else if (obj.length === 1) {
  		if (typeof obj[0] === 'number') {
  			return `[${obj}]`
  		} else {
  			return `["${obj}"]`
  		}
  	} else if (obj.lenth > 1) {
  		obj.forEach(function(ele){
  			if (typeof ele === 'string') {
  				ele = `"${ele}"`
  				console.log(ele);
  			} 
  			
  		});
  		obj = `"[${obj}]"`
  		return obj; 
  	}
  	
  }
  if (typeof obj === 'object') {
  	Object.keys(obj).forEach(function(key){
  		return stringifyJSON(obj[key]);
  	});
  }
};

var test = [0, "hi"];
test = stringifyJSON(test);
console.log(test);
// obj.forEach(function(ele){
//   			if (typeof ele === 'string') {
//   				ele = `"${ele}"`
//   			}
//   		});
// obj = [8]`[${obj}]`

// obj.forEach(function(ele) {
//   			if (typeof ele === 'string') {
//   				ele = `"${ele}"`
//   			}
//   		})