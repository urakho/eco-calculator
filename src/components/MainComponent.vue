<template>
    <main>
        <div id="price-list" class="pages">
            <div class="main-controls">
                <label style="width: fit-content;">World:
                    <select id="world-select" style="width: 25dvw;"></select>
                </label>
                <div style="flex: 1;"></div>
                <div style="width: fit-content;">
                    <button onclick="addNewWorld()">Add</button>
                    <button onclick="editWorld()">Edit</button>
                    <button onclick="deleteWorld()">Delete</button>
                </div>  
            </div>
            <div class="main-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th><th>Labor</th><th>$</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                        <tr><td>Light Bulb</td><td>720</td><td>27.7</td></tr>
                        <tr><td>Medium Fishing Trawler</td><td>10286</td><td>395.6</td></tr>
                        <tr><td>Wild Stew</td><td>63</td><td>2.4</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="world-settings" class="pages" style="display: none;"> 
            <div class="settings-params">
                <label style="width: 100%; display: flex; flex-direction: row;">
                    World name:
                    <input type="text" id="world-settings.world-name" style="flex: 1;" />
                </label>
            </div>
            <div class="settings-controls">
                <button id="world-settings.btn-save">Save</button>
                <button onclick="cancelWorld('world-settings')">Cancel</button>
            </div>
        </div>
        <div id="world-delete" class="pages" style="display: none;"> 
            <div class="settings-params" style="text-align: center;">
                <p>Are you sure you want to delete the <span id="world-delete.world-name" style="font-weight: bold;"></span> world?</p>
            </div>
            <div class="settings-controls">
                <button id="world-delete.btn-yes">Yes</button>
                <button onclick="cancelWorld('world-delete')">No</button>
            </div>
        </div>
    </main>
</template>
