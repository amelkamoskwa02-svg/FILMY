// Baza danych
const contentData = {
  filmy: 
    }
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
      id: 11,
      title: "CSI: Odcinek 11",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+11",
      embedUrl: "https://buzzheavier.com/2j63650cgz76"
    },
    {
      id: 12,
      title: "CSI: Odcinek 12",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+12",
      embedUrl: "https://drive.google.com/file/d/1e8wpgPdTY3kStgR79Zj3gWhVIdnG6af2/preview"
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
      embedUrl: "https://drive.google.com/file/d/1ceY8dE_xR7WzaO2e3-3oya8JkgfRu54Q/preview"
    },
    {
      id: 15,
      title: "CSI: Odcinek 15",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+15",
      embedUrl: "https://drive.google.com/file/d/1-BlqaY1LR7958WiC9t-fb3-1HGCP9CEu/preview"
    },
    {
      id: 16,
      title: "CSI: Odcinek 16 – SUPRA",
      poster: "https://placehold.co/200x300/111111/e50914?text=CSI+Odcinek+16",
      embedUrl: "https://drive.google.com/file/d/17AxF_iJz0T7q5ccgi9Mo7TxoFk-uU0Pt/preview"
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

// Odtwarzanie wideo z obsługą trybu kinowego
function playMovie(item) {
  videoTitle.textContent = item.title;
  
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

// Funkcja przełączająca tryb kinowy (powiększenie na cały ekran przeglądarki)
function toggleTheater() {
  const container = document.getElementById('video-container');
  const btn = document.getElementById('theater-btn');
  
  container.classList.toggle('theater-mode');
  
  if (container.classList.contains('theater-mode')) {
    btn.textContent = '❌ Zamknij pełny ekran';
  } else {
    btn.textContent = '📺 Pełny ekran na stronie';
  }
}

// Pierwsze uruchomienie
renderMovies();
