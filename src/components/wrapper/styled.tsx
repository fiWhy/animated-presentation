import { hex2Rgba } from 'lib/color';
import { styled } from 'theme';

export default styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => hex2Rgba(theme.color.light)};
    background: ${({ theme }) =>
        `linear-gradient(125deg, ${hex2Rgba(theme.color.light)} 0%, ${hex2Rgba(theme.color.lightBlue)} 50%, ${hex2Rgba(theme.color.darkBlue)} 100%)`
    };
`;