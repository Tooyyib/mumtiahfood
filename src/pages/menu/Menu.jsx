import React from 'react'
import { useState } from 'react'






const Menu = () => {

     const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState([
      {
          id: 1,
          name: "Jollof rice",
          description: "Jollof Rice + 1 Chicken",
          price: 1500,
          ratings: 100,
          image: "https://Jollofrice.i.postimg.cc/Rvyytphd/zully-modified.png"
      },
      {
          id: 2,
          name: "frozen chicken",
          description: "Fresh cutted Full Chicken",
          price: 9000,
          ratings: 100,
          image: "https://i.postimg.cc/RVyytphd/zully-modified.png"
      },
      {
          id: 3,
          name: "pepper fried chicken",
          description: "Chicken rappedup with pepper",
          price: 9000,
          ratings: 100,
          image: "https://i.postimg.cc/RVyytphd/zully-modified.png"
      },
      {
          id: 4,
          name: "grilled chicken",
          description: "fresh and healthy",
          price: 9000,
          ratings: 100,
          image: "https://i.postimg.cc/RVyytphd/zully-modified.png"
      },
      {
          id: 5,
          name: "pepper soup chicken",
          description: "Pepper Soup and Full Chicken",
          price: 9000,
          ratings: 100,
          image: "https://i.postimg.cc/RVyytphd/zully-modified.png"
      },
      {
          id: 6,
          name: "Efo chicken",
          description: "Efo Soup and Full Chicken",
          price: 9000,
          ratings: 100,
          image: "https://i.postimg.cc/RVyytphd/zully-modified.png"
      },
     
  ]);

  return (
    
    <div className="">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
        <div></div>
    </div>
  )
}

export default Menu