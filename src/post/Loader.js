import React from 'react';
import { css } from '@emotion/core';
// First way to import
//import { PacmanLoader } from 'react-spinners';
// Another way to import
//import ClipLoader from 'react-spinners/ClipLoader';
import CircularProgressWithLabel from '@material-ui/core/CircularProgress';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
export default class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    const {progress} = this.props
    return (
      <div className='sweet-loading'>
        {/* <PacmanLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.props.isActive}
        /> */}
        <CircularProgressWithLabel value={progress}
        css={override}
        sizeUnit={"px"}
        size={150}
        color={'#123abc'}
        loading={this.props.isActive} />
      </div> 
    )
  }
}