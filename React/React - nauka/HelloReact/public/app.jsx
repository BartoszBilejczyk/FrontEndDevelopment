var GreeterMessage = React.createClass({
  render () {
    var name = this.props.name;
    var message = this.props.message
    return (
      // jsx code
      <div>
        <h1>some {name}</h1>
        <p>{message}</p>
      </div>
    )
  }
})

var GreeterForm = React.createClass({
  onFormSubmit (e) {
    e.preventDefault()
    var name = this.refs.name.value

    if (name.length > 0) {
      this.refs.name.value = ''
      this.props.onNewName(name)

    }
  },
  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
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
  handleNewName (name) {
    this.setState({
      name: name
    })
    // setting state

  },
  // behaviour for my component
  render () {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>

      </div>
    );
  }
})

var firstName = 'Andrew'

ReactDOM.render(
  <Greeter name={firstName} message="Yoooo!"/>,
  document.getElementById('app')
);
