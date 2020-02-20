var wordTime = 3;
var totalTime = 60;
var originData = [
  {text: "Fotos bearbeiten", field: "buero-drop"},
  {text: "Kontieren", field: "buero-drop"},
  {text: "Controlling", field: "buero-drop"},
  {text: "Buchen", field: "buero-drop"},
  {text: "Schreddern", field: "buero-drop"},
  {text: "Empfangen", field: "buero-drop"},
  {text: "Telefonieren", field: "buero-drop"},
  {text: "Bestellen", field: "buero-drop"},
  {text: "Heften", field: "buero-drop"},
  {text: "Organisieren", field: "buero-drop"},
  {text: "Anfragen", field: "buero-drop"},
  {text: "Korrektur lesen", field: "buero-drop"},
  {text: "Lieferscheine prüfen", field: "buero-drop"},
  {text: "Rechnungen schreiben", field: "buero-drop"},
  {text: "Formulare scannen", field: "buero-drop"},
  {text: "Korrespondenz schreiben", field: "buero-drop"},
  {text: "Aktenvermerk erstellen", field: "buero-drop"},
  {text: "Termine koordinieren", field: "buero-drop"},
  {text: "Datenbank pflegen", field: "buero-drop"},
  {text: "Akten verwalten", field: "buero-drop"},
  {text: "Löhne und Gehälter berechnen", field: "buero-drop"},
  {text: "Zahlungen überweisen", field: "buero-drop"},
  {text: "Ligatur setzen", field: "bestatter-drop"},
  {text: "Überführen", field: "bestatter-drop"},
  {text: "Kondolenzen sammeln", field: "bestatter-drop"},
  {text: "Hygienisch versorgen", field: "bestatter-drop"},
  {text: "Aufbahren", field: "bestatter-drop"},
  {text: "Begleiten", field: "bestatter-drop"},
  {text: "Bücher gestalten", field: "bestatter-drop"},
  {text: "Dekorieren", field: "bestatter-drop"},
  {text: "Kämmen", field: "bestatter-drop"},
  {text: "Abmelden", field: "bestatter-drop"},
  {text: "Anzeigen gestalten", field: "bestatter-drop"},
  {text: "Urkunden beantragen", field: "bestatter-drop"},
  {text: "Musik abspielen", field: "bestatter-drop"},
  {text: "Vorschriften überprüfen", field: "bestatter-drop"},
  {text: "Schleifen drucken", field: "bestatter-drop"},
  {text: "Zuhören", field: "bestatter-drop"},
  {text: "Briefe frankieren", field: "bestatter-drop"},
  {text: "Kirchenbank", field: "bestatter-drop"},
  {text: "Glocke", field: "bestatter-drop"},
  {text: "Abschied nehmen", field: "bestatter-drop"},
  {text: "Kanten berechnen", field: "tischler-drop"},
  {text: "Aufmaß nehmen", field: "tischler-drop"},
  {text: "Abrichten", field: "tischler-drop"},
  {text: "Dübeln", field: "tischler-drop"},
  {text: "Feuchte berechnen", field: "tischler-drop"},
  {text: "Schwalbenschwanz zinken", field: "tischler-drop"},
  {text: "Falz verkitten", field: "tischler-drop"},
  {text: "Treppenmontage", field: "tischler-drop"},
  {text: "Polieren", field: "tischler-drop"},
  {text: "Zwischenschleifen", field: "tischler-drop"},
  {text: "Gehrung schneiden", field: "tischler-drop"},
  {text: "Stemmen", field: "tischler-drop"},
  {text: "Kreisschneiden", field: "tischler-drop"},
  {text: "Hohlkehle fräsen", field: "tischler-drop"},
  {text: "Beizen", field: "tischler-drop"},
  {text: "Nageln", field: "tischler-drop"},
  {text: "Fuschschwanz", field: "tischler-drop"},
  {text: "Kuhfuß", field: "tischler-drop"},

];
var dataArr = [...originData];
var wordCounter;


var bestatterInput = [];
var bueroInput = [];
var tischlerInput = [];

// -------------------------------------------------- //
var wordTimer = new Timer({
  tick: 1,
  ontick: (function() {
  $("#time-dig").text(((wordTimer.getDuration() / 1000)).toFixed(0));
  }),
  onstart: function() {
    $("#time-dig").text(Math.floor(wordTimer.getDuration() / 1000));
    $("#small-circle").circleProgress({
      animationStartValue: 0,
      value: 1,
      animation: {duration: wordTimer.getDuration(), easing: 'linear'}
    });

  }
});

function changeWord() {

  wordTimer.start(wordTime).on('end', function () {
    wordCounter = Math.floor(Math.random() * (dataArr.length - 0) + 0);
    $("#main").empty();
    $("#main").append("<div class='text' draggable='true' ondragstart='drag(event)' data-ans='" + dataArr[wordCounter].field + "'>" + dataArr[wordCounter].text + "</div>");
    dataArr.splice(wordCounter, 1);
  });
}

function swapView(view) {
  if (view == "app"){
    $("#results").css("opacity", "0").delay(300).css("display", "none");
    $("#app").delay(300).css("opacity", "1").css("display", "block");
  } else if (view= "results"){
    $("#app").css("opacity", "0").delay(300).css("display", "none");
    $("#results").delay(300).css("opacity", "1").css("display", "block");
  }
}

