import React from 'react'
import HomeIcon from '../../atoms/vectors/HomeIcon'
import { NavLink } from 'react-router-dom'

import './SideBar.scss'
import DiscoverIcon from '../../atoms/vectors/DiscoverIcon'
import LibraryIcon from '../../atoms/vectors/LibraryIcon'
import LikedIcon from './../../atoms/vectors/LikedIcon'
import SpeakerIcon from './../../atoms/vectors/SpeakerIcon'
import PlayListIcon from './../../atoms/vectors/PlayListIcon'
import PlayedIcon from '../../atoms/vectors/PlayedIcon'
import ListIcon from './../../atoms/vectors/ListIcon'
import Avatar from '../../atoms/images/avatar.png'
import SearchIcon from './../../atoms/vectors/SearchIcon'

const SideBar = () => {
  const first = [
    {
      icon: HomeIcon,
      title: 'Home'
    },
    {
      icon: DiscoverIcon,
      title: 'Discover'
    }
  ]
  const library = [
    {
      icon: LibraryIcon,
      title: 'Your Library'
    },
    {
      icon: LikedIcon,
      title: 'Liked Songs',
      speaker: SpeakerIcon
    },
    {
      icon: PlayedIcon,
      title: 'Recently Played'
    },
    {
      icon: PlayListIcon,
      title: 'Create Playlist'
    }
  ]
  const list = [
    {
      icon: ListIcon,
      title: 'My Playlists',
      search: SearchIcon
    }
  ]
  const playlists = [
    {
      title: 'Riffs & Runs'
    },
    {
      title: 'African Heat'
    },
    {
      title: 'Gidi Nights'
    },
    {
      title: 'Running out of Playlist na....'
    },
    {
      title: 'Saturday was a Good Day'
    },
    {
      icon: 'i',
      title: 'Gidi Nights'
    },
    {
      title: 'Riffs & Runs'
    },
    {
      title: 'African Heat'
    },
    { title: 'Gidi Nights' },
    {
      title: 'African Heat'
    },
    {
      title: 'Running out of Playlist na....'
    },
    {
      title: 'Saturday was a Good Day'
    },
    {
      title: 'Gidi Nights'
    },
    {
      title: 'Running out of Playlist na....'
    },
    {
      title: 'Saturday was a Good Day'
    },
    {
      title: 'Gidi Nights'
    }
  ]
  return (
    <aside>
      <header>
        <img src={Avatar} alt='' />
        <p>Hey! Aleem</p>
      </header>
      <nav>
        <div className='generic home'>
          {first.map(({ icon: Icon, title }, i) => (
            <NavLink key={i}>
              <Icon />
              <span>{title}</span>
            </NavLink>
          ))}
        </div>
        <div className='generic library'>
          {library.map(({ icon: Icon, title }, i) => (
            <NavLink key={i}>
              <Icon />
              <span>{title}</span>
            </NavLink>
          ))}
        </div>
        <div>
          <div className='generic list'>
            {' '}
            {list.map(({ title, icon: Icon, search: Search }, i) => (
              <NavLink key={i}>
                <Icon />
                <span>{title}</span>
                <Search />
              </NavLink>
            ))}
          </div>
          <div className='play'>
            {playlists.map(({ title }, i) => (
              <NavLink key={i}>
                <span>{title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default SideBar

// {playlists.map(({ icon: Icon, title, speaker: Speaker }, i) => (
//   <NavLink key={i}>
//     <Icon />
//     <span>{title}</span>
//     <Speaker />
//   </NavLink>
// ))}
