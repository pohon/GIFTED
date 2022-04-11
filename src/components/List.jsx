import useSWR from 'swr'
import fetcher from '../helper/fetcher';

const List = ({ searchTerm, endpoint }) => {

  // props
  const shouldFetch = !!searchTerm;

  // states
  const { data } = useSWR(
    shouldFetch ? `${endpoint}?api_key=5pz3ijoel9TP8PVJPb0SDND5kdXihPyc&limit=50&q=${searchTerm}` : null,
    fetcher
  );

  if (shouldFetch && !data) {
    return <div>loading...</div>
  }
  
  return (
    <div>
      {
        Array.isArray(data?.data) && data.data?.map(obj => (
          <img alt={obj.title} src={obj.images?.preview_gif?.url} />
        ))
      }
    </div>
  );

};

export default List;