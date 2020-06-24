import styled from "styled-components";

export const CaretMenuItemContainer = styled.div`
  ul {
    display: none;
  }

  &.active {
    ul {
      display: block;
    }
  }
`;
