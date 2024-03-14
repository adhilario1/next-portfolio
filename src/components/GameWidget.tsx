import React, {  ReactElement } from 'react'
//import dynamic from 'next/dynamic'

/*
const ClientComponent = dynamic(() => import('./ClientComponent'), {
    loading: () => <p>Loading...</p>
});
*/

interface Props {
    className?: string
    game_id: string
    children?: ReactElement
}

function GameWidget({className, game_id, children}: Props) {
    console.log(className?.toString());
    return (
        <a className="widget" href={`/games/${game_id}`}>
            {children}
        </a>
    )
}

export default GameWidget
