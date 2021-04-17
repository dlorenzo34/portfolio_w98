document.addEventListener('DOMContentLoaded', (event) => {
  var newoffurl = '#restart';
  var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?foo=bar';
  window.history.pushState({path:newurl} ,'', newoffurl);

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    document.getElementById('date').innerHTML = strTime;
  }
  
  formatAMPM(new Date);

  document.getElementById("startMenu").style.display = 'none';
  document.getElementById("start-button-wrapper").onclick = function() {
    var x = document.getElementById("startMenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    document.getElementById("start-button-wrapper").classList.toggle("startClick");
  };

  document.getElementsByTagName("body").onclick = function() {
    console.log('body clicked');
  };

  document.getElementById("expander").onmouseenter = function () {
    document.getElementById("programsTab").style.display = "block";
  };
  
  document.getElementById("startMenu").onmouseleave = function () {
    document.getElementById("programsTab").style.display = "none";
  };
  // Open submenu apps
  document.getElementById("webBrowserIcon").onclick = function () {
    document.getElementById("app-ie").style.visibility = "visible";
  }

  document.getElementById("writePadIcon").onclick = function () {
    document.getElementById("app-notepad").style.visibility = "visible";
  }
  
  // Open my portfolio folder
  document.getElementById("my-portfolio").onclick = function () {
    document.getElementById("my_portfolio_folder").style.visibility = "visible";
  }
  
  // Close my portfolio folder
  document.getElementById("close-pf").onclick = function () {
    document.getElementById("my_portfolio_folder").style.visibility = "hidden";
  }

  // Close apps on the top right X
  document.getElementById("close-ie").onclick = function () {
    document.getElementById("app-ie").style.visibility = "hidden";
  }

  document.getElementById("close-notepad").onclick = function () {
    document.getElementById("app-notepad").style.visibility = "hidden";
  }

});

// $('#start').click(function () {
//   $('#startMenu').toggle();
//   $(this).toggleClass('startClick');
// });

// $('#desktop').click(function () {
//   $('#startMenu').hide();
//   $('#start').removeClass('startClick').addClass('startRest');
// })

// $('#desktop').click(function () {
//   $('#startMenu').hide();
//   $('#start').removeClass('startClick').addClass('startRest');
// })