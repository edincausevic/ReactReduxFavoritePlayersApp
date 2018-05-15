import { 
  GET_PLAYERS, 
  GET_MORE_PLAYERS, 
  SELECT_PLAYER,
  REMOVE_PLAYER,
  SHOW_MODAL,
  ADD_PLAYER } from '../actions/types';

const initialState = {
  allPlayers: [],
  players: [],
  addedPlayers: [],
  lastPlayerAdded: {},
  playerSelected: null,
  removePlayerID: null,
  numOfAllPlayers: 0,
  numOfPlayers: 0,
  listLimit: 5,
  listIncrement: 5,
}
 
export default function(state = initialState, action) { 

  switch(action.type) {

    case GET_PLAYERS:
      const allPlayers = [];
      for (let key in action.payload) {
        action.payload[key].id = key;
        allPlayers.push(action.payload[key]);
      }

      const players = allPlayers.filter((player, i) => {
        return (i + 1) <= state.listLimit;
      })
      
      return {
        ...state,
        allPlayers,
        players,
        playerSelected: allPlayers[0],
        numOfAllPlayers: allPlayers.length,
        numOfPlayers: allPlayers.length
      }
    
    case GET_MORE_PLAYERS:
      const newLimit = state.listLimit + state.listIncrement;
      const newPlayers = state.allPlayers.forEach((player, i) => {
        if (i < newLimit) {
          return player;
        }
      })
      
      if (state.players.length === 0) {
        return {
          ...state, 
          players: newPlayers, 
          listLimit: newLimit,
          playerSelected: newPlayers[0]
        }
      }
      return {
        ...state, 
        players: newPlayers, 
        listLimit: newLimit
      }

    case SELECT_PLAYER:
      return {
        ...state,
        playerSelected: action.payload
      }

    case SHOW_MODAL:       
      return {
        ...state,
        removePlayerID: action.payload.id
      }  

    case REMOVE_PLAYER:
      const newPlayersList = state.players.filter(player => {
        return player.id !== action.payload
      })
      const newAllPlayersList = state.allPlayers.filter(player => {
        return player.id !== action.payload
      })
      return {
        ...state,
        players: newPlayersList,
        playerSelected: newPlayersList[0],
        allPlayers: newAllPlayersList,
        numOfPlayers: state.numOfPlayers - 1
      }  
    
    case ADD_PLAYER:
      return {
        ...state,
        lastPlayerAdded: action.payload
      } 

    default:
      return state;
  }
}