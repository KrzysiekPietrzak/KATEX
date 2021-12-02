var next_mach=document.getElementById('next_machine');


next_mach.onclick = function(){

var start_ind = parseInt(next_mach.getAttribute("ind_value"));
var next_mach_number = start_ind;
var figc1 = document.getElementById('fc'+start_ind);
figc1.style.display  = 'none';
next_mach_number =  (next_mach_number+parseInt(1) )% parseInt(3)  ;
var figc2 = document.getElementById('fc'+next_mach_number);
figc2.style.display  = 'inline-block';
next_mach.setAttribute("ind_value",next_mach_number);

};

var sum_1 = document.getElementById('sum_1');

sum_1.onclick = function(){

  var x = parseInt(document.getElementById('form_1').value);
  var y = parseInt(document.getElementById('form_2').value);
var z = document.getElementById('form_3').checked;

if (z){
  document.getElementById("demo").innerHTML = x - y;
}else{  document.getElementById("demo").innerHTML = x + y;}
};

document.getElementById("demo3").innerHTML =
"Number of anchors are: " + document.anchors.length;
console.log("I did just that");
let group1 = ["red","1",1,2,null,true];
console.log(group1[2]+group1[5]);
