import style from './style.css';

const Card = (props, children) => {
  return (
    <div className={props.className}>
      <h2 alt={props.title} />
      <div className={style["card-body"]}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;