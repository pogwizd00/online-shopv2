import React, {FC} from 'react';
import '../Styles/Products.css';


interface SalesProps {}

export const Products: FC<SalesProps> = ({}) =>{
    //todo Products: chairs, desks, shelf's, wardrobes
    //todo Create flex area for all products where every products will have:
    //todo id: number, name: string ,img, cost: double
    return (
               <div className={'productsContainer'}>
                   <ul className={'ul-productList unOrderListToProducts'}><b>Chairs:</b>
                       <li>To the dinning room</li>
                       <li>For the kitchen</li>
                       <li>For the bedroom</li>
                       <li>To the garden</li>
                   </ul>
                   <ul className={'ul-productList'}><b >Desks:</b>
                       <li>To the office</li>
                       <li>For gamers!!</li>
                       <li>To children</li>
                       <li>Normal Type</li>
                   </ul>
                   <ul className={'ul-productList'}><b>Shelf's:</b>
                       <li>RTV shelf's</li>
                       <li>For tools</li>
                       <li>To Buts</li>
                       <li>Night's shelf's</li>
                   </ul>
                   <ul className={'ul-productList'}><b>Dresser:</b>
                       <li>With drawers</li>
                       <li>With doors</li>
                       <li>With drawers and doors</li>
                       <li>On legs</li>
                   </ul>
               </div>
    );
};