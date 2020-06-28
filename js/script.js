const welcome = () => {
    console.log("Hello World!!")
};

welcome();

const onChangeNameHeaderClick = () => {

    name1.innerHTML = "Marcin Kisielewski";
}

const onToggleBackgroundClick = () => {

    const backgroundCol = document.querySelector(".body");
    backgroundCol.classList.toggle("body2");

    if (backgroundCol.classList.contains("body2")) {
        changeBackgroundButton.innerText = "Zmień tło na jaśniejsze";
    }
    else {
        changeBackgroundButton.innerText = "Zmień tło na ciemniejsze";
    };

}

const changeBackgroundButton = document.querySelector(".button2");
changeBackgroundButton.addEventListener("click", onToggleBackgroundClick);

const init = () => {
    const button1 = document.querySelector(".button1");
    button1.addEventListener("click", onChangeNameHeaderClick);

}

init();



let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let name1 = document.querySelector(".name1");

let face1 = document.querySelector(".face1")
let work1 = document.querySelector(".work1")






button3.addEventListener("click", () => {
    work1.classList.toggle("work2")
});

button4.addEventListener("click", () => {
    face1.src = "https://i.ibb.co/G9wDLHZ/marcin-kisielewski2.jpg";
    if (button4.innerText = "Zwykły") {
        button4.innerText = "Niezwykły";
    } else {
        button4.innerText = "Zwykły";
    }
});

