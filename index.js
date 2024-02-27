function fetchData(callback) {
    setTimeout(function() {
      var data = "Data received!";
      callback(data);
    }, 2000);
  }
  
  function processResult(result, callback) {
    setTimeout(function() {
      console.log("Processing data: " + result);
      callback(result);
    }, 1000);
  }
  
  function displayMessage(message, callback) {
    setTimeout(function() {
      console.log("Displaying message: " + message);
      callback();
    }, 500);
  }
  
  function logCompletion() {
    console.log("Process completed!");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("myButton");
    button.addEventListener("click", function() {
      fetchData(function(result) {
        processResult(result, function(result) {
          displayMessage(result, logCompletion);
        });
      });
    });
  });