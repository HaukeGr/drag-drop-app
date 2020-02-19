var wordTime = 3;
var totalTime = 60;
var dataArr = [
  {text: "Beerdigen", field: "bestatter-drop"},
  {text: "Nageln", field: "tischler-drop"},
  {text: "Lochen", field: "buero-drop"},
  {text: "'Moin Meister' sagen", field: "tischler-drop"},
  {text: "Kaffee kochen", field: "buero-drop"},
  {text: "Brötchen holen", field: "buero-drop"},
  {text: "Toiletten putzen", field: "buero-drop"},
  {text: "Müll rausbringen", field: "bestatter-drop"},
  {text: "Die Auffahrt fegen", field: "A"},
  {text: "Beerdigen", field: "A"},
  {text: "Nageln", field: "C"},
  {text: "Lochen", field: "B"},
  {text: "'Moin Meister' sagen", field: "B"},
  {text: "Kaffee kochen", field: "C"},
  {text: "Brötchen holen", field: "A"},
  {text: "Toiletten putzen", field: "C"},
  {text: "Müll rausbringen", field: "B"},
  {text: "Die Auffahrt fegen", field: "A"},
  {text: "Toiletten putzen", field: "C"},
  {text: "Müll rausbringen", field: "B"},
  {text: "Die Auffahrt fegen", field: "A"},
];


var bestatterInput = [];
var bueroInput = [];
var tischlerInput = [];

// -------------------------------------------------- //

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



function changeWord() {

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

  wordTimer.start(wordTime).on('end', function () {
    $("#main").empty();
    $("#main").append("<div class='text' draggable='true' ondragstart='drag(event)' data-ans='" + dataArr[wordCounter].field + "'>" + dataArr[wordCounter].text + "</div>");
    wordCounter = wordCounter + 1;
  });

}

$(document).ready(function() {

  $("#big-circle").circleProgress({
    startAngle: -Math.PI / 4 * 2,
    value: 1,
    size: 130,
    thickness: 10,
    fill: '#F29404',
    animation: { duration: 1000, easing: "circleProgressEasing" }
  });

  $("#small-circle").circleProgress({
    startAngle: -Math.PI / 4 * 2,
    value: 1,
    size: 100,
    fill: '#253C84',
    animation: { duration: 1000, easing: "circleProgressEasing" }
  });

  $("#start-btn").click(function() {
    totalTimer.start(totalTime).on('end', function () {
      // AUSWERTUNG ANZEIGEN //

    });
  });

});

// ------------------------------------------------- //


var attempt = 0;

      function allowDrop(ev) {
        ev.preventDefault();
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
        ev.preventDefault();
        var correctAnswer = ev.dataTransfer.getData("correctAnswer");
        var word = ev.dataTransfer.getData("word");
        var chosenField = ev.target.id;
        console.log(correctAnswer + ", " + chosenField)
        switch (chosenField) {
          case 'bestatter-drop':
            bestatterInput.push({html: "<p class='text'>" + word + "</p>", correctAnswer: correctAnswer, chosenField: chosenField});
            break;
          case 'buero-drop':
            bueroInput.push({html: "<p class='text'>" + word + "</p>", correctAnswer: correctAnswer, chosenField: chosenField});
            break;
          case 'tischler-drop':
            tischlerInput.push({html: "<p class='text'>" + word + "</p>", correctAnswer: correctAnswer, chosenField: chosenField});
            break;
        }
        console.log(bestatterInput)
        console.log(bueroInput)
        console.log(tischlerInput)


        $(".play-pause").click(function() {
          $(this).css("opacity", "0").delay(300).css("display", "none");
          $("#time-dig").delay(300).css("display", "block").css("opacity", "1");
        })



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
