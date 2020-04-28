import Header from './Header'
import Head from '../Head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '5px solid #DDD'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
       <Head />
      <Header />
      {props.children}
    </div>
  )
}
