export default function AboutCard (props) {
  return (
    <div className="images">
      <div className="source">
          <img src={props.photo} alt={props.photo} />
      </div>
      <div className="description">
        <p>
         {props.description}
        </p>
      </div>
    </div>
  );
}
