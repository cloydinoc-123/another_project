function Button({products}) {
  return (
    <button onClick={() => alert(`You have purchased ${products.name} for ${products.price}.`)}>
      Buy Now
    </button>
  );
}   
export default Button;