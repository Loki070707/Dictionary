const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById('result');
const sound=document.getElementById("sound");
const btn=document.getElementById("srch");

btn.addEventListener('click',()=>{
    let inpwrd=document.getElementById("inp-wrd").value;
    fetch(`${url}${inpwrd}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML=`
        <div class="cls">
        <h1>${inpwrd}</h1>
        <button onclick="playsound()">
            <i class="fa fa-volume-up" aria-hidden="true"></i>
        </button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}}
    </p>
    <p class="wrd-example">${data[0].meanings[0].definitions[0].example || ""}</p>`;
    sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);     
    })
    .catch(()=>{
        result.innerHTML=`<h3>Couldn't Find Word</h3>`;
    })
});
function playsound(){
    sound.play()
}

    
//         result.innerHTML=`
//         <div class="cls">
//                 <h1>${inpwrd}</h1>
//                 <button>
//                     <i class="fa fa-volume-up" aria-hidden="true"></i>
//                 </button>
//             </div>
//             <div class="details">
//                 <p>${data[0].meaning[0].partOfSpeech}</p>
//                 <p>/${data[0].phonetic}/</p>
//             </div>
//             <p class="word-meaning">
//                ${data[0].meanings[0].definitions[0].definition}
//             </p>
//             <p class="wrd-example">
//                ${data[0].meanings[0].definitions[0].example || ""}
//             </p>`;
//     });

// })