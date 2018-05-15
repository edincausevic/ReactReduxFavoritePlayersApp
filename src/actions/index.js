import axios from 'axios';
import { 
  GET_PLAYERS, 
  GET_MORE_PLAYERS, 
  SELECT_PLAYER, 
  SHOW_MODAL,
  HIDE_MODAL,
  REMOVE_PLAYER,
  ADD_PLAYER,
  ADD_PLAYERS } from './types';

export const getPlayers = () => (dispatch) => {

  axios.get('https://favorite-players.firebaseio.com/players.json')
      .then(players => dispatch({
        type: GET_PLAYERS,
        payload: players.data
      }))
}

export const cahangeListLimit = () => {
  return {
    type: GET_MORE_PLAYERS
  }
}

export const selectPlayer = (activePlayer) => { 
  return {
    type: SELECT_PLAYER,
    payload: activePlayer
  }
}

export const showModal = (id, playerName) => {
  return {
    type: SHOW_MODAL,
    payload: {id: id, name: playerName}
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}

export const removePlayer = (id, numOfPlayers) => (dispatch) => { 
  axios.delete(`https://favorite-players.firebaseio.com/players/${id}.json`)
      .then(r => {
        dispatch({type: HIDE_MODAL}); 
        dispatch({type: REMOVE_PLAYER, payload: id}); 
      })
}

export const addPlayer = (newPlayer, callback) => {
  axios.post('https://favorite-players.firebaseio.com/players.json', newPlayer).then(r => {
    callback();
  })

  return {
    type: ADD_PLAYER,
    payload: newPlayer
  }
}

export const addMyPlayerListIfListIsEmpty = (players) => (dispatch) => {
  axios.post('https://favorite-players.firebaseio.com/players.json', players).then(r => r);

  return {
    type: ADD_PLAYERS
  }
}
