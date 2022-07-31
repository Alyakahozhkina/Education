//BUTTON-UP
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//TOOLTIPS
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//DARK MODE 
const body = document.querySelector('body');
const btnMode = document.querySelector('.change-mode');

btnMode.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('dark-mode');
})

//INACTIVITY
const inactivityTime = () => {
    let time;
    const showConfirm = () => {
        if (!confirm('Are you still here?')) {
        window.close();
        }
    }
    const reset = () => {
        clearTimeout(time);
        time = setTimeout(showConfirm, 300000)
    }

    document.addEventListener('mousemove', reset);
    document.addEventListener('keypress', reset);
    document.addEventListener('scroll', reset);
    document.addEventListener('DOMContentLoaded', reset);
    }

    inactivityTime();

    //BROWSER VERSION
const showBrowserVersion = () => {
    const { userAgent } = navigator;
    const [, browserVersion, browserCode] = userAgent.match(/(Firefox|Edg|Chrome|Safari)\/([\d\.]+)/)
  
    return `You use ${browserVersion} v${browserCode}`;
  }
  
  document.querySelector('.footer__text').innerHTML += `<br/> ${showBrowserVersion()}`;

//PROGRESS BAR
const progress = document.querySelector(".progressBar-scroll");

const progressBar = () => {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHigh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var per = windowScroll / windowHigh * 100;

    progress.style.width = per + '%';
    progress.innerHTML = `${per.toFixed(0)}%`;

}

progressBar();
window.addEventListener('scroll', progressBar);

//DISABLED COPYING & CODE WATCHING
document.addEventListener('DOMContentLoaded', () => {
    function prohibit() {
      return false;
    }
    document.onkeydown = function (e) {
      if(e.keyCode === 123){
        return false;
      }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode === 73)){
        return false;
      }else if((e.shiftKey) && (e.keyCode === 121)){
        return false;
      }else if((e.ctrlKey) && (e.keyCode === 85)){
        return false;
      }
    };
    document.oncontextmenu = prohibit;
    document.ondragstart = prohibit;
    document.onselectstart = prohibit;
  });