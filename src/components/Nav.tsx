import React from 'react'
import Image from 'next/image'

function Nav() {
    return (
        <div>
            <div className='p-4'>
                <Image
                    src="/nexis.svg"
                    width={120}
                    height={120}
                    alt="Picture of the author"
                />
            </div>
        </div>
    )
}

export default Nav