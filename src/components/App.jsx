import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import { Button } from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchPictures } from '../services/api';
import { perPage } from '../services/api';
import { Message } from './Message/Message';

export function App() {
  const [searchText, setSearchText] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isShowButton, setIsShowButton] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async function didUpdate() {
      if (!searchText) return;
      try {
        setLoading(true);
        setIsShowButton(true);
        const response = await fetchPictures(searchText, page);
        setPictures(prevPictures => [...prevPictures, ...response.hits]);
        if (response.total === 0) {
          throw new Error('Sorry, no images found');
        }
        if (response.totalHits <= page * perPage) {
          setIsShowButton(false);
        }
      } catch (error) {
        console.log(error);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchText, page]);

  const handleSearch = searchRequest => {
    if (searchRequest === searchText) {
      toast.error(
        'The same request was detected. Please change you search query.'
      );
      return;
    }

    setPage(1);
    setPictures([]);
    setError('');
    setIsShowButton(false);
    setSearchText(searchRequest);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {pictures.length > 0 && !error && <ImageGallery pictures={pictures} />}
      {error && !loading && <Message>{error}</Message>}
      {loading && <Loader />}
      {pictures.length > 0 && !isShowButton && !loading && !error && (
        <Message>You reached the end of search results.</Message>
      )}
      {pictures.length > 0 && isShowButton && !error && (
        <Button onClick={handleLoadMore} />
      )}

      <ToastContainer />
    </>
  );
}

// export class App extends Component {
//   state = {
//     searchText: '',
//     pictures: [],
//     page: 1,
//     loading: false,
//     isShowButton: false,
//     error: false,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.searchText !== this.state.searchText ||
//       prevState.page !== this.state.page
//     ) {
//       try {
//         this.setState({ loading: true, isShowButton: true });
//         const response = await fetchPictures(
//           this.state.searchText,
//           this.state.page
//         );
//         this.setState({
//           pictures:
//             prevState.searchText !== this.state.searchText
//               ? response.hits
//               : [...prevState.pictures, ...response.hits],
//         });
//         if (response.total === 0) {
//           throw new Error('Sorry, no images found');
//         }
//         if (response.totalHits <= this.state.page * perPage) {
//           this.setState({
//             isShowButton: false,
//           });
//         }
//       } catch (error) {
//         console.log(error);

//         this.setState({ error: error.message });
//       } finally {
//         this.setState({ loading: false });
//       }
//     }
//   }
//   onError = () => {
//     this.setState({ error: true, loading: false, isShowButton: false });
//   };

//   handleSearch = searchText => {
//     const initialStateParams = {
//       page: 1,
//       pictures: [],
//       error: '',
//       isShowButton: false,
//     };

//     if (searchText === this.state.searchText) {
//       toast.error(
//         'The same request was detected. Please change you search query.'
//       );
//       return;
//     }

//     this.setState({ ...initialStateParams, searchText });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => {
//       return { page: prevState.page + 1 };
//     });
//   };

//   render() {
//     const { error, pictures, loading, isShowButton } = this.state;
//     return (
//       <>
//         <SearchBar handleSearch={this.handleSearch} />
//         {pictures.length > 0 && !error && <ImageGallery pictures={pictures} />}
//         {error && !loading && <Message>{error}</Message>}
//         {loading && <Loader />}
//         {pictures.length > 0 && !isShowButton && !loading && !error && (
//           <Message>You reached the end of search results.</Message>
//         )}
//         {pictures.length > 0 && isShowButton && !error && (
//           <Button onClick={this.handleLoadMore} />
//         )}

//         <ToastContainer />
//       </>
//     );
//   }
// }
