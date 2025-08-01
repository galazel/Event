
export default function Service(props) {
  return (
    <div className="service-item">
      <div className="service-image">
        <iframe src={props.photo} frameBorder="0"></iframe>
      </div>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="description">
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
}
