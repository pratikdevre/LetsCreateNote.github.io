console.log("Welcome to notes app. This is app.js");
shownotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addNote = document.getElementById("addNote");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    
    notesObj.push(addNote.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addNote.value = "";
    shownotes();
});


function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }

   





    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="notecard" style="border:1px blabk solid">
            <h3>Note ${index + 1}</h3>
            <p style=" border: 2px black double; max-width: 30em;    border-radius: 5px; background-color: #fff;">${element}</p>
                <br>
            <button id="${index}" onclick="deleteNote(this.id)" class="delete">Delete Note</button>
             </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<h4>Nothing to show !!! Use "Add Note" to add a notes.</h4>`;
    }
}

function deleteNote(index){
    // console.log("deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}
