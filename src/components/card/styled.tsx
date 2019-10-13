import { styled } from 'theme';
import { Card } from 'semantic-ui-react';

export const StyledCard = styled(Card) <{
    width?: string;
    height?: string;
    background: string;
}> `&&& {
        transition: transform 1s;
        width: ${({ width }) => width || '90%'};
        height:${({ height }) => height || '70%'};
        background-color: ${({ background, theme }) => background || theme.color.light};
        transform: ${ ({ x, y }) => `rotateX(${x || '0deg'}) rotateY(${y || '0deg'})`};
    }`;