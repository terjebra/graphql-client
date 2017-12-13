import * as React from "react";

import styled from "styled-components";

const PageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(2, 100px auto 20%);
  grid-gap: 10px;
  border: 1px black;
`;

const Column = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
`;
export default PageGrid;
