






// import React, { useState, useEffect } from 'react';
//  import './BookCard.css';


// const BookCard = ({ book, rank }) => {
//     const [imageLoaded, setImageLoaded] = useState(false);
//     const [imageError, setImageError] = useState(false);
//     const [isFavorite, setIsFavorite] = useState(false);

//     // Check if book is in favorites on component mount
//     useEffect(() => {
//         const favs = JSON.parse(localStorage.getItem('favorites')) || [];
//         setIsFavorite(favs.some(fav => fav.ISBN === book.ISBN));
//     }, [book.ISBN]);

//     const handleFavoriteToggle = () => {
//         const favs = JSON.parse(localStorage.getItem('favorites')) || [];

//         if (isFavorite) {
//             // Remove from favorites
//             const newFavs = favs.filter(fav => fav.ISBN !== book.ISBN);
//             localStorage.setItem('favorites', JSON.stringify(newFavs));
//             setIsFavorite(false);
//         } else {
//             // Add to favorites
//             favs.push(book);
//             localStorage.setItem('favorites', JSON.stringify(favs));
//             setIsFavorite(true);
//         }
//     };

//     const handleImageLoad = () => setImageLoaded(true);
//     const handleImageError = () => setImageError(true);

//     const getRatingColor = (rating) => {
//         if (rating >= 4.5) return '#ffd700'; // Gold
//         if (rating >= 4.0) return '#4caf50'; // Green
//         if (rating >= 3.5) return '#ff9800'; // Orange
//         if (rating >= 3.0) return '#ff5722'; // Deep Orange
//         return '#f44336'; // Red
//     };

//     const formatNumber = (num) => {
//         if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
//         if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
//         return num;
//     };

//     return (
//         <div className="book-card">
//             {rank && (
//                 <div className="book-rank">
//                     <span className="rank-badge">#{rank}</span>
//                 </div>
//             )}
            
//             <div className="book-image-container">
//                 {!imageError ? (
//                     <>
//                         <div className={`image-placeholder ${imageLoaded ? 'hidden' : ''}`}>
//                             <div className="loading-spinner"></div>
//                         </div>
//                         <img
//                             src={book['Image-URL-M'] || '/placeholder-book.jpg'}
//                             alt={book['Book-Title']}
//                             className={`book-image ${imageLoaded ? 'loaded' : ''}`}
//                             onLoad={handleImageLoad}
//                             onError={handleImageError}
//                         />
//                     </>
//                 ) : (
//                     <div className="image-error">
//                         <div className="error-icon">📚</div>
//                         <p>No Image</p>
//                     </div>
//                 )}
//             </div>

//             <div className="book-content">
//                 <h3 className="book-title" title={book['Book-Title']}>
//                     {book['Book-Title']}
//                 </h3>
                
//                 <p className="book-author" title={book['Book-Author']}>
//                     by {book['Book-Author']}
//                 </p>

//                 <div className="book-rating">
//                     <div className="rating-stars">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                             <span
//                                 key={star}
//                                 className={`star ${star <= Math.floor(book['Avg-Ratings']) ? 'filled' : ''} ${star === Math.ceil(book['Avg-Ratings']) && book['Avg-Ratings'] % 1 !== 0 ? 'half-filled' : ''}`}
//                             >
//                                 ★
//                             </span>
//                         ))}
//                     </div>
                    
//                     <div className="rating-details">
//                         <span 
//                             className="rating-value"
//                             style={{ color: getRatingColor(book['Avg-Ratings']) }}
//                         >
//                             {/* Rating number can be shown here if needed */}
//                         </span>
//                         <span className="rating-count">
//                             ({formatNumber(book['Num-Ratings'])} votes)
//                         </span>
//                     </div>
//                 </div>

//                 {book['Year-Of-Publication'] && book['Year-Of-Publication'] !== '0' && (
//                     <div className="book-meta">
//                         <span className="publication-year">
//                             Published: {book['Year-Of-Publication']}
//                         </span>
//                     </div>
//                 )}

