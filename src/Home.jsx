import React, { useEffect, useState } from 'react'
import { supabase } from './Connection'
import CategoriesComponent from './components/CategoriesComponent'
import { Categories } from './Backend'
import Navbar from './components/Navbar'

const Home = () => {

    const [categories, setCategories] = useState([])
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false)
    const loadCategories = async () => {
        const result = await Categories.getAll()
        if (result.data) {
            setCategories(result.data)
            console.log(result.data)
        }
        setIsCategoriesLoaded(true)
    }
    useEffect(() => {
        if (!isCategoriesLoaded) {
            loadCategories()
        }
    })

    return (
        <>
            <Navbar/>

            <section className='mt-5'>
                <div className="container ">
                    <div className="mb-5">
                        <p className='fs-2 fw-light'>Here In Nave...</p>
                        <p className='fs-1'>We have all you need!</p>
                        <a href="#" className='btn btn-success text-white rounded-1 btn-sm'>Shop Now</a>
                    </div>
                    <CategoriesComponent categories={categories} />
                </div>
                <section className='mt-5 bg-dark text-white'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md">
                                <div className="card bg-transparent border-0">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className='bx bx-md bxs-truck me-3 text-success'></i>
                                            <div>
                                                <p className='my-1'>We Ship Nationwide</p>
                                                <p className='my-1'>You can order anywhere you are!</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="card bg-transparent border-0">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className='bx bx-md bxs-package me-3 text-success'></i>
                                            <div>
                                                <p className='my-1'>Satisfied or exchange</p>
                                                <p className='my-1'>Exchange your items within 30 days.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="card bg-transparent border-0">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className='bx bx-md bx-support me-3 text-success'></i>
                                            <div>
                                                <p className='my-1'>Get in touch / Support</p>
                                                <p className='my-1'>naveofficial@email.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="card bg-transparent border-0">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className='bx bx-md bxs-credit-card me-3 text-success'></i>
                                            <div>
                                                <p className='my-1'>Pay anyway you want</p>
                                                <p className='my-1'>We offers many payment options</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Home