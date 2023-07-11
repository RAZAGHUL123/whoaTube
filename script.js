const moviesRowContainer = document.querySelector('.movie-row-container');
const scrollSpeed = 1; // Adjust this value to control the scrolling speed
let requestId = null;
let isHovering = false;

moviesRowContainer.addEventListener('mouseenter', handleMouseEnter);
moviesRowContainer.addEventListener('mouseleave', handleMouseLeave);
moviesRowContainer.addEventListener('mousedown', handleMouseDown);
moviesRowContainer.addEventListener('mouseup', handleMouseUp);

function handleMouseEnter() {
  isHovering = true;
  startScrolling();
}

function handleMouseLeave() {
  isHovering = false;
  stopScrolling();
}

function handleMouseDown() {
  if (isHovering) {
    startScrolling();
  }
}

function handleMouseUp() {
  stopScrolling();
}

function startScrolling() {
  if (!requestId) {
    scrollMovies();
  }
}

function stopScrolling() {
  if (requestId) {
    cancelAnimationFrame(requestId);
    requestId = null;
  }
}

function scrollMovies() {
  moviesRowContainer.scrollLeft += scrollSpeed;

  if (moviesRowContainer.scrollLeft >= moviesRowContainer.scrollWidth - moviesRowContainer.offsetWidth) {
    moviesRowContainer.scrollLeft = 0;
  }

  requestId = requestAnimationFrame(scrollMovies);
}
