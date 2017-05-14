function ToggleDescription(id) {
    //$(this).next().css({"-webkit-transform":"translate(-100vw,0)"});
    //$("body").css("background-color":"red");
    document.querySelector("#descr" + id).style.transform = "translate(-52vw,0)";
    document.querySelector("#project" + id).className += " info-displayed";
    document.querySelector("#overlay-invisible" + id).style.display = "block";
}

function HideDescriptions(id) {
    document.querySelector("#descr" + id).style.transform = "translate(52vw,0)";
    document.querySelector("#project" + id).className = "project";
    document.querySelector("#overlay-invisible" + id).style.display = "none";
}