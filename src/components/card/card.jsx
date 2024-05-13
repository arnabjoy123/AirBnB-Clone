import "./styles.css";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`./images/${props.item.coverImg}`}
        className="card--image"
        alt="person"
      />
      {!props.item.openSpots && <div className="spots">SOLD OUT</div>}
      <div className="card--stats">
        <img src="./images/star.png" className="card--star" alt="star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="info">{props.item.title}</p>
      <p className="info">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
