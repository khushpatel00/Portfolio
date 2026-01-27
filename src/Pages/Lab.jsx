import React from 'react'
import InfiniteMenu from '../Components/InfiniteMenu'
import Menu from '../Components/Menu'

const items = [
  {
    image: '/images/Ochi.png',
    link: 'https://google.com/',
    title: 'Ochi',
    description: ' FramerMotion'
  },
  {
    image: '/images/DBSeeder.png',
    link: 'https://google.com/',
    title: 'DBSeeder',
    description: 'we made this in a hackathon, btw'
  },
  {
    image: '/images/session0.png',
    link: 'https://google.com/',
    title: 'session0',
    description: 'i didnt completed the whole project 🙂'
  },
  {
    image: '/images/FakeStore.png',
    link: 'https://google.com/',
    title: 'FakeStore',
    description: 'i just implemented the use of This API (not a project btw)'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Driveman',
    description: "i'm a gamedev too, btw"
  },
  {
    image: '/images/WeatherNow.png',
    link: 'https://google.com/',
    title: 'WeatherNow',
    description: "a mini-project made with WeatherAPI"
  },
  {
    image: '/images/FINDr.png',
    link: 'https://google.com/',
    title: 'FINDr',
    description: "a mini-project movie-finder project (i didnt finished this too)"
  },
  {
    image: '/images/CoffeeMarket.png',
    link: 'https://google.com/',
    title: 'CoffeeMarket',
    description: "a CoffeeMarket UI (no-js)"
  },
  {
    image: '/images/Dekoro.png',
    link: 'https://google.com/',
    title: 'Dekoro',
    description: "a Furniture-page UI (no-js)"
  },
  {
    image: '/images/A2Z.png',
    link: 'https://google.com/',
    title: 'A2Z Furnishing',
    description: "Live-project (no-js)"
  },
  {
    image: '/images/Nestify.png',
    link: 'https://google.com/',
    title: 'Nestify',
    description: "a Ecommerce-page UI (no-js)"
  },
];

function Lab() {
  return (
    <>
      <Menu />
      <div style={{ height: '100vh', position: 'relative' }}>
        <InfiniteMenu items={items}
          scale={1}
        />
      </div>
    </>
  )
}

export default Lab;