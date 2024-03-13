import React from 'react'
import { Game } from '../../models/Game'

interface Props {
    breakpoint?: number;
    game?: Game;
}
function GamePage({breakpoint, game }: Props ) {
  var loadGame : Game
  if (!game) {
    
  }
  return (
    <div>
    </div>
  )
}

export default GamePage