//                 {book['ISBN'] && (
//                     <div className="book-meta">
//                         <span className="isbn">ISBN: {book['ISBN']}</span>
//                     </div>
//                 )}
//             </div>

//             <div className="book-actions">
//                 {/* Favorite / heart button */}
//                 <button
//                     className={`btn-wishlist ${isFavorite ? 'favorited' : ''}`}
//                     title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
//                     onClick={handleFavoriteToggle}
//                 >
//                     {isFavorite ? '❤️' : '♡'}
//                 </button>
//                 <button className="btn-details" title="View Details">
//                     View Details
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default BookCard;

























// import React, { useState } from 'react';
// import './BookCard.css';

// const BookCard = ({ book, rank }) => {
//     const [imageError, setImageError] = useState(false);
//     const [isFavorited, setIsFavorited] = useState(false);

//     const handleImageError = () => {
//         setImageError(true);
//     };

//     const toggleFavorite = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setIsFavorited(!isFavorited);
//     };

//     const handleDetailsClick = () => {
//         console.log('View details for:', book['Book-Title']);
//     };

//     // Get image URL from book data
//     const getImageUrl = () => {
//         return book['Image-URL-L'] || book['Image-URL-M'] || book['Image-URL-S'] || '';
//     };

//     const imageUrl = getImageUrl();

//     return (
//         <div className="book-card">
//             {/* Rank Badge */}
//             <div className="book-rank">
//                 <span className="rank-badge">#{rank}</span>
//             </div>

//             {/* Book Image */}
//             <div className="book-image-container">
//                 {imageUrl && !imageError ? (
//                     <img
//                         src={imageUrl}
//                         alt={book['Book-Title'] || 'Book cover'}
//                         className="book-image"
//                         onError={handleImageError}
//                     />
//                 ) : (
//                     <div className="image-error">
//                         📚
//                         <span>No Image</span>
//                     </div>
//                 )}
//             </div>

//             {/* Book Content */}
//             <div className="book-content">
//                 <h3 className="book-title">
//                     {book['Book-Title'] || 'Unknown Title'}
//                 </h3>
//                 <p className="book-author">
//                     by {book['Book-Author'] || 'Unknown Author'}
//                 </p>
                
//                 <div className="book-rating">
//                     <div className="book-meta">
//                         ⭐ {book['Avg-Rating'] || 'N/A'} • {book['Year-Of-Publication'] || 'Unknown Year'}
//                     </div>
//                     <div className="book-meta">
//                         {book['Genres'] || 'General'}
//                     </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="book-actions">
//                     <button 
//                         className={`btn-wishlist ${isFavorited ? 'favorited' : ''}`}
//                         onClick={toggleFavorite}
//                         title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
//                     >
//                         {isFavorited ? '❤️' : '🤍'}
//                     </button>
//                     <button 
//                         className="btn-details"
//                         onClick={handleDetailsClick}
//                     >
//                         View Details
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookCard;































// import React from 'react';
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Box
// } from '@mui/material';

// const BookCard = ({ book, rank }) => {
//   // Use the correct property names from your API data
//   const {
//     ['Book-Title']: title,
//     ['Book-Author']: author,
//     ['Image-URL-M']: imageUrl,
//     ['Genres']: genre,
//     ['Avg-Ratings']: rating,
//     ['Num-Ratings']: numRatings
//   } = book;

//   return (
//     <Card 
//       sx={{ 
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         transition: 'all 0.3s ease',
//         borderRadius: '12px',
//         boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         background: 'white',
//         '&:hover': {
//           transform: 'translateY(-5px)',
//           boxShadow: '0 8px 25px rgba(102, 126, 234, 0.15)',
//         }
//       }}
//     >
//       {/* Rank Badge */}
//       {rank && (
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 12,
//             left: 12,
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             color: 'white',
//             borderRadius: '50%',
//             width: 35,
//             height: 35,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontWeight: 'bold',
//             fontSize: '0.8rem',
//             zIndex: 2,
//           }}
//         >
//           #{rank}
//         </Box>
//       )}

