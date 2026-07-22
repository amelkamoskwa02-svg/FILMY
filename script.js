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
      id: 1,
      title: "1670: Sezon 1 - Odcinek 1",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S01E01",
      embedUrl: "https://drive.google.com/file/d/1LfB3BWA3i-Xx--ESMiUZTPUK9Z6l-oQY/preview"
    },
    {
      id: 2,
      title: "1670: Sezon 1 - Odcinek 2",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S01E02",
      embedUrl: "https://drive.google.com/file/d/1GqIuMtTefGKg2D4ygqJKmh_XhvSFkk01/preview"
    },
    {
      id: 3,
      title: "1670: Sezon 1 - Odcinek 3",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S01E03",
      embedUrl: "https://drive.google.com/file/d/1lCpGO5mVxWoDKvGGyoGZUW8HtSq8ZzOO/preview"
    },
    {
      id: 4,
      title: "1670: Sezon 1 - Odcinek 4",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S01E04",
      embedUrl: "https://drive.google.com/file/d/1zJqBGhLptbsOlXtTF7_9o9Ze_2vHLoZr/preview"
    },
    {
      id: 5,
      title: "1670: Sezon 1 - Odcinek 5",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S01E05",
      embedUrl: "https://drive.google.com/file/d/13FSOQy_pVj_TTCRhOkbw8kt6yeNpEetb/preview"
    },
    {
      id: 6,
      title: "1670: Sezon 1 - Odcinek 6",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S01E06",
      embedUrl: "https://drive.google.com/file/d/10qzsVVmpoVdiaiU35Fh5qIKCKic348Is/preview"
    },
    {
      id: 7,
      title: "1670: Sezon 1 - Odcinek 7",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S01E07",
      embedUrl: "https://drive.google.com/file/d/1zURsk_23mzr1n-L8Kzx46wDdu-lsVcg8/preview"
    },
    {
      id: 8,
      title: "1670: Sezon 1 - Odcinek 8",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S01E08",
      embedUrl: "https://drive.google.com/file/d/1_60ic0-0y-FrNqUDK7GOIh9strvi3ELT/preview"
    }
  ],
  serial1670_s2: [
    {
      id: 1,
      title: "1670: Sezon 2 - Odcinek 1",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S02E01",
      embedUrl: "https://drive.google.com/file/d/15ragcbz8JZEHPgmacnhmJBYoQei85Whc/preview"
    },
    {
      id: 2,
      title: "1670: Sezon 2 - Odcinek 2",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S02E02",
      embedUrl: "https://drive.google.com/file/d/1tfjBOhesMZSuhyuRdXyjWox5a0REiaZ5/preview"
    },
    {
      id: 3,
      title: "1670: Sezon 2 - Odcinek 3",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S02E03",
      embedUrl: "https://drive.google.com/file/d/10-qrT-OnGDDPxg8kZ8gLjLW3QjA0A8Ox/preview"
    },
    {
      id: 4,
      title: "1670: Sezon 2 - Odcinek 4",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S02E04",
      embedUrl: "https://drive.google.com/file/d/18nTv1Pq8kQ1khInelaHX00C-2fCvRSFh/preview"
    },
    {
      id: 5,
      title: "1670: Sezon 2 - Odcinek 5",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S02E05",
      embedUrl: "https://drive.google.com/file/d/1hxznBeE3PyCAlrG1dw_mapo5wJkhdjmx/preview"
    },
    {
      id: 8,
      title: "1670: Sezon 2 - Odcinek 8",
      poster: "https://placehold.co/200x300/111111/e50914?text=1670+S02E08",
      embedUrl: "https://drive.google.com/file/d/1XaSey16yIv_EEr9vgZiULXdDuD7N4yHw/preview"
    }
  ]
};

let currentCategory = 'csi';
let currentPlayingItem = null;

function renderMovies() {
  const moviesGrid = document.getElementById('movies-grid');
  if (!moviesGrid) return;

  moviesGrid.innerHTML = '';
  const currentList = contentData[currentCategory] || [];
  const lastWatchedId = localStorage.getItem(`lastWatched_${currentCategory}`);

  if (currentList.length === 0) {
    moviesGrid.innerHTML = '<p style="color: #888; text-align: center; grid-column: 1/-1;">Brak odcinków w tej kategorii.</p>';
    return;
  }

  currentList.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    if (lastWatchedId && item.id.toString() === lastWatchedId.toString()) {
      card.classList.add('watched');
    }

    const savedTime = localStorage.getItem(`time_${currentCategory}_${item.id}`);
    const timeBadgeHtml = savedTime ? `<div class="time-badge">⏱ ${savedTime}</div>` : '';

    card.innerHTML = `
      <img src="${item.poster}" alt="${item.title}">
      ${timeBadgeHtml}
      <div class="movie-info">
        <h3>${item.title}</h3>
      </div>
    `;

    card.addEventListener('click', () => playMovie(item));
    moviesGrid.appendChild(card);
  });
}

