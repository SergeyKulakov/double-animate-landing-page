window.onload = function() {load()};

window.onscroll = function() {scrollBlack()};

function load() {
	document.getElementById("loading-image").style.width = "100%";
	setTimeout(function(){ document.getElementById("loading").style.display = "none";}, 1500);	
}

function scrollBlack() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("first-screen").style.top = "0"; 
    setTimeout(function(){ document.getElementById("second-screen").style.top = "0"; }, 500);
    setTimeout(function(){ document.getElementById("section-first").style.top = "0"; }, 1000);    
    setTimeout(function(){ document.getElementById("title-fill").style.paddingTop = "0"; }, 1500);
    setTimeout(function(){ document.getElementById("text-fill").style.opacity = "1"; }, 1500);
    setTimeout(function(){ document.getElementById("back-img").style.transform = "scale(1)" }, 2000);
    setTimeout(function(){ document.getElementById("title-fill-seocond").style.paddingTop = "0"; }, 2000);
    setTimeout(function(){ document.getElementById("text-fill-seocond").style.opacity = "1"; }, 2000);
    setTimeout(function(){ document.getElementById("ball").style.transform = "scale(1)"; }, 2000); 
    setTimeout(function(){ document.getElementsByClassName("info-icon")[0].style.transform = "scale(1)"; }, 2000);
    setTimeout(function(){ document.getElementsByClassName("info-overlay")[0].style.width = "0"; }, 2500);       	
  } else {
    document.getElementById("first-screen").style.top = "100%"; 
    setTimeout(function(){ document.getElementById("second-screen").style.top = "200%"; }, 500);
    setTimeout(function(){ document.getElementById("section-first").style.top = "300%"; }, 1000);    
    setTimeout(function(){ document.getElementById("title-fill").style.paddingTop = "420px"; }, 1500);
    setTimeout(function(){ document.getElementById("text-fill").style.opacity = "1"; }, 1500);
    setTimeout(function(){ document.getElementById("back-img").style.transform = "scale(1)" }, 2000);
    setTimeout(function(){ document.getElementById("title-fill-seocond").style.paddingTop = "420px"; }, 2000);
    setTimeout(function(){ document.getElementById("text-fill-seocond").style.opacity = "1"; }, 2000);
    setTimeout(function(){ document.getElementById("ball").style.transform = "scale(1)"; }, 2000); 
    setTimeout(function(){ document.getElementsByClassName("info-icon")[0].style.transform = "scale(0.5)"; }, 2000);
    setTimeout(function(){ document.getElementsByClassName("info-overlay")[0].style.width = "500px"; }, 2500);  
  }	
}

function showSide() {
  document.getElementById("sidebar").style.width = "300px";
  document.getElementById("sidebar-background").style.width = "100%";
}

function hideSide() {
  document.getElementById("sidebar").style.width = 0;
  document.getElementById("sidebar-background").style.width = 0;
}


function showSecondSide() {
  document.getElementById("sidebar-second").style.width = "300px";
  document.getElementById("sidebar-background-second").style.width = "100%";
}

function hideSecondSide() {
  document.getElementById("sidebar-second").style.width = 0;
  document.getElementById("sidebar-background-second").style.width = 0;
}
