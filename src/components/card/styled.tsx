import { styled } from 'theme';
import { Card } from 'semantic-ui-react';

export default styled(Card) <{
    width?: string;
    height?: string;
    background: string;
}> `&&& {
        transition: transform 1s;
        box-shadow: 0px 0px 19px -5px rgba(0,0,0,0.75);
        width: ${({ width }) => width || '90%'};
        height:${({ height }) => height || '70%'};
        background-color: ${({ background, theme }) => background || theme.color.light};
        transform: ${ ({ x, y }) => `rotateX(${x || '0deg'}) rotateY(${y || '0deg'})`};
    }`;