import * as React from 'react'
import { Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'
import { FaGithub } from 'react-icons/fa'

function openGithub() {
    window.open("https://github.com/normalvector/satisfactory_planner")
}
function MainNavbar(): React.ReactElement {
    return (
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Satisfactory Planner</NavbarHeading>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
                <Button className={Classes.MINIMAL} onClick={openGithub}>
                    <FaGithub size={15} /> Github
                </Button>
            </NavbarGroup>
        </Navbar>
    )
}

export default MainNavbar