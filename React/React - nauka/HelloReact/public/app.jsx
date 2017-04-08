var Greeter= React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is form a component'
    }
  },
  // behaviour for my component
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
})

var firstName = 'Andrew'

ReactDOM.render(
  <Greeter name={firstName} message="Siemano"/>,
  document.getElementById('app')
);
