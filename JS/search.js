// All of the actually good code inside of this function was copy and pasted from here https://stackoverflow.com/a/5004276
// Variable to hold request
var request;

let dates = ['1900','2020'];
let queResponse = [];
let responseQueue = {};

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
           console.log("Failed")
        }
        
    })
}

autoSearch();

function searchMapFull(){
    let responseCount = 0;
    let responseQueue = [];
    let township = locationSearch[0];
    let range = locationSearch[1];
    let section = locationSearch[2];
    tableClear();

    for(i = 0; i < queResponse.length; i++){
        if(queResponse[i].TSP == township && queResponse[i].RGE == range && queResponse[i].SEC == section){
            responseCount++
            responseQueue[responseCount] = queResponse[i];
            tableDisplay(responseQueue, responseCount)
        }
    }
}

function searchQueryJS(){
    autoSearch();
    let responseCount = 0;
    let responseQueue = [];
    let testDates = document.getElementById('dateLess').checked;
    let testType = document.getElementById('type').value;
    let testName = document.getElementById('nameSearch').value.toUpperCase();
    let testGrant = document.getElementById('grants').value;
    let enableType = document.getElementById('useType').checked;
    let enableName = document.getElementById('useName').checked;
    let lowerDate = dates[0];
    let upperDate = dates[1];
    let township = locationSearch[0];
    let range = locationSearch[1];
    let section = locationSearch[2];
    tableClear();

    for(i = 0; i < queResponse.length; i++){
        if(testDates){
            if(enableType){
                if(queResponse[i].TYPE == testType){
                    if(enableName){
                        //undated, type, and name
                        if(testGrant == "Grantor (Seller)"){
                            if(queResponse[i].First_Name_Grantor_1 == testName || queResponse[i].Last_Name_Grantor_1 == testName){
                                if(locationSearchUse){
                                    if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                        responseCount++
                                        responseQueue[responseCount] = queResponse[i];
                                        tableDisplay(responseQueue, responseCount)
                                    }
                                }else{
                                responseCount++
                                responseQueue[responseCount] = queResponse[i];
                                tableDisplay(responseQueue, responseCount)
                                }
                            }
                        }else{
                            if(queResponse[i].First_Name_Grantee_1 == testName || queResponse[i].Last_Name_Grantee_1 == testName){
                                if(locationSearchUse){
                                    if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                        responseCount++
                                        responseQueue[responseCount] = queResponse[i];
                                        tableDisplay(responseQueue, responseCount)
                                    }
                                }else{
                                responseCount++
                                responseQueue[responseCount] = queResponse[i];
                                tableDisplay(responseQueue, responseCount)
                                }
                            }
                        }
                    }else{
                        //undated, type, and no name

                        if(locationSearchUse){
                            if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                responseCount++
                                responseQueue[responseCount] = queResponse[i];
                                tableDisplay(responseQueue, responseCount)
                            }
                        }else{
                        responseCount++
                        responseQueue[responseCount] = queResponse[i];
                        tableDisplay(responseQueue, responseCount)
                        }
                    }
                }
            }else{
                if(enableName){
                    //undated, no type, and name
                    if(testGrant == "Grantor (Seller)"){
                        if(queResponse[i].First_Name_Grantor_1 == testName || queResponse[i].Last_Name_Grantor_1 == testName){
                            if(locationSearchUse){
                                if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                    responseCount++
                                    responseQueue[responseCount] = queResponse[i];
                                    tableDisplay(responseQueue, responseCount)
                                }
                            }else{
                            responseCount++
                            responseQueue[responseCount] = queResponse[i];
                            tableDisplay(responseQueue, responseCount)
                            }
                        }
                    }else{
                        if(queResponse[i].First_Name_Grantee_1 == testName || queResponse[i].Last_Name_Grantee_1 == testName){
                            if(locationSearchUse){
                                if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                    responseCount++
                                    responseQueue[responseCount] = queResponse[i];
                                    tableDisplay(responseQueue, responseCount)
                                }
                            }else{
                            responseCount++
                            responseQueue[responseCount] = queResponse[i];
                            tableDisplay(responseQueue, responseCount)
                            }
                        }
                    }
                }else{
                    //undated, no type, and no name
                    if(locationSearchUse){
                        if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                            responseCount++
                            responseQueue[responseCount] = queResponse[i];
                            tableDisplay(responseQueue, responseCount)
                        }
                    }else{
                    responseCount++
                    responseQueue[responseCount] = queResponse[i];
                    tableDisplay(responseQueue, responseCount)
                    }
                }
            }
        }else{
            //uses slider dates
            if(queResponse[i].DATE != null){
                if(queResponse[i].DATE > lowerDate && queResponse[i].DATE < upperDate){
                    if(enableType){
                        if(queResponse[i].TYPE == testType){
                            if(enableName){
                                //dated, type, and name
                                if(testGrant == "Grantor (Seller)"){
                                    if(queResponse[i].First_Name_Grantor_1 == testName || queResponse[i].Last_Name_Grantor_1 == testName){
                                        if(locationSearchUse){
                                            if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                                responseCount++
                                                responseQueue[responseCount] = queResponse[i];
                                                tableDisplay(responseQueue, responseCount)
                                            }
                                        }else{
                                        responseCount++
                                        responseQueue[responseCount] = queResponse[i];
                                        tableDisplay(responseQueue, responseCount)
                                        }
                                    }
                                }else{
                                    if(queResponse[i].First_Name_Grantee_1 == testName || queResponse[i].Last_Name_Grantee_1 == testName){
                                        if(locationSearchUse){
                                            if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                                responseCount++
                                                responseQueue[responseCount] = queResponse[i];
                                                tableDisplay(responseQueue, responseCount)
                                            }
                                        }else{
                                        responseCount++
                                        responseQueue[responseCount] = queResponse[i];
                                        tableDisplay(responseQueue, responseCount)
                                        }
                                    }
                                }
                            }else{
                                //dated, type, and no name
                                if(locationSearchUse){
                                    if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                        responseCount++
                                        responseQueue[responseCount] = queResponse[i];
                                        tableDisplay(responseQueue, responseCount)
                                    }
                                }else{
                                responseCount++
                                responseQueue[responseCount] = queResponse[i];
                                tableDisplay(responseQueue, responseCount)
                                }
                            }
                        }
                    }else{
                        if(enableName){
                            //dated, no type, and name
                            if(testGrant == "Grantor (Seller)"){
                                if(queResponse[i].First_Name_Grantor_1 == testName || queResponse[i].Last_Name_Grantor_1 == testName){
                                    if(locationSearchUse){
                                        if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                            responseCount++
                                            responseQueue[responseCount] = queResponse[i];
                                            tableDisplay(responseQueue, responseCount)
                                        }
                                    }else{
                                    responseCount++
                                    responseQueue[responseCount] = queResponse[i];
                                    tableDisplay(responseQueue, responseCount)
                                    }
                                }
                            }else{
                                if(queResponse[i].First_Name_Grantee_1 == testName || queResponse[i].Last_Name_Grantee_1 == testName){
                                    if(locationSearchUse){
                                        if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                            responseCount++
                                            responseQueue[responseCount] = queResponse[i];
                                            tableDisplay(responseQueue, responseCount)
                                        }
                                    }else{
                                    responseCount++
                                    responseQueue[responseCount] = queResponse[i];
                                    tableDisplay(responseQueue, responseCount)
                                    }
                                }
                            }
                        }else{
                            //dated, no type, and no name
                            if(locationSearchUse){
                                if(queResponse[i].TSP == township && queResponse[i].RGE == range){
                                    responseCount++
                                    responseQueue[responseCount] = queResponse[i];
                                    tableDisplay(responseQueue, responseCount)
                                }
                            }else{
                            responseCount++
                            responseQueue[responseCount] = queResponse[i];
                            tableDisplay(responseQueue, responseCount)
                            }
                        }
                    }
                }
            }
        }
    }

}

