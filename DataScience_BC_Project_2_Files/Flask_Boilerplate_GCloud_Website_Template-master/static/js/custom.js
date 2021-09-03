// function dropdownValueChanges(selectedDropdownValue) {
//   console.log(selectedDropdownValue)
//   fetch(`/api/tickerdata/${selectedDropdownValue}`)
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//     $("#tickerdatadiv").html(`
//     <h3>${data.ShortNames[0]}</h3>
//     <h3>${data.longNames[0]}</h3>
//     `)
// });
// }

// function dropdownValueChanges(selectedDropdownValue) {
//   console.log(selectedDropdownValue)
//   fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=TSLA&region=US", {
//           "method": "GET",
//           "headers": {
//               "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//               "x-rapidapi-key": "746c6f255bmshb7c8057b093750dp14f68ejsnae97022f2103"
//           }
//       })
//   .then(response => response.json());
// }
//   .then(data => showData(data.quoteType.shortName));

//   showData = data => {
//       const dataDiv = document.querySelector("#tickerdatadiv");
//       data.forEach(data => {
//           const dataElement = document.createElement("p");
//           dataElement.innerText = "Company Name: ${data.shortName}";
//           dataDiv.append(dataElement);
//       });      
//   }
// }




function dropdownValueChanges(selectedDropdownValue) {
  console.log(selectedDropdownValue)
  fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=CAT&region=US", {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
              "x-rapidapi-key": "746c6f255bmshb7c8057b093750dp14f68ejsnae97022f2103"
          }
        })
.then(response => response.json())
.then(data => {
    console.log(data)
    $("#tickerdatadiv").html(`<br>
    <h2><b><u>Company Summary Information</b></u></h2>
    <h3>Company Name: ${data.quoteType.shortName}</h3>
    <h3>Website: ${data.summaryProfile.website}</h3>
    <h3>Address: ${data.summaryProfile.address1}, ${data.summaryProfile.city}, ${data.summaryProfile.state} ${data.summaryProfile.zip}</h3>
    <h3>Phone Number: ${data.summaryProfile.phone}</h3>
    <h3>Industry: ${data.summaryProfile.industry} </h3>
    <h3>Employee Ct: ${data.summaryProfile.fullTimeEmployees}</h3>
    <br><br>
    <h2><b><u>Day Summary</b></u>
    <h3>Regular Market Price: $${data.price.regularMarketPrice.fmt}</h3>
    <h3>Regular Market Change: $${data.price.regularMarketChange.fmt}</h3>
    <h3>Change Percentage: ${data.price.regularMarketChangePercent.fmt}</h3>
    <h3>Previous Close: $${data.price.regularMarketPreviousClose.fmt}</h3>
    <h3>Market Open Price: $${data.price.regularMarketOpen.fmt}</h3>
    <h3>Today's Range: $${data.price.regularMarketDayLow.fmt} - $${data.price.regularMarketDayHigh.fmt}</h3>
    <h3>Today's Volume: ${data.price.regularMarketVolume.fmt}</h3>
    `)
});

