import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Nav.css';
import { Link } from 'react-router-dom';
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
                            <Link to= {item.url} style={{ textDecoration: 'none' }}>
                                <li key= {index}>
                                    <p className={item.cName}>
                                        {item.title}
                                    </p>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        )
    }

}
export default Nav