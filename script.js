const createButton = document.getElementById("createButton");
        const createNotePopup = document.getElementById("createNotePopup");
        const saveButton = document.getElementById("saveButton");
        const notesContainer = document.querySelector(".notes-container");
        createButton.addEventListener("click", () => {
            createNotePopup.style.display = "block";
        });
        saveButton.addEventListener("click", () => {
            const title = document.getElementById("noteTitle").value;
            const description = document.getElementById("noteDescription").value;
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
            notesContainer.appendChild(noteElement);
            createNotePopup.style.display = "none";
            document.getElementById("noteTitle").value = "";
            document.getElementById("noteDescription").value = "";
        });