function Image(props) {
  return (
    <div className='image-wrapper'>
      <div className='image-container'>
        <img className='image' alt={props.title} src={props.url} />
      </div>
    </div>)
}

export default Image