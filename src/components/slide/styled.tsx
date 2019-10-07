import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

export default styled(Container)`
    &&& {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: ${({ theme }) => `${theme.margin} 0`};
    }
`;
