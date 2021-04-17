function changemovingtext(){
    let motiontext=document.getElementsByClassName("skillsanimation")[0];
    if(motiontext.innerHTML =="A Web Developer "){
        motiontext.innerHTML="A CP Beginner";
        motiontext.style.animation="skillmotioncp 5s steps(13) infinite";
    }
    else{
        motiontext.innerHTML="A Web Developer ";
        motiontext.style.animation="skillmotionwd 5s steps(16) infinite";
    }
}
setInterval(changemovingtext,5000);
