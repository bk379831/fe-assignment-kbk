import styles from "./Product.module.css";

const Product = (props) => {
    console.log("Product : ", styles);

    return (
        <div
            style={{
            borderRadius: 8,
            border: "1px solid gray",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "gray",
            padding: 20,
        }}
        className={styles.card}
    >
            <h3>{props.name}</h3>
            <div>{props.price}</div>
        </div>
    );
};

export default Product;