////////////////////////////////////DRAGGABLE RECEIPT///////////////////////////////////
const container = document.querySelector(".receiptcontainer");
let activeImage = null; // Variable to store the currently active image being dragged

// Function to handle mouse drag on an image
function onMouseDrag(event) {
  if (activeImage) {
    let rect = container.getBoundingClientRect();
    let containerWidth = rect.width;
    let containerHeight = rect.height;
    let mouseX = event.clientX - rect.left; // Mouse X position relative to the container
    let mouseY = event.clientY - rect.top; // Mouse Y position relative to the container
    
    // Calculate the position of the active image relative to the container size
    let newPositionX = mouseX / containerWidth * 100;
    let newPositionY = mouseY / containerHeight * 100;

    // Update the position of the active image
    activeImage.style.left = `${newPositionX}%`;
    activeImage.style.top = `${newPositionY}%`;
  }
}

// Event listener to start dragging an image when clicked
container.addEventListener("mousedown", (event) => {
  // Find the image that was clicked
  activeImage = event.target.closest("img");

  if (activeImage) {
    // Prevent text selection while dragging
    event.preventDefault();
    activeImage.style.cursor = 'grabbing'; // Change cursor to 'grabbing'

    // Calculate the initial offset of the mouse relative to the image position
    activeImage.initialX = event.clientX - activeImage.offsetLeft;
    activeImage.initialY = event.clientY - activeImage.offsetTop;

    // Add event listener for mousemove to handle dragging
    document.addEventListener("mousemove", onMouseDrag);
  }
});

// Event listener to stop dragging when mouse is released
document.addEventListener("mouseup", () => {
  if (activeImage) {
    activeImage.style.cursor = 'move'; // Change cursor back to 'move'
    activeImage = null; // Reset the active image
    document.removeEventListener("mousemove", onMouseDrag); // Remove the mousemove event listener
  }
});

////////////////////////////////////SPREAD OUT BUTTON///////////////////////////////////

const spreadOutButton = document.querySelector(".spread-out-button");

// Function to spread out the images
function spreadOutImages() {
  const images = document.querySelectorAll(".receiptcontainer img");
  const container = document.querySelector(".receiptcontainer");

  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.flexDirection = "row";
  container.style.justifyContent = "center";
  container.style.alignItems = "flex-start";
  container.style.height = "100vh";
  container.style.width = "75%";
  container.style.marginLeft = "25%";
  container.style.cursor = "default";
  container.style.overflow = "scroll";
  container.style.paddingBottom = "2%";
  container.style.paddingTop = "2%"

  images.forEach((image) => {
    image.style.transform = "none";
    image.style.maxWidth = "70%"; 
    image.style.maxHeight = "70%"; 
    image.style.position = "static";
  });
}

// Event listener for the spread out button
spreadOutButton.addEventListener("click", spreadOutImages);

////////////////////////////////////GET MESSY BUTTON///////////////////////////////////
const addImageButton = document.querySelector(".add-image-button");
const receiptContainer = document.querySelector(".receiptcontainer");

// Function to add a new random image to the receipt container
function addRandomImage() {
    const images = document.querySelectorAll(".receiptcontainer img");
    const randomIndex = Math.floor(Math.random() * images.length);
    const newImage = images[randomIndex].cloneNode(true);
    const randomRotation = Math.random() * 10 - 5;

    // Set a random position within the container
    const containerRect = receiptContainer.getBoundingClientRect();
    const offsetX = Math.random() * containerRect.width;
    const offsetY = Math.random() * containerRect.height;

    newImage.style.position = "absolute";
    newImage.style.left = `${offsetX}px`;
    newImage.style.top = `${offsetY}px`;
    newImage.style.transform = `rotate(${randomRotation}deg) translate(-50%, -50%) scale(0.7)`;
    newImage.style.zIndex = `998`;

    receiptContainer.appendChild(newImage);
}

// Event listener for the add image button
addImageButton.addEventListener("click", addRandomImage);
