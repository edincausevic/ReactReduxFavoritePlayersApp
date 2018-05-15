import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { getPlayers, hideModal } from '../actions';

// hoc 
import NoWrap from '../hoc/noWrap';

// style components
import { Row } from '../styleComponents/Row';

// components
import Nav1 from '../components/Nav/Nav1';
import Gallry1 from '../components/Gallery/Gallery1';
import Backdrop from '../components/Backdrop/Backdrop';
import Modal1 from '../components/Modal/Modal1';


class Home extends Component {

  componentWillMount() { 
    this.props.getPlayers();
  }

  render() { 
    const { players, modal, hideModal } = this.props;

    return (
      <NoWrap>
        <Nav1 />
        <Row>
          <Gallry1 data={ players.allPlayers }/>
        </Row>
        <Backdrop toggle={ modal.blackBackVisibility }
                  hideBackdrop={ hideModal }/> 
        <Modal1 toggle={ modal.modalVisibility }
                playerName={ modal.playerName }
                hide={ modal.hideModal }/>
      </NoWrap>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.playersData,
  modal: state.modal
})

export default connect(mapStateToProps, { getPlayers, hideModal })(Home);