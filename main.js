const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
"black",
 "yellow",
  "green",
   "blue",
    "cyan", 
    "pink",
     "purple",
      "#a61c1c",
       "#0ac2a0",
        "#be3cc9",
         "#22e01b",
          "#4a2f28"
        ];

button.addEventListener("click", changeBackground);

let sira = 0;

function changeBackground() {
    //rastgele bir renk
    
  //  const rastgeleSayi = Math.floor(Math.random() * colors.length);
  //  const secilenRenk = colors[rastgeleSayi];
  //  console.log(rastgeleSayi, secilenRenk);  
  //body.style.backgroundColor = secilenRenk;

    //sirayla arkaplan rengi sec

    if(sira == 12) sira = 0;
    const secilenRenk = colors[sira];
    sira++;
    body.style.backgroundColor = secilenRenk;
}
