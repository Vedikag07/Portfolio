import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
  
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Vedikag07">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/vedika-goliwar-070672256/">LinkedIn</a></li>
            <li><a target='_blank' href="https://leetcode.com/u/Vedikag7/">Leetcode</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
