import { useContext } from 'react';
import { CartContext } from "../Context/CartContext";
import { Link } from 'react-router-dom';
import Formulario from './Formulario';
import Cart from "./Cart";
import holdUp from "../img/holdup.png";


function CartContainer() {

  const { cart, getItemPrice, deleteItem } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <div className="form-container">
          <div className="container cart-background ">
            <div className="row gap-3 cart-background ">
                {cart.map((juego) => <Cart  id={juego.id} nombre={juego.title} imagen={juego.img} key={juego.id} precio={juego.price} deleteItem={deleteItem} cantidad={juego.count} stock={juego.stock} inicial={1} />)}
            </div>          
          </div>
          <div className="row text-center ">
              <div className="col-12 mt-5">
                <div className="total-container mb-5"> 
                  <span className="fw-bold total-compra">Total de la compra: $ { getItemPrice() }</span>
                </div>
                <Formulario/> 
            </div>
          </div>
        </div>
 
      ) : (
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-lg-8 background-cart">
            <img className="cart-cont-img" src={holdUp} />
              <h2>Ups!! No hay productos en tu carrito!</h2>
              <Link to="/" className="btn-cart-empty">Volver</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartContainer;

/* 

              <div className='col-md-12  form-container'>
                <h1 className='form-title mt-5'>Check Out</h1>
                <form onSubmit={submitHandler} className="form"> 
                    <label> Ingese su Nombre </label>
                        <input name="name" onChange={handleChange} disabled={!enableAdd} placeholder="Ingrese su nombre"></input>
                    <label> Ingese su email </label>
                        <input name="email" onChange={handleChange} disabled={!enableAdd} placeholder="Ingrese su Email"></input>
                    <label> Ingese Telefono de contacto </label>
                        <input name="cel" onChange={handleChange} disabled={!enableAdd} placeholder="Ingrese su Celular"></input>                   
                    <button onClick={handleClick} disabled={!enableAdd} type="submit" className='form-submit'>TERMINAR COMPRA</button>
                </form> 
              </div>



*/