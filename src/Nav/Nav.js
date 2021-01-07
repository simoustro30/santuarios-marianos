import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Nav.css'
class Nav extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className= 'nav-items'>
                <h1 className='nav-logo'><i className='fab fa-react logo__left'></i>Santuarios Marianos <i className='fab fa-react logo__right'></i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className= {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key= {index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }

}
export default Nav