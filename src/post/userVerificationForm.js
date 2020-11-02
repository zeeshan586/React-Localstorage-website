// import React, { PureComponent, Fragment } from 'react'

// import MuiPhoneNumber from 'material-ui-phone-number'


// import TextField from '@material-ui/core/TextField'

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   textField: {
//     marginLeft: theme.spacing(),
//     marginRight: theme.spacing()
//   },
//   dense: {
//     marginTop: 16
//   },
//   menu: {
//     width: 200
//   }
// })

// class UserVerification extends PureComponent {
//   state = {
//     name: this.props.userName ? this.props.userName : '',
//     phone: this.props.phone ? this.props.phone : '',
//     age: '',
//     multiline: 'Controlled',
//     currency: 'EUR'
//   }

//   handleChange = name => event => {
//     this.setState({
//       name: event.target.value
//     })
//   }
//   handleOnChangeNumb = value => event => {
//       this.setState({
//         phone: event
//       })
//   }
//   componentDidMount () {
//     this.props.UserInfo(this.state.name, this.state.phone)
//   }
//   componentDidUpdate () {
//     this.props.UserInfo(this.state.name, this.state.phone)
//   }

//   handleOnChange = event => {}

//   render () {
    

//     return (
//       <Fragment>
//         <div style={{ paddingBottom: 10, paddingTop: 40 }}>
//           REVIEW YOUR DETAILS {<br />}
//           <form  noValidate autoComplete='off'>
//             <TextField
//               id='outlined-name'
//               label='Name'
          
//               value={this.state.name}
//               onChange={this.handleChange('name')}
//               margin='normal'
//               variant='outlined'
//             />
//           </form>
//           <MuiPhoneNumber
//             defaultCountry={'pk'}
//             onChange={this.handleOnChangeNumb('num')}
//             name='Enter Phone Num'
//             value={this.state.phone}
//           >
//             {' '}
//             86887686
//           </MuiPhoneNumber>
//         </div>
//       </Fragment>
//     )
//   }
// }



// export default UserVerification;
