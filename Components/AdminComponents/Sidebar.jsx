import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black'>
                <h3 className='font-medium'>Admin Panel</h3>
               
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href='/admin/addBlog' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.add_icon} alt='' width={28} /><p className='hidden sm:inline-block'>Add blogs</p>
                    </Link>
                    <Link href='/admin/blogList' className=' mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.blog_icon} alt='' width={28} /><p className='hidden sm:inline-block'>Blog lists</p>
                    </Link>
                    <Link href='/admin/subscriptions' className=' mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.email_icon} alt='' width={28} /><p className='hidden sm:inline-block'>Subscriptions</p>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Sidebar
