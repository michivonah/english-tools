// functions.js
// Michi von Ah - 2022/2024

// Loading
window.addEventListener('load', () => {
  // detect darkmode
  if(window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem('darkmode') == "true"){
      document.body.style.setProperty('--background', '#181818');
      document.body.style.setProperty('--color', '#fff');
      document.body.style.setProperty('--imgFilter', '0%');
      console.log('Darkmode activated.');
      }
    // show a random greeting
    //if (window.location.href == {{ .Site.BaseURL }}){randomGreeting()};
    // hide loadingscreen
    setTimeout(function(){
      document.getElementById('loadingscreen').style.display = "none";
    }, 200)
});

window.addEventListener('scroll', function(e) {
  var scrollTop = document.getElementById('scroll-top');
  if(this.scrollY > 20){
    scrollTop.style.right = "0";
  }
  else{
    scrollTop.style.right = "-55px";
  }
});

function scrollToTop(){
  window.scroll(0, 0);
}

function randomGreeting(){
  var greeting = document.getElementById("greeting");
  var greetings = [
    "What's up?",
    "Hey you!",
    "English time?",
    "Everything fine?",
    "Nice to meet you!",
    "Nice to see you again!",
    "Having fun with tenses?"
  ];
  var random = Math.floor(Math.random() * greetings.length);
  greeting.textContent = greetings[random];
}

function toggleSection(sectionName, type){
    var section = document.getElementById(sectionName);
    if(section.style.display == "block" || section.style.display == "flex"){
      section.style.display = "none";
    }
    else{
      section.style.display = type;
    }
  }


  function toggleClass(className){
    var elements = document.getElementsByClassName(className);
    for(var i = 0; i < elements.length; i++){
      if(elements[i].style.display == "block"){
        elements[i].style.display = "none";
      }
      else{
        elements[i].style.display = "block";
      }
    }
  }

  function toggleNavigation(mode){
    var toggleBtn = document.getElementById("openNavbar");
    var nav = document.getElementById("toolNavigation");
    if(window.innerWidth <= 640){
      if(mode == "show"){
        nav.style.left = 0;
        toggleBtn.style.display = "none";
      }
      else{
        nav.style.left = "-100%";
        toggleBtn.style.display = "flex";
      }
    }
  }

  function copyClipboard(contentID){
    var copyTxt = document.getElementById(contentID).value;
    navigator.clipboard.writeText(copyTxt);
  }