// Baza danych
const contentData = {
  filmy: [
    {
      id: 1,
      title: "Mój Pierwszy Film",
      poster: "https://via.placeholder.com/200x300?text=Film+1",
      embedUrl: "https://drive.google.com/file/d/TUTAJ_TWÓJ_ID/preview"
    }
  ],
csi: [
    {
      id: 101,
      title: "CSI: Odcinek 21 VIPER ACR vs ROUTE 66! PART 2_2",
      poster: "https://via.placeholder.com/200x300?text=CSI+Odcinek+21",
      embedUrl: "https://drive.google.com/file/d/12lDZz7ry_D9f6b6YfuA8qDdzsY6q-QSB/preview"
    },
    {
      id: 102,
      title: "CSI: Odcinek 22 Porsche 911 MANTA GT1 - caly projekt",
      poster: "https://via.placeholder.com/200x300?text=CSI+Odcinek+22",
      embedUrl: "https://drive.google.com/file/d/1HQ92V19nlXWlauoRVC9ICXmlODhkqNsI/preview"
    }
  ]
};

let currentCategory = 'csi'; // Domyślna kategoria

const moviesListContainer = document.getElementById('movies-list');
const playerWrapper = document.getElementById('player-wrapper');
const videoTitle = document.getElementById('video-title');

// Wyświetlenie listy dla danej kategorii
function renderMovies() {
  moviesListContainer.innerHTML = '';
  const items = contentData[currentCategory] || [];

  if (items.length === 0) {
    moviesListContainer.innerHTML = '<p style="text-align:center; width:100%;">Brak wideo w tej kategorii.</p>';
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    
    card.innerHTML = `
      <img src="${item.poster}" alt="${item.title}">
      <h3>${item.title}</h3>
    `;

    card.addEventListener('click', () => {
      playMovie(item);
    });

    moviesListContainer.appendChild(card);
  });
}

// Obsługa kliknięć w przyciski zakładek
document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    // Usunięcie klasy 'active' ze wszystkich przycisków
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    // Dodanie 'active' do klikniętego przycisku
    e.target.classList.add('active');
    
    // Pobranie kategorii z atrybutu data-category
    currentCategory = e.target.getAttribute('data-category');
    
    renderMovies();
  });
});

// Odtwarzanie wideo
function playMovie(item) {
  videoTitle.textContent = item.title;
  
  if (item.embedUrl) {
    playerWrapper.innerHTML = `
      <iframe src="${item.embedUrl}" width="100%" height="480" allow="autoplay" style="border:none; border-radius:12px;"></iframe>
    `;
  } else if (item.videoUrl) {
    playerWrapper.innerHTML = `
      <video id="main-player" controls autoplay style="width:100%; max-height:500px; border-radius:12px;">
        <source src="${item.videoUrl}" type="video/mp4">
      </video>
    `;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Pierwsze uruchomienie
renderMovies();
