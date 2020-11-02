import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
})

class TextFields extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
    currency: 'EUR'
  }

  titleHandleChange = name => event => {
    
    this.setState({ title: event.target.value })
  }
  DescriptionhandleChange = name => event => {
    // this.props.addDesc(event.target.value)
    this.setState({ Description : event.target.value })
  }
  SetPricehandleChange = name => event => {
    //this.props.addPrice(event.target.value)
  this.setState({ price: event.target.value })
  }

  render () {
    const { classes } = this.props

    return (
      <form className={classes.container} noValidate autoComplete='off'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            id='outlined-full-width'
            label='Ad title'
            style={{ margin: 8, width: 400 }}
            placeholder='Ad title'
            helperText='Mention the key features of your item (e.g. brand, model, age, type)'
            fullWidth
            onChange={this.titleHandleChange()}
            margin='normal'
            variant='outlined'
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id='outlined-multiline-static'
            label='Add Description'
            style={{ margin: 8, width: 400 }}
            multiline
            rows='4'
            onChange={this.DescriptionhandleChange()}
            className={classes.textField}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-number'
            label='Set Price'
        //    value={this.state.price}
            style={{ margin: 8, width: 400 }}
            onChange={this.SetPricehandleChange()}
            type='number'
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin='normal'
            variant='outlined'
          />
        </div>
      </form>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFields)
