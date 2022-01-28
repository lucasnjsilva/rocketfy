import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: calc( 100% - 80px);
  background: rgba(216, 230, 180, 0.03);

  h1 {
    color: rgba(250, 250, 250, 0.09);
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, img, header {
      opacity: 0;
    }
  `}
`;
