import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'

export const SingleProductGeneral = () => {
    const productURLParams = useParams()
    const [productDetails, setproductDetails] = useState([])
    const [componentDidMount, setcomponentDidMount] = useState(false)
    const [productCategories, setproductCategories] = useState([])
    const [itemNumber, setitemNumber] = useState(1)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if(componentDidMount === false){
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
            axios
                .get(
                    '/api/get_single_product/' + productURLParams.productID,
                )
                .then((response) => {
                    setproductDetails(response.data)
                })
                .catch((error) => { console.log(error) })
            setcomponentDidMount(true)
        }
    }, [componentDidMount, productURLParams.productID])

    useEffect(() => {
        if(componentDidMount === true){
            let temp_object = {}
            for(const property in productDetails) {
                if(property.includes('category')) {
                    temp_object[property] = productDetails[property]
                }
            }
            if(!(temp_object && Object.keys(temp_object).length === 0 && Object.getPrototypeOf(temp_object) === Object.prototype)){
                axios
                    .get(
                        '/api/get_single_products_categories',
                        { params: JSON.stringify(temp_object) },
                        { headers: { 'Content-Type': 'application/json' } }
                    )
                    .then((response) => {
                        setproductCategories(response.data)
                    })
                    .catch((error) => { console.log(error) })
            }
        }
    }, [componentDidMount, productDetails])

    const createSpecifications = () => {
        return (
            <div>
                {productCategories.map((category) => {
                    return (
                        <div className='flex justify-between text-sm'>
                            <span className='whitespace-nowrap'>
                                {category['type']}
                            </span>
                            <span className='truncate'>
                                ............................................................................................
                            </span>
                            <span className='whitespace-nowrap'>
                                {category['name']}
                            </span>
                        </div>
                    )
                })}
            </div>
        )    
    }

    const handleItemNumberClick = (number) => () => {
        if(number < 0 && itemNumber === 1){
            return (null)
        }
        setitemNumber(itemNumber + number)
    }

    return (
        <div className='bg-white'>
            <div className='max-w-[1020px] mx-auto h-screen'>
                <div className='flex justify-center mx-auto space-x-6 p-4 pt-10'>
                    <div className='flex items-center justify-between'>
                        <img className='w-[300px]' src={'/mediafiles/' + productDetails.image} alt={productDetails.name}/>
                    </div>
                    <div className='w-[500px] bg-gray-100 rounded-lg p-6 px-8 ring-1 ring-green-200 hover:ring-2 hover:ring-green-400 transition ease-in-out duration-300'>
                        <h1 className='font-[600] text-2xl'>{productDetails.name}</h1>
                        <span className='text-gray-700 font-normal text-sm inline-block my-2'>{'Код товара: ' + productDetails.id}</span>
                        <p className='font-medium text-3xl my-4'>₸{productDetails.price}</p>
                        <div className=''>
                            {createSpecifications()}
                        </div>
                        <div className='flex items-center mt-6 space-x-6'>
                            <form className='flex h-10 w-28'>
                                <button type='button' onClick={handleItemNumberClick(-1)} className='w-full text-center bg-white rounded-l-lg ring-1 ring-gray-400 font-bold text-2xl'><RemoveOutlinedIcon/></button>
                                <input value={itemNumber} className='w-full placeholder:text-gray-900 placeholder:text-lg text-center ring-1 ring-gray-400 focus:outline-none text-lg'/>
                                <button type='button' onClick={handleItemNumberClick(1)} className='w-full text-center bg-white rounded-r-lg ring-1 ring-gray-400 font-bold text-2xl'><AddOutlinedIcon/></button>
                            </form>
                            <button className='p-3 px-5 text-lg text-white font-bold bg-green-500 ring-green-700 rounded-lg hover:scale-105 transition ease-in-out duration-300'>В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}