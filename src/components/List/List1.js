import React, { Component } from 'react';
import styled from 'styled-components';

// redux
import { connect } from 'react-redux';
import { cahangeListLimit, selectPlayer, showModal } from '../../actions';

// style 
import { Clr1 } from '../../style/variables';

// styleComponents
import { Title2h3 } from '../../styleComponents/Titles';

//components
import ListItem1 from './ListItem/ListItem1';
import Btn2 from '../Button/Btn2';
import PushContentDown from '../Push/PushContentDown';

const List1Style = styled.div`
  padding: 0px 10px 10px 10px;

  h3 {
    color: ${Clr1};
    margin-bottom: 20px;
  }
`

class List1 extends Component {

  displayPlayer = (player) => {
    this.props.selectPlayer(player)
  }
  
  renderPlayers = () => { 
    const { players, playerSelected } = this.props;
    console.log(this.props)
    if(players.length > 0) {
      
      return players.map(player => {

        return (
          <ListItem1 key={player.id}
                     image={player.img}
                     activePlayer={ playerSelected.id === player.id}
                     clicked={() => this.displayPlayer(player)}
                     removePlayerModal={ () => this.props.showModal(player.id, player.name)}
                     >{player.name}</ListItem1>)
      })
    }else {
      return <h2>List is empty!</h2>
    }
  }

  render() { 
    return (
      <List1Style>
        <Title2h3>Player List</Title2h3>
        {this.renderPlayers()}
        <Btn2 clicked={this.props.cahangeListLimit}
              toggle={ this.props.numOfAllPlayers <= this.props.listLimit}>Load More</Btn2>
        <PushContentDown/>
      </List1Style>
    );
  }
};

const mapStateToProps = (state) => ({
  players: state.playersData.players,
  numOfAllPlayers: state.playersData.numOfAllPlayers,
  playerSelected: state.playersData.playerSelected,
  listLimit: state.playersData.listLimit
})

export default connect(mapStateToProps, { cahangeListLimit, selectPlayer, showModal })(List1);

