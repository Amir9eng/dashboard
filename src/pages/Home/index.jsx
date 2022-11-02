import React from 'react'
import './Home.scss'
import Layout from '../../components/templates/Layout'
import ArrowLeftIcon from './../../components/atoms/vectors/ArrowLeftIcon'
import ArrowRightIcon from './../../components/atoms/vectors/ArrowRightIcon'
import SearchIcon from '../../components/atoms/vectors/SearchIcon'
import Title from '../../components/atoms/images/Title.png'
import omah from '../../components/atoms/images/omah.png'
import Card from './../../components/molecules/Card/index'
import Cheer from '../../components/molecules/Cheer'

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
        <div className='main'>
          <div className='title'>
            <img src={Title} alt='title' />
          </div>
          <div className='omah'>
            <img src={omah} alt='omah-lay' />
          </div>
        </div>
        <p className='welcome'>Welcome Back!</p>
        <div className='card-list'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <p className='welcome'>Cheers to the Weekend</p>
        <div className='cheers-list'>
          <Cheer />
          <Cheer />
          <Cheer />
          <Cheer />
        </div>
      </section>
    </Layout>
  )
}

export default Home
