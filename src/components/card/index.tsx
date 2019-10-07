import React, { PureComponent } from 'react'
import StyledCard from './styled';
import { Container } from 'semantic-ui-react';

type CardProps = {}
type CardState = {
    x: number;
    y: number;
    width: number;
    height: number;
}

export default class Card extends PureComponent<CardProps, CardState> {
    state = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }

    getCursorPosition(x: number, y: number, target: HTMLDivElement) {
        const left = x - target.offsetLeft,
            top = y - target.offsetTop;

        return { left, top };
    }

    handleMouseMove(evt: MouseEvent) {
        const { left, top } = this.getCursorPosition(evt.pageX, evt.pageY, evt.target as HTMLDivElement);
        const { width, height } = this.state;
        this.setState({
            ...this.state,
            x: -(width / 2 - left),
            y: -(height / 2 - top),
        })
    }

    handleMouseEnter(evt: MouseEvent) {
        const target = evt.target as HTMLDivElement;
        this.setState({
            ...this.state,
            width: target.offsetWidth,
            height: target.offsetHeight,
        })
    }

    handleMouseLeave(evt: MouseEvent) {
        this.setState({
            ...this.state,
            x: 0,
            y: 0,
        })
    }

    render() {
        const { x, y } = this.state;
        return (
            <StyledCard onMouseEnter={(evt: MouseEvent) => this.handleMouseEnter(evt)}
                onMouseLeave={(evt: MouseEvent) => this.handleMouseLeave(evt)}
                onMouseMove={(evt: MouseEvent) => this.handleMouseMove(evt)}
                x={`${x * .01}deg`}
                y={`${y * .01}deg`}
                width="90%">
                <Container>
                    Content
                </Container>
            </StyledCard>
        )
    }
} 