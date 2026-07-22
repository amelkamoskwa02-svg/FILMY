// Baza danych
const contentData = {
  filmy: [],
  csi: [
    {
      id: 9,
      title: "CSI: Odcinek 9",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+9",
      embedUrl: "https://drive.google.com/file/d/1exqtxxpxZg2nEUKnq3ZMmGtMMuHFnh3F/preview"
    },
    {
      id: 10,
      title: "CSI: Odcinek 10",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+10",
      embedUrl: "https://drive.google.com/file/d/17eUNUQNUxqwJBLOL4hQUP8tUABH3hRC9/preview"
    },
    {
      id: 12,
      title: "CSI: Odcinek 12",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+12",
      embedUrl: "https://drive.google.com/file/d/1vvpCiZGe5gk3rEb2apJ2Ivp2dBaYbu75/preview"
    },
    {
      id: 13,
      title: "CSI: Odcinek 13",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+13",
      embedUrl: "https://drive.google.com/file/d/1wtvBZ8gh9moE6sH1JImezlz1u1DNQTjY/preview"
    },
    {
      id: 14,
      title: "CSI: Odcinek 14",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+14",
      embedUrl: "https://drive.google.com/file/d/1HyHSnTEdipA5RWxWIwyOk0WdFeoh9lI4/preview"
    },
    {
      id: 15,
      title: "CSI: Odcinek 15",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+15",
      embedUrl: "https://drive.google.com/file/d/1Hbm3AjDRauh1jEajepX9Wn_56DZMP9wY/preview"
    },
    {
      id: 16,
      title: "CSI: Odcinek 16 – SUPRA",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+16",
      embedUrl: "https://drive.google.com/file/d/1AgA1_NoKlpj0Uls9bQHmkBe6w8ZOozul/preview"
    },
    {
      id: 17,
      title: "CSI: Odcinek 17 – PORSCHE 911",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+17",
      embedUrl: "https://drive.google.com/file/d/19KPssEnv4kKA9RTkK8eN75RIOlnwaR8C/preview"
    },
    {
      id: 18,
      title: "CSI: Odcinek 18 – NÜRBURGRING | Pierwsze starcie GT3RS MR na Nordschleife",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+18",
      embedUrl: "https://drive.google.com/file/d/1u1d6nXHNqfUfHK0GyKBexmnMTk6ZvWeb/preview"
    },
    {
      id: 19,
      title: "CSI: Odcinek 19",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+19",
      embedUrl: "https://drive.google.com/file/d/1T7WHKrng9g5mLWswC-iq74inHrkaLqII/preview"
    },
    {
      id: 21,
      title: "CSI: Odcinek 21 VIPER ACR vs ROUTE 66! PART 2_2",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+21",
      embedUrl: "https://drive.google.com/file/d/12lDZz7ry_D9f6b6YfuA8qDdzsY6q-QSB/preview"
    },
    {
      id: 22,
      title: "CSI: Odcinek 22 Porsche 911 MANTA GT1 - caly projekt",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+22",
      embedUrl: "https://drive.google.com/file/d/1HQ92V19nlXWlauoRVC9ICXmlODhkqNsI/preview"
    }
  ],
  serial1670_s1: [
    {
      id: 2,
      title: "1670: Sezon 1 - Odcinek 2",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S01E02",
      embedUrl: "https://drive.google.com/file/d/1GqIuMtTefGKg2D4ygqJKmh_XhvSFkk01/preview"
    },
    {
      id: 6,
      title: "1670: Sezon 1 - Odcinek 6",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S01E06",
      embedUrl: "https://drive.google.com/file/d/10qzsVVmpoVdiaiU35Fh5qIKCKic348Is/preview"
    }
  ],
  serial1670_s2: []
};

// Automatyczne szukanie elementu siatki w HTML
const moviesGrid = document.getElementById('movies-grid') || 
                   document.getElementById('movies-container') || 
                   document.querySelector('.movies-grid') || 
                   document.querySelector('.movie-grid');

const playerWrapper = document.getElementById('player-wrapper');
const videoTitle = document.getElementById('video-title');
const categoryButtons = document.querySelectorAll('.category-btn');

let currentCategory = 'csi';

// Funkcja renderująca listę kafelków
function renderMovies() {
  if (!moviesGrid) {
    console.error("BŁĄD: Nie znaleziono kontenera na filmy w pliku HTML!");
    return;
  }

  moviesGrid.innerHTML = '';
  const currentList = contentData[currentCategory] || [];

  if (currentList.length === 0) {
    moviesGrid.innerHTML = '<p style="color: #888; text-align: center; grid-column: 1/-1;">Brak filmów/odcinków w tej kategorii.</p>';
    return;
  }

  currentList.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <img src="${item.poster}" alt="${item.title}">
      <div class="movie-info">
        <h3>${item.title}</h3>
      </div>
    `;
    card.addEventListener('click', () => playMovie(item));
    moviesGrid.appendChild(card);
  });
}

// Podpięcie przycisków kategorii/zakładek
categoryButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    currentCategory = e.target.getAttribute('data-category');
    renderMovies();
  });
});

// Odtwarzanie wideo
function playMovie(item) {
  if (!playerWrapper) return;

  if (videoTitle) {
    videoTitle.textContent = item.title;
  }
  
  if (item.embedUrl) {
    playerWrapper.innerHTML = `
      <div class="player-controls">
        <button id="theater-btn" onclick="toggleTheater()">📺 Pełny ekran na stronie</button>
      </div>
      <div id="video-container">
        <iframe 
          src="${item.embedUrl}" 
          width="100%" 
          height="500" 
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture" 
          allowfullscreen 
          style="border:none; border-radius:12px;">
        </iframe>
      </div>
    `;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Funkcja trybu kinowego
function toggleTheater() {
  const container = document.getElementById('video-container');
  const btn = document.getElementById('theater-btn');
  
  if (container) {
    container.classList.toggle('theater-mode');
    if (btn) {
      if (container.classList.contains('theater-mode')) {
        btn.textContent = '❌ Zamknij pełny ekran';
      } else {
        btn.textContent = '📺 Pełny ekran na stronie';
      }
    }
  }
}

// Pierwsze uruchomienie
document.addEventListener('DOMContentLoaded', () => {
  renderMovies();
});
