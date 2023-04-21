var animationTime = 1000;

onLoad();
function onLoad(){
    onSelectorClicked();
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  window.addEventListener('load', function () {
    document.getElementsByClassName('load-container')[0].style.width =
        (document.getElementsByClassName('img-me')[0].offsetWidth.toString()+"px");

    setTimeout(function(){
        document.getElementsByClassName('loading')[0].style.opacity = "0";
    }, animationTime);

    var loads = document.getElementsByClassName("load");
    loads[0].classList.add("top");
    loads[1].classList.add("bottom");
    loads[2].classList.add("left");
    loads[3].classList.add("right");
    
    document.getElementsByClassName('load-container')[0].classList.add("mx-auto");
    console.log(document.getElementsByClassName('load-container')[0].style.width +" => "+ document.getElementsByClassName('img-me')[0].offsetWidth);
  })