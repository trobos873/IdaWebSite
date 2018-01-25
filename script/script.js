// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
//window.onload = function () {globalInfo()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 500) {

        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function globalInfo() {
    var oFrame = document.getElementById("globalInfo");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
    var arrLines = strRawContents.split("\n");
    for (var i = 0; i < arrLines.length; i++) {
        var curLine = arrLines[i];
        if (curLine.includes("_TITLE::")){
            curLine = curLine.replace("_TITLE::", "");
            document.getElementById("bannerText").innerText = curLine;
        } else if (curLine.includes("_ABOUTME::")){
            curLine  = curLine.replace("_ABOUTME::", "");
            document.getElementById("aboutmeText").innerText = curLine;
        } else if (curLine.includes("_YOURNAME::")){
            curLine  = curLine.replace("_YOURNAME::", "");
            document.getElementById("yourName").innerText = curLine;
        } else if (curLine.includes("_EMAIL::")){
            curLine  = curLine.replace("_EMAIL::", "");
            document.getElementById("email").innerText = "Email: " + curLine;
        } else if (curLine.includes("_PHONE::")){
            curLine  = curLine.replace("_PHONE::", "");
            document.getElementById("phoneNumber").innerText = "Tel: " +  curLine;
        }else if (curLine.includes("_COPYRIGHT::")){
            curLine  = curLine.replace("_COPYRIGHT::", "");
            document.getElementById("copyrightText").innerText = curLine;
        }else if (curLine.includes("_PHONE::")){
            curLine  = curLine.replace("_PHONE::", "");
            document.getElementById("phoneNumber").innerText = "Tel: " +  curLine;
        }else if (curLine.includes("##")){
            //COMMENT IGNORE
        } else {
            alert("Error in globalText.txt, is file loaded with all tags?")
        }
    }
}
function loadWork(){
    var oFrame = document.getElementById("loadWork");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
    var arrLines = strRawContents.split("\n");
    var HTMLtoBuild;

    for (var i = 0; i < arrLines.length; i++) {
        var curLine = arrLines[i];
        if (arrLines[i] === "STARTENTRY" && arrLines[i + 4] === "ENDENTRY"){
            var url;
            if (arrLines[i + 1].includes("_VIDEOURL::")){
                url = arrLines[i + 1].replace("_VIDEOURL::", "");
                //document.getElementById("contentShow").innerHTML =
            } else if (arrLines[i + 1].includes("_PICTUREURL")){
                //TODO ADD PICTURE SUPPORT
            }
            var title = arrLines[i + 2].replace("_TITLE::", "");
            var description = arrLines[i + 3].replace("_DESCRIPTION::", "");

            if (HTMLtoBuild != undefined){
                HTMLtoBuild = HTMLtoBuild + '<div class=\"boxOuter\"> <div class=\"box\" style=\"padding: 0px\" id=\"content>\"><style>.embed-container { border-radius: 25px 25px 0px 0px; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class="embed-container"><iframe src="' + url + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div> </div> <div class=\"boxInner\" style=\"padding-bottom: 30px;\" id=\"content-info\"> <h2>'+ title +'</h2> <hr> ' + description + ' </div> </div>'
            } else {
                HTMLtoBuild = '<div class=\"boxOuter\"> <div class=\"box\" style=\"padding: 0px\" id=\"content>\"><style>.embed-container { border-radius: 10px 10px 0px 0px; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class="embed-container"><iframe src="' + url + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div> </div> <div class=\"boxInner\" style=\"padding-bottom: 30px;\" id=\"content-info\"> <h2>'+ title +'</h2> <hr> ' + description + ' </div> </div>'
            }
        }
    }

    document.getElementById("contentContainer").innerHTML = HTMLtoBuild;

}