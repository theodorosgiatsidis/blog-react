import React from "react";
import "./sidebar.css"

function Sidebar(){
    return (
        <div className = "sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://s.hs-data.com/gfx/person/l/172166.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum similique omnis reiciendis</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList"></ul>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Politics</li>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-facebook"></i>
                        <i className="sidebarIcon fab fa-twitter"></i>
                        <i className="sidebarIcon fab fa-pinterest"></i>
                        <i className="sidebarIcon fab fa-instagram"></i>
                    </div>
            </div>
        </div>

    )
}
export default Sidebar