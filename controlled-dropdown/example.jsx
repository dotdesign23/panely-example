// Controlled dropdown example
class DropdownControlled extends React.Component {
  // Default states
  state = { isOpen: false }

  // Handle dropdown toggle event
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <Dropdown isOpen={this.state.isOpen} toggle={this.toggle} {...this.props}>
        <Dropdown.Toggle caret>Controlled</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
