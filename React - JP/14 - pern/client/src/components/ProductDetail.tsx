import { Product } from '../types'
import { formatCurrencty } from '../utils'
import {Link,useNavigate} from 'react-router-dom'

type ProductDetailsProps = {
    product: Product
}

function ProductDetail({ product }: ProductDetailsProps) {
    const isAvailable = product.availabitily
    const navigate = useNavigate()

    return (

        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrencty(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvailable ? 'Disponible':'No disponible'}

            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className='flex gap-2 items-center'>
                    {/* <Link to={`/productos/${product.id}/editar`} className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'>
                        Editar
                    </Link> */}
                                     <button onClick={()=>navigate(`/productos/${product.id}/editar`)} className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'>
                        Editar
                    </button> 
                </div>


            </td>
        </tr>
    )
}

export default ProductDetail