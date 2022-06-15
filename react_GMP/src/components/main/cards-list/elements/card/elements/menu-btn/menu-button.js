import {Menu} from "../menu/menu";
import React, {useState} from "react";

export const MenuButton = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <React.Fragment>
            <div className="menu">
                {!showMenu &&
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"
                         onClick={() => setShowMenu(true)}>
                        <g filter="url(#filter0_d_0_213)">
                            <circle cx="22" cy="22" r="18" fill="#2A202D"/>
                        </g>
                        <circle cx="22" cy="15" r="2" fill="white"/>
                        <circle cx="22" cy="22.5" r="2" fill="white"/>
                        <circle cx="22" cy="30" r="2" fill="white"/>
                        <defs>
                            <filter id="filter0_d_0_213" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                               result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196596 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_213"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_213"
                                         result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                }
                {showMenu && <Menu closeMenu={setShowMenu} showEditModal={props.showEditModal} showDeleteModal={props.showDeleteModal}/>}
            </div>
        </React.Fragment>
    )

}
