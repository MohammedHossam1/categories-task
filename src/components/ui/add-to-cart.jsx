export default function addToCart({props}) {
  return (
    <Button className="btn-main translate-y-20 group-hover:translate-y-0" props>
      Add to cart <FaCartArrowDown />
    </Button>
  );
}
