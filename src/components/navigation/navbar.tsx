'use client'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <>
      <div>
        <Link href=''></Link>
      </div>
      {isDesktop ? (
        <div>
          <ul>
            <li><Link href=''>About</Link></li>
            <li><Link href=''>Reviews</Link></li>
            <li><Link href=''>How it Works</Link></li>
            <li><Link href=''>Support</Link></li>
            <li><Link href=''>ENG</Link></li>
          </ul>
          <div>
            <Link href=''>Sign Up</Link>
          </div>
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
    </>
  )
}
