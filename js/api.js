async function newImage() {
    let url;
    const data = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await data.json();
    url = json[0].url;
 
    if (url) {
        document.getElementById("catimage").src =  url;
    }

}
