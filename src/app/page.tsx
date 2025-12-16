import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      Home Page
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
    </div>
  )
}

export default HomePage