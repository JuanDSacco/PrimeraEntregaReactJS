import './navBar.css'

const Header = () => {
    return (
    <><div className="logo">
        <h1>TiendaStrix</h1>
    </div>
    <div className="lista">
            <ul>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
    </div>
    <div className="carrito">3 <i class="fa-sharp fa-solid fa-cart-shopping"></i></div></>
    );
}

export default Header;