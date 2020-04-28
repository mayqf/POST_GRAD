import Link from 'next/link'
import { Icon,Divider } from 'semantic-ui-react'

const linkStyle = {
  marginRight: 15,
  marginBottom: 50
}

export default function Header() {
  return (
    <div>
      <Icon name='home' size='large' />
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Divider/>
    </div>
  )
}