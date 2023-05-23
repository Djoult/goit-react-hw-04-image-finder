import styled from '@emotion/styled';

export const Li = styled.li`
  /* flex-basis: calc((100% - 15px * (4 - 1)) / 4); */
  /* min-width: 300px; */
  /* height: 300px; */
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const Link = styled.a`
  display: flex;
  flex-direction: column;
  /* height: 300px; */
  overflow: hidden;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const GalleryImg = styled.img`
  width: 100%;
  /* height: 260px; */
  object-fit: cover;
  /* height: 75%; */
  height: 220px;
  object-position: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const InfoWrapper = styled.span`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 8px 15px;
`;

export const Info = styled.span`
  font-family: cursive;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: center;
`;
