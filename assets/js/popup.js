const overlay = document.getElementById('popup-overlay');
const closeBtn = document.querySelector('.close-btn');
const popupContent = document.getElementById('popup-content');

// grab ALL buttons
document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {

    // find the parent card
    const card = button.closest('.card');

    // grab hidden content from that card
    const details = card.querySelector('.details-text').innerText;

    // inject into popup
    popupContent.textContent = details;

    // show popup
    overlay.classList.add('active');
  });
});

// close button
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

// click outside to close
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});
