export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#bf5272', display: 'flex', width: '100%', alignItems: 'center' }}>
      <a href="/" style={{ flex: 1 }}>
        <img src="/pinkBackgroundLong.png" alt="Magnolia JS logo" style={{ width: '20vw', margin: '0.5rem' }} />
      </a>
      <ul style={{ listStyle: 'none', display: 'flex', flex: 2, justifyContent: 'space-around' }}>
        <li>
          <a href="/">
            Schedule
          </a>
        </li>
        <li>
          <a href="/">
            Speakers
          </a>
        </li>
        <li>
          <a href="/">
            Sponsors
          </a>
        </li>
      </ul>
    </nav>
  )
} 