function openModal(event, id) {
    event.preventDefault();
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
