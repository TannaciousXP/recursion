// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// testing stringifyable objects and unstrifiableValues
// num => str num.toString();
// obj => str obj.toString();
var stringifyJSON = function(obj) {
  if (obj === null) { // null
  	return "null";
  } else if (typeof obj === 'string') { // string
  	return `"${obj}"`;
  } else if (typeof obj === 'boolean') { // boolean
  	return obj ? "true" : "false";
  } else if (typeof obj === 'number') { // number
  	return `${obj}`
  }



  if (Array.isArray(obj)) { // array
   // 	var arrString = [];
  	// obj.forEach(function(ele){
  	// 	arrString.push(stringifyJSON(ele));
  	// })
  	var arrString = obj.reduce(function(arr, ele) {
  		arr.push(stringifyJSON(ele));
  		return arr;
  	}, []);
  	return "[" + arrString.join(',') + "]";
  	
  } else if (typeof obj === 'object') { // obj
  	// var arrObj = [];
  	// Object.keys(obj).forEach(function(key) {
  	// 	var val = obj[key];
  	// 	if (typeof val !== 'undefined' && typeof val !== 'function') {
  	// 		arrObj.push(stringifyJSON(key) + ":" + stringifyJSON(val));
  	// 	}
  	// });
  	var arrObj = Object.keys(obj).reduce(function(arr, key) {
  		var val = obj[key];
  		if (typeof val !== 'undefined' && typeof val !== 'function') {
  			arr.push(stringifyJSON(key) + ":" + stringifyJSON(val));
  		}
  		return arr;
  	}, []);
  	return '{' + arrObj.join(',') + '}';
  }
};