var margin = { top: 10, right: 60, bottom: 30, left: 90 },
          width = 460 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;
        // append the svg object to the body of the page
        var svg = d3.select("#my_dataviz")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
        //Read the data
        d3.csv("data:text/txt;base64,eWVhcixzZXgsbmFtZSxuLHByb3ANCjIwMjAsLE5ldCBJbmNvbWUsMjk5ODAwMDAwMCwNCjIwMjAsLEdyb3NzIFByb2ZpdCwxMDEyNzAwMDAwMCwNCjIwMjAsLE9wZXJhdGluZyBJbmNvbWUsNDk1NzAwMDAwMCwNCjIwMjAsLFRvdGFsIFJldmVudWUsNDE3NDgwMDAwMDAsDQoyMDIwLCxDb3N0IG9mIFJldmVudWUsMzE2MjEwMDAwMDAsDQoyMDE5LCxOZXQgSW5jb21lLDYwOTMwMDAwMDAsDQoyMDE5LCxHcm9zcyBQcm9maXQsMTQ0NjIwMDAwMDAsDQoyMDE5LCxPcGVyYXRpbmcgSW5jb21lLDgxMTMwMDAwMDAsDQoyMDE5LCxUb3RhbCBSZXZlbnVlLDUzODAwMDAwMDAwLA0KMjAxOSwsQ29zdCBvZiBSZXZlbnVlLDM5MzM4MDAwMDAwLA0KMjAxOCwsTmV0IEluY29tZSw2MTQ3MDAwMDAwLA0KMjAxOCwsR3Jvc3MgUHJvZml0LDE0OTAzMDAwMDAwLA0KMjAxOCwsT3BlcmF0aW5nIEluY29tZSw4MzM2MDAwMDAwLA0KMjAxOCwsVG90YWwgUmV2ZW51ZSw1NDcyMjAwMDAwMCwNCjIwMTgsLENvc3Qgb2YgUmV2ZW51ZSwzOTgxOTAwMDAwMCwNCjIwMTcsLE5ldCBJbmNvbWUsNzU0MDAwMDAwLA0KMjAxNywsR3Jvc3MgUHJvZml0LDExODI0MDAwMDAwLA0KMjAxNywsT3BlcmF0aW5nIEluY29tZSw1NTc2MDAwMDAwLA0KMjAxNywsVG90YWwgUmV2ZW51ZSw0NTQ2MjAwMDAwMCwNCjIwMTcsLENvc3Qgb2YgUmV2ZW51ZSwzMzYzODAwMDAwMCwNCg==", function (data) {
          // List of groups (here I have one group per column)
      
          var allGroup = d3.map(data, function (d) { return (d.name) }).keys()
          // add the options to the button
          d3.select("#selectButton")
            .selectAll('myOptions')
            .data(allGroup)
            .enter()
            .append('option')
            .text(function (d) { return d; }) // text showed in the menu
            .attr("value", function (d) { return d; }) // corresponding value returned by the button
          // A color scale: one color for each group
          var myColor = d3.scaleOrdinal()
            .domain(allGroup)
            .range(d3.schemeSet2);
          // Add X axis --> it is a date format
          var x = d3.scaleLinear()
            .domain(d3.extent(data, function (d) { return d.year; }))
            .range([0, width]);
          svg.append("g")
          .attr("class", "axisRed")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(7));
          // Add Y axis
          var y = d3.scaleLinear()
            .domain([0, d3.max(data, function (d) { return +d.n; })])
            .range([height, 0]);
          svg.append("g")
            .attr("class", "axisRed")
            .call(d3.axisLeft(y));
          // Initialize line with first group of the list
          var line = svg
            .append('g')
            .append("path")
            .datum(data.filter(function (d) { return d.name == allGroup[0] }))
            .attr("d", d3.line()
              .x(function (d) { return x(d.year) })
              .y(function (d) { return y(+d.n) })
            )
            .attr("stroke", function (d) { return myColor("valueA") })
            .style("stroke-width", 4)
            .style("fill", "none")
          // A function that update the chart
          function update(selectedGroup) {
            // Create new data with the selection?
            var dataFilter = data.filter(function (d) { return d.name == selectedGroup })
            // Give these new data to update line
            line
              .datum(dataFilter)
              .transition()
              .duration(1000)
              .attr("d", d3.line()
                .x(function (d) { return x(d.year) })
                .y(function (d) { return y(+d.n) })
              )
              .attr("stroke", function (d) { return myColor(selectedGroup) })
          }
          // When the button is changed, run the updateChart function
          d3.select("#selectButton").on("change", function (d) {
            // recover the option that has been chosen
            var selectedOption = d3.select(this).property("value")
            // run the updateChart function with this selected option
            update(selectedOption)
          })
        })








//   fetch("https://99i18gpyt1.execute-api.us-east-1.amazonaws.com/dev/todo/CAT", {
//           "method": "GET",
//           // "headers": {
//           //     "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//           //     "x-rapidapi-key": "746c6f255bmshb7c8057b093750dp14f68ejsnae97022f2103"
          
//         })
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// });
}
