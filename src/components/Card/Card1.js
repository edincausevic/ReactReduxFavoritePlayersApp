import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// redux
import { connect } from 'react-redux';

// components
import Display1 from '../Display/Display1';
import Chips1 from '../Chips/Chips1';
import PushContentDown from '../Push/PushContentDown';

// hoc
import NoWrap from '../../hoc/noWrap';

const Card1Style = styled.div`
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;

  span {
    margin: 10px;
    display: inline-block;
  }
`


class Card1 extends Component {
  
  renderDisplay = () => {
    const { selectedPlayer } = this.props;

    if ( selectedPlayer ) {
      return <Display1 name={ selectedPlayer.name } 
                    offense={ selectedPlayer.offense } 
                    defense={ selectedPlayer.defense }
                    image={ selectedPlayer.img}/>
    }
  }

  renderAllChips = () => { 
    const { selectedPlayer } = this.props;
   
    if ( selectedPlayer ) {

      const skills = selectedPlayer.skills; 
      
      const newNameSkills = skills.map(player => {
        for (let key in player) {
          return { skillName: key, skill: player[key] }
        }
      })
      
      const chips = newNameSkills.map(skill => {
        return <Chips1 name={ skill.skillName } 
                       value={ skill.skill }
                       key={ skill.skillName }/>;
      })
 
      return chips;
    }
  }

  render() { 
    
    return (
      <NoWrap>
        <Card1Style>
          { this.renderDisplay() }
          <div>
            { this.renderAllChips() }
          </div>
        </Card1Style>
        <PushContentDown/>
      </NoWrap>
    );
  }
}

Card1.propType = {
  player: PropTypes.object
}

const mapStateToProps = (state) => ({
  selectedPlayer: state.playersData.playerSelected
})

export default connect(mapStateToProps)(Card1);