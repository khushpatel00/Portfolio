import React from 'react'
import InfiniteMenu from '../Components/InfiniteMenu'
import Menu from '../Components/Menu'

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Ochi',
    description: ' FramerMotion'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'DBSeeder',
    description: 'we made this in a hackathon, btw'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'session0',
    description: 'i didnt completed the whole project 🙂'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
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
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'WeatherNow',
    description: "a mini-project made with WeatherAPI"
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'FINDr',
    description: "a mini-project movie-finder project (i didnt finished this too)"
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'CoffeeMarket',
    description: "a CoffeeMarket UI (no-js)"
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Dekoro',
    description: "a Furniture-page UI (no-js)"
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'A2Z Furnishing',
    description: "Live-project (no-js)"
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
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