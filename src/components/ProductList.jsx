export const ProductList = ({ products }) => {
  return (
    <>
      <h2>Listado de Productos</h2>
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-3 mt-3">
              <h4>{product.name}</h4>
              <p>
                <b>Price:</b> {product.price}
              </p>
              <p>
                <b>Category:</b> {product.category}
              </p>
              {/* <button
                className={`btn ${
                  pdtsInCart.find((pdt) => pdt.id === product.id)
                    ? "btn-danger"
                    : "btn-success"
                }`}
                onClick={() => handleAddRemoveProduct(product.id)}
              ></button> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
