function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}
var fname=createlabels("label","for","FirstName","First Name");
var br1=createlinebreak("br");
var finput=createinput("input","type","text","id","name");
var br2=createlinebreak("br");

var mname=createlabels("label","for","MiddleName","Middle Name");
var br3=createlinebreak("br");
var minput=createinput("input","type","text","id","name");
var br4=createlinebreak("br");

var lname=createlabels("label","for","LastName","Last Name");
var br5=createlinebreak("br");
var linput=createinput("input","type","text","id","name");
var br6=createlinebreak("br");

var pnumber=createlabels("label","for","PhoneNumber","Phone Number");
var br7=createlinebreak("br");
var pinput=createinput("input","type","text","id","name");
var br8=createlinebreak("br");




document.body.append(fname,br1,finput,br2,mname,br3,minput,br4,lname,br5,linput,br6,pnumber,br7,pinput,br8);



    