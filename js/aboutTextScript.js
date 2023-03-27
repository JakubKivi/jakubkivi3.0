
var showPage=0;
var aboutContainer = document.getElementById("about-left");

async function aboutTextInsert(){
    aboutContainer.classList.add("hiding");
    await new Promise(r => setTimeout(r, 800));
    document.getElementById("about-text").innerHTML= aboutText[showPage];
    aboutContainer.classList.remove("hiding");
} 
aboutTextInsert(showPage);
function lArrow(){
    showPage-=1;
    aboutTextInsert();
}

function rArrow(){
    showPage+=1;
    aboutTextInsert();
}