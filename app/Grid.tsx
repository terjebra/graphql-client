import * as React from "react";

import styled from "styled-components";

export const PageGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 150px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 150px;
    grid-template-areas:
      "content  sidebar"
      "content  sidebar";
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "content"
      "sidebar";
  }
`;

export const Content = styled.div`
  grid-area: content;
`;

export const SideBar = styled.div`
  grid-area: sidebar;
`;