//       {/* Book Cover */}
//       <CardMedia
//         component="img"
//         height="220"
//         image={imageUrl || '/default-book-cover.jpg'}
//         alt={title}
//         sx={{
//           objectFit: 'cover',
//         }}
//         onError={(e) => {
//           e.target.src = '/default-book-cover.jpg';
//         }}
//       />

//       <CardContent sx={{ flexGrow: 1, p: 2 }}>
//         {/* Title */}
//         <Typography 
//           variant="h6" 
//           component="h2"
//           sx={{
//             fontWeight: 600,
//             fontSize: '1rem',
//             lineHeight: 1.3,
//             mb: 1,
//             color: '#2d3748',
//             display: '-webkit-box',
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: 'vertical',
//             overflow: 'hidden'
//           }}
//         >
//           {title || 'Untitled Book'}
//         </Typography>

//         {/* Author */}
//         <Typography 
//           variant="body2" 
//           color="text.secondary"
//           sx={{ 
//             mb: 1,
//             fontStyle: 'italic'
//           }}
//         >
//           by {author || 'Unknown Author'}
//         </Typography>

//         {/* Genre */}
//         {genre && (
//           <Typography 
//             variant="body2" 
//             sx={{ 
//               color: '#667eea',
//               fontWeight: 500,
//               fontSize: '0.8rem',
//               mb: 1
//             }}
//           >
//             {genre}
//           </Typography>
//         )}

//         {/* Rating */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
//           {rating && (
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Typography variant="body2" sx={{ color: '#ffd700', fontWeight: 'bold', mr: 0.5 }}>
//                 ⭐
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {parseFloat(rating).toFixed(1)}
//               </Typography>
//             </Box>
//           )}
          
//           {numRatings && (
//             <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
//               ({numRatings} ratings)
//             </Typography>
//           )}
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default BookCard;




// 4th updated


















// import React, { useState, useEffect } from 'react';
// import './BookCard.css';

// const BookCard = ({ book, rank }) => {
//     const [imageError, setImageError] = useState(false);
//     const [isFavorited, setIsFavorited] = useState(false);

//     // Check if book is in favorites on component mount
//     useEffect(() => {
//         const favs = JSON.parse(localStorage.getItem('favorites')) || [];
//         setIsFavorited(favs.some(fav => fav.ISBN === book.ISBN));
//     }, [book.ISBN]);

//     const handleImageError = () => {
//         setImageError(true);
//     };

    

//     const handleDetailsClick = () => {
//         console.log('View details for:', book['Book-Title']);
//     };

//     // Get image URL from book data
//     const getImageUrl = () => {
//         return book['Image-URL-L'] || book['Image-URL-M'] || book['Image-URL-S'] || '';
//     };

//     // Get rating color based on rating value
//     const getRatingColor = (rating) => {
//         if (!rating || rating === 'N/A') return '#718096';
//         const numRating = parseFloat(rating);
//         if (numRating >= 4.5) return '#ffd700'; // Gold
//         if (numRating >= 4.0) return '#4caf50'; // Green
//         if (numRating >= 3.5) return '#ff9800'; // Orange
//         if (numRating >= 3.0) return '#ff5722'; // Deep Orange
//         return '#f44336'; // Red
//     };

//     // Format number for votes
//     const formatNumber = (num) => {
//         if (!num) return '0';
//         if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
//         if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
//         return num.toString();
//     };

//     // Get rating value (handle different field names)
//     const getRating = () => {
//         return book['Avg-Rating'] || book['Avg-Ratings'] || book['average_rating'] || 'N/A';
//     };

//     // Get number of votes (handle different field names)
//     const getVotes = () => {
//         return book['Num-Ratings'] || book['ratings_count'] || book['work_ratings_count'] || 0;
//     };

//     const imageUrl = getImageUrl();
//     const rating = getRating();
//     const votes = getVotes();

//     return (
//         <div className="book-card">
//             {/* Rank Badge */}
//             {rank && (
//                 <div className="book-rank">
//                     <span className="rank-badge">#{rank}</span>
//                 </div>
//             )}

