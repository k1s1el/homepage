{
    const welcome = () => {
        console.log("Hello World!!")
    };
    welcome();
}


const onChangeNameHeaderClick = () => {

    name1.innerHTML = "Marcin Kisielewski";
}
const init = () => {
    const button1 = document.querySelector(".button1");
    button1.addEventListener("click", onChangeNameHeaderClick);
}

init();


let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let name1 = document.querySelector(".name1");
let backgroundCol = document.querySelector(".body");
let face1 = document.querySelector(".face1")
let work1 = document.querySelector(".work1")




button2.addEventListener("click", () => {
    backgroundCol.classList.toggle("body2");

    if (backgroundCol.classList.contains("body2")) {
        button2.innerText = "Zmień tło na jaśniejsze";
    }
    else {
        button2.innerText = "Zmień tło na ciemniejsze";
    };
});

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

