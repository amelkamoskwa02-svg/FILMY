// Baza danych – usunięto stare przykłady
const contentData = {
  filmy: [
    {
      id: 1,
      title: "Mój Pierwszy Film",
      poster: "https://via.placeholder.com/200x300?text=Film+1",
      // Wklej poniżej link z opcji "Osadź element" z Dysku Google (iframe) 
      // LUB bezpośredni link .mp4:
      embedUrl: "https://drive.google.com/file/d/TUTAJ_TWÓJ_ID/preview"
    }
  ],
  csi: [
    {
      id: 101,
      title: "CSI: Odcinek 22 manta",
      poster: "https://via.placeholder.com/200x300?text=CSI+S01E01",
      https://drive.google.com/file/d/1HQ92V19nlXWlauoRVC9ICXmlODhkqNsI/view?usp=drivesdk
      embedUrl: "https://drive.google.com/file/d/TUTAJ_TWÓJ_ID/preview"
    },
    {
      id: 102,
      title: "CSI: Odcinek 21",
      poster: "https://via.placeholder.com/200x300?text=CSI+S01E02",
       https://drive.google.com/file/d/12lDZz7ry_D9f6b6YfuA8qDdzsY6q-QSB/view?usp=drivesdk
      embedUrl: "https://drive.google.com/file/d/TUTAJ_TWÓJ_ID/preview"
    }
  ]
};

let currentCategory = 'csi'; // Domyślnie pokaże zakładkę CSI

const moviesListContainer = document.getElementById('movies-list');
const playerWrapper = document.getElementById('player-wrapper');
const videoTitle = document.getElementById('video-title');

// Przełączanie zakładek
function switchCategory(category) {
  currentCategory = category;
  
  // Zmiana aktywnego przycisku
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  renderMovies();
}

// Wyświetlenie listy dla danej kategorii
function renderMovies() {
  moviesListContainer.innerHTML = '';
  const items = contentData[currentCategory] || [];

  if (items.length === 0) {
    moviesListContainer.innerHTML = '<p>Brak wideo w tej kategorii.</p>';
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

// Odtwarzanie wideo (obsługa odtwarzacza Google Drive)
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

// Start
renderMovies();
