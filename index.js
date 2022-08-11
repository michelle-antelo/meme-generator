const picture = document.getElementById("picture");
const topText = document.getElementById("topText");
const bottomText = document.getElementsByTagName("bottomText");
const meme = document.getElementById("meme");
const generateButton = document.getElementById("button");
const memeImage = document.getElementsByClassName("memeImage")[0];
const memeContainer = document.getElementsByClassName("memeContainer")[0];

function submitHandler(e){
    e.preventDefault();
    createFinalMeme(memeContainer);
    console.log("picture: ", picture.value);
}

function createFinalMeme(parent){
    const memeWrapper = document.createElement('div');
    let memeTopText = document.createElement('h1');
    let memeBottomText = document.createElement('h1');
    let memeImg = document.createElement('img');
    
    memeImg.src = picture.value;
    memeTopText.innerText = topText.value;
    memeBottomText.innerText = bottomText.value;

    parent.appendChild(memeWrapper);
    memeWrapper.appendChild(memeImg);
    memeWrapper.appendChild(memeTopText);
    memeWrapper.appendChild(memeBottomText);
}

memeContainer.addEventListener('click', (e) => removeButton(e))

function removeButton(e){
    e.target.parentNode.remove();
}