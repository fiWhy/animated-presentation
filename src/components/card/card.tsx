import React, { FunctionComponent } from 'react';
import { StyledCard } from './styled';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

type CardProps = {}

const CardFunction: FunctionComponent<CardProps> = () => (
    <StyledCard>
        <Container>
            Content
        </Container>
    </StyledCard>
)

export const Card = connect()(CardFunction);