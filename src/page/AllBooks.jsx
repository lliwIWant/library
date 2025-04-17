import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const AllBooks = () => {
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['popularBooks'],
        queryFn: () => axios.get('https://openlibrary.org/subjects/love.json?limit=20&details=true'),
        retry: 1,
        select: (res) => {
          const sortedBooks = res.data.works
            .sort((a, b) => b.edition_count - a.edition_count)
            .slice(0, 10); // 상위 10권
          return sortedBooks;
        },
      });
      if (isLoading) {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ClipLoader size={50} color="#e1b254" loading={isLoading} />
          </div>
        );
      }
      if (isError) {
        return <h1>Error: {error.message}</h1>;
      }

      return (
        <div className='allBooksArea'>
          <h2>인기 도서</h2>
          <div className='booksWarp'>
            {data.map((book) => (
              <div key={book.key} className='bookCard'>
                <div className='Image'>
                  <img
                        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                    />
                </div>
                <div className='bookTitle'>{book.title}</div>
                <div className='bookTitle sub'>
                    by {book.authors[0].name}
                </div> 
                <div className='likeBtn'>
                    좋아!
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default AllBooks