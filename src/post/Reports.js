import React, { PureComponent, Fragment } from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Maker from './Maker'
import Loader from './Loader'
// import UserVerification from './userVerificationForm'
// import { message } from 'antd'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing()
  }
})

class post extends PureComponent {
  state = {
    formData:{
    category: '',
    categoryTypes: '',
    selectMaker: '',
    selectBox: '',
    title: '',
    description: '',
    price: '',
    img: [],
    exactLocation: '',
    location: {},
    nameOfUser: '',
    phone: '',
    latitude: '',
    longitude: '',
    Loading: false,
    opacity: 1,
    name: 'none',
    labelWidth: 0,
    },
    uploadPost: false,
  }
  selectMaker (selectMaker) {
    this.setState(state => {
      return {
        ...state,
        selectMaker
      }
    })
  }
  selectBox (selectBox) {
    this.setState(state => {
      return {
        ...state,
        selectBox
      }
    })
  }
  
  price (price) {
    this.setState(state => {
      return {
        ...state,
        price
      }
    })
  }
locationDetail(location){
this.setState(state=>{
  return{
    ...state,
    
  }
}

)

}
  

  UserInfo (nameOfUser, phone) {
    console.log('nameOfUser ', nameOfUser, 'phone ', phone)
    this.setState(state => {
      return {
        ...state,
        nameOfUser,
        phone
      }
    })
  }

uploadPost = async() =>{
this.setState({Loading:true , capcite:0.5})
}


  componentDidMount () {
  
  }
  componentDidUpdate () {
    console.log('state is ', this.state)
  }

  handleChangeSelectCategory = event => {
    //  this.props.addCategory({category:event.target.value})
    this.setState({ [event.target.name]: event.target.value })
  }
  handleChangeCategoryTypes = event => {
    this.setState(state => {
      return {
        ...state,
        categoryTypes: event.target.value
      }
    })
  }
  handleSubmit=()=>{
    this.setState({ uploadPost: true},()=>{
      setTimeout(()=> this.setState({uploadPost:false}),5000   );
    })
  }

  render () {
    const { classes } = this.props
    // check if select category then check state.category'
  const {uploadPost }=this.state


    const selectCategory = this.state.category ? (
      
      <FormControl  onSubmit={this.handleSubmit}  
      variant='filled' className={classes.formControl}>
      
        <InputLabel htmlFor='filled-Mobile-simple' />
        <Select
          value={this.state.categoryTypes}
          onChange={this.handleChangeCategoryTypes}
          input={<FilledInput name='Mobile' id='filled-simple'/>}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Tablets'}>Tablets</MenuItem>
          <MenuItem value={'Accesories'}>Mobile Accesories</MenuItem>
          <MenuItem value={'MobilePhones'}>Mobile Phones</MenuItem>
        </Select>
    
      
        <InputLabel htmlFor='filled-Garments-simple' />
        <Select
          value={this.state.categoryTypes}
          onChange={this.handleChangeCategoryTypes}
          input={<FilledInput name='age' id='filled-simple'/>}
        >
        
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Clothes'}>Men Clothes</MenuItem>
          <MenuItem value={'kid'}>Kid Clothes</MenuItem>
          <MenuItem value={'Ladies'}>Ladies Clothes</MenuItem>
        </Select>
      </FormControl>
    ) : (
      ''
    )

    // check if  category type is selected then check state.category
    const categoryTypes = this.state.categoryTypes ? (
      <Fragment>
        {' '}
        <Maker onchangeMaker={this.selectMaker.bind(this)} />
       
        {/* <UserVerification UserInfo={this.UserInfo.bind(this)} /> */}
       
        <div style={{ paddingBottom: 50, paddingTop: 50 }}>
          <Button
            variant='contained'
            color='default'
            className={classes.button}
            onClick={this.uploadPost}
          >
            {(uploadPost && 'your post is uploaded')||(!uploadPost && 'upload')}
            <CloudUploadIcon className={classes.rightIcon} />
          </Button>
        </div>
      </Fragment>
    ) : (
      ''
    )

    return (
      <Fragment>
        
        {!this.state.Loading ? (
          <div
            style={{
              flexDirection: 'column',
              paddingTop: 20,

              paddingBottom: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: this.state.opacity,
              width: '100%',
              height: '100%'
            }}
          >
         <h1>POST YOUR AD</h1>
            <div
              style={{
                height: 700,
                width: '50%',
                margin: 0
              }}
            >
             
              <form className={classes.root} autoComplete='off'>
                <div style={{borderRadius:"6px solid black",boder:"16px",width:"50px",display:"flex"}}>
                  <table>
                    <td>
                      <tr>
                        ssssssssssssssssssssssssssssssss
                      </tr>
                    </td>
                  </table>

                </div>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='Mobile'>Select Category</InputLabel>
                  <Select
                    value={this.state.category}
                    onChange={this.handleChangeSelectCategory}
                    inputProps={{
                      name: 'category',
                      id: 'Mobile-simple'
                    }}
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Mobile'}>MobilePhones</MenuItem>
                    <MenuItem value={'Garments'}>Garments</MenuItem>
                    <MenuItem value={'cousmatic'}>cousmatic</MenuItem>
  
                  </Select>
                 
                </FormControl>
                {selectCategory}
               
              </form>

              {categoryTypes}
             
            </div>
          </div>
        ) : (
          <div
            style={{ paddingTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <p> Please Wait....... </p>
            <Loader isActive={this.state.Loading} />
          </div>
        )}
      </Fragment>
    )
  }
}

export default withStyles(styles)(post)

