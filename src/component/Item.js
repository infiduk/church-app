class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a href={this.props.url}>
        <img src={this.props.img} style={{ width: '30%', height: '30%' }} />
      </a>
      {this.props.title}
    )
  }
}