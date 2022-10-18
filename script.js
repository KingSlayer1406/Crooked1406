function getAndupdate(){
    console.log("Updating List...") ;
 tit = document.getElementById('title').value;
 desc=document.getElementById('Description').value;
 if (localStorage.getItem('itemsJson')==null){
    itemJsonArray = [];
    itemJsonArray.push([tit,desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
 }
 else{
  itemJsonArrayStr = localStorage.getItem('itemsJson')
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  itemJsonArray.push([tit,desc]);
  localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

 }
 update();

  }
  function update(){     
    if (localStorage.getItem('itemsJson')==null){
    itemJsonArray = [];
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
 }
 else{
  itemJsonArrayStr = localStorage.getItem('itemsJson')
  itemJsonArray = JSON.parse(itemJsonArrayStr);

 }       
 //populate the table
 tableBody = document.getElementById("tablebody")
 let str="";
 itemJsonArray.forEach((element, index)=> {
  str +=  `
  <tr>
          <th scope="row">${index+1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
          </tr>`;
         });
 tableBody.innerHTML = str;
      }
add = document.getElementById("add");
add.addEventListener("click",getAndupdate);
update();
function deleted(itemindex){
  console.log("Delete",itemindex);
  itemJsonArrayStr = localStorage.getItem('itemsJson')
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  //Delete item index element from the array
  itemJsonArray.splice(itemindex,1);
  localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  update();
}
function clearstr(){
if(confirm("Are you Sure??")){
console.log('clearing the storage');
localStorage.clear();
update();
} else {
   localStorage.clear('');
}}
 
const searchFun= () =>{
let filter = document.getElementById('myInput').value.toUpperCase();

let tablebody = document.getElementById('tablebody');

let tr = tablebody.getElementsByTagName('tr');

for(let i=0; i<tr.length; i++){
   let td = tr[i].getElementsByTagName('td')[0];

   if(td){
      let textvalue = td.textContent || td.innerHTML;
      if(textvalue.toUpperCase().indexOf(filter)> -1){
         tr[i].style.display = "";
         }else{
            tr[i].style.display = "none";
         }
   }
}
}
