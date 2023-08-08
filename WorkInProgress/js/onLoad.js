var animationTime = 1500;

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
        setTimeout(function(){
            document.getElementsByClassName('loading')[0].style.display = "none";
        }, 500);
    }, animationTime);

    var loads = document.getElementsByClassName("load");
    loads[0].classList.add("top");
    loads[1].classList.add("bottom");
    loads[2].classList.add("left");
    loads[3].classList.add("right");
    
    document.getElementsByClassName('load-container')[0].classList.add("mx-auto");
  })


  function handleBackPress(event) {
    event.preventDefault();
    event.stopPropagation();
    $('.modal').modal('hide');
    $('.modal-backdrop').remove();
  }
  
  var closedModalHashStateId = "#modalClosed";
  var openModalHashStateId = "#modalOpen";
  
  window.location.hash = closedModalHashStateId;
  
  $(window).on('popstate', this.handleBackPress);
  document.addEventListener("backbutton", this.handleBackPress, false);
  
  $('.modal').on('show.bs.modal', function(e) {
    window.history.pushState('forward', null, './'+openModalHashStateId);
  });
  
  $('.modal').on('hide.bs.modal', function(e) {
    window.history.back();
    // $(".modal iframe").attr("src", $(".modal iframe").attr("src"));
  });


  (function (window) {

    'use strict';

    window.code = window.code || {};

    window.code.lightweightYoutubePlayer = function () {

        var dataYoutubeVideos = '[data-youtube]';

        var youtubeVideos = [...document.querySelectorAll(dataYoutubeVideos)];

        function init() {
            youtubeVideos.forEach(function(element) {
                bindYoutubeVideoEvent(element);
            });
        }

        function bindYoutubeVideoEvent(element) {
            var button = element.querySelector('[data-youtube-button]');

            button.addEventListener('click', createIframe);
        }

        function createIframe(event) {
            var url = event.target.dataset.youtubeButton;
            var youtubePlaceholder = event.target.parentNode;

            var htmlString = '<div class="video__youtube"> <iframe class="video__iframe" src="' + url + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';

            youtubePlaceholder.style.display = 'none';
            youtubePlaceholder.insertAdjacentHTML('beforebegin', htmlString);
            youtubePlaceholder.parentNode.removeChild(youtubePlaceholder);
        }

        return {
           init: init
        }
    };

})(window)

ready();

function ready() {
    var lightweightYoutubePlayer = new code.lightweightYoutubePlayer()

    if (document.readyState != 'loading') {
        page.init()
    } else {
        document.addEventListener('DOMContentLoaded', lightweightYoutubePlayer.init);
    }
}