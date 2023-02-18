import { useParams } from 'react-router-dom';

const EventDetails = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <section>
      You are viewing details about a specific event: {params.event_name}
    </section>
  )
}

export default EventDetails;