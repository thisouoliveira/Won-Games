import React from 'react';
import { PropTypes } from 'prop-types';

import Wrapper from './Wrapper';

function LeftMenuFooter({ version }) {
  return (
    <Wrapper>
      <div className="poweredBy">
        <a
          href={`https://reactavancado.com.br`}
          key="website"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Avançado
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
