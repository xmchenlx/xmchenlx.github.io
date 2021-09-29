"use strict";

var qalistJson = [];

function generateQAForm(rndCount, maxNumber) {
  var qaListIndex = [];
  var fori = 0;
  var forj = 0;

  if (rndCount > maxNumber) {
    rndCount = maxNumber;
  }

  while (fori < rndCount) {
    var currentRndIndex = Math.floor(Math.random() * maxNumber);
    var flagRepeat = false;

    for (var _forj = 0; _forj < qaListIndex.length; _forj++) {
      if (qaListIndex[_forj] == currentRndIndex) {
        flagRepeat = true;
        break;
      }
    }

    if (!flagRepeat) {
      qaListIndex.push(currentRndIndex);
      fori++;
    }
  }

  console.log(qaListIndex);
  return qaListIndex;
}

function writeQAForm(qaListIndex, isShowRightOpstion) {
  // console.log(qaListIndex)
  document.getElementById('quest').innerHTML = '';
  var ress = '';

  for (var i in qaListIndex) {
    var currentQuestion = qalistJson[qaListIndex[i]];
    ress += "\n\t\t\t\t\t\t                 <h3>".concat(i, "\uFF09\u3001<span style=\"color:gray;padding-right:4px;\">[").concat(currentQuestion.type, "]</span>\n\t\t\t\t\t\t                             <span id=\"q").concat(currentQuestion['#'], "\">\n\t\t\t\t\t\t                                 ").concat(currentQuestion.question.replace(/\$/g, '__________'), "\n\t\t\t\t\t\t                                 </span></h3>\n\t\t\t\t\t\t                 <button onclick=\"showAns(").concat(currentQuestion['#'], ")\">\u67E5\u770B\u7B54\u6848</button>\n\t\t\t");
  }

  $('#quest').html(ress);
}

function showAns(i) {
  var currentQuestion = qalistJson[i - 1];
  var fullStr = "\n\t\t\t\t\t\t                                 ".concat(currentQuestion.question, "\n\t\t\t\t\t\t                                 ");
  var answerArray = currentQuestion.ro;

  for (var a in answerArray) {
    fullStr = fullStr.replace('$', "<span id='rightAnswer'>".concat(answerArray[a], "</span>"));
  }

  console.log(i, fullStr);
  $("#q".concat(i)).html(fullStr);
} // getData()


function init() {
  
    $.ajax({
      url: './jz.json',
      type: 'GET',
      dataType: 'json',
      success: function success(res) {
        $('#loadDataDate').text("\u6570\u636E\u5DF2\u52A0\u8F7D\u3002\u7EF4\u62A4\u65E5\u671F\u4E3A".concat(res.date, "\u3002"));
        qalistJson = res.data;
        console.log('qalistJson', qalistJson);
        var qalist = generateQAForm(15, qalistJson.length);
        writeQAForm(qalist, false);
      },
      error: function error(err) {
        console.log(err);
        $('#loadDataDate').text("\u52A0\u8F7D\u6570\u636E\u5931\u8D25\u3002\u539F\u56E0\uFF1APromise\u5BF9\u8C61\u53D1\u751F\u9519\u8BEF");
      }
    });
}

init();