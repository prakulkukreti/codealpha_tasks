const images = [
    'https://picsum.photos/800/400?random=1',
    'https://picsum.photos/800/400?random=2',
    'https://picsum.photos/800/400?random=3',
    'https://picsum.photos/800/400?random=4',
    'https://picsum.photos/800/400?random=5',
    'https://picsum.photos/800/400?random=6',
    'https://picsum.photos/800/400?random=7',
    'https://picsum.photos/800/400?random=8'
  ];
  let currentIndex = 0;
  
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  function updateGallery() {
    mainImage.src = images[currentIndex];
    mainImage.alt = `Image ${currentIndex + 1}`;
    thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle('active', index === currentIndex);
    });
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
  }
  
  function setImage(index) {
    currentIndex = index;
    updateGallery();
  }
  
  function changeImage(direction) {
    currentIndex = Math.min(Math.max(currentIndex + direction, 0), images.length - 1);
    updateGallery();
  }
  
  // Initialize gallery
  thumbnails[0].classList.add('active');
  updateGallery();
