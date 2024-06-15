let activeLink = "";
const display = document.getElementsByClassName('display')[0];
const scrollSection = document.getElementsByClassName('scroll-section')[0];

for(let i = 0 ; i < 10 ; i++){
    let imgBox = `
            <div class="img-box">
                <img src="https://picsum.photos/700/500?random=${i}">
            </div>`
    scrollSection.innerHTML = scrollSection.innerHTML + imgBox
}

const resetClick = ()=>{
    Array.from(document.getElementsByClassName('selected')).forEach((e)=>{
        e.classList.toggle("selected")
    })
}

Array.from(document.getElementsByClassName("img-box")).forEach((e, i) => {
    e.addEventListener("click", () =>{
        resetClick();
        if(!e.classList.contains('selected')){
            e.classList.toggle("selected");
            activeLink = e.querySelector("img").src
            let activeImg = `
            <img src="${activeLink}" alt= "activeImage">
            `
            display.innerHTML = activeImg;
        }
        console.log(`clicked`);
        
    })
})