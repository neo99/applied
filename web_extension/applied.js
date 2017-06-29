if (isJobPosting()){
    markJobPosting();
} else if (isSearchResult()){
    markSearchResult();
} else if (isMyJobApplications()){
    markMyJobApplications();
}

/*
 * on job posting page:
 *   mark as applied if the job has  been applied
 *   use a "Mark as applied" link if the job hasn't been applied
 */
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

/*
 * mark jobs as applied or not interested on search result page
 */
function markSearchResult() {
    var node = document.createElement("div");
        node.style = "position:fixed;bottom:0;font-size:20px;border:5px solid red;padding-left:10px;padding-right:10px;";
        var t = document.createTextNode("search result page");
        node.appendChild(t);
    document.body.appendChild(node);
}

/*
 * add a button to add all jobs on this page to storage.
 * if a job had been saved before, skip it.
 */
function markMyJobApplications() {
    var node = document.createElement("div");
    node.style = "position:fixed;bottom:0;color:red;font-size:20px;border:5px solid red;padding-left:10px;padding-right:10px;";
    var a = document.createElement("a");
    a.id = "applied-ca-jobs-mark-all";
    //a.href = "javascript:markAll();";
    a.href = "javascript:this.innerHTML='marked';";
//    var t = document.createTextNode("Mark all as applied");
//    a.appendChild(t);
    a.innerHTML = "mark all";
    node.appendChild(a);
    document.body.appendChild(node);
}

/*
 * Mark all jobs on this page as applied
 */
function markAll() {
    //document.getElementById("applied-ca-jobs-mark-all").innerHTML = "marked!";
    alert("hi");
    a.innerHTML = "marked!";
}
/*
 * check if the current page is pageName
 */
function isPageOf(pageName){
    if (location.href.indexOf(pageName) > 0) {
        return true;
    } else {
        return false;
    }
}

/*
 * check if the current page is MyJobApplications page
 */
function isMyJobApplications(){
    return isPageOf("MyJobApplications.aspx");
}

/*
 * check if the current page is JobSearchResults page
 */
function isSearchResult(){
    return isPageOf("JobSearchResults.aspx");
}

/*
 * check if the current page is JobPosting page, aka job detail page.
 */
function isJobPosting(){
    return isPageOf("JobPosting.aspx");
}
