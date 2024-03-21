import React from 'react'
// import CategoryCard from './catagoryFullinfos'
import classes from '../Category/catagory.module.css'
// import {Link} from 'react-router-dom'
function CategoryCard({data}) {

  return (
    <div className={classes.category}>
            <a href={`/category/${data.name}`}>
        
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.imgLink} alt="" />
            <p>shop now</p>
        {/* </Link> */}
        </a>
    </div>
  )
}

export default CategoryCard