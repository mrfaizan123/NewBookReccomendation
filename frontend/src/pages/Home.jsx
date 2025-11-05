// import React, { useEffect, useState } from 'react';
// import { getTopBooks } from '../api';
// import BookCard from '../components/BookCard';
// import Navbar from '../components/Navbar';
// import './Home.css'; // import Home.css here

// const Home = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         getTopBooks().then(res => setBooks(res.data));
//     }, []);

//     return (
//         <div className="home-container">
//             <Navbar />
//             <h1>Top 50 Books</h1>
//             <div className="book-grid">
//                 {books.map((book, i) => <BookCard key={i} book={book} />)}
//             </div>
//         </div>
//     );
// };

// export default Home;








// import React, { useEffect, useState } from 'react';
// import { getTopBooks } from '../api';
// import BookCard from '../components/BookCard';
// import Navbar from '../components/Navbar';
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   CircularProgress,
//   Alert,
//   TextField,
//   InputAdornment
// } from '@mui/material';
// import { Search, TrendingUp } from '@mui/icons-material';
// import './Home.css';

// const Home = () => {
//     const [books, setBooks] = useState([]);
//     const [filteredBooks, setFilteredBooks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         getTopBooks()
//             .then(res => {
//                 console.log('Books Data:', res.data);
//                 setBooks(res.data);
//                 setFilteredBooks(res.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error('API Error:', err);
//                 setError('Failed to load books. Please try again later.');
//                 setLoading(false);
//             });
//     }, []);

//     // Search functionality - Updated for your data structure
//     useEffect(() => {
//         const filtered = books.filter(book =>
//             book['Book-Title']?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             book['Book-Author']?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             book['Genres']?.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredBooks(filtered);
//     }, [searchTerm, books]);

//     if (loading) {
//         return (
//             <div className="home-container">
//                 <Navbar />
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
//                     <CircularProgress size={60} sx={{ color: '#667eea' }} />
//                 </Box>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="home-container">
//                 <Navbar />
//                 <Container maxWidth="lg" sx={{ mt: 4 }}>
//                     <Alert severity="error" sx={{ mb: 2 }}>
//                         {error}
//                     </Alert>
//                 </Container>
//             </div>
//         );
//     }

//     return (
//         <div className="home-container">
//             <Navbar />
            
//             {/* Hero Section */}
//             <Box 
//                 sx={{
//                     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                     color: 'white',
//                     py: 8,
//                     mb: 6,
//                     position: 'relative',
//                     overflow: 'hidden'
//                 }}
//             >
//                 <Container maxWidth="lg">
//                     <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
//                         <TrendingUp sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
//                         <Typography 
//                             variant="h2" 
//                             component="h1"
//                             sx={{
//                                 fontWeight: 800,
//                                 fontSize: { xs: '2.5rem', md: '3.5rem' },
//                                 mb: 2,
//                                 background: 'linear-gradient(45deg, #fff 30%, #ffd700 90%)',
//                                 backgroundClip: 'text',
//                                 WebkitBackgroundClip: 'text',
//                                 WebkitTextFillColor: 'transparent'
//                             }}
//                         >
//                             Top 50 Books
//                         </Typography>
//                         <Typography 
//                             variant="h6" 
//                             sx={{ 
//                                 opacity: 0.9, 
//                                 mb: 4,
//                                 fontSize: { xs: '1rem', md: '1.2rem' }
//                             }}
//                         >
//                             Discover our curated collection of bestselling books
//                         </Typography>
//                     </Box>
//                 </Container>
                
//                 {/* Background Pattern */}
//                 <Box 
//                     sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
//                         zIndex: 1
//                     }}
//                 />
//             </Box>

