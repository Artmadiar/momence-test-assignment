import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 200px;
  
  list-style-type: none;
`;

export const Left = styled.span`
  flex-basis: 85px;
  text-align: right;
`;

export const Right = styled.span`
  flex-basis: 55px;
  text-align: right;
`;
