const ImagePopup = (props) => {
  return (
    <div
      className="overlay"
      onClick={() => {
        props.close();
      }}
    >
      {props.children}
    </div>
  );
};

export default ImagePopup;
