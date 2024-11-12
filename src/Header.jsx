import { SignupPage } from "./SignupPage"
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";


export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a> | <SignupPage /> | <LoginPage /> | <LogoutLink />
      </nav>
    </header>
  )
}