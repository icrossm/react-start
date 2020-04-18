import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export const SignedOutMenu = (props) => {
    const {signIn,register} = props;
    return (
        <Menu.Item position="right">
        <Button basic inverted content="Login" onClick={signIn} />
        <Button basic inverted content="Register" onClick={register} style={{marginLeft: '0.5em'}} />
      </Menu.Item>
    )
}