//             {/* Book Image */}
//             <div className="book-image-container">
//                 {imageUrl && !imageError ? (
//                     <img
//                         src={imageUrl}
//                         alt={book['Book-Title'] || 'Book cover'}
//                         className="book-image"
//                         onError={handleImageError}
//                     />
//                 ) : (
//                     <div className="image-error">
//                         📚
//                         <span>No Image</span>
//                     </div>
//                 )}
//             </div>

//             {/* Book Content */}
//             <div className="book-content">
//                 <h3 className="book-title">
//                     {book['Book-Title'] || 'Unknown Title'}
//                 </h3>
//                 <p className="book-author">
//                     by {book['Book-Author'] || 'Unknown Author'}
//                 </p>
                
//                 {/* Ratings and Votes Section */}
//                 <div className="book-rating">
//                     <div className="rating-stars">
//                         {[1, 2, 3, 4, 5].map((star) => {
//                             const ratingValue = parseFloat(rating);
//                             if (isNaN(ratingValue)) {
//                                 return (
//                                     <span key={star} className="star empty">
//                                         ★
//                                     </span>
//                                 );
//                             }
//                             return (
//                                 <span
//                                     key={star}
//                                     className={`star ${
//                                         star <= Math.floor(ratingValue) 
//                                             ? 'filled' 
//                                             : star === Math.ceil(ratingValue) && ratingValue % 1 !== 0 
//                                             ? 'half-filled' 
//                                             : 'empty'
//                                     }`}
//                                 >
//                                     ★
//                                 </span>
//                             );
//                         })}
//                     </div>
                    
//                     <div className="rating-details">
//                         <span 
//                             className="rating-value"
//                             style={{ color: getRatingColor(rating) }}
//                         >
//                             {rating !== 'N/A' ? parseFloat(rating).toFixed(1) : 'N/A'}
//                         </span>
//                         <span className="rating-count">
//                             ({formatNumber(votes)} votes)
//                         </span>
//                     </div>
//                 </div>

//                 {/* Publication Year Only */}
//                 {book['Year-Of-Publication'] && book['Year-Of-Publication'] !== '0' && (
//                     <div className="book-meta">
//                         <span className="publication-year">
//                             {book['Year-Of-Publication']}
//                         </span>
//                     </div>
//                 )}

//                 {/* Actions */}
//                 <div className="book-actions">
//                     <button 
//                         className={`btn-wishlist ${isFavorited ? 'favorited' : ''}`}
//                         onClick={toggleFavorite}
//                         title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
//                     >
//                         {isFavorited ? '❤️' : '🤍'}
//                     </button>
//                     <button 
//                         className="btn-details"
//                         onClick={handleDetailsClick}
//                     >
//                         View Details
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookCard;






// updated



































































// import React, { useState, useEffect } from 'react';
// import './BookCard.css';

// const BookCard = ({ book, rank }) => {
//     const [imageError, setImageError] = useState(false);
//     const [isFavorited, setIsFavorited] = useState(false);

//     // Check if book is in favorites on component mount
//     useEffect(() => {
//         const favs = JSON.parse(localStorage.getItem('favorites')) || [];
//         setIsFavorited(favs.some(fav => fav.ISBN === book.ISBN));
//     }, [book.ISBN]);

//     const handleImageError = () => {
//         setImageError(true);
//     };

//     const toggleFavorite = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
        
//         const favs = JSON.parse(localStorage.getItem('favorites')) || [];
        
//         if (isFavorited) {
//             // Remove from favorites
//             const newFavs = favs.filter(fav => fav.ISBN !== book.ISBN);
//             localStorage.setItem('favorites', JSON.stringify(newFavs));
//             setIsFavorited(false);
//         } else {
//             // Add to favorites
//             favs.push(book);
//             localStorage.setItem('favorites', JSON.stringify(favs));
//             setIsFavorited(true);
//         }
//     };

//     const handleDetailsClick = () => {
//         console.log('View details for:', book['Book-Title']);
//     };

//     // Get image URL from book data
//     const getImageUrl = () => {
//         return book['Image-URL-L'] || book['Image-URL-M'] || book['Image-URL-S'] || '';
//     };

