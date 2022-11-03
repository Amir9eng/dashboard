import Burna from '../../atoms/images/Burna.png'
import Omah from '../../atoms/images/Kofee.png'
import Oxlade from '../../atoms/images/Oxlade.png'
import './Cheer.scss'

const Cheer = () => {
  const cheers = [
    {
      image: Burna,
      bg: 'linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)'
    },
    {
      image: Oxlade,
      bg: 'linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)'
    },
    {
      image: Omah,
      bg: 'linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)'
    },
    {
      image: Burna,
      bg: 'linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)'
    },
    {
      image: Oxlade,
      bg: 'linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)'
    },
    {
      image: Omah,
      bg: 'linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)'
    }
  ]
  return (
    <>
      {cheers.map(({ image, bg }, i) => (
        <div className='cheer' key={i}>
          <section className='cheer-item'>
            <div className='cheer-border' style={{ background: `${bg}` }}></div>
            <div className='cheer-image'>
              <img src={image} alt='burna' />
            </div>
            <div className='cheer-border' style={{ background: `${bg}` }}></div>
          </section>
        </div>
      ))}
    </>
  )
}

export default Cheer
