import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [producto, setProducto]= useState('')
    const[cantidad, setCantidad] = useState(0)
    const [todos,setTodos]=useState([])

    const agregarProducto = (e)=>{
        e.preventDefault();
        if(producto.trim() ==='' || cantidad < 1){
            alert('Los campos no pueden estar vacio. Agregue una cantidad y un producto')
            return;
        }

        const todoLista={cantidad,producto}
        let totalLista = [...todos];
        totalLista.push(todoLista);
        setTodos(totalLista)
    };

    
    const deleteTodo=indice => {
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }
    return (
        <>
        <form onSubmit={agregarProducto}>
            <h3>Compras</h3>
            <label>Cantidad:</label>
            <input type="number" placeholder="Ej:10" name="cantidad" value={cantidad}  onChange={(e) => setCantidad(parseInt(e.target.value,10))}/>
            <label>Producto:</label>
            <input type="text" placeholder="Ej:Fresas" name="producto" value={producto} onChange={(e) => setProducto(e.target.value)} />
            <br />
         
         <input className="boton" type="submit" value="Agregar a la lista" /> 
        </form>
        {

            todos.map((value,index)=>(<Todo cantidad={value.cantidad} producto={value.producto} key={index}index={index}deleteTodo={deleteTodo}/>))
        }
    </>
    )
}
export default Form