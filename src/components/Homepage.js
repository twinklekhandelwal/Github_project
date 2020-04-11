import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Github_logo from './download.png';
import axios from 'axios';
import UserRepos from "./Userrepos"
const Styles = (theme) => ({
    root: {

        margin: theme.spacing(1),
        width: '70ch',

    },
    Submitbtn: {

        margin: theme.spacing(1),
        padding: theme.spacing(2),

        width: '25ch',

    },
    maindiv: {
        position: 'absolute',
        left: '30%',
        top: '30%',
    },
    logo: {
        // position: 'absolute', 
        paddingLeft: '25%'

    },
    Button: {
        "&:disabled": {
            backgroundColor: "red"
        }
    }
});

class BasicTextFields extends React.Component {
    constructor(props) {
        super()
        this.state = ({ text: "" })
    }
    handleInputChange = e => {
        const re = /^[0-9\b]+$/;
        const regex = /[A-Za-z]/;
      if ((e.target.value === '' || re.test(e.target.value)) || regex.test(e.target.value)) {
         this.setState({text: e.target.value})
      
   
    }
    
    };
    handleSubmit = async e => {
        e.preventDefault();
        console.log("twi")
        const response = await axios.get('https://api.github.com/search/users', {
            params: {
                q: this.state.text,
            },
            
        });
        this.setState({GithubProfile: response.data.items})
        
    }
    render() {
        const { classes } = this.props

        return (
            <div className={classes.maindiv}>
                <div className={classes.logo}>
                    <img src={Github_logo} alt="logo" />
                </div>
                <br />
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>

                    <TextField id="outlined-basic" className={classes.root} label="Username" variant="outlined"
                     onChange={this.handleInputChange} value={this.state.text} />
                    <Button variant="contained" color="primary" className={classes.Submitbtn}
                        onClick={this.handleSubmit} disabled={!this.state.text}>
                        Submit
      </Button>
                </form>
                {this.state.GithubProfile !== '' && (
					<UserRepos {...this.state} />)}
            </div>
        );
    }
}
export default (withStyles)(Styles)(BasicTextFields);
