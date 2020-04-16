import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Film = props => (
  <Layout>

    <h1>LOCATION DETAILS</h1>
    <p> Climate:{props.location.climate}</p>
    <p> Terrain:{props.location.terrain}</p>
    <p> Surface Water:{props.location.surface_water}</p>
  </Layout>
);

Film.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://ghibliapi.herokuapp.com/locations/${id}`);
  const location = await res.json();
  

  return { location};
};

export default Film;