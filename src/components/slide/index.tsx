import React from 'react'
import StyledSlide from './styled';

export default class Slide extends React.Component<any, any> {
    render() {
        return (
            <StyledSlide>{this.props.children}</StyledSlide>
        )
    }
}
