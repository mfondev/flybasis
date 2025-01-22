import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup
} from '@/components/ui/select'


export default function FlightHeader() {
  return (
    <>
      <header>
        <div className='flex items-center '>
          <Select>
            <SelectTrigger className='w-[150px]'>
              <SelectValue defaultValue='Round Trip' placeholder='Round Trip' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='bg-white'>
                <SelectItem value='Return Trip'>Return Trip</SelectItem>
                <SelectItem value='One time Trip'>One time Trip</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-[150px]'>
              <SelectValue
                defaultValue='1 Pessenger'
                placeholder='1 Pessenger'
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='bg-white'>
                <SelectItem value='2 Pessengers'>2 Pessengers</SelectItem>
                <SelectItem value='3 Pessengers'>3 Pessengers</SelectItem>
                <SelectItem value='4 Pessengers'>4 Pessengers</SelectItem>
                <SelectItem value='5 Pessengers'>5 Pessengers</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-[150px]'>
              <SelectValue
                defaultValue='Business'
                placeholder='Business & First'
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='bg-white'>
                <SelectItem value='First'>First</SelectItem>
                <SelectItem value='Business'>Business</SelectItem>
                <SelectItem value='Business & First'>
                  Business & First
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <main className='flex items-center justify-betweens border border-[#ecedef]  rounded-[5px] container mx-auto '>
          <div className='border-r-[1px] border-[#ecedef] px-10'>
            <p className='text-[#a6abb8]'>From</p>
            <h5>
              Jakarta
              <span className='text-[#a6abb8]'>CGK</span>
            </h5>
          </div>
          <div className='border-r-[1px] border-[#ecedef] px-10'>
            <p className='text-[#a6abb8]'>To</p>
            <h5>
              Singapore
              <span className='text-[#a6abb8]'>SIN</span>
            </h5>
          </div>
          <div className='border-r-[1px] border-[#ecedef] px-10'>
            <p className='text-[#a6abb8]'>Departure Date</p>
            <h5>31/4/2024</h5>
          </div>
          <div className='border-r-[1px] border-[#ecedef] px-10'>
            <p className='text-[#a6abb8]'>Return Date</p>
            <h5>3/17/2024</h5>
          </div>
          <button className='bg-[#3661eb] text-white py-2 px-4 rounded-xl ml-10'>
            Search Flights
          </button>
        </main>
      </header>
    </>
  )
}
