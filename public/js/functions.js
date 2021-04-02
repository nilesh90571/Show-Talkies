function adminBtn(){
    var pr=fetch("http://127.0.0.1:5500/public/admin.html");
    pr.then(response=>response.text().then(data=>document.getElementById("main").innerHTML=data).catch(err=>console.log(err))).catch(err=>console.log(err));
    backToTop();
}

function sellerBtn(){
    var pr=fetch("http://127.0.0.1:5500/public/seller.html");
    pr.then(response=>response.text().then(data=>document.getElementById("main").innerHTML=data).catch(err=>console.log(err))).catch(err=>console.log(err));
    backToTop();
}

function moviesBtn(){
    var pr=fetch("http://127.0.0.1:5500/public/movies.html");
    pr.then(response=>response.text().then(data=>document.getElementById("main").innerHTML=data).catch(err=>console.log(err))).catch(err=>console.log(err));
    backToTop();
}

function movieSingleBtn(){
    var pr=fetch("http://127.0.0.1:5500/public/movie-single.html");
    pr.then(response=>response.text().then(data=>document.getElementById("main").innerHTML=data).catch(err=>console.log(err))).catch(err=>console.log(err));
    backToTop();
}

function seatChooseBtn(){
    var pr=fetch("http://127.0.0.1:5500/public/seatAdj.html");
    pr.then(response=>response.text().then(data=>document.getElementById("main").innerHTML=data).catch(err=>console.log(err))).catch(err=>console.log(err));
    backToTop();
}

function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var seat = 0;
var seatArr = [];

function seatSelected(){
    for(var j = 65; j<= 76; j++){
    for(var i=1; i<=21; i++){
        var k = String.fromCharCode(j);
        var num = (k+i);
    if(document.getElementById(num).checked == true){
        seat++;
        seatArr.push(document.getElementById(num));
    }}}
    console.log(seat);
    console.log(seatArr);
}