//             {/* Main Content */}
//             <Container maxWidth="xl" sx={{ mb: 8 }}>
//                 {/* Search Bar */}
//                 <Box sx={{ mb: 6, px: { xs: 2, md: 0 } }}>
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Search books by title, author, or genre..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         sx={{
//                             maxWidth: 600,
//                             margin: '0 auto',
//                             display: 'block',
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: '25px',
//                                 background: 'white',
//                                 boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                                 '&:hover fieldset': {
//                                     borderColor: '#667eea',
//                                 },
//                                 '&.Mui-focused fieldset': {
//                                     borderColor: '#667eea',
//                                 },
//                             }
//                         }}
//                         InputProps={{
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <Search sx={{ color: '#667eea' }} />
//                                 </InputAdornment>
//                             ),
//                         }}
//                     />
//                 </Box>

//                 {/* Results Count */}
//                 <Box sx={{ textAlign: 'center', mb: 4 }}>
//                     <Typography 
//                         variant="h5" 
//                         sx={{ 
//                             color: '#2d3748',
//                             fontWeight: 600,
//                             mb: 1
//                         }}
//                     >
//                         {filteredBooks.length} {filteredBooks.length === 1 ? 'Book' : 'Books'} Found
//                     </Typography>
//                     <Typography 
//                         variant="body1" 
//                         sx={{ color: '#718096' }}
//                     >
//                         {searchTerm ? `Search results for "${searchTerm}"` : 'Showing all top books'}
//                     </Typography>
//                 </Box>

//                 {/* Books Grid */}
//                 {filteredBooks.length > 0 ? (
//                     <Grid container spacing={3} sx={{ px: { xs: 2, md: 0 } }}>
//                         {filteredBooks.map((book, index) => (
//                             <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                                 <BookCard 
//                                     book={book} 
//                                     rank={index + 1}
//                                 />
//                             </Grid>
//                         ))}
//                     </Grid>
//                 ) : (
//                     <Box sx={{ textAlign: 'center', py: 8 }}>
//                         <Typography variant="h6" color="textSecondary" gutterBottom>
//                             No books found
//                         </Typography>
//                         <Typography variant="body1" color="textSecondary">
//                             Try adjusting your search terms
//                         </Typography>
//                     </Box>
//                 )}
//             </Container>
//         </div>
//     );
// };

// export default Home;































// THIRD JSX









import React, { useEffect, useState } from 'react';
import { getTopBooks } from '../api';
import BookCard from '../components/BookCard';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    getTopBooks()
        .then(res => {
            if (res.data && res.data.length > 0) {
                setBooks(res.data);
                setFilteredBooks(res.data);
            } else {
                setBooks([]);
                setFilteredBooks([]);
            }
            setLoading(false);
        })
        .catch(err => {
            console.error('Error loading books:', err);
            setBooks([]);
            setFilteredBooks([]);
            setLoading(false);
        });
}, []);

    // Search functionality
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredBooks(books);
        } else {
            const filtered = books.filter(book =>
                book['Book-Title']?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book['Book-Author']?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book['Genres']?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book['ISBN']?.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBooks(filtered);
        }
    }, [searchTerm, books]);

    const clearSearch = () => {
        setSearchTerm('');
    };

    return (
        <div className="home-container">
            <Navbar />
            
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-icon">📚</div>
                    <h1 className="hero-title">Top 50 Books</h1>
                    <p className="hero-subtitle">
                        Discover our curated collection of books
                    </p>
                </div>
                <div className="hero-background"></div>
            </div>

            {/* Search Section */}
            <div className="search-section">
                <div className="search-container">
                    <div className="search-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search books by title, author, genre, or ISBN..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        {searchTerm && (
                            <button 
                                onClick={clearSearch}
                                className="clear-search-btn"
                                title="Clear search"
                            >
                                ✕
                            </button>
                        )}
                        <span className="search-icon">🔍</span>
                    </div>
                    
                    {/* Results Count */}
                    <div className="results-info">
                        <span className="results-count">
                            {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
                        </span>
                        {searchTerm && (
                            <span className="search-term">
                                for "{searchTerm}"
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading books...</p>
                </div>
            )}

            {/* Books Grid */}
            {!loading && (
                <div className="main-content">
                    {filteredBooks.length > 0 ? (
                        <>
                            <div className="book-grid">
                                {filteredBooks.map((book, index) => (
                                    <BookCard 
                                        key={index} 
                                        book={book} 
                                        rank={index + 1}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="no-books-found">
                            <div className="no-books-icon">📖</div>
                            <h3>No books found</h3>
                            <p>Try adjusting your search terms or browse all books</p>
                            <button 
                                onClick={clearSearch}
                                className="browse-all-btn"
                            >
                                Browse All Books
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;






