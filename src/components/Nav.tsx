import React from 'react'
import Image from 'next/image'

function Nav() {
    const navItems = [
        { name: 'Dashboard', route: '/' },
        { name: 'Build', route: '/build' },
        { name: 'Validators', route: '/validators' },
        { name: 'Staking', route: '/staking' },
        { name: 'Bridge', route: '/bridge' }
    ]

    return (
        <div className="flex items-center justify-between p-4 ml-4">
            <div className='flex-1'>
                <Image
                    src="/nexis.svg"
                    width={120}
                    height={120}
                    alt="Nexis Network Logo"
                />
            </div>

            <div className="flex-1 flex justify-center space-x-8">
                {navItems.map((val) => (
                    <a 
                        key={val.name} 
                        href={val.route} 
                        className="text-lg font-medium hover:text-blue-600">
                        {val.name}
                    </a>
                ))}
            </div>

            <div className='flex-1 flex justify-end'>
                <button className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
                    Connect Wallet
                </button>
            </div>
        </div>
    )
}

export default Nav