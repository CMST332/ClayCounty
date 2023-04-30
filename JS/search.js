// All of the actually good code inside of this function was copy and pasted from here https://stackoverflow.com/a/5004276
// Variable to hold request
var request;

let queResponse = {};
let responseQueue = {};

// Bind to the submit event of our form
/*
$("#foo").submit(function(event){
   event.preventDefault();  // Prevent default posting of form - put here to work in case of errors
    if (request) { // Abort any pending request
        request.abort();
    }
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea"); // Caches the fields
    var serializedData = $form.serialize();
    request = $.ajax({ //sends request
        url: "NameCCLR.php",
        type: "get",
        data: serializedData
    });
    // Callback handler that will be called on success
    request.done(function (response){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        if (response.length >= 1) {
            editTable(response);
            for (i = 0; i < response.length; i++) {
            }
        } else {
           failTable(1);
        }
        
    // });
    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        failTable(2);
    });
});*/

function editTable(response) { //Adds rows of data from the given array results
    var table = document.getElementById("resultsTable");
     $("#resultsTable tbody td").remove();// clears old data from table
    for (i = 0; i < response.length; i++) {
        var row = table.insertRow(-1);
        var gntr = row.insertCell(0);
        var gnte = row.insertCell(1);
        var sec = row.insertCell(2);
        var tsp = row.insertCell(3);
        var rge = row.insertCell(4);
        var date = row.insertCell(5);
        if(response[i].First_Name_Grantor_1 == null){
            gntr.innerHTML = response[i].Last_Name_Grantor_1;
        }else{
            gntr.innerHTML = response[i].First_Name_Grantor_1 + " " + response[i].Last_Name_Grantor_1;
        }
        if(response[i].First_Name_Grantee_1 == null){
            gnte.innerHTML = response[i].Last_Name_Grantee_1;
        }else{
            gnte.innerHTML = response[i].First_Name_Grantee_1 + " " + response[i].Last_Name_Grantee_1;
        }
        sec.innerHTML = response[i].SEC;
        tsp.innerHTML = response[i].TSP;
        rge.innerHTML = response[i].RGE;
        date.innerHTML = response[i].DATE;
    }
}

/*
function failTable(x) { //Displays "no results" on the table when called
    var table = document.getElementById("resultsTable");
    $("#resultsTable tbody td").remove();
    var row = table.insertRow(-1);
    var err = row.insertCell(0);
    row.insertCell(1);
    row.insertCell(2);
    row.insertCell(3);
    row.insertCell(4);
    row.insertCell(5);
    if (x == 1) {
    err.innerHTML = "No results";
    }
    if (x == 2) {
    err.innerHTML = "Error";
    alert("An error has occured. Please refresh the page and try again.");
    }
}
*/

function autoSearch(){
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea"); // Caches the fields
    var serializedData = $form.serialize();
    request = $.ajax({ //sends request
        url: "NameCCLR.php",
        type: "get",
        data: serializedData
    });
    // Callback handler that will be called on success
    request.done(function (response){
        if (response.length >= 1) {
            queResponse = response;
            // editTable(response);
            // searchQueryJS(response);
        } else {
           failTable(1);
        }
        
    })
}

autoSearch();


function searchQueryJS(){
    let responseCount = 0;
    let testDates = document.getElementById('dateLess').checked;
    tableClear();
    if(testDates){
        for(i = 0; i < queResponse.length; i++){
            responseCount++
            responseQueue[responseCount] = queResponse[i];
            tableDisplay(responseQueue, responseCount)
        }
    }else{
        for(i = 0; i < queResponse.length; i++){
            if(queResponse[i].DATE != null){
                responseCount++
                responseQueue[responseCount] = queResponse[i];
                tableDisplay(responseQueue, responseCount)
            }            
        }
    }
    responseCount = 0;
}

function tableDisplay(responseQueue, responseCount){
    let table = document.getElementById("resultsTable")
    var row = table.insertRow(-1);
    var gntr = row.insertCell(0);
    var gnte = row.insertCell(1);
    var sec = row.insertCell(2);
    var tsp = row.insertCell(3);
    var rge = row.insertCell(4);
    var date = row.insertCell(5);
    if(responseQueue[responseCount].First_Name_Grantor_1 == null){
        gntr.innerHTML = responseQueue[responseCount].Last_Name_Grantor_1;
    }else{
        gntr.innerHTML = responseQueue[responseCount].First_Name_Grantor_1 + " " + responseQueue[responseCount].Last_Name_Grantor_1;
    }
    if(responseQueue[responseCount].First_Name_Grantee_1 == null){
        gnte.innerHTML = responseQueue[responseCount].Last_Name_Grantee_1;
    }else{
        gnte.innerHTML = responseQueue[responseCount].First_Name_Grantee_1 + " " + responseQueue[responseCount].Last_Name_Grantee_1;
    }
    sec.innerHTML = responseQueue[responseCount].SEC;
    tsp.innerHTML = responseQueue[responseCount].TSP;
    rge.innerHTML = responseQueue[responseCount].RGE;
    date.innerHTML = responseQueue[responseCount].DATE;
}

function tableClear(){
    $("#resultsTable tbody td").remove();// clears old data from table
}