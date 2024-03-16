import useSWR from 'swr'

import Body from '@/components/Body'
import { ReactNode } from 'react'

interface Props {
    children? : ReactNode
}
export default function Layout({children}: Props) {
    const {data, error } = useSWR('/api/navifation', fetch)

    if (error) {
        return (
            <Body>
                <div className='content'>
                    Failed to load!
                </div>
            </Body>
        )
    }

    if (!data) {
        return (
            <Body>
                <div className='content'>
                    Loading...
                </div>
            </Body>
        )
    }

    return(
        <main>
            {children}
        </ main>
    )
}