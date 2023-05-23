import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  display: block;
  /* width: fit-content; */
  margin-left: auto;
  margin-right: auto;
  margin: 8px auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: #303f9f;
    color: #000000;
  }
`;
