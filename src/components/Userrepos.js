import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
 import CardContent from '@material-ui/core/CardContent';
 import Card from '@material-ui/core/Card';
 import { withStyles } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import Buttons from "./button"
const Styles = (theme) => ({
    userprofile: {
       
         width: '300px',
         top:"30%",
         
    },
    viewbtn: {

        fontSize:"18px",
         padding: theme.spacing(1),
        //  position: 'absolute',
       
       backgroundColor:"#eff3f6",

        width: '30ch',
       

    },
    root:{
        height:500
    },
    username:{
       
        color: '#666' ,
        fontSize:"22px"
    },
    viewlink:{
        textDecoration:"none",
        
    },
   
  });
  
  
  class GithubRepo extends React.Component   {
    constructor(props) {
        super(props);
        
        this.state = { isOpen: false }
        
      }
      
      
      toggle=(e)=> {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
      }

    render(){  
        const { classes } = this.props
        const {GithubProfile,UserRepos }=this.props;
console.log(GithubProfile) 
 return(
     <div >
    {GithubProfile.map(profile => (
        // <Card style={{ width: '260px', marginLeft: '200px', cursor: 'pointer' }}>
            // <CardContent>
            <div className={classes.root}>
                <img  alt="thumbnail" src={profile.avatar_url} className={classes.userprofile}/>
                <p className={classes.username}>{profile.login}</p> 
  
                {/* <br/> */}
                <a href={profile.html_url} className={classes.viewlink}>
                    <Button
                        variant="contained"
                        className={classes.viewbtn}>
                        view
                    </Button>
                </a>
                              {/* <hr />
                <br />
                <hr /> */}
                </div>
                /* <span style={{ backgroundColor: '#5bc0de', padding: '3px 5px 3px 5px', fontsize: '0px' }}>
                    {public_repo.public_repos}Public Repo
                </span>
                <span style={{ backgroundColor: '#0275d8', padding: '3px 5px 3px 5px' }}>
                    {public_repo.public_gists}Public_Gists
                </span>
                <br />
                <br />
                <span style={{ backgroundColor: '#d9534f', padding: '3px 15px 5px 15px', fontsize: '0px' }}>
                    {public_repo.followers}Followers
                </span>
                <span style={{ backgroundColor: '#373a3c', padding: '3px 15px 5px 15px' }}>
                    {public_repo.following}Following
                </span> */
                
            // </CardContent>
        // </Card>
        
        ))}
        <div style={{ marginLeft: '450px', display: 'inline-block', marginTop: '-400px' }}>
					{UserRepos.map(profile => (
						<Card style={{ width: '425px', display: 'inline-block', marginLeft: '50px' }}>
							<CardContent>
								<Typography color="textSecondary" gutterBottom>
									<a
										href={profile.html_url}
										style={{ fontSize: '15px', textDecoration: 'none', display: 'table-cell' }}
										target="_blank"
										rel="noopener noreferrer">
										{profile.name}
									 </a>
									{/* <p>
										<a
											href={profile.html_url}
											style={{
												fontSize: '13px',
												lineHeight: '0',
												textDecoration: 'none',
												color: 'black',
											}}
											target="_blank"
											rel="noopener noreferrer">
											{profile.full_name}
										</a>
									</p> */} 
									<p style={{ fontSize: '13px' }}>{profile.description}</p>
									<p style={{ fontSize: '15px', display: 'inline-block' }}>{profile.language}</p>
									{/* <span
										style={{
											backgroundColor: '#0275d8',
											marginLeft: '100px',
											padding: '3px 10px 3px 10px',
										}}>
										{profile.forks_count}Fork
									</span>
									<span style={{ backgroundColor: '#d9534f', padding: '3px 10px 3px 10px' }}>
										{profile.watchers_count}watchers
									</span>
									<span style={{ backgroundColor: '#4CAF50 ', padding: '3px 10px 3px 10px' }}>
										{profile.stargazers_count}star
									</span>
									<p>{profile.created_at}</p> */}
                                    <Buttons 
                                   
          name={this.state.isOpen ? "Unstar" : "Star"}  
          toggle={this.toggle}
        />
								</Typography>
							</CardContent>
						</Card>
					))}
				</div>
        </div>
 )    
}    
}  
export default (withStyles)(Styles)(GithubRepo);