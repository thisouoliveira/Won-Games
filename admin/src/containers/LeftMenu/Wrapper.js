import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
${({theme}) => css`
  position: fixed;
  float: left;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${props => props.theme.main.sizes.leftMenu.width};
  background: ${props => props.theme.main.colors.won.blueLight};

  /* scrollbar overrides */
  * {
    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-track:hover {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.main.colors.leftMenu['title-color']};
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: ${theme.main.colors.leftMenu['link-color']};
    }

    /* firefox */
    scrollbar-color: ${theme.main.colors.leftMenu['title-color']} transparent;
  }

 `}
`;

export default Wrapper;
