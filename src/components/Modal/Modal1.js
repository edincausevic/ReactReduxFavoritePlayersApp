import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// redux
import { connect } from 'react-redux';
import { hideModal, removePlayer, addMyPlayerListIfListIsEmpty } from '../../actions';

// style
import { Clr1, Clr1D } from '../../style/variables';

// components
import Btn3 from '../Button/Btn3';

const Modal1Style = styled.div`
  position: fixed;
  top: -50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: ${Clr1};
  z-index: 7;
  color: white;
  transition: all 0.5s cubic-bezier(0.42, 0, 0.06, 1.3);

  div {
    width: 100%;
    background-color: ${Clr1D};
    padding: 15px;
    box-sizing: border-box;
  }

  span {
    padding: 20px;
    display: block;
  }
`

const slideDown = { top: '50%', opacity: '1' };
const slideUp = { top: '-10%', opacity: '0' };

class Modal1 extends Component { 
  
  componentDidUpdate() {
    // if list becomes empty add my list back to db
    if(this.props.numOfPlayers === 0) {
      const list = this.props.myPlayersList;
      for ( let key in list ) {
        list[key].id = key;
        this.props.addMyPlayerListIfListIsEmpty(list[key]);
      }
    }
  }

  render() { 
  const { 
    toggle, 
    hideModal, 
    playerName, 
    removePlayer, 
    removePlayerID, 
    numOfPlayers } = this.props;
 
  return (
    <Modal1Style style={ toggle ? slideDown : slideUp }>
      <div>
        <strong>Remove { playerName }?</strong>
      </div>
      <span>Are you shure you want to remove { playerName }?</span>
      <div>
        <Btn3 danger clicked={ hideModal }>Cancle</Btn3>
        <Btn3 clicked={ () => removePlayer(removePlayerID, numOfPlayers) }>Remove</Btn3>
      </div>
    </Modal1Style>
  );
  }
};

Modal1.propTypes = {
  toggle: PropTypes.bool,
  hideModal: PropTypes.func,
  removePlayer: PropTypes.func,
  playerName: PropTypes.string,
  removePlayerID: PropTypes.string,
  numOfPlayers: PropTypes.number
};

const mapStateToProps = (state) => ({
  removePlayerID: state.playersData.removePlayerID,
  numOfPlayers: state.playersData.numOfPlayers,
  myPlayersList: state.myPlayersList.players
})

export default connect(mapStateToProps, { hideModal, removePlayer, addMyPlayerListIfListIsEmpty })(Modal1);