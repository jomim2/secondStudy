const xhr : any = new XMLHttpRequest();
xhr.open('GET','http://localhost:5500/score');
xhr.send();

xhr.onreadystatechange = function (){
    if(xhr.readyState !== XMLHttpRequest.DONE) return;
    if(xhr.state === 200){
        console.log(xhr.responseText);
    }else{
        console.log("Error!")
    }
};
