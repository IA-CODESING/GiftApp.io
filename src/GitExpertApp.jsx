import { useState } from "react";
import { AddCategory, Giftgrid } from "./Components";


export const GitExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ])

  const onNewCategory = (newCategory) => {
  
    if( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory 
        onNewCategory={onNewCategory}
      />

      { 
        categories.map( (category)  => (
          <Giftgrid key={category} 
          category={category}
          />
        )
      )}
    </>
  )
}
