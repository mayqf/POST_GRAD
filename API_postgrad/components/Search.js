import React from "react";
import Link from 'next/link';
import { Input,Container} from 'semantic-ui-react'

const locations = [
];
export default function Search(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = props.locations.filter(location =>
      location.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  console.log(searchResults);

  return (
    <div className="App">
      <Container ><Input
    icon={{ name: 'search', circular: true, link: true }}
    placeholder='Search locations...'
    value={searchTerm}
    onChange={handleChange} 
    size='big' fluid
  /></Container>
      
     
      {searchTerm ? 
      <ul>
      {searchResults.map(item => (
         <li key={item.id}>
         <Link href="/l/[id]" as={`/l/${item.id}`}>
            <a>{item.name}</a>
          </Link>
          </li>
       ))} 
     </ul>
      : null }
      
    </div>
  );
}
