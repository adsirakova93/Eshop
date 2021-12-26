import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapContainer">
                        <div className="header__input">
                            <SearchIcon/>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="header__languageDropdown">
                            <select>
                                <option value="English">English</option> 
                            </select>
                        </div>

                    <div className="header__logo">
                        <img src="https://play-lh.googleusercontent.com/sSeZFpu2INnle6VutctWDZuAcdTSeSDWnhDvUzjE__XOBgH4hzv4hhuOIiYmIRCzZ" alt="" />
                    </div>
            </div>
            
        </div>
    )
}

export default Header