//     // Get rating color based on rating value
//     const getRatingColor = (rating) => {
//         if (!rating || rating === 'N/A') return '#718096';
//         const numRating = parseFloat(rating);
//         if (numRating >= 4.5) return '#ffd700'; // Gold
//         if (numRating >= 4.0) return '#4caf50'; // Green
//         if (numRating >= 3.5) return '#ff9800'; // Orange
//         if (numRating >= 3.0) return '#ff5722'; // Deep Orange
//         return '#f44336'; // Red
//     };

//     // Format number for votes
//     const formatNumber = (num) => {
//         if (!num) return '0';
//         if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
//         if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
//         return num.toString();
//     };

//     // Get rating value (handle different field names) - YEH FIX HAI
//     const getRating = () => {
//         return book['Avg-Rating'] || book['Avg-Ratings'] || book['average_rating'] || 'N/A';
//     };

//     // Get number of votes (handle different field names) - YEH FIX HAI
//     const getVotes = () => {
//         return book['Num-Ratings'] || book['ratings_count'] || book['work_ratings_count'] || 0;
//     };

//     const imageUrl = getImageUrl();
//     const rating = getRating();
//     const votes = getVotes();

//     return (
//         <div className="book-card">
//             {/* Rank Badge */}
//             {rank && (
//                 <div className="book-rank">
//                     <span className="rank-badge">#{rank}</span>
//                 </div>
//             )}

//             {/* Book Image */}
//             <div className="book-image-container">
//                 {imageUrl && !imageError ? (
//                     <img
//                         src={imageUrl}
//                         alt={book['Book-Title'] || 'Book cover'}
//                         className="book-image"
//                         onError={handleImageError}
//                     />
//                 ) : (
//                     <div className="image-error">
//                         📚
//                         <span>No Image</span>
//                     </div>
//                 )}
//             </div>

//             {/* Book Content */}
//             <div className="book-content">
//                 <h3 className="book-title">
//                     {book['Book-Title'] || 'Unknown Title'}
//                 </h3>
//                 <p className="book-author">
//                     by {book['Book-Author'] || 'Unknown Author'}
//                 </p>
                
//                 {/* Ratings and Votes Section */}
//                 <div className="book-rating">
//                     <div className="rating-stars">
//                         {[1, 2, 3, 4, 5].map((star) => {
//                             const ratingValue = parseFloat(rating);
//                             if (isNaN(ratingValue)) {
//                                 return (
//                                     <span key={star} className="star empty">
//                                         ★
//                                     </span>
//                                 );
//                             }
//                             return (
//                                 <span
//                                     key={star}
//                                     className={`star ${
//                                         star <= Math.floor(ratingValue) 
//                                             ? 'filled' 
//                                             : star === Math.ceil(ratingValue) && ratingValue % 1 !== 0 
//                                             ? 'half-filled' 
//                                             : 'empty'
//                                     }`}
//                                 >
//                                     ★
//                                 </span>
//                             );
//                         })}
//                     </div>
                    
//                     <div className="rating-details">
//                         <span 
//                             className="rating-value"
//                             style={{ color: getRatingColor(rating) }}
//                         >
//                             {rating !== 'N/A' ? parseFloat(rating).toFixed(1) : 'N/A'}
//                         </span>
//                         <span className="rating-count">
//                             ({formatNumber(votes)} votes)
//                         </span>
//                     </div>
//                 </div>

//                 {/* Publication Year Only */}
//                 {book['Year-Of-Publication'] && book['Year-Of-Publication'] !== '0' && (
//                     <div className="book-meta">
//                         <span className="publication-year">
//                             {book['Year-Of-Publication']}
//                         </span>
//                     </div>
//                 )}

//                 {/* Actions */}
//                 <div className="book-actions">
//                     <button 
//                         className={`btn-wishlist ${isFavorited ? 'favorited' : ''}`}
//                         onClick={toggleFavorite}
//                         title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
//                     >
//                         {isFavorited ? '❤️' : '🤍'}
//                     </button>
//                     <button 
//                         className="btn-details"
//                         onClick={handleDetailsClick}
//                     >
//                         View Details
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookCard;


// the above code is perfect without heart click



