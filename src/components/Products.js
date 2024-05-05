import React from 'react'
import ProductItem from "./ProductItem";

const Products = () => {
    const products =[
        {
          "id": 16,
          "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
          "price": 29.95,
          "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
          "rating": {
          "rate": 2.9,
          "count": 340
          }
        },
          {
          "id": 17,
          "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
          "price": 39.99,
          "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
          "rating": {
          "rate": 3.8,
          "count": 679
          }
          },
      ]
  return (
    <div className="container my-4">
    <h2>Best Sellers</h2>
    <div className="row my-5">
          {products.map((item)=>{
              return  <ProductItem item={item} key={item.id}/>
          })}
    </div>
</div>
  )
}

export default Products