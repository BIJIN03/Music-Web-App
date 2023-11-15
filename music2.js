const links = document.getElementById("links")


songs.forEach((song) => {
    const url = new URL(window.location.origin + "/music1.html")
    url.searchParams.set("q", song.name.toLowerCase());
    links.innerHTML += `
    <div><a href="${url.href}">${song.name}<div>${song.artist}</div></a></div>
    `   
})