var totalTimer = new Timer({
  tick: wordTime,
  ontick: function() {
    changeWord();
  },
  onstart: function() {
    changeWord();
    $("#big-circle").circleProgress({
      animationStartValue: 0,
      value: 1,
      animation: {duration: totalTimer.getDuration(), easing: 'linear'}
    });
  }
});

$(document).ready(function() {


  swapView("app");

  $("#start-btn").click(function() {
    $(".play-pause").css("opacity", "0").delay(300);
    $("#time-dig").delay(300).css("opacity", "1");
  })

  $("#big-circle").circleProgress({
    startAngle: -Math.PI / 4 * 2,
    value: 1,
    size: 157,
    thickness: 14,
    fill: '#F29404',
    animation: { duration: 1000, easing: "circleProgressEasing" }
  });

  $("#small-circle").circleProgress({
    startAngle: -Math.PI / 4 * 2,
    value: 1,
    size: 129,
    thickness: 14,
    fill: '#253C84',
    animation: { duration: 1000, easing: "circleProgressEasing" }
  });

  $("#start-btn").click(function() {
    totalTimer.start(totalTime).on('end', function () {
      // AUSWERTUNG ANZEIGEN //
      swapView("results");
      for (var i = 0; i < bestatterInput.length; i++) {
        $("#bestatter-results").append(bestatterInput[i].html)
      }
      console.log(bestatterInput.length);
      for (var j = 0; j < bueroInput.length; j++) {
        $("#buero-results").append(bueroInput[j].html)
      }
      console.log(bueroInput.length)
      for (var k = 0; k < tischlerInput.length; k++) {
        $("#tischler-results").append(tischlerInput[k].html)
      }
      console.log(tischlerInput.length)
      console.log(dataArr)
    });
  });

  // Reset listener
  $(".reset").click(function() {
    swapView("app");
    $("#time-dig").css("opacity", "0");
    $(".play-pause").delay(300).css("opacity", "1");
    dataArr = [...originData];
    console.log(dataArr)
  })
});

// ------------------------------------------------- //


var attempt = 0;

      function allowDrop(ev) {
        ev.preventDefault();
        $(ev.target).css("background-color", "rgba(1, 1, 1, 0.1)");
      }

      function drag(ev) {
        //  var data = JSON.stringify({
        //  target_id: ev.target.id,
        //  ans: ev.target.getAttribute('data-ans')
        //  });
        ev.dataTransfer.setData("correctAnswer", $(ev.target).attr('data-ans'));
        ev.dataTransfer.setData("word", $(ev.target).text());
      }

      function drop(ev) {
        wordTimer.stop();
        wordCounter = Math.floor(Math.random() * (dataArr.length - 0) + 0);
        $("#main").empty();
        $("#main").append("<div class='text' draggable='true' ondragstart='drag(event)' data-ans='" + dataArr[wordCounter].field + "'>" + dataArr[wordCounter].text + "</div>");
        dataArr.splice(wordCounter, 1);
        changeWord();
        ev.preventDefault();
        var correctAnswer = ev.dataTransfer.getData("correctAnswer");
        var word = ev.dataTransfer.getData("word");
        var chosenField = ev.target.id;
        var validationClass;

        if (chosenField == correctAnswer) {
          validationClass = "right";
        }
        else {
          validationClass = "wrong";
        }

        switch (chosenField) {
          case 'bestatter-drop':
            bestatterInput.push({html: "<p class='text " + validationClass + "'>" + word + "</p>", correctAnswer: correctAnswer, chosenField: chosenField});
            console.log(bestatterInput)
            break;
          case 'buero-drop':
            bueroInput.push({html: "<p class='text " + validationClass + "'>" + word + "</p>", correctAnswer: correctAnswer, chosenField: chosenField});
            console.log(bueroInput)
            break;
          case 'tischler-drop':
            tischlerInput.push({html: "<p class='text " + validationClass + "'>" + word + "</p>", correctAnswer: correctAnswer, chosenField: chosenField});
            console.log(tischlerInput)
            break;
        }






        //console.log(JSON.parse(data).target_class)
//ev.target.appendChild(document.getElementById(JSON.parse(data).target_id));
      }



// ----------------------------------------------- //



      function verify() {
        attempt += 1;
        var ans = true;
        var c = document.getElementById('div1').childNodes;
        if (c[0] != null && c[0].dataset.ans != 'div1') {
          ans = false;
          document.getElementById("pool").appendChild(c[0]);
        }

        var c = document.getElementById('div2').childNodes;
        if (c[0] != null && c[0].dataset.ans != 'div2') {
          ans = false;
          document.getElementById("pool").appendChild(c[0]);
        }

        var c = document.getElementById('div3').childNodes;
        if (c[0] != null && c[0].dataset.ans != 'div3') {
          ans = false;
          document.getElementById("pool").appendChild(c[0]);
        }

        var c = document.getElementById('div4').childNodes;
        if (c[0] != null && c[0].dataset.ans != 'div4') {
          ans = false;
          document.getElementById("pool").appendChild(c[0]);
        }

        if (ans) {
          $("#msg").html("All Correct");
        } else {
          $("#msg").html("Something is wrong");
        }

        if (attempt > 2) {
          $("#showAns").show();
        }

      }

function showAns() {
        var ansStr = "DIV1 = IMG4, DIV2 = IMG3, DIV3 = IMG2, DIV4 = IMG1";
        $("#ans_msg").html(ansStr);
      }
