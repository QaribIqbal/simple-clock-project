let cl = setInterval(() => {
    let a = new Date();
     let d=a.toLocaleDateString();
     let t=a.toLocaleTimeString();
    let time = t+" on "+d;
     //let time = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()+" on "+d;
    document.getElementsByClassName('clock')[0].innerHTML = time;
}, 1000);