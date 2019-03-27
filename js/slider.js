let slides = document.querySelectorAll(".slider_item");
let content_img = document.querySelectorAll(".slide_img");
let content_text = document.querySelectorAll(".slide_text");

for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("click", function(e) {
    let choose;
    for (let i = 0; i < slides.length; i++) {
      if (e.currentTarget == slides[i]) choose = i;
      if (slides[i].classList.contains("slider_item_selected")) slides[i].classList.remove("slider_item_selected");
    }
    for (let i = 0; i < slides.length; i++) {
      content_img[i].classList.add("hidden");
      content_text[i].classList.add("hidden");
      content_img[i].classList.add("off");
      content_text[i].classList.add("off");
    }
    slides[i].classList.add("slider_item_selected");
    content_img[choose].classList.remove("hidden");
    content_text[choose].classList.remove("hidden");
    content_img[choose].classList.remove("off");
    content_text[choose].classList.remove("off");
  })
}

function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}