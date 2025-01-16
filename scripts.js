function genFunnyQuery() {
    var devFlag = true;
    var mainLink = "https://www.google.com/search?q=";
    var sillyQueries = ["pron", "child%20pron", "big%20b00ty", "endangered%20species%20recipes", "g@y%20s3x", "cocaine%20purchase",
    "free%20drugs", "kidnapping%20strategies", "cocomelon%20r34", "pokemon%20inflation", "taste%20of%20coom", "men%20kissing",
    "hardcore%20s3x", "hitler%20r34", "honey%20bun%20hot%20tub", "free%20onlyf@ns", "how%20to%20cure%20p0rn%20addiction", "j3rkmate",
    "trump%20x%20biden", "femboys", "belle%20delphine"];
    var randQuery = sillyQueries[Math.floor(Math.random()*sillyQueries.length)];
    var fullQuery = mainLink + randQuery;
    window.open(fullQuery);
}

function randFlvrTxt() {
  // a lot of real UBs have these for some reason. I need something to fill up the page so I'll do this.
  var flvrTxts = ["Student owned and operated", "DON'T SHARE THIS", "Ok, now this is epic", "Have fun!",
  "Insert cash or select payment type", "Keep yourself safe", "Ya like jazz?", "Minecraft movie lookin fire 🔥",
  "Party rockers in the house tonight", "Come on down and buy some corn", "Caught lackin", "192.168.0.1", 
  "google \"lego piece 32557\"", "What makes someone a criminal in 2077?", "Uncle Larry is approaching rapidly", "Ambatublow"];
  var flvrTxtP = document.getElementById("flavorText");
  var randFlvrTxt = flvrTxts[Math.floor(Math.random()*flvrTxts.length)];
  flvrTxtP.innerHTML = "<strong>" + randFlvrTxt + "</strong>"
}

function openAboutBlank() {
  var url = window.location.href;
  var win = window.open();
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  var embed = win.document.createElement('embed');
  embed.style.border = 'none';
  embed.style.width = '100%';
  embed.style.height = '100%';
  embed.style.margin = '0';
  embed.src = url;
  win.document.body.appendChild(embed);
}

function changePage(currPage, newPage) {
  document.getElementById(currPage).style.display = "none";
  document.getElementById(newPage).style.display = "block";
}

function cloakTab() {
  var cloakOptions = document.getElementById("cloakOptions");
  var val = cloakOptions.value;
  var iconElem = document.querySelector("link[rel='icon']");
  switch (val) {
    case "default": {
      alert("Please select a site for cloaking to work.");
      break;
    }
    case "studentvue": {
      document.title = "StudentVue";
      iconElem.href = "https://wa-nor-psv.edupoint.com/synergy.ico";
      break;
    }
    case "clever": {
      document.title = "Clever | Portal";
      iconElem.href = "https://assets.clever.com/launchpad/ff6510bcb/favicon.ico";
      break;
    }
    case "schoology": {
      document.title = "Home | Schoology";
      iconElem.href = "https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico";
      break;
    }
    case "gdocs": {
      var docName = prompt("Enter your document's name: ");
      document.title = docName + " - Google Docs";
      iconElem.href = "https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico";
      break;
    }
    case "techsmart": {
      document.title = "My Code";
      iconElem.href = "https://platform.techsmart.codes/static/main/imgs/favicon.ico";
      break;
    }
  }
}
