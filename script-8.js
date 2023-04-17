function labelcreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

function linebreakers(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}

var firstname=labelcreate("label","for","firstname","First Name");
var br1=linebreakers("br");
var firstnameinput=inputele("input","type","firstname","id","firstname");
var br2=linebreakers("br"); 
document.body.append(firstname,br1,firstnameinput,br2);

var middlename=labelcreate("label","for","middlename","Middle Name");
var br1=linebreakers("br");
var middlenameinput=inputele("input","type","middlename","id","middlename");
var br2=linebreakers("br"); 
document.body.append(middlename,br1,middlenameinput,br2);

var lastname=labelcreate("label","for","middlename","Last Name");
var br1=linebreakers("br");
var lastnameinput=inputele("input","type","middlename","id","last name");
var br2=linebreakers("br"); 
document.body.append(lastname,br1,lastnameinput,br2);

var email=labelcreate("label","for","middlename","Email");
var br1=linebreakers("br");
var emailinput=inputele("input","type","email","id","email");
var br2=linebreakers("br"); 
document.body.append(email,br1,emailinput,br2);

var password=labelcreate("label","for","password","Password");
var br1=linebreakers("br");
var passwordinput=inputele("input","type","email","id","password");
var br2=linebreakers("br"); 
document.body.append(password,br1,passwordinput,br2);



// var table=document.createElement("table");
// table.setAttribute("class","table");

// var thead=document.createElement("thead");
// var trhead=document.createElement("tr");

// var th1=document.createElement("th");
// th1.setAttribute("scope","col");
// th1.innerHTML="First";

// var th2=document.createElement("th");
// th2.setAttribute("scope","col");
// th2.innerHTML="Second";

// trhead.append(th1,th2);
// thead.append(trhead);

// var tbody=document.createElement("tbody");
// var trbody=document.createElement("tr");
// var td1=createtrtd("td","Mark");
// var td2=createtrtd("td","otto");
// trbody.append(td1,td2);
// tbody.append(trbody);

// table.append(thead,tbody);
// document.body.append(table);


{/* <table class="table">
<thead>
  <tr>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
</tbody>
</table> */}





// // var middlename=labelcreate("label","for","middle name","middle name");
// // var br=linebreakers("br");
// // var inputmiddlename=inputcreate("input","type","middle name","id","middle name");
// // var br1=linebreakers("br1"); 
// // document.body.append(middlename,br,inputmiddlename,br1);

// // var lastname=labelcreate("label","for","last name","last name");
// // var br=linebreakers("br");
// // var inputlastname=inputcreate("input","type","last name","id","last name");
// // var br1=linebreakers("br1"); 
// // document.body.append(lastname,br,inputlastname,br1);

// // var email=labelcreate("label","for","email","email");
// // var br=linebreakers("br");
// // var inputemail=inputcreate("input","type","mail","id","email");
// // var br1=linebreakers("br1"); 
// // document.body.append(email,br,inputemail,br1);

// // var password=labelcreate("label","for","password","password");
// // var br=linebreakers("br");
// // var inputpassword=inputcreate("input","type","password","id","password");
// // var br1=linebreakers("br1"); 
// // document.body.append(password,br,inputpassword,br1);



