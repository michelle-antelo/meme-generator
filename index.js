const picture = document.getElementById("picture");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const generateButton = document.getElementById("button");
const memeContainer = document.getElementsByClassName("memeContainer")[0];

function submitHandler(e){
    e.preventDefault();
    createFinalMeme(memeContainer);
    console.log("picture: ", picture.value);
}

function createFinalMeme(parent){
    const memeWrapper = document.createElement('div');
    memeWrapper.addEventListener('click', function removeButton(e){
        memeWrapper.remove()
    })
    let memeTopText = document.createElement('h1');
    let memeBottomText = document.createElement('h1');
    let memeImg = document.createElement('img');
    
    memeWrapper.className = "memeWrapper";
    memeImg.src = picture.value;
    memeImg.className = "image";
    memeTopText.innerText = topText.value;
    memeTopText.className = "topText";
    memeBottomText.innerText = bottomText.value;
    memeBottomText.className = "bottomText";

    parent.appendChild(memeWrapper);
    memeWrapper.appendChild(memeImg);
    memeWrapper.appendChild(memeTopText);
    memeWrapper.appendChild(memeBottomText);
}
