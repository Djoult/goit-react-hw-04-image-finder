import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineCloudDownload,
  AiOutlineSearch,
} from 'react-icons/ai';

import {
  Li,
  GalleryImg,
  Info,
  InfoWrapper,
  Link,
} from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export function ImageGalleryItem({ el }) {
  const [isShowModal, setIsShowModal] = useState(false);

  // const handleModalOpen = () => {
  //   setIsShowModal(true);
  // };

  // const handleModalClose = () => {
  //   setIsShowModal(false);
  // };

  return (
    <>
      <Li className="list-group-item">
        <Link>
          <GalleryImg
            src={el.webformatURL}
            alt={el.tags}
            loading="lazy"
            onClick={() => setIsShowModal(true)}
          />
          <InfoWrapper className="info">
            <Info className="info-item">
              <AiOutlineLike />
              {el.likes}
            </Info>
            <Info className="info-item">
              <AiOutlineSearch />
              {el.views}
            </Info>
            <Info className="info-item">
              <AiOutlineComment />
              {el.comments}
            </Info>
            <Info className="info-item">
              <AiOutlineCloudDownload />
              {el.downloads}
            </Info>
          </InfoWrapper>
        </Link>
      </Li>
      {isShowModal && (
        <Modal
          largeImageURL={el.largeImageURL}
          tags={el.tags}
          onClose={() => setIsShowModal(false)}
        />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  el: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;

// export class ImageGalleryItem extends Component {
//   state = {
//     isShowModal: false,
//   };
//   static propTypes = {
//     el: PropTypes.shape({
//       webformatURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       likes: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       comments: PropTypes.number.isRequired,
//       downloads: PropTypes.number.isRequired,
//     }).isRequired,
//   };

//   handleModalOpen = () => {
//     this.setState({ isShowModal: true });
//   };

//   handleModalClose = () => {
//     this.setState({ isShowModal: false });
//   };
//   render() {
//     const el = this.props.el;

//     return (
//       <>
//         <Li className="list-group-item">
//           <Link>
//             <GalleryImg
//               src={el.webformatURL}
//               alt={el.tags}
//               loading="lazy"
//               onClick={this.handleModalOpen}
//             />
//             <InfoWrapper className="info">
//               <Info className="info-item">
//                 <AiOutlineLike />
//                 {el.likes}
//               </Info>
//               <Info className="info-item">
//                 <AiOutlineSearch />
//                 {el.views}
//               </Info>
//               <Info className="info-item">
//                 <AiOutlineComment />
//                 {el.comments}
//               </Info>
//               <Info className="info-item">
//                 <AiOutlineCloudDownload />
//                 {el.downloads}
//               </Info>
//             </InfoWrapper>
//           </Link>
//         </Li>
//         {this.state.isShowModal && (
//           <Modal
//             largeImageURL={el.largeImageURL}
//             tags={el.tags}
//             onClose={this.handleModalClose}
//           />
//         )}
//       </>
//     );
//   }
// }

// export default ImageGalleryItem;
