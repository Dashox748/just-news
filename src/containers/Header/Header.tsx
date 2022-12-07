import {useState,FormEvent} from "react";
import "./header.css"
import {Link, useNavigate} from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false)
    const [openSearch, setOpenSearch] = useState<boolean>(false)
    const [input, setInput] = useState<string>("")
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (input?.length !== 0 && openSearch) {
            navigate(`/search/${input}`);
            setInput("")
            return
        }
        setOpenSearch(!openSearch)
    }
    return (
            <div className="header__container">
                <div className="header__container-hamburger">
                    <button className="button-toggle-hamburger" onClick={() => {
                        setHamburgerToggle(!hamburgerToggle)}
                    }>
                        <svg viewBox="0 0 100 100" className="hamburger-menu-svg">
                            <rect className={hamburgerToggle ? "open top" : ""}
                                x="10" y="25"
                                width="80" height="10" rx="5"
                                fill="#FFFFFF" opacity="40%"
                                ></rect>
                            <rect className={hamburgerToggle ? "open middle" : ""}
                                x="10" y="45"
                                width="80" height="10" rx="5"
                                fill="#FFFFFF" opacity="40%"
                                ></rect>
                            <rect className={hamburgerToggle ? "open bottom" : ""}
                                x="10" y="65"
                                width="80" height="10" rx="5"
                                fill="#FFFFFF" opacity="40%"
                                ></rect>
                        </svg>
                    </button>
                    <ul className={`list-category ${hamburgerToggle ? "openHamburger" : "closeHamburger"}`}>
                        <Link to="/category/general" onClick={()=>setHamburgerToggle(false)}>
                        General
                    </Link>
                        <Link to="/category/business" onClick={()=>setHamburgerToggle(false)}>
                        Business

                    </Link>

                        <Link to="/category/sports" onClick={()=>setHamburgerToggle(false)}>
                        Sports
                    </Link>

                        <Link to="/category/technology" onClick={()=>setHamburgerToggle(false)}>
                        Technology
                    </Link>
                </ul>
            </div>

            <div className="header__container-logo">
                <div className="logo">JS</div>
                <span onClick={() => navigate("/")}>Just News</span>
            </div>

            <form className={`search-form ${openSearch ? "openSearch" : "closed"}`} onSubmit={handleSubmit}>
                <button style={{background: "transparent"}}>
                    <svg viewBox="0 0 100 100" width="26" height="26">
                        <circle cx="50" cy="50" r="30" fill="transparent" stroke="gray" strokeWidth="6">
                        </circle>
                        <line x1="70" y1="70" x2="100" y2="100" stroke="gray" strokeWidth="6"
                        >
                        </line>
                    </svg>
                </button>
                <input className={`search-input `} placeholder="Search"
                       onChange={(event) => setInput(event.target.value)} value={input}/>
            </form>

        </div>
    )
}


export default Header