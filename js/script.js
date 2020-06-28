{//Welcome function
    const welcome = () => {
        console.log("Hello World!!")
    };

    welcome();
}
{//Change name function
    const onChangeNameHeaderClick = () => {

        name1.innerHTML = "Marcin Kisielewski";
    };
    const name1 = document.querySelector(".name1");
    const button1 = document.querySelector(".button1");
    button1.addEventListener("click", onChangeNameHeaderClick);
}
{//Toggle background function
    const onToggleBackgroundClick = () => {

        const backgroundCol = document.querySelector(".body");
        backgroundCol.classList.toggle("body2");

        if (backgroundCol.classList.contains("body2")) {
            changeBackgroundButton.innerText = "Zmień tło na jaśniejsze";
        }
        else {
            changeBackgroundButton.innerText = "Zmień tło na ciemniejsze";
        };
    };
    const changeBackgroundButton = document.querySelector(".button2");
    changeBackgroundButton.addEventListener("click", onToggleBackgroundClick);
}
{//Change first paragraph text background
    const onChangeTextBackgroundClick = () => {
        work1.classList.toggle("work2")
    }

    const textBackgroundButton = document.querySelector(".button3");
    const work1 = document.querySelector(".work1")
    textBackgroundButton.addEventListener("click", onChangeTextBackgroundClick);
}
{//Change image function
    const onChangeImageClick = () => {
        face1.src = "https://i.ibb.co/G9wDLHZ/marcin-kisielewski2.jpg";
        if (changeImageButton.innerText = "Zwykły") {
            changeImageButton.innerText = "Niezwykły";
        } else {
            changeImageButton.innerText = "Zwykły";
        }
    };
    const changeImageButton = document.querySelector(".button4");
    const face1 = document.querySelector(".face1")
    changeImageButton.addEventListener("click", onChangeImageClick);
}