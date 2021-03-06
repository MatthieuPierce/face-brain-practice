import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: '',
      signInFailed: false
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
  onSubmitSignIn = () => {
    fetch('https://obscure-spire-27702.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          this.setState({signInFailed: true});
        }
      })
  }

  render () {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 shadow-4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main className="pa4 white-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address"
                onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password"
                onChange={this.onPasswordChange}/>
              </div>
            </fieldset>
            <div className="">
              <input 
                className="b ph3 pv2 input-reset ba b--grey white hover-bg-black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Sign in"
                onClick={this.onSubmitSignIn}
                />
            </div>
            <div className="lh-copy mt3">
              <p onClick={this.onSubmitSignIn} 
              className="f6 link white dim db">Register</p>
            </div>
            { this.state.signInFailed ? 
              <div className="red b">Sign in failed</div>
            : <React.Fragment></React.Fragment>}
          </div>
         </main>
      </article>
    )
  }
}


export default SignIn;