let table = document.getElementById("mytable");

fetch("https://swapi.dev/api/people/")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data:", data);

    // Adding Rows and Cells to the table
    let cell = [];
    for (let i = 0; i < data.results.length; i++) {
      let row = table.insertRow(i + 1);

      //   Creating Cells
      for (let j = 0; j <= 8; j++) {
        cell[j] = row.insertCell(j);
      }

      //   Filling value in the cells
      cell[0].innerHTML = `${data.results[i].name}`;
      cell[2].innerHTML = `${data.results[i].gender}`.toUpperCase();
      cell[3].innerHTML = `${data.results[i].height}`;
      cell[4].innerHTML = `${data.results[i].mass}`;
      cell[5].innerHTML = `${data.results[i].skin_color}`;
      cell[6].innerHTML = `${data.results[i].birth_year}`;
      cell[7].innerHTML = `${data.results[i].homeworld}`;
      cell[8].innerHTML = `${data.results[i].films.length}`;

      //   ICON SHOWING CONDITIONS
      if (data.results[i].species == "https://swapi.dev/api/species/1/") {
        cell[1].innerHTML = `<i class="fa fa-android" aria-hidden="true"></i>`;
      } else if (
        data.results[i].species == "https://swapi.dev/api/species/2/"
      ) {
        cell[1].innerHTML = `<i class="fa fa-user-circle-o"></i>`;
      } else {
        cell[1].innerHTML = `<i class="fa fa-question-circle" aria-hidden="true"></i>`;
      }
    }
  });

// Sorting Text Columns
function sortTable(n) {
  var rows,
    i,
    x,
    y,
    count = 0;
  var switching = true;

  // Order is set as ascending
  var direction = "ascending";

  // Run loop until no switching is needed
  while (switching) {
    switching = false;
    var rows = table.rows;

    //Loop to go through all rows
    for (i = 1; i < rows.length - 1; i++) {
      var Switch = false;

      // Fetch 2 elements that need to be compared
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      // Check the direction of order
      if (direction == "ascending") {
        // Check if 2 rows need to be switched
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If yes, mark Switch as needed and break loop
          Switch = true;
          break;
        }
      } else if (direction == "descending") {
        // Check direction
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If yes, mark Switch as needed and break loop
          Switch = true;
          break;
        }
      }
    }
    if (Switch) {
      // Function to switch rows and mark switch as completed
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      // Increase count for each switch
      count++;
    } else {
      // Run while loop again for descending order
      if (count == 0 && direction == "ascending") {
        direction = "descending";
        switching = true;
      }
    }
  }
}
// Sorting Number Columns
function sort(n) {
  var rows,
    i,
    x,
    y,
    z = [],
    count = 0;
  var switching = true;

  // Order is set as ascending
  var direction = "ascending";

  // Run loop until no switching is needed
  while (switching) {
    switching = false;
    var rows = table.rows;

    //Loop to go through all rows
    for (i = 1; i < rows.length - 1; i++) {
      var Switch = false;

      // Fetch 2 elements that need to be compared
      x = rows[i].getElementsByTagName("TD")[n].innerHTML;
      z[i] = rows[i].getElementsByTagName("TD")[n].innerHTML;
      y = rows[i + 1].getElementsByTagName("TD")[n].innerHTML;

      // Check the direction of order
      if (direction == "ascending") {
        // Check if 2 rows need to be switched
        if (x > y) {
          z.sort(function (a, b) {
            return a - b;
          });
          // If yes, mark Switch as needed and break loop
          Switch = true;
          break;
        }
      } else if (direction == "descending") {
        // Check direction
        if (x < y) {
          // If yes, mark Switch as needed and break loop
          Switch = true;
          break;
        }
      }
      //   rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    }
    if (Switch) {
      // Function to switch rows and mark switch as completed
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      // Increase count for each switch
      count++;
    } else {
      // Run while loop again for descending order
      if (count == 0 && direction == "ascending") {
        direction = "descending";
        switching = true;
      }
    }
  }
}

// Search Algo

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("mytable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
