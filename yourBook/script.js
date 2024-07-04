var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addbutton=document.getElementById("add-popup-button")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
 }
 )  
 var cancelbutton=document.getElementById("cancel-book")

 cancelbutton.addEventListener("click",function(event){
          event.preventDefault()
          popupoverlay.style.display="none"
          popupbox.style.display="none"

 })
 



 var container=document.querySelector(".container")
 var addbook=document.getElementById("add-book")
 var booktitle=document.getElementById("book-title")
 var bookauthor=document.getElementById("book-Author")
 var bookdescription=document.getElementById("story-description")
 
 
  
 addbook.addEventListener("click",function(event){
       event.preventDefault()
       var div=document.createElement("div")
       div.setAttribute("class","book-container")
       div.innerHTML=`<h2>${booktitle.value}</h2>
       <h5>${bookauthor.value}</h5>
       <p>${bookdescription.value}</p>
       <button id="delete-button" onclick="deletebook(event)" >Delete</button>`
       container.append(div)
       popupoverlay.style.display="none"
       popupbox.style.display="none"


})
var bookcontainer=document.querySelector(".book-container")
 var deletebutton=document.getElementById("delete-button")
  
 deletebutton.addEventListener("click",function(){
      bookcontainer.style.display="none"
 })
function deletebook(event){
    event.target.parentElement.remove()
}
   
 
       