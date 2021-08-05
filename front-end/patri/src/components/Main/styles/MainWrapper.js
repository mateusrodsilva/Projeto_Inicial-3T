import styled from 'styled-components';

export const MainWrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 10vh 90vh;
  grid-template-areas: 'header header' 'aside section';

  header {
    grid-area: header;
  }
  aside {
    grid-area: aside;
  }
  section {
    grid-area: section;
  }
`;
