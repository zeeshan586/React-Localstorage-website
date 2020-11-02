import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextFields from'./TextField';
import UploadImage from './uploadImages';


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

class Maker extends React.Component {
  state = {
    make: '',
    name: 'hai',
    labelWidth: 0,
    newColor: '',
    usedColor: ''
  }

  componentDidMount () {}

  handleChange = event => {
    this.props.onchangeMaker(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }
  onItemClick = event => {
    console.log('event is ', event)

    event === 'new'
      ? this.setState({ newColor: '#9e9e9e', usedColor: '' })
      : this.setState({ usedColor: '#9e9e9e', newColor: '' })
  }

  render () {
    const { classes } = this.props
    const mobileList = ['Nokia', 'Samsung', 'Motrola' , 'Others']

    const eachList = mobileList.map(eachList => (
      <MenuItem key={eachList} value={eachList}>
        {eachList}
      </MenuItem>
    ))
  const GarmentList =['J.','Gul Ahmed','khaadi']
  const achList = GarmentList.map(achList =>(
<MenuItem key={achList} value={achList}  > {achList}   </MenuItem>
  ))
    return (
      <div>
      <Fragment>
        <form className={classes.root} autoComplete='off'>
          <FormControl variant='filled' className={classes.formControl}>
            <InputLabel htmlFor='filled-age-simple'>Make</InputLabel>
            <Select
              value={this.state.make}
              onChange={this.handleChange}
              input={<FilledInput name='make' id='filled-age-simple' />}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {eachList}
             
            </Select>
          </FormControl>
          <FormControl variant='filled' className={classes.formControl}>
            <InputLabel htmlFor='filled-age-simple'>Make</InputLabel>
            <Select
              value={this.state.make}
              onChange={this.handleChange}
              input={<FilledInput name='make' id='filled-age-simple' />}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {achList}
             
            </Select>
          </FormControl>
        </form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 150,
            paddingLeft: 10,
            paddingTop: 10
          }}
        >
        <div
            onClick={() => this.onItemClick('new')}
            style={{
              border: 'solid',
              borderColor: '#9e9e9e',
              backgroundColor: this.state.newColor,
              height: 40,
              paddingTop: 8,
              width: '100px',
              flex: '0 1 calc(45% )',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            New
          </div>
          <div
            onClick={() => this.onItemClick('Used')}
            value={'Used'}
            style={{
              border: 'solid',
              borderColor: '#9e9e9e',
              backgroundColor: this.state.usedColor,
              paddingTop: 8,
              height: 40,
              width: '100px',
              flex: '0 1 calc(45% )',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            Used
          </div>
          
          </div>
     
      
       
        </Fragment>
       
    <TextFields/>
    <UploadImage  />
      </div>
        
    
    )
  }
}
Maker.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Maker)
