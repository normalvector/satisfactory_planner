import * as React from 'react'
import { Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'

function MainNavbar(): React.ReactElement {
    return (
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Satisfactory Planner</NavbarHeading>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
                <Button className={Classes.MINIMAL} icon="home" text="Home" />
                <Button className={Classes.MINIMAL} icon="document" text="Files" />
            </NavbarGroup>
        </Navbar>
    )
}

export default MainNavbar