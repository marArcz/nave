import React from 'react'

const CategoriesComponent = ({ categories }) => {
    return (
        <div className="card">
            <div className="card-header bg-white">
                <p className="fs-6 my-0">CATEGORIES</p>
            </div>
            <div className="card-body">
                <div className="row g-2">
                    {categories && categories.map((category, index) => (
                        <div className='col-md-3' key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <p className="fs-6">{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoriesComponent