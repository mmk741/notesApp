console.log("Welcome to the javascript");
showNotes();

 function addNote() {
   
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
 
  showNotes();
}

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
      
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
  }

  //function to delete note
  function deleteNote(ind){
   let notes=localStorage.getItem("notes"); 
    notesObj = JSON.parse(notes);
   notesObj.splice(ind,1);
   localStorage.setItem("notes",JSON.stringify(notesObj));
   showNotes();


  }

// function to search
let search=document.getElementById("txtToSearch");
search.addEventListener("input",function(){

    let txt=search.value.toLowerCase();
    
    let noteCards=document.getElementsByClassName("noteCard");
    
    Array.from(noteCards).forEach(function(elem){
        let cardTxt=elem.getElementsByTagName("p")[0].innerText;
      
       
        if(cardTxt.includes(txt))
        {
             elem.style.display="block";
        }
        else
        {
            elem.style.display="none";
        }
    });
});
