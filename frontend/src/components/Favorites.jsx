// import React, { useState, useEffect } from 'react';
// import BookCard from './BookCard';
// import './Favorites.css'; // optional styling

// const Favorites = () => {
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage on component mount
//   useEffect(() => {
//     const favs = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(favs);
//   }, []);

//   // Remove a book from favorites
//   const handleRemove = (isbn) => {
//     const newFavs = favorites.filter(book => book.ISBN !== isbn);
//     localStorage.setItem('favorites', JSON.stringify(newFavs));
//     setFavorites(newFavs);
//   };

//   if (favorites.length === 0) return <p>No favorite books yet!</p>;

//   return (
//     <div className="favorites-page">
//       <h2>My Favorite Books</h2>
//       <div className="favorites-list">
//         {favorites.map(book => (
//           <div key={book.ISBN} className="favorite-item">
//             <BookCard book={book} />
//             <button
//               className="btn-remove"
//               onClick={() => handleRemove(book.ISBN)}
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Favorites;






// import React, { useState, useEffect } from 'react';
// import BookCard from './BookCard';
// import './Favorites.css';

// const Favorites = () => {
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage
//   useEffect(() => {
//     const favs = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(favs);
//   }, []);

//   // Remove specific book
//   const handleRemove = (isbn) => {
//     const updatedFavs = favorites.filter(book => book.ISBN !== isbn);
//     localStorage.setItem('favorites', JSON.stringify(updatedFavs));
//     setFavorites(updatedFavs);
//   };

//   if (favorites.length === 0) {
//     return (
//       <div className="favorites-empty">
//         <h2>No Favorite Books Yet 📚</h2>
//         <p>Add some books to your favorites list to see them here!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="favorites-page">
//       <h2 className="favorites-title">My Favorite Books ❤️</h2>
//       <div className="favorites-list">
//         {favorites.map(book => (
//           <div key={book.ISBN} className="favorite-card">
//             <div className="bookcard-wrapper">
//               <BookCard book={book} />
//             </div>
//             <button className="btn-remove" onClick={() => handleRemove(book.ISBN)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Favorites;


import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites from localStorage
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs);
    setTimeout(() => setIsLoading(false), 600);
  }, []);

  // Remove specific book - FIXED VERSION
  const handleRemove = (isbn) => {
    const updatedFavs = favorites.filter(book => String(book.ISBN) !== String(isbn));
    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
    setFavorites(updatedFavs);
  };

  // Clear all favorites
  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to remove all books from your favorites?')) {
      localStorage.setItem('favorites', JSON.stringify([]));
      setFavorites([]);
    }
  };

  if (isLoading) {
    return (
      <div className="favorites-loading">
        <div className="loading-spinner"></div>
        <h3>Loading Your Collection</h3>
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <div className="empty-state">
          <div className="empty-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <h2>Your Library Awaits</h2>
          <p>Books you add to favorites will appear here. Start building your personal collection.</p>
          <div className="empty-actions">
            <button className="btn-primary" onClick={() => window.location.href = '/'}>
              Explore Books
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <div className="header-content">
          <h1 className="favorites-title">My Library</h1>
          <p className="favorites-subtitle">
            {favorites.length} volume{favorites.length !== 1 ? 's' : ''} in your collection
          </p>
        </div>
        {favorites.length > 0 && (
          <button className="btn-clear-all" onClick={handleClearAll}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
            Clear All
          </button>
        )}
      </div>
      
      <div className="favorites-list">
        {favorites.map((book, index) => (
          <div 
            key={book.ISBN} 
            className="favorite-card"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <button 
              className="btn-remove"
              onClick={() => handleRemove(book.ISBN)}
              aria-label={`Remove ${book.title} from favorites`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="bookcard-wrapper">
              <BookCard book={book} />
            </div>
            
            <div className="book-meta">
              <h4 className="book-title">{book.title}</h4>
              <p className="book-author">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="favorites-footer">
        <p>Curated with precision • Your personal collection</p>
      </div>
    </div>
  );
};

export default Favorites;