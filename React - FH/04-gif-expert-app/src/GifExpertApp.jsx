import { useState } from "react"
import { AddCategory,GifGrid  } from "./components"

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Punch'])


  const onAddCategory = (onNewCategory) => {
    console.log(categories)
    if (categories.includes(onNewCategory)) return;

    setCategories([onNewCategory,...categories, ])
    // setCategories(cat=>[...cat,onNewCategory])



  }

  return (
    <>
      {/* titulo */}
      <h1>Gif expert app</h1>
      {/* Input */}
      <AddCategory
        onNewCategory={event => onAddCategory(event)}
      />

      {/* Listado de Gif */}

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />



        ))}
    </>
  )
}
