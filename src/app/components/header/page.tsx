import Link from "next/link"
import css from "./page.module.css"


export default function Header(){
    return(
        <div className={css.header} >
           
        <h2>About<span>Me.</span></h2>
        <ul className={css.section}>
            <Link href="/">
            <li>Home</li>
            </Link>
          <Link  href="#abouts"> 
            <li>About</li>
            </Link>
            <Link href="#skills">
            <li>Skills</li>
            </Link>
            <Link href="#contact">
            <li>Contact</li>
            </Link>
        </ul>
       
    </div>
    )
}