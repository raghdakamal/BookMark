var siteName=document.getElementById("siteName");
var siteURL=document.getElementById("siteURL");
var tableBody=document.getElementById("table-body");


var sites=[];

//first function called on load of window(when i refresh browser)
window.onload=function(){
    //get data from local storage
    //using parse to convert from string to array
    sites=JSON.parse(localStorage.getItem('sites'));//first time will be null
    
    if(sites!==null)
	{
        displayData();
    }
    else{
        sites=[];
    }
   // console.log(sites)
}


function add(){
    var site={
        name:siteName.value,url:siteURL.value
    }
    sites.push(site);
    //using stringfy to convert array to string 
    localStorage.setItem("sites",JSON.stringify(sites));//set sites array as string in local storage 
    displayData();
    clearForm()
 
}



function displayData()
{
    var trs="";
    for(var i=0;i<sites.length;i++){
   trs+="<tr><td>"+sites[i].name+"</td><td><button class='btn btn-danger my-3' onclick='visit("+i+")'>Visit</button></td><td><button class='btn btn-danger my-3' onclick='deletesite("+i+")'>Delete user</button></td></tr>";
}
    tableBody.innerHTML=trs;

}


function deletesite(id){
    // remove from site array
    sites.splice(id, 1); 
    //using stringfy to convert array to string 
    localStorage.setItem("sites",JSON.stringify(sites));//set sites array as string in local storage 
    displayData();
 
}
function visit(id)
{
	var url=sites[id].url;
	window.open(url, "_blank");
}


/*how to clear form data after adding to table*/
function clearForm(){
    var inputs=document.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++){
      inputs[i].value=""
    }
}