function initCategoryButtons() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');

      currentCategory = e.target.getAttribute('data-category');
      renderMovies();
    });
  });
}

function playMovie(item) {
  currentPlayingItem = item;
  const playerWrapper = document.getElementById('player-wrapper');
  const videoTitle = document.getElementById('video-title');
  const closeBtn = document.getElementById('close-btn');
  const nextBtn = document.getElementById('next-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const timestampControls = document.getElementById('timestamp-controls');
  const timeInput = document.getElementById('time-input');

  localStorage.setItem(`lastWatched_${currentCategory}`, item.id);
  renderMovies();

  if (videoTitle) videoTitle.textContent = item.title;
  
  if (playerWrapper && item.embedUrl) {
    playerWrapper.innerHTML = `
      <iframe 
        src="${item.embedUrl}" 
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  }

  const savedTime = localStorage.getItem(`time_${currentCategory}_${item.id}`);
  if (timeInput) {
    timeInput.value = savedTime || '';
  }

  if (timestampControls) timestampControls.style.display = 'flex';
  if (closeBtn) closeBtn.style.display = 'inline-flex';
  if (fullscreenBtn) fullscreenBtn.style.display = 'inline-flex';
  
  const currentList = contentData[currentCategory] || [];
  const currentIndex = currentList.findIndex(x => x.id === item.id);
  if (nextBtn) {
    if (currentIndex !== -1 && currentIndex < currentList.length - 1) {
      nextBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'none';
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Funkcja otwierająca/zamykająca Pełny Ekran NA STRONIE (Działa na iOS i Androidzie)
function toggleFullscreen() {
  const playerSection = document.querySelector('.player-section');
  const fullscreenBtn = document.getElementById('fullscreen-btn');

  if (!playerSection) return;

  if (!playerSection.classList.contains('is-fullscreen')) {
    playerSection.classList.add('is-fullscreen');
    document.body.style.overflow = 'hidden'; // Zablokowanie przewijania strony w tle
    if (fullscreenBtn) fullscreenBtn.textContent = '✕ Wyjdź';
  } else {
    exitFullscreen();
  }
}

function exitFullscreen() {
  const playerSection = document.querySelector('.player-section');
  const fullscreenBtn = document.getElementById('fullscreen-btn');

  if (playerSection && playerSection.classList.contains('is-fullscreen')) {
    playerSection.classList.remove('is-fullscreen');
    document.body.style.overflow = '';
    if (fullscreenBtn) fullscreenBtn.textContent = '⛶ Pełny ekran';
  }
}

function closePlayer() {
  exitFullscreen();

  const playerWrapper = document.getElementById('player-wrapper');
  const videoTitle = document.getElementById('video-title');
  const closeBtn = document.getElementById('close-btn');
  const nextBtn = document.getElementById('next-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const timestampControls = document.getElementById('timestamp-controls');

  if (videoTitle) videoTitle.textContent = "Wybierz film lub odcinek";
  if (playerWrapper) {
    playerWrapper.innerHTML = `
      <img src="https://placehold.co/800x450/111111/FFFFFF?text=Wybierz+odcinek+z+listy+ponizej" alt="Podgląd" id="placeholder-img">
    `;
  }
  if (timestampControls) timestampControls.style.display = 'none';
  if (closeBtn) closeBtn.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';
  if (fullscreenBtn) fullscreenBtn.style.display = 'none';
  currentPlayingItem = null;
}

function saveTime() {
  if (!currentPlayingItem) return;
  const timeInput = document.getElementById('time-input');
  if (!timeInput) return;

  const value = timeInput.value.trim();
  if (value) {
    localStorage.setItem(`time_${currentCategory}_${currentPlayingItem.id}`, value);
  } else {
    localStorage.removeItem(`time_${currentCategory}_${currentPlayingItem.id}`);
  }
  renderMovies();
  
  const saveBtn = document.getElementById('save-time-btn');
  if (saveBtn) {
    const originalText = saveBtn.textContent;
    saveBtn.textContent = "✔";
    setTimeout(() => {
      saveBtn.textContent = originalText;
    }, 1500);
  }
}

function playNextMovie() {
  if (!currentPlayingItem) return;
  const currentList = contentData[currentCategory] || [];
  const currentIndex = currentList.findIndex(x => x.id === currentPlayingItem.id);

  if (currentIndex !== -1 && currentIndex < currentList.length - 1) {
    playMovie(currentList[currentIndex + 1]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initCategoryButtons();
  renderMovies();

  const closeBtn = document.getElementById('close-btn');
  const nextBtn = document.getElementById('next-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const saveTimeBtn = document.getElementById('save-time-btn');

  if (closeBtn) closeBtn.addEventListener('click', closePlayer);
  if (nextBtn) nextBtn.addEventListener('click', playNextMovie);
  if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);
  if (saveTimeBtn) saveTimeBtn.addEventListener('click', saveTime);
});
