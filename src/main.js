function addNewWorld() {
    document.getElementById('caption').innerText = 'New World';
    document.getElementById('world-settings.world-name').value = 'My World';
    document.getElementById('world-settings.btn-save').onclick = (event) => { saveWorld(); };
    document.getElementById('price-list').style.display = 'none';
    document.getElementById('world-settings').style.display = 'flex';
}

function editWorld() {
    const key = document.getElementById("world-select").value;
    world = JSON.parse(localStorage.getItem(key));
    document.getElementById('caption').innerText = 'Edit World';
    document.getElementById('world-settings.world-name').value = world.name;
    document.getElementById('world-settings.btn-save').onclick = (event) => { saveWorld(key); };
    document.getElementById('price-list').style.display = 'none';
    document.getElementById('world-settings').style.display = 'flex';    
}

function deleteWorld() {
    const key = document.getElementById("world-select").value;
    world = JSON.parse(localStorage.getItem(key));
    document.getElementById('caption').innerText = 'Delete World';
    document.getElementById('world-delete.world-name').innerText = world.name;
    document.getElementById('world-delete.btn-yes').onclick = (event) => { removeWorld(key); };
    document.getElementById('price-list').style.display = 'none';
    document.getElementById('world-delete').style.display = 'flex';
}    

function saveWorld(key = 'world.' + shortUID()) {
    const world = {
        ver: '0.1',
        name: document.getElementById('world-settings.world-name').value
    };
    localStorage.setItem(key, JSON.stringify(world));
    document.getElementById('caption').innerText = 'Price List';
    document.getElementById('price-list').style.display = 'flex';
    document.getElementById('world-settings').style.display = 'none';
    loadWorlds();
    document.getElementById("world-select").value = key;                
}

function cancelWorld(id) {
    document.getElementById('caption').innerText = 'Price List';
    document.getElementById('price-list').style.display = 'flex';
    document.getElementById(id).style.display = 'none';                
}

function removeWorld(key) {
    localStorage.removeItem(key);
    document.getElementById('caption').innerText = 'Price List';
    document.getElementById('price-list').style.display = 'flex';
    document.getElementById('world-delete').style.display = 'none';
    loadWorlds();
}
