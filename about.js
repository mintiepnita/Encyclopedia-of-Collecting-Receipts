// Get the image elements
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

// Get the dots
const dots1 = document.querySelectorAll('.column:nth-child(1) .dot');
const dots2 = document.querySelectorAll('.column:nth-child(2) .dot');

// Counter variables to track the state of the images
let image1Counter = 0;
let image2Counter = 0;

// Function to change the image source based on the counter value
function changeImage1() {
  if (image1Counter === 0) {
    image1.src = 'about photo/flatlay1.jpg';
  } else if (image1Counter === 1) {
    image1.src = 'about photo/flatlay3.jpeg';
  } else {
    image1.src = 'about photo/flatlay5.jpg';
  }
}

// Function to change the image source based on the counter value
function changeImage2() {
  if (image2Counter === 0) {
    image2.src = 'about photo/flatlay2.jpg';
  } else if (image2Counter === 1) {
    image2.src = 'about photo/flatlay4.jpeg';
  } else {
    image2.src = 'about photo/flatlay6.jpg';
  }
}

// Add click event listeners to each dot
dots1.forEach((dot, index) => {
  dot.addEventListener('click', function() {
    image1Counter = index;
    changeImage1();
    setActiveDot(dots1, index);
  });
});

dots2.forEach((dot, index) => {
  dot.addEventListener('click', function() {
    image2Counter = index;
    changeImage2();
    setActiveDot(dots2, index);
  });
});

// Function to set the active dot
function setActiveDot(dots, index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Initial image setup
changeImage1();
changeImage2();
