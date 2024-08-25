import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

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
                    <Link 
                        key={val.name} 
                        href={val.route} 
                        className="text-lg font-medium hover:text-blue-600">
                        {val.name}
                    </Link>
                ))}
            </div>

            <div className='flex-1 flex justify-end'>
                <button className="bg-[#C7FF02] px-4 py-2 rounded-lg text-black font-semibold hover:bg-[#d3fc3e]">
                    Connect Wallet
                </button>
            </div>
        </div>
    )
}

export default Nav