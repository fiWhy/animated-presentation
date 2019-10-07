import React from 'react';
import { StyledToolBar, LeftPart, RightPart, Button } from './styled';


export default class ToolBar extends React.Component<any, any> {
    render() {
        return <StyledToolBar>
            <LeftPart>
                <Button type="close" />
                <Button type="minimize" />
                <Button type="zoom" />
            </LeftPart>
            <RightPart>
                {this.props.children}
            </RightPart>
        </StyledToolBar>
    }
}