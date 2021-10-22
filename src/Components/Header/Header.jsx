import React from "react";
import "./header.css"
function Header(){
    return (
        <div className = "header">
            <div className="headerTitles">
                <span><div className="headerTitleSm">React & Node</div></span>
                <span><div className="headerTitleLg">Blog</div></span>
            </div>
            <img className = "headerImg" src="https://www.wallpapersdsc.net/wp-content/uploads/2016/09/Big-Island-Hawaii-for-desktop.jpg" alt="" />
        </div>
    )
}
export default Header