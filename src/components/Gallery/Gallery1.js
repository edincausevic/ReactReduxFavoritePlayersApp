import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// style
import { breakSmall } from '../../style/variables';

// style components
import { ClearFix } from '../../styleComponents/ClearFix';
import { FloatLeft } from '../../styleComponents/FloatLeft';
import { FloatRight } from '../../styleComponents/FloatRight';

// components
import Card1 from '../Card/Card1';
import List1 from '../List/List1';


const Gallry1Style = styled.div`
  .left,
  .right { width: 50%; };

  @media (max-width: ${breakSmall}) {
    .left,
    .right { width: 100%; };
  }
`

class Gallry1 extends Component {

  render() { 

    return (
      <Gallry1Style>
        <ClearFix>
          <FloatLeft>
            <Card1/>
          </FloatLeft>
          <FloatRight>
            <List1/>
          </FloatRight>
        </ClearFix>
      </Gallry1Style>
    );
  }
}

Gallry1.propTypes = { data: PropTypes.array }

export default Gallry1;

