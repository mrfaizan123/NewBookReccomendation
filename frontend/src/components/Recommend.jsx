// import React, { useState } from 'react';
// import { getRecommendations } from '../api';
// import BookCard from './BookCard';

// const Recommend = () => {
//     const [input, setInput] = useState('');
//     const [books, setBooks] = useState([]);
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         const res = await getRecommendations(input);
//         if(res.data.error) setError(res.data.error);
//         else setBooks(res.data);
//     };

//     return (
//         <div>
//             <h1>Book Recommendation</h1>
//             <form onSubmit={handleSubmit}>
//                 <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter Book Title" />
//                 <button type="submit">Recommend</button>
//             </form>
//             {error && <p>{error}</p>}
//             <div className="book-grid">
//                 {books.map((book, i) => <BookCard key={i} book={book} />)}
//             </div>
//         </div>
//     );
// };

// export default Recommend;


// this is working code

// import React, { useState } from 'react';
// import { getRecommendations } from '../api';
// import BookCard from './BookCard';
// import './Reccomend.css';
// import './Navbar';

// const Recommend = () => {
//     const [input, setInput] = useState('');
//     const [books, setBooks] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!input.trim()) return;

//         setError('');
//         setLoading(true);
//         try {
//             const res = await getRecommendations(input);
// if (res.data.error) {
//     setError(res.data.error);
// } else {
//     const normalizedBooks = res.data.map((b, index) => ({
//         ...b,
//         ISBN: b.ISBN || `no-isbn-${index}`, // fallback for React key
//         "Avg-Ratings": Number(b["Avg-Ratings"] || b["Avg-Rating"] || b["average_rating"] || 0),
//         "Num-Ratings": Number(b["Num-Ratings"] || b["ratings_count"] || b["work_ratings_count"] || 0)
//     }));
//     setBooks(normalizedBooks);
// }
//         } catch (err) {
//             setError('Failed to get recommendations. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="recommend-container">
//             <div className="recommend-header">
//                 <h1>Book Recommendations</h1>
//                 <p>Discover your next favorite book based on your preferences</p>
//             </div>

//             <form onSubmit={handleSubmit} className="recommend-form">
//                 <input 
//                     value={input} 
//                     onChange={e => setInput(e.target.value)} 
//                     placeholder="Enter book title, author, or genre..." 
//                     className="recommend-input"
//                     disabled={loading}
//                 />
//                 <button type="submit" className="recommend-button" disabled={loading}>
//                     {loading ? 'Searching...' : 'Recommend'}
//                 </button>
//             </form>

//             {error && <div className="error-message">{error}</div>}

//             {books.length > 0 ? (
//                 <div className="book-grid">
//                     {books.map((book, i) => (
//                         <BookCard key={book.ISBN} book={book} />
//                     ))}
//                 </div>
//             ) : (
//                 !error && !loading && (
//                     <div className="no-results">
//                         <p>Enter a book title to get recommendations</p>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// };

// export default Recommend;
















import React, { useState } from 'react';
import { getRecommendations } from '../api';
import BookCard from './BookCard';
import './Reccomend.css';

const Recommend = () => {
    const [input, setInput] = useState('');
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setError('');
        setLoading(true);

        try {
            const res = await getRecommendations(input);
            if (res.data.error) {
                setError(res.data.error);
            } else {
                const normalizedBooks = res.data.map((b, index) => ({
                    ...b,
                    ISBN: b.ISBN || `no-isbn-${index}`,
                    "Avg-Ratings": Number(b["Avg-Ratings"] || 0),
                    "Num-Ratings": Number(b["Num-Ratings"] || 0)
                }));
                setBooks(normalizedBooks);
            }
        } catch {
            setError("Failed to get recommendations.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="recommend-container">
            <div className="recommend-header">
                <h1>Book Recommendations</h1>
            </div>

            <form onSubmit={handleSubmit} className="recommend-form">
                <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Enter book title..."
                    className="recommend-input"
                    disabled={loading}
                />
                <button className="recommend-button" disabled={loading}>
                    {loading ? "Searching..." : "Recommend"}
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            <div className="book-grid">
                {books.map((book) => (
                    <BookCard key={book.ISBN} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Recommend;









