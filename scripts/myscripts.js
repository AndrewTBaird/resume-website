// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://magicseaweed.com/api/bb04fa7be07e96b9ce586782e86b8100/forecast/?spot_id=1149', true);

request.onload = function () {
  // Begin accessing JSON data here
  //xmlhttp.onload = function () {
	//do something with accessed data (xmlhttp.response)	  
  //}
  }
}

// Send request
request.send();