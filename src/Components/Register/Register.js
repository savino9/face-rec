import React from 'react';

class Register extends React.Component {
	constructor (props) {
		super();
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}
	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}
	onSubmitSignIn = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then( response => response.json())
		.then( user => {
			if (user) {
				this.props.loadUser(user)
				this.props.onRouteChange('home');
			}
		})
	}
	render(){
		return (
			<main className="pa4 black-80">
				<article className="br3 ba shadow-5 b--white mv4 w-100 w-50-m w-25-l mw6 center">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0 white">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
			        <input 
			        	onChange={this.onNameChange}
			        	className="pa2 input-reset b--white ba bg-transparent hover-bg-black hover-white w-100 white" 
			        	type="text" name="name"  
			        	id="name" 
			        />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
			        <input 
			        	onChange={this.onEmailChange}
			        	className="pa2 input-reset b--white ba bg-transparent hover-bg-black hover-white w-100 white" 
			        	type="email" 
			        	name="email-address" 
			        	id="email-address" 
			        />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
			        <input 
			        onChange={this.onPasswordChange}
			        className="b pa2 input-reset b--white ba bg-transparent hover-bg-black hover-white w-100 white" 
			        type="password" 
			        name="password" 
			        id="password" 
			      />
			      </div>
			    </fieldset>
			    <div className="mt3 mb3">
			      <input 
			      	onClick={this.onSubmitSignIn} 
			      	className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
			      	type="submit" 
			      	value="Register" 
			      />
			    </div>
			  </div>
			  </article>
			</main>
		);
	}
}

export default Register;