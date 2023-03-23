var selector = document.getElementsByClassName("portfolio-selector")[0].children;

var activeSelector=1;

for (var i = 0; i < selector.length; i++) { 
    selector[i].addEventListener("click", onSelectorClicked);
}

async function onSelectorClicked(element){
    var id = element.currentTarget.getAttribute("data-userid");
    if(id!=activeSelector){
        selector[activeSelector-1].children[0].classList.remove("active");
        selector[id-1].children[0].classList.add("active");
        activeSelector = id;
        var rightColumn = document.getElementById("right-column");
        rightColumn.style.opacity = 0;
        
        await new Promise(r => setTimeout(r, 500));

        ChangePortfolioContent(id, rightColumn);
    }
}

function ChangePortfolioContent(a, r){
    var myModal = document.getElementById("modal-"+a);
    
    document.getElementById("portfolio-text").innerHTML = 
    myModal.getElementsByClassName("portfolio-text")[0].innerHTML;
    
    document.getElementById("portfolio-image").innerHTML = 
    myModal.getElementsByClassName("img-container")[0].innerHTML;

    document.getElementById("portfolio-title").innerHTML = 
    myModal.getElementsByClassName("modal-title")[0].innerHTML;

    r.style.opacity = 1;
}