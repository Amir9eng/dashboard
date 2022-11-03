import React from 'react'
import './Home.scss'
import Layout from '../../components/templates/Layout'
import ArrowLeftIcon from './../../components/atoms/vectors/ArrowLeftIcon'
import ArrowRightIcon from './../../components/atoms/vectors/ArrowRightIcon'
import SearchIcon from '../../components/atoms/vectors/SearchIcon'
import Title from '../../components/atoms/images/Title.png'
import omah from '../../components/atoms/images/omah.png'
import mobile from '../../components/atoms/images/mobile.png'
import Cheer from '../../components/molecules/Cheer'
import Card from '../../components/molecules/Card'

import HomeMobileIcon from './../../components/atoms/vectors/HomeMobileIcon'
import DiscoverMobileIcon from './../../components/atoms/vectors/DiscoverMobileIcon'
import Album from './../../components/atoms/vectors/Album'
import PlayListMobileIcon from './../../components/atoms/vectors/PlayListMobileIcon'

const Home = () => {
  return (
    <Layout>
      <section className='section-container'>
        <div className='top'>
          <div className='arrow'>
            <div className='dark'>
              <ArrowLeftIcon />
            </div>
            <div className='dark'>
              <ArrowRightIcon />
            </div>
          </div>
          <div className='search'>
            <div className='pad'>
              <SearchIcon />
            </div>
            <input type='search' />
          </div>
        </div>
        <div className='main-wrapper'>
          <div className='mobile-main'>
            <img src={mobile} alt='omah-lay' />
          </div>
          <div className='main'>
            <div className='title'>
              <img src={Title} alt='title' />
            </div>
            <div className='omah'>
              <img src={omah} alt='omah-lay' />
            </div>
          </div>
        </div>
        <p className='welcome'>Welcome Back!</p>
        <p className='see'>See more</p>
        <div className='card-list'>
          <Card />
        </div>
        <div className='more'>
          <p className='weekend'>Cheers to the Weekend</p>
          <p className='see'>See more</p>
        </div>
        <div className='cheers-list'>
          <Cheer />
        </div>
      </section>
      <div className='mobile'>
        <HomeMobileIcon />
        <DiscoverMobileIcon />
        <Album />
        <PlayListMobileIcon />
      </div>
    </Layout>
  )
}

export default Home
