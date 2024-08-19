const container = document.getElementsByClassName("container")[0];
const imgs = document.getElementsByClassName("image");
const filters = document.querySelectorAll(".image .filter")
const back = document.getElementsByClassName("back")[0]
const next = document.getElementsByClassName("next")[0]
const carousel = document.getElementsByClassName("carousel")[0]
const topText = document.getElementsByClassName("top-text")[0]
const bottomText = document.getElementsByClassName("bottom-text")[0]

const colors = ["#7dd3fc", "#d4d4d8", "#6ee7b7", "#fdba74"]

let index = 0
carousel.style.left = `${1.5*window.innerWidth}px`
topText.style.left = "0"
bottomText.style.left = `-${(imgs.length-1)*window.innerWidth}px`
container.style.backgroundColor = colors[index]


for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("mousemove", (e) => {
        const rect = imgs[i].getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        filters[i].style.background = `radial-gradient(circle ${rect.width / 2}px at ${x}% ${y}%, rgba(255,255,255,0.1), rgba(50,50,50,0.1))`;
        imgs[i].style.transform = `perspective(1000px) rotateX(${-1*(y-50)/50*10}deg) rotateY(${(x-50)/50*10}deg)`
    });

    imgs[i].addEventListener("mouseout", (e) => {
        filters[i].style.background = `radial-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1))`;
        imgs[i].style.transform = `rotate3d(0,0,0,0)`;
    });
}


back.addEventListener("click", () => {
    index = (index + imgs.length - 1) % imgs.length
    carousel.style.left = `${1.5*window.innerWidth - index*window.innerWidth}px`
    topText.style.left = `-${index*window.innerWidth}px`
    bottomText.style.left = `-${(imgs.length-1-(index))*window.innerWidth}px`
    container.style.backgroundColor = colors[index]
})

next.addEventListener("click", () => {
    index = (index + imgs.length + 1) % imgs.length
    carousel.style.left = `${1.5*window.innerWidth - index*window.innerWidth}px`
    topText.style.left = `-${index*window.innerWidth}px`
    bottomText.style.left = `-${(imgs.length-1-(index))*window.innerWidth}px`
    container.style.backgroundColor = colors[index]
})