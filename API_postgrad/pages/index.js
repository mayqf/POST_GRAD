import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>FILMS</h1>
    <ul>
      {props.films.map(film => (

        <li key={film.id}>
          <h2>{film.title}</h2>
    
          <p>Release Date: { film.release_date}</p>
          <p>Score: { film. rt_score}</p>
          <Link href="/p/[id]" as={`/p/${film.id}`}>
            <a>More Info</a>
          </Link>
        </li>
        
      ))}
    </ul>
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