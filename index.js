showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addNote = document.getElementById("addNote");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addNote.value
    }
    if(addNote.value.trim() != '' && addTitle.value.trim() != ''){
        notesObj.push(myObj);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        addNote.value = "";
        addTitle.value = "";
    }
    else{
        alert("Write something!!!")
    }
    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index){
        html += `
                <div id="notes" class="notecard">
                    <h3>${element.title}</h3>
                    <p>${element.text}</p>
                    <br>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn">Delete Note</button>
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

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}