import './style.css'

export function Game({ name, url, image, category }) {
  return (
    <a
      className='game-container'
      href={url}
      target='_blank'
    >
      <img src={image} className='game-image' />
      <p className='game-title'>
        {name}
      </p>
      <p className='game-category'>
        {category}
      </p>
    </a>
  )
}

Game.defaultProps = {
  name: 'teste',
  url: 'https://www.google.com',
  image: null,
}