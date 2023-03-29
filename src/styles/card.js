import styled from 'styled-components';

export const ListItem = styled.li`
  background-color: ${({ grade }) => {
    switch (grade) {
      case 1:
        return '#70c1b3';
      case 2:
        return '#f6d55c';
      case 3:
        return '#f0b55c';
      case 4:
        return '#d13e3e';
      case 5:
        return '#871f78';
      default:
        return '#d1cece';
    }
  }};
`;