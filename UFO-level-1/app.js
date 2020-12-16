// var tableData = data;
// console.log(tableData)

var tbody = d3.select("#tbody")

function tableData(data){
    data.forEach(ufoData => {
        var tbody = d3.select("#tbody")
        // append a row to the table body
        var row = tbody.append("tr")
        // looping through each column in the row and adding each value as a td
        Object.values(ufoData).forEach(value => {
            row.append("td").text(value)
        })
    })
};

tableData(data);