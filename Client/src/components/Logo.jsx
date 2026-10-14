// My custom logo: a purple hexagon with my initials inside
function Logo() {
  return (
    <svg className="logo" viewBox="0 0 100 100">
      <polygon points="50,4 91,27 91,73 50,96 9,73 9,27" fill="#0d9488" />
      <text x="50" y="62" textAnchor="middle" fontSize="36" fill="white" fontFamily="Arial">
        SQ
      </text>
    </svg>
  )
}

export default Logo
