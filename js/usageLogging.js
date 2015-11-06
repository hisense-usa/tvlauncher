var usageData = "";

var t0 = 0;
$(window).load(function() {
  t0 = getTimeStamp();

});

$(document).on("keydown", function (e) {
    //console.log("Try Move focus: keyup " + e);
    switch (e.keyCode) {
        case 39: // Right
            usageData += "R";
            break;
        case 37: // Left
            usageData += "L";
            break;
        case 38: // Up
            usageData += "U";
            break;
        case 40: // Down
            usageData += "D";
            break;
        case 13:
            usageData += "E";
            break;
        default:
            break;
    }
});

function getTimeStamp() {
  return Math.floor(new Date().valueOf() / 100) / 10;
}

function reportUsage() {
  parent.logUsage(window.location.pathname.substring(1).split('/').pop(), usageData, Math.floor((getTimeStamp() - t0) * 10) / 10, getQueryParams().type);
  // alert("asdfas");
}
