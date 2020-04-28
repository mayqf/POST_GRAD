import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Search from '../../components/Search';

import { Card } from 'semantic-ui-react'


const Film = props => (
  <Layout>
    <Card size='big' color='yellow' centered>
    <Card.Content>
      <Card.Header>{props.film.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.film.producer}</span>
      </Card.Meta>
      <Card.Description>
      {props.film.description}
      </Card.Description>
    </Card.Content>
  </Card>

    <Search locations={props.locationsNames}/>
    <h1 >LOCATIONS</h1>
    <Card.Group stackable itemsPerRow='8' >
       {props.locations.map(location=>(
         <Card>
         <Card.Content>
         <Link href="/l/[id]" as={`/l/${location.id}`}>
            <a>{location.name}</a>
          </Link>
         </Card.Content>
       </Card>
       ))} 
     </Card.Group>
  </Layout>
);

Film.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
  const film = await res.json();
  console.log(film.locations);
  const res2 = await fetch(film.locations);
  const locations = await res2.json();
  let locationsNames = locations.map(item =>({ id: item.id, name: item.name }))


  return { film,locations,locationsNames };
};

export default Film;