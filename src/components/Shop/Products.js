import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyProduct = [
  {
    id: "p1",
    price: 6,
    title: "my first book",
    des: "this is my first book",
  },
  {
    id: "p2",
    price: 12,
    title: "my sec book",
    des: "this is my sec book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProduct.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id = {item.id}
              title={item.title}
              price={item.price}
              description={item.des}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
