// from data.js
var tableData = data;

// YOUR CODE HERE!

// making tbody a global variable
let tbody = d3.select("tbody")
function uploadData(data){
    data.forEach(ufoData => {
        var tbody = d3.select("tbody")
        // append a row to the table body
        var row = tbody.append("tr")
        // looping through each column in the row and adding each value as a td
        Object.values(ufoData).forEach(value => {
            row.append("td").text(value)
        })
    })
};

uploadData(data);

function filterData(){
    $("tbody").empty();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // Only return values that match with input date
    var filteredData = data.filter(data => data.datetime === inputValue);
    // Prevent the page from refreshing after form submission
    d3.event.preventDefault();
    uploadData(filteredData);
    // jQuery method for emptying the input field after click
    $("#datetime").val('');
};

  // Select the button
  var button = d3.selectAll("#filter-btn")
  // Select the form
  var form = d3.select("form");
  // Create event handlers 
  button.on("click", filterData);
  form.on("submit", filterData);
















