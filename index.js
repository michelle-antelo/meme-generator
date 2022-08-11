const picture = document.getElementById("picture");
const topText = document.getElementById("topText");
const bottomText = document.getElementsByTagName("bottomText");
const meme = document.getElementById("meme");
const generateButton = document.getElementById("button");
const box = document.getElementsByClassName("box")[0];

function submitHandler(e){
    e.preventDefault();
    createMeme(box);
    console.log("picture: ", picture.value);
}

function createMeme(){
    const img = document.createElement('img');
        img.src = picture.value;
            box.appendChild(img);
    img.addEventListener('click', (e) => removeButton(e))
    box.appendChild(img);
}

function removeButton(e){
    e.target.remove();
}