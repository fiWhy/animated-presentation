import React, { PureComponent } from 'react'
import StyledWrapper from './styled';
import { connect } from 'react-redux';

class Wrapper extends PureComponent<any, any> {
    render() {
        return (
            <StyledWrapper className="wrapper">
                {this.props.children}
            </StyledWrapper>
        )
    }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);