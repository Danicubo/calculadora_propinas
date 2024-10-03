import { formatCurrency } from "../helpers"
import { MenuItems, OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id: MenuItems['id']) => void
}

export default function OrderContent({order, removeItem} : OrderContentProps) {

    return (
        <>
            <div className="font-black text-4xl">Consumo</div>
        
            <div className="spacey-3 mt-5">
                {
                (order.map(item => (
                    <div 
                    key={item.id}
                    className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b"
                    >
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <button 
                        onClick={() => removeItem(item.id)}
                        className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                        >
                            X
                        </button>
                    </div>
                ))
            )}
            </div>
        </>
    )
}