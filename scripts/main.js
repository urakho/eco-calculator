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

function loadWorlds() {
    const select = document.getElementById("world-select");
    select.innerHTML = "";
    for (let key in localStorage) {
        if (key.startsWith("world.")) {
            const world = JSON.parse(localStorage.getItem(key));            
            const option = document.createElement("option");
            option.value = key;
            option.textContent = world.name;
            select.appendChild(option);
        }
    }
}

// Accept Disclaimer and set cookie
function acceptDisclaimer() {
    document.cookie = "disclaimerAccepted=true; path=/; max-age=31536000"; // 1 year
    document.getElementById("disclaimer-modal").style.display = "none";
}

function addNewWorld() {
    document.getElementById('caption').innerText ='New World';
    document.getElementById('world-settings.world-name').value ='My World';
    document.getElementById('world-settings.btn-save').onclick = (event) => { saveNewWorld(); };
    document.getElementById('price-list').style.display ='none';
    document.getElementById('world-settings').style.display ='flex';
}

function saveNewWorld(wid = shortUID()) {
    const world = {
        ver: '0.1',
        name: document.getElementById('world-settings.world-name').value
    };
    localStorage.setItem('world.' + wid, JSON.stringify(world));
    document.getElementById('caption').innerText ='Price List';
    document.getElementById('price-list').style.display ='flex';
    document.getElementById('world-settings').style.display ='none';
    loadWorlds();                
}

function cancelNewWorld() {
    document.getElementById('caption').innerText ='Price List';
    document.getElementById('price-list').style.display ='flex';
    document.getElementById('world-settings').style.display ='none';                
}
