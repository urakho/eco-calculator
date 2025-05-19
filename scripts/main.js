function openModal(event, id) {
    event.preventDefault();
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function shortUID(length = 6) {
    return crypto.randomUUID().replace(/-/g, '').slice(0, length);
}

// Accept Disclaimer and set cookie
function acceptDisclaimer() {
    document.cookie = "disclaimerAccepted=true; path=/; max-age=31536000"; // 1 year
    document.getElementById("disclaimer-modal").style.display = "none";
}

function addNewWorld() {
    document.getElementById('caption').innerText='New World';
    document.getElementById('world-settings.world-name').value='My World';
    document.getElementById('price-list').style.display='none';
    document.getElementById('world-settings').style.display='flex';
}

function createNewWorld() {
    document.getElementById('caption').innerText='Price List';
    document.getElementById('price-list').style.display='flex';
    document.getElementById('world-settings').style.display='none';                
}

function cancelNewWorld() {
    document.getElementById('caption').innerText='Price List';
    document.getElementById('price-list').style.display='flex';
    document.getElementById('world-settings').style.display='none';                
}
