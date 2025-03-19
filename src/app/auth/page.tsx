"use client";

import Github from '@/components/icons/Github';
import Google from '@/components/icons/Google';
import React from 'react'

function page() {
  return (
    <main className='flex flex-col justify-center items-center'>
      Signin / Signup
      <section className='flex gap-2'>
        <button className='flex gap-2'>
          <Github /> Github
        </button>
        <button className='flex gap-2'>
          <Google /> Google
        </button>
      </section>
    </main>
  )
}

export default page
