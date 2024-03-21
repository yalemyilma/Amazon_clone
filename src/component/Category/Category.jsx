import React from 'react'
import {categoryInfos} from './catagoryFullinfos'
import CategoryCard from './CategoryCard'
import classes from './catagory.module.css'
function Category() {


  return ( 

   <section className={classes.category__container}>
      {
        categoryInfos.map((infos)=>(
            <CategoryCard data={infos}/>
        ))
      }

    </section>
  )
}

export default Category












