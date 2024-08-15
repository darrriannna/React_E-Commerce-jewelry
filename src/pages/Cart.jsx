import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addService, removeService } from "../redux/action/serviceAction";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);

  const addItem = (item) => {
    dispatch(addService(item));
  };

  const removeItem = (item) => {
    dispatch(removeService(item.id)); // Make sure to pass the item id
  };

  // Ensure services is an array
  const validServices = Array.isArray(services) ? services : [];

  const subtotal = validServices.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = validServices.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="container my-3 py-3">
      <h1 className="text-center">Varukorg</h1>
      <hr />
      {validServices.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 bg-light text-center">
              <h4 className="p-3 display-5">Din varukorg är tom</h4>
              <Link to="/" className="btn btn-outline-dark mx-4">
                <i className="fa fa-arrow-left"></i> Fortsätt utforska tjänster
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-body">
                    {validServices.map((item) => (
                      <div key={item.id}>
                        <div className="row d-flex align-items-center">
                          <div className="col-lg-5 col-md-6">
                            <p><strong>{item.title}</strong></p>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                              <button className="btn px-3" onClick={() => removeItem(item)}>
                                <i className="fas fa-minus"></i>
                              </button>
                              <p className="mx-5">{item.qty}</p>
                              <button className="btn px-3" onClick={() => addItem(item)}>
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <p className="text-start text-md-center">
                              <strong>
                                <span className="text-muted">{item.qty}</span> x {item.price} kr
                              </strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Services ({totalItems})<span>{subtotal} kr</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>{subtotal} kr</strong>
                        </span>
                      </li>
                    </ul>
                    <Link to="/checkout-mri" className="btn btn-dark btn-lg btn-block">
                      Gå till kassan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;





