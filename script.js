const vakit = document.querySelector(".vakitler");

let info;
var xhr = new XMLHttpRequest();
xhr.open("GET","https://namaz-vakti-api.herokuapp.com/data?region=9676",true);
xhr.onload = function() {
        if(this.status === 200){
            info = JSON.parse(this.responseText);
            //console.log(this.responseText);
            let html = "";
            let text = "";
            info.forEach(element => {
                html = ` ${element}` ;
                let div = document.createElement('div');
                div.classList.add('card')
                text = html.split(",");
                div.innerHTML = `<div class="date">${text[0]}</div>
                <div class="imsak">İmsak: ${text[1]}</div>
                <div class="gunes">Güneş: ${text[2]}</div>
                <div class="ogle">Öğle: ${text[3]}</div>
                <div class="ikindi">İkindi: ${text[4]}</div>
                <div class="aksam">Akşam: ${text[5]}</div>
                <div class="yatsi">Yatsı: ${text[6]}</div>`;
                vakit.appendChild(div);
            });            
}
};
xhr.send();

