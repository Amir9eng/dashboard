import Burna from '../../atoms/images/Burna.png'
import Kofee from '../../atoms/images/Kofee.png'
import Oxlade from '../../atoms/images/Oxlade.png'
import {
  Border,
  CardContainer,
  CardImage,
  CardItem,
  Vibes,
  VibesHeading,
  VibesText
} from './CardStyle'

const Card = () => {
  const cards = [
    {
      image: Burna,
      title: 'Daily Vibes 1',
      desc: 'Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....',
      bg: 'linear-gradient(89.79deg, #ad4c1d -19.39%, #f6b726 123.38%)'
    },
    {
      image: Oxlade,
      title: 'Daily Vibes 2',
      desc: 'Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....',
      bg: 'linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)'
    },
    {
      image: Kofee,
      title: 'Daily Vibes 3',
      desc: 'Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy',
      bg: 'linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)'
    },
    {
      image: Burna,
      title: 'Daily Vibes 1',
      desc: 'Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....',
      bg: 'linear-gradient(89.79deg, #ad4c1d -19.39%, #f6b726 123.38%)'
    },
    {
      image: Oxlade,
      title: 'Daily Vibes 2',
      desc: 'Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....',
      bg: 'linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)'
    },
    {
      image: Kofee,
      title: 'Daily Vibes 3',
      desc: 'Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy',
      bg: 'linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)'
    }
  ]

  return (
    <>
      {cards.map(({ title, desc, image, bg }, i) => (
        <CardContainer key={i}>
          <CardItem>
            <Border style={{ background: `${bg}` }}></Border>
            <CardImage>
              <img src={image} alt='burna' />
            </CardImage>
            <Border style={{ background: `${bg}` }}></Border>
          </CardItem>
          <Vibes style={{ background: `${bg}` }}>
            <VibesHeading>{title}</VibesHeading>
            <VibesText>{desc}</VibesText>
          </Vibes>
        </CardContainer>
      ))}
    </>
  )
}

export default Card
