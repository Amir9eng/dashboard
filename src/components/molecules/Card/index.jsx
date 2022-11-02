import React from 'react'
import './Card.scss'
import Burna from '../../atoms/images/Burna.png'
import Omah from '../../atoms/images/omah.png'
import Oxlade from '../../atoms/images/Oxlade.png'

const Card = () => {
  const cards = [
    {
      image: Burna,
      title: 'Daily Vibes 1',
      desc: 'Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....'
    },
    {
      image: Omah,
      title: 'Daily Vibes 2',
      desc: 'Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....'
    },
    {
      image: Oxlade,
      title: 'Daily Vibes 3',
      desc: 'Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy'
    },
    {
      image: Burna,
      title: 'Daily Vibes 1',
      desc: 'Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....'
    },
    {
      image: Omah,
      title: 'Daily Vibes 2',
      desc: 'Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....'
    },
    {
      image: Oxlade,
      title: 'Daily Vibes 3',
      desc: 'Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy'
    }
  ]

  return (
    <div className='card'>
      <section className='card-item'>
        <div className='border'></div>
        <div className='image'>
          <img src={Burna} alt='burna' />
        </div>
        <div className='border'></div>
      </section>
      <section className='vibes'>
        <h2>Daily Vibes 1 </h2>
        <p>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </p>
      </section>
    </div>
  )
}

export default Card
