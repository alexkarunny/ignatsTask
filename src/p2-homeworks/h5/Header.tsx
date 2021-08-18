import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div>
            <NavLink to={'/pre-junior'} className={s.item} activeClassName={s.activeItem}>pre-junior</NavLink>
            <NavLink to={'/junior'} className={s.item} activeClassName={s.activeItem}>junior</NavLink>
            <NavLink to={'/junior+'} className={s.item} activeClassName={s.activeItem}>junior+</NavLink>
        </div>
    )
}

export default Header
