'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from '@/components/ui/select'


export default function Navbar() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <nav className='container mx-auto py-[18px] flex justify-between items-center'>
      <div>
        <Link href=''>BASIS</Link>
      </div>
      {isDesktop ? (
        <div className='flex justify-between items-center gap-[10rem]'>
          <ul className='flex justify-between items-center gap-8'>
            <li>
              <Link href=''>About</Link>
            </li>
            <li>
              <Link href=''>Reviews</Link>
            </li>
            <li>
              <Link href=''>How it Works</Link>
            </li>
            <li>
              <Link href=''>Support</Link>
            </li>
            <li>
              <Select>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='LNG' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='apple'>ENG</SelectItem>
                    <SelectItem value='apple'>SPN</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </li>
          </ul>
            <Link href='' className='bg-[#3661eb] text-white py-4 px-8 rounded-xl'>
              Sign Up
            </Link>
        </div>
      ) : (
        <div>
          <Drawer>
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>Some Content</DrawerContent>
          </Drawer>
        </div>
      )}
    </nav>
  )
}
