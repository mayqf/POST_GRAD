import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import { Card} from 'semantic-ui-react'

const Film = props => (
  <Layout>
    <Card size='big' color='blue' >
    <Card.Content>
      <Card.Header>LOCATION DETAILS</Card.Header>
      <Card.Description>
      Climate : {props.location.climate}
      </Card.Description>
      <Card.Description>
      Terrain : {props.location.terrain}
      </Card.Description>
      <Card.Description>
      Surface Water  : {props.location.surface_water}
      </Card.Description>
    </Card.Content>
  </Card>
  </Layout>
);

Film.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://ghibliapi.herokuapp.com/locations/${id}`);
  const location = await res.json();
  

  return { location};
};

export default Film;