function dateSliderImport(values){
    dates[0] = values[0]+values[1]+values[2]+values[3]+'-1-1';
    dates[1] = values[5]+values[6]+values[7]+values[8]+'-12-31';
    searchQueryJS();
}

function tableDisplay(responseQueue, responseCount){
    let table = document.getElementById("resultsTable")
    var row = table.insertRow(-1);
    var type = row.insertCell(0);
    var gntr = row.insertCell(1);
    var gnte = row.insertCell(2);
    var sec = row.insertCell(3);
    var tsp = row.insertCell(4);
    var rge = row.insertCell(5);
    var date = row.insertCell(6);
    type.innerHTML = responseQueue[responseCount].TYPE;
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

//enables and disables dropdowns

function handleClick(id){
    switch(id.id){
        case 'useType':
            if(id.checked == true){
                document.getElementById("type").disabled = false;
            }else{
                document.getElementById("type").disabled = true;
            }
        break;
        case 'useName':
            if(id.checked == true){
                document.getElementById("nameSearch").disabled = false;
                document.getElementById("grants").disabled = false;
            }else{
                document.getElementById("nameSearch").disabled = true;
                document.getElementById("grants").disabled = true;
            }
        break;
        default:
            console.log("error id not found")
    }
}


//makes all checkboxes default to unselected
function setupChecks(){
    var inputs = document.getElementsByTagName('input');
    for (var i=0; i<inputs.length; i++)  {
        if (inputs[i].type == 'checkbox')   {
            inputs[i].checked = false;
        }
    }  
    document.getElementById("type").disabled = true;
    document.getElementById("nameSearch").disabled = true;
    document.getElementById("grants").disabled = true; 
}
setupChecks();