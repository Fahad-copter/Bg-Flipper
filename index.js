var arr = new Array("black","blue","red","green","#FF00FF","purple","#d2691e","pink");
var iter=0;
function changecolor(){
    /*var currcolor=document.querySelector(".color").innerHTML;
    console.log(currcolor);
    */
    document.querySelector(".color").innerHTML=arr[iter];
    document.querySelector("body").style.background=arr[iter];
    iter++;
    if(iter==arr.length)
        iter=0;
}