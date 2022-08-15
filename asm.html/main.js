var app = document.querySelector(".app")
var header = document.querySelector(".slider__grid")

window.addEventListener("scroll", e => {
    if(window.scrollY > 200){
        header.classList.add("hide")
    }
    else {
        header.classList.remove("hide")
    }
})


const slideGr = document.querySelector(".container__grid")
const slides = document.querySelector(".container__grid-row")
const slideColumn = document.querySelectorAll(".container__grid-column")

var num_page

function num_slider(numberSlider){
    const width_slide = 100/numberSlider;
    // độ dài từng product column
    num_page = Math.ceil(slideColumn.length/numberSlider)
    // tính số lượng trang
    slideColumn.forEach((e) => {
        // set độ rộng từng product column
        e.style.width = (slideGr.offsetwidth/100*width_slide) + "px";
    })
    slides.style.width = (slideGr.offsetwidth/100*width_slide)*slideColumn.length + "px";
}

num_slider(4)

// Tạo 1 biến giữ vị trí trang
var curpage = 1;

function showSlide(pagenumber) {
    slides.style.marginLeft = -(slideGr.offsetwidth*(pagenumber-1)) + "px";
}

showSlide(1)

function changeslide(e) {
    curpage = curpage + e;
    if(curpage < 1) {
        curpage = 1;
    }
    else if(curpage > num_page)curpage = 1;
    showSlide(curpage)
}