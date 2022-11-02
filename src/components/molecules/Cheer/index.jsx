import Burna from '../../atoms/images/Burna.png'
import Omah from '../../atoms/images/omah.png'
import Oxlade from '../../atoms/images/Oxlade.png'
import './Cheer.scss'

const Cheer = () => {
  const cheers = [
    {
      image: Burna
    },
    {
      image: Omah
    },
    {
      image: Oxlade
    },
    {
      image: Burna
    },
    {
      image: Omah
    },
    {
      image: Oxlade
    }
  ]
  return (
    <div className='cheer'>
      <section className='cheer-item'>
        <div className='cheer-border'></div>
        <div className='cheer-image'>
          <img src={Burna} alt='burna' />
        </div>
        <div className='cheer-border'></div>
      </section>
    </div>
  )
}

export default Cheer
