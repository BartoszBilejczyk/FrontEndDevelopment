var GreeterMessage = React.createClass({
  render () {
    return (
      // jsx code
      <div>
        <h1>some h1</h1>
        <p>some paragraht</p>
      </div>
    )
  }
})

var GreeterForm = React.createClass({
  render () {
    return (
      <div>
        <form>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    )
  }
})

var Greeter= React.createClass({
  getDefaultProps () {
    return {
      name: 'React',
      message: 'This is form a component'
    }
  },
  getInitialState () {
    return {
      name: this.props.name
    }
  },
  onButtonClick (e) {
    e.preventDefault();

    var nameRef = this.refs.name

    var name = nameRef.value
    nameRef.value = ''

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      })
    } else {
      console.log('try again')
    }
    // setting state

  },
  // behaviour for my component
  render () {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>

        <GreeterMessage/>
        <GreeterForm/>

      </div>
    );
  }
})

var firstName = 'Andrew'

ReactDOM.render(
  <Greeter name={firstName} message="Yoooo!"/>,
  document.getElementById('app')
);
