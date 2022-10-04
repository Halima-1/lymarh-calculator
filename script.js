let output = document.getElementById('output')
    let outputValue = output.value



function clearing(){
    let output = document.getElementById('output');
    let outputValue =  output.value
    if( outputValue  !='off' && outputValue != "Turn On the calculator"){
        if(outputValue == 0){
            output.value = "";
           }
          output.value = ''
}
else{output.value = 'Turn On the calculator'}
}
//  function del(){
//     let output = document.getElementById('output');
//     let result = output.value
//     let sclicevalue = result.sclice(0, -1) 
//     let outputValue = output.value
//     if( outputValue  !='off' && outputValue != "Turn On the calculator"){
//         if(outputValue == 0){
//             output.value = "";
//            }
//           output.value = sclicevalue
// }
// else{
//     output.value = 'Turn on your calculator';
// }
//         }

function del(){
let output = document.getElementById('output');
let result = output.value
let slicevalue = result.slice(0, -1)
let outputValue = output.value
if( outputValue !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value = slicevalue

}
else{
output.value ="Turn On the calculator";
}
}


function onandoff(){
    let output = document.getElementById('output');
   var outputValue = output.value;
    if(outputValue =="off" || outputValue == "Turn On the calculator"){
        output.value = 0
    }
    else{
        output.value="off"
    }
}

function one(){

    let output = document.getElementById('output');

    let outputValue =  output.value
    if( outputValue  !='off' && outputValue != "Turn On the calculator"){

   if(outputValue == 0){
    output.value = "";
   }
   output.value +=1
}
else{
    output.value ="Turn On the calculator";
}
}

 function two() {
    let output = document.getElementById('output');
    let outputValue = output.value
    if (outputValue != 'off' && outputValue !='Turn on the calculator'){
        if(outputValue == 0){
            output.value = "";
        }

    output.value += 2
}
else{
    output.value = "Turn on the calculator"
}
 }
 function three(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +=3
}
else{
output.value ="Turn On the calculator";
}
}
function four(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +=4
}
else{
output.value ="Turn On the calculator";
}
}function five(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +=5
// console.log(output)
}
else{
output.value ="Turn On the calculator";
}
}
function six(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +=6
}
else{
output.value ="Turn On the calculator";
}
}

function seven(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +=7
}
else{
output.value ="Turn On the calculator";
}
}
function eight(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +=8
}
else{
output.value ="Turn On the calculator";
}
}
function nine(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +=9
}
else{
output.value ="Turn On the calculator";
}
}
function minus(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +='-'
}
else{
output.value ="Turn On the calculator";
}
}
function plus(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +='+'
}
else{
output.value ="Turn On the calculator";
}
}
function modulus(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +='%'
}
else{
output.value ="Turn On the calculator";
}
}
function zero(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +=0
}
else{
output.value ="Turn On the calculator";
}
}
function multiply(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +='*'
}
else{
output.value ="Turn On the calculator";
}
}
function divide(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +='/'
}
else{
output.value ="Turn On the calculator";
}
}
function exponential(){

let output = document.getElementById('output');

let outputValue =  output.value
if( outputValue  !='off' && outputValue != "Turn On the calculator"){

if(outputValue == 0){
output.value = "";
}
output.value +='**'
}
else{
output.value ="Turn On the calculator";
}
}
function result() {
    let output = document.getElementById('output')
    let result = eval  (output.value)
    output.value =  result ;
}
