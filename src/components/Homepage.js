import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Github_logo from './download.png';
import axios from 'axios';

import UserRepos from "./Userrepos"
const Styles = (theme) => ({
    container: {
        position: 'absolute',
        left: '30%',[theme.breakpoints.down('xs')]: {left:"0%"
    }
        // top: '20%',
    },
    logo: {

        paddingLeft: '25%'

    },
    inputbox: {
        // paddingLeft:"4px",
        //  padding: theme.spacing(1, 1, 1, -3),
          // vertical padding + font size from searchIcon
        //    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        //   transition: theme.transitions.create('width'),
         
        margin: theme.spacing(1),
        width: '70ch',

     [theme.breakpoints.down('sm')]: {
        // paddingLeft:"4px",
        // margin: theme.spacing(1),
        width: '20ch',
    },
    [theme.breakpoints.only('md')]: {
        // paddingLeft:"4px",
        margin: theme.spacing(1),
        width: '50ch',
    },
    // [theme.breakpoints.up('lg')]: {
    //     // paddingLeft:"4px",
    //     margin: theme.spacing(1),
    //     width: '70ch',
    // },
},
    submitbtn: {

        margin: theme.spacing(1),
        padding: theme.spacing(2),

        width: '25ch',[theme.breakpoints.down('sm')]: {width:"15ch"
    }

    },
   
   
});

class BasicForm extends React.Component {
    constructor(props) {
        super()
        this.state = ({ Text: "", GithubProfile: "", UserRepos: "" })
        
    }
    handleInputChange = e => {
    
        const letterNumber = /^[0-9a-zA-Z]+$/;
        
        if((e.target.value === '' || letterNumber.test(e.target.value))) {
            this.setState({ Text: e.target.value })
        }

        console.log(this.state.Text)

    };
    handleSubmit = async e => {
        e.preventDefault();
        // console.log("twi")
        const response = await axios.get('https://api.github.com/search/users', {
            params: {
                q: this.state.Text,
            },

        });
        const resp = await axios.get(`https://api.github.com/users/${this.state.Text}/repos`);
        console.log(resp)
        this.setState({ GithubProfile: response.data.items, UserRepos: resp.data })

    }
    render() {
        const { classes } = this.props

        return (
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src={Github_logo} alt="logo" />
                </div>
                <br />

                <form noValidate autoComplete="off" >
                {/* <div className={classes.search}>
                <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
                    <TextField id="outlined-basic" className={classes.inputbox} label="Username" variant="outlined"
                        onChange={this.handleInputChange} value={this.state.Text} InputProps={{
                            endAdornment: (
                                <SearchIcon />
                                
                                  
                                
                            )
                          }}/>
                    <Button variant="contained" color="primary" className={classes.submitbtn}
                        onClick={this.handleSubmit} disabled={!this.state.Text} >
                        Submit
      </Button>
      {/* </div> */}
                </form>
                {this.state.GithubProfile !== '' && (
                    <UserRepos {...this.state} />)}
            </div>
        );
    }
}
export default (withStyles)(Styles)(BasicForm);
