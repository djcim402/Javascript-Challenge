// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function() {
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(date => date.datetime === inputValue);

  var tbody = d3.select("tbody");

  filteredData.forEach(function(filteredOutput){
      console.log(filteredOutput);
      var row = tbody.append("tr");

  // Update table
  Object.entries(filteredOutput).forEach(function([key, value]){
      console.log(key, value);
      row.append("td").text(value);
  });
 });
});