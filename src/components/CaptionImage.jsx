// src/components/CaptionImage.jsx
export default function CaptionImage(props) {
  console.log(props);

  return (
    <div>
      <img src={props.imgUrl} alt={props.caption} />
      <p>{props.caption}</p>
    </div>
  );
}