import React, { useState, useEffect } from 'react';
import './BookCard.css';


const BookCard = ({ book, rank }) => {
    const [imageError, setImageError] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);

    // ✅ Fallback Unique ID
    const bookId = String(book.ISBN || book['Book-Title'] + book['Book-Author']);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorited(favs.some(fav => String(fav.id) === bookId));
    }, [bookId]);

    // ✅ Re-added function (fixes your error)
    const handleImageError = () => {
        setImageError(true);
    };

    const toggleFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const favs = JSON.parse(localStorage.getItem('favorites')) || [];

        if (isFavorited) {
            const newFavs = favs.filter(fav => String(fav.id) !== bookId);
            localStorage.setItem('favorites', JSON.stringify(newFavs));
            setIsFavorited(false);
        } else {
            const newFavs = [...favs.filter(fav => String(fav.id) !== bookId), { ...book, id: bookId }];
            localStorage.setItem('favorites', JSON.stringify(newFavs));
            setIsFavorited(true);
        }
    };

    const handleDetailsClick = () => {
        console.log('View details for:', book['Book-Title']);
    };

    const getImageUrl = () => {
        return book['Image-URL-L'] || book['Image-URL-M'] || book['Image-URL-S'] || '';
    };

    const getRatingColor = (rating) => {
        if (!rating || rating === 'N/A') return '#718096';
        const numRating = parseFloat(rating);
        if (numRating >= 4.5) return '#ffd700';
        if (numRating >= 4.0) return '#4caf50';
        if (numRating >= 3.5) return '#ff9800';
        if (numRating >= 3.0) return '#ff5722';
        return '#f44336';
    };

    const formatNumber = (num) => {
        if (!num) return '0';
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    };

    const getRating = () => {
        return book['Avg-Rating'] || book['Avg-Ratings'] || book['average_rating'] || 'N/A';
    };

    const getVotes = () => {
        return book['Num-Ratings'] || book['ratings_count'] || book['work_ratings_count'] || 0;
    };

    const imageUrl = getImageUrl();
    const rating = getRating();
    const votes = getVotes();

    return (
        <div className="book-card">
            {rank && (
                <div className="book-rank">
                    <span className="rank-badge">#{rank}</span>
                </div>
            )}

            <div className="book-image-container">
                {imageUrl && !imageError ? (
                    <img
                        src={imageUrl}
                        alt={book['Book-Title'] || 'Book cover'}
                        className="book-image"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="image-error">
                        📚
                        <span>No Image</span>
                    </div>
                )}
            </div>

            <div className="book-content">
                <h3 className="book-title">
                    {book['Book-Title'] || 'Unknown Title'}
                </h3>
                <p className="book-author">
                    by {book['Book-Author'] || 'Unknown Author'}
                </p>

                <div className="book-rating">
                    <div className="rating-stars">
                        {[1, 2, 3, 4, 5].map((star) => {
                            const ratingValue = parseFloat(rating);
                            if (isNaN(ratingValue)) {
                                return <span key={star} className="star empty">★</span>;
                            }
                            return (
                                <span
                                    key={star}
                                    className={`star ${
                                        star <= Math.floor(ratingValue)
                                            ? 'filled'
                                            : star === Math.ceil(ratingValue) && ratingValue % 1 !== 0
                                            ? 'half-filled'
                                            : 'empty'
                                    }`}
                                >
                                    ★
                                </span>
                            );
                        })}
                    </div>

                    <div className="rating-details">
                        <span className="rating-value" style={{ color: getRatingColor(rating) }}>
                            {rating !== 'N/A' ? parseFloat(rating).toFixed(1) : 'N/A'}
                        </span>
                        <span className="rating-count">
                            ({formatNumber(votes)} votes)
                        </span>
                    </div>
                </div>

                <div className="book-actions">
                    <button 
                        className={`btn-wishlist ${isFavorited ? 'favorited' : ''}`}
                        onClick={toggleFavorite}
                        title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        {isFavorited ? '❤️' : '🤍'}
                    </button>

                    <button className="btn-details" onClick={handleDetailsClick}>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
