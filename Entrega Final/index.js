const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

// Eventos
document.addEventListener('DOMContentLoaded', e => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        CrearCarrito()
    }
});
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) })

// Traer Data
const fetchData = async () => {
    const res = await fetch('api.json');
    const data = await res.json()
    CrearCards(data)
}


// Productos
const CrearCards = data => {
    data.forEach(item => {
        templateCard.querySelector('img').setAttribute("src", item.img)
        templateCard.querySelector('h5').textContent = item.nombre
        templateCard.querySelector('p').textContent = "$ "+item.precio
        templateCard.querySelector('button').dataset.id = item.id
        templateCard.querySelector('h5').classList = item.tipo
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

// Carrito
const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = item => {
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('p').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }
    
    CrearCarrito()
}

const CrearCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = "$ "+producto.precio * producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    CrearFooter()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const CrearFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío</th>
        `
        return
    }
    
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = "$ "+nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        CrearCarrito()
    })

    const botonFinalizar = document.querySelector('#finalizarCompra')
    botonFinalizar.addEventListener('click', () => {
        Swal.fire({
            title: 'Quieres finalizar tu compra?',
            showDenyButton: true,

            confirmButtonText: 'Finalizar',
            denyButtonText: `Cancelar`,
          }).then((result) => {

            if (result.isConfirmed) {
              Swal.fire('Listo! Ahora solo queda ir al carrito', '<a href="pages/carrito.html">Ir al carrito</a>', 'success',Swal.disableButtons())

            } else if (result.isDenied) {
              Swal.fire('No hay problema! Continua con tu pedido', '', 'success')
            }
          })



})
}
const btnAumentarDisminuir = e => {
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        CrearCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        CrearCarrito()
    }
    e.stopPropagation()
}




