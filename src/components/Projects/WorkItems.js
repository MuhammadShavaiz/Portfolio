import React from 'react'

const WorkItems = ({item}) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        
        <h3 className="work__title">
            {item.title}
        </h3>
        {/*<a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon
            "></i>
        </a>*/}
      </div>
      </a>
  )
}

export default WorkItems
