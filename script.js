// Baza danych Twoich filmów
const movies = [
  {
    id: 1,
    title: "Wakacje 2025",
    poster: "https://picsum.photos/200/300?random=1",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: 2,
    title: "Wypad na Tor",
    poster: "https://picsum.photos/200/300?random=2",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 3,
    title: "Impreza Urodzinowa",
    poster: "https://picsum.photos/200/300?random=3",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  }
];

const moviesListContainer = document.getElementById('movies-list');
const mainPlayer = document.getElementById('main-player');
const videoSource = document.getElementById('video-source');
const videoTitle = document.getElementById('video-title');

// Wyświetlenie listy filmów na stronie
function renderMovies() {
  moviesListContainer.innerHTML = '';

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;

    // Reakcja na kliknięcie w kartę filmu
    card.addEventListener('click', () => {
      playMovie(movie);
    });

    moviesListContainer.appendChild(card);
  });
}

// Funkcja zmieniająca odtwarzany film
function playMovie(movie) {
  videoTitle.textContent = movie.title;
  videoSource.src = movie.videoUrl;
  mainPlayer.load();
  mainPlayer.play();
  
  // Przewiń płynnie do odtwarzacza
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Uruchomienie przy starcie strony
renderMovies();