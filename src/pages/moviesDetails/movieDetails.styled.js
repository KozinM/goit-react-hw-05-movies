import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  margin: 20px 20px;
  border-bottom: 2px solid;
`;
export const WrapperDetails = styled.div`
  padding: 10px;
  display: flex;
  gap: 30px;
`;

export const LinkBack = styled(Link)`
  display: inline-block;
  padding: 4px 8px;
  margin-left: 10px;
  border: 2px solid;
  border-radius: 6px;
  :hover,
  :focus {
    border-color: #2196f3;
  }
`;
