import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

export function Modal({ largeImageURL, tags, onClose }) {
  // static propTypes = {
  //   largeImageURL: PropTypes.string.isRequired,
  //   tags: PropTypes.string.isRequired,
  //   onClose: PropTypes.func.isRequired,
  // };

  useEffect(() => {
    const handlKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handlKeyDown);
    return () => {
      document.removeEventListener('keydown', handlKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalPortal = document.querySelector('#modal-root');

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <img src={largeImageURL} alt={tags} />
      </ModalWindow>
    </Overlay>,
    modalPortal
  );
}

// export class Modal extends Component {
//   static propTypes = {
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//     onClose: PropTypes.func.isRequired,
//   };

//   componentDidMount() {
//     document.addEventListener('keydown', this.handlKeyDown);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handlKeyDown);
//   }

//   handlKeyDown = e => {
//     if (e.key === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props;
//     const modalPortal = document.querySelector('#modal-root');

//     return createPortal(
//       <Overlay onClick={this.handleBackdropClick}>
//         <ModalWindow>
//           <img src={largeImageURL} alt={tags} />
//         </ModalWindow>
//       </Overlay>,
//       modalPortal
//     );
//   }
// }
