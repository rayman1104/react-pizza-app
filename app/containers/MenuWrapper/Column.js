import styled from 'styled-components';

const Column = styled.div`
  flex: ${(props) => props.flex};
  margin: 1rem;
  &:first-child {
    margin-left: 0;
  }
`;

export default Column;
