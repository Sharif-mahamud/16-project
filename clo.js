const hourEl=document.getElementById("hour");
const minuteEi=document.getElementById("minutes");
const secondEi=document.getElementById("second");
const ampmEi=document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if(h> 12){
        h = h- 12;
        ampm = "pm";
    }
    h = h <10 ? "0" +h : h;
    m = m <10 ? "0" +m : m;
    s = s <10 ? "0" +s : s;
  

    hourEl.innerText = h;
    minuteEi.innerText = m;
    secondEi.innerText = s;
    ampmEi,(innerText = ampm);
    setTimeout(() =>{
        updateclock();
    }, 1000);

}
updateclock()