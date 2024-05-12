import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from '@clerk/clerk-react'
import "../../App.css";
export const Auth = () => {
  return <div className="sign-in-container">
    <h1>Welcome to Eric's Finance Tracker!</h1>
    <SignedOut>
      <SignUpButton mode="modal" />
      <SignInButton mode="modal" />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
}

