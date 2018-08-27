import React, { Component } from 'react'
import { Nav, NavUL, Collapse, NavButton, NavItem} from './bs-modules/NavBar'
export default class Header extends Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            collapse: true,
        }

        this.handleCollapse = this.handleCollapse.bind(this);
    
    }

  

    handleCollapse(e) {
        const collapse = this.state.collapse;
        if (collapse) {
            this.setState({ collapse: false })
            console.log(collapse);

        } else {
            this.setState({ collapse: true })
            console.log(collapse);
        }
    }


    render() {
        const showing = this.state.collapse
        return (
            <Nav>
               <NavButton onClick={this.handleCollapse}/>
                <Collapse showing={showing}>
                    <NavUL>
                        <NavItem link="#Portfolio" title="Portfolio"/>
                        <NavItem link="#Reviews" title="Reviews"/>
                        <NavItem link="#About" title="About"/>
                        <NavItem link="#Services" title="Services"/>
                        <NavItem link="#Contact" title="Contact"/>                       
                    </NavUL> 
                </Collapse>
            </Nav>
        )
    }
}
