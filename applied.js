if (isJobPosting()){
    markJobPosting();
} else if (isSearchResult()){
    markSearchResult();
}

function markJobPosting(){
    var node = document.createElement("div");
    if (location.href.endsWith("70377")){
        node.style = "position:fixed;bottom:0;color:red;font-size:20px;border:5px solid red;padding-left:10px;padding-right:10px;";
        var t = document.createTextNode("APPLIED");
        node.appendChild(t);
    } else {
        node.style = "position:fixed;bottom:0;font-size:20px;border:5px solid green;padding-left:10px;padding-right:10px;";
        var t = document.createTextNode("Mark as applied");
        node.appendChild(t);
    }
    document.body.appendChild(node);
}

function markSearchResult() {
    var node = document.createElement("div");
        node.style = "position:fixed;bottom:0;font-size:20px;border:5px solid red;padding-left:10px;padding-right:10px;";
        var t = document.createTextNode("search result page");
        node.appendChild(t);
    document.body.appendChild(node);

}



function isSearchResult(){
    if (location.href.indexOf("JobSearchResults.aspx") > 0) {
        return true;
    } else {
        return false;
    }
}

function isJobPosting(){
    if (location.href.indexOf("JobPosting.aspx") > 0) {
        return true;
    } else {
        return false;
    }
}
