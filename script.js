var wordTime = 3;
var totalTime = 30;
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
  {text: "Fuchsschwanz", field: "tischler-drop"},
  {text: "Kuhfuß", field: "tischler-drop"},
];
var dataArr = [...originData];
var wordCounter;
var score = 0;


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
    console.log("gestartet")
    $("#time-dig").text(3);
    $("#small-circle").circleProgress({
      animationStartValue: 0,
      value: 1,
      animation: {duration: wordTime * 1000, easing: 'linear'}
    });

  }
});

function changeWord() {
  wordTimer.stop();
  wordCounter = Math.floor(Math.random() * (dataArr.length - 0) + 0);
  $("#main").empty();
  $("#main").append("<div class='text' id='movable' draggable='true' ondragend='endDrag(event)' ondragstart='drag(event)' data-ans='" + dataArr[wordCounter].field + "'>" + dataArr[wordCounter].text + "</div>");
  dataArr.splice(wordCounter, 1);

  wordTimer.start(wordTime).on('end', function () {
    wordCounter = Math.floor(Math.random() * (dataArr.length - 0) + 0);
    $("#main").empty();
    $("#main").append("<div class='text' draggable='true' ondragend='endDrag(event)'  ondragstart='drag(event)' data-ans='" + dataArr[wordCounter].field + "'>" + dataArr[wordCounter].text + "</div>");
    dataArr.splice(wordCounter, 1);
    changeWord();
  });

}

var totalTimer = new Timer({

  tick: wordTime,
  ontick: function() {
      //console.log("von totalTimer")
      //changeWord();

  },
  onstart: function() {
  //  wordCounter = Math.floor(Math.random() * (dataArr.length - 0) + 0);
  //  $("#main").append("<div class='text' draggable='true' ondragstart='drag(event)' data-ans='" + dataArr[wordCounter].field + "'>" + dataArr[wordCounter].text + "</div>");
  //  dataArr.splice(wordCounter, 1);

    changeWord();

    $("#big-circle").circleProgress({
      animationStartValue: 0,
      value: 1,
      animation: {duration: totalTimer.getDuration(), easing: 'linear'}
    });

  }

});

function swapView(view) {
  if (view == "app"){
    $("#results").css("opacity", "0").delay(300).css("display", "none");
    $("#app").delay(300).css("opacity", "1").css("display", "block");
  } else if (view= "results"){
    $("#app").css("opacity", "0").delay(300).css("display", "none");
    $("#results").delay(300).css("opacity", "1").css("display", "block");
  }
}

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

      wordTimer.stop();
      $("#main").empty();
      // AUSWERTUNG ANZEIGEN //
      $("#score").text("Punktzahl: " + score);
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
    score = 0;
    swapView("app");
    $("#time-dig").css("opacity", "0");
    $(".play-pause").delay(300).css("opacity", "1");
    dataArr = [...originData];
    $("#main").empty();
    $("#bestatter-results").empty();
    $("#buero-results").empty();
    $("#tischler-results").empty();
    bestatterInput = [];
    bueroInput = [];
    tischlerInput = [];
    wordTimer.stop();
    totalTimer.stop();

    $("#big-circle").circleProgress({
      value: 1,
      animation: { duration: 1, easing: "circleProgressEasing" }
    });


    $("#small-circle").circleProgress({
      value: 1,
      animation: { duration: 1, easing: "circleProgressEasing" }
    });

  })
});

// ------------------------------------------------- //


var attempt = 0;

      function allowDrop(ev) {
        ev.preventDefault();
        $(ev.target).css("background-color", "rgba(1, 1, 1, 0.2)");
      }

      function resetBg(ev) {
        ev.preventDefault();
        $(ev.target).css("background-color", "rgba(0, 0, 0, 0)")
      }

      function endDrag(ev) {
        $(ev.target).removeClass('hide');
}

      function drag(ev) {

        setTimeout(function(){
  	       $(ev.target).addClass('hide');
         });
        //  var data = JSON.stringify({
        //  target_id: ev.target.id,
        //  ans: ev.target.getAttribute('data-ans')
        //  });
        ev.dataTransfer.setData("correctAnswer", $(ev.target).attr('data-ans'));
        ev.dataTransfer.setData("word", $(ev.target).text());
      }

      function drop(ev) {

        ev.preventDefault();

      //  wordTimer.stop();
      //  wordCounter = Math.floor(Math.random() * (dataArr.length - 0) + 0);
      //  $("#main").empty();
      //  $("#main").append("<div class='text' draggable='true' ondragstart='drag(event)' data-ans='" + dataArr[wordCounter].field + "'>" + dataArr[wordCounter].text + "</div>");
      //  dataArr.splice(wordCounter, 1);
        changeWord();
        $(ev.target).css("background-color", "rgba(0, 0, 0, 0)")

        var correctAnswer = ev.dataTransfer.getData("correctAnswer");
        var word = ev.dataTransfer.getData("word");
        var chosenField = ev.target.id;
        var validationClass;

        if (chosenField == correctAnswer) {

          score = score + 1;
          validationClass = "right";
        }
        else {
          score = score - 1;
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

      }
