import React from 'react'
import './styles.css'

export default function SidebarOption({Icon, title, number, selected}) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption__active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}
