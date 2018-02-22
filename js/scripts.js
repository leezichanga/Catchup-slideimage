var imagesSlider = document.getElementById('imagesSlider');

var images= ["url('images/bubble.jpeg')","url('images/sunset.jpeg')", "url('images/frog.jpeg')", "url('images/cat.jpeg')", ]

  var counter = 0;

function carousel() {

  imagesSlider.style.backgroundImage = images[counter];
  counter++;
  if(counter >3) {
    counter =0;
  }

}

setInterval(carousel, 3000);
