import React, { PureComponent } from 'react'
import StyledWrapper from './styled';

export default class Wrapper extends PureComponent<any, any> {
    render() {
        return (
            <StyledWrapper className="wrapper">
                {this.props.children}
            </StyledWrapper>
        )
    }
}