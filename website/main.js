window.title = `${data.title}-${data.developer} 应用详细`;
document.getElementById("app-icon").src = `/apps/${data.title}-${data.developer}/Icon.png`;
document.getElementById("appTitle").innerHTML = data.title;
document.getElementById("appDeveloper").innerHTML = data.developer;
document.getElementById("description").innerHTML = data.description;
data.versionList.forEach(item => {
    var res = `
    <div class="version-item" id="version-item">
        <div>
            <strong>版本 ${item.version}</strong>
            <div>${item.date}</div>
            <p>${item.log}</p>
        </div>
    `
    item.path.forEach(ele => {
        res += `
            <a href="${ele[0]}" class="version-download">${ele[1]}</a>
        `;
    });
    res += `</div>`;
    document.getElementById("version-list").innerHTML += res;
})