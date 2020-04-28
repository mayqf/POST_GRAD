import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Icon, Card, Image,Header } from 'semantic-ui-react'


const Index = props => (
  <Layout>
     <Header as='h2'><Icon name='film'size='large' color='red' />MOVIES</Header>
    <Card.Group stackable itemsPerRow='4' centered >
    {props.films.map(film => (
      <Card color='orange'>
      <Card.Content>
        <Image
          floated='right'
          size='large'
          src='https://s3-eu-west-1.amazonaws.com/static.melkweg.nl/uploads/images/scaled/event_header/12927'
        />
        <Card.Header >{film.title}</Card.Header>
        <Card.Meta>Release Date: { film.release_date}</Card.Meta>
        <Card.Description>
        Score:{ film. rt_score}
        </Card.Description>
        <Link href="/p/[id]" as={`/p/${film.id}`} >
            <a>More Info</a>
          </Link>
      </Card.Content>
    </Card>
    ))}
        </Card.Group>
    
     
    
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await res.json();
  console.log(data);

  return {
    films: data
  };
};

export default Index;