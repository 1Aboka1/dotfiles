import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetchedData: []
        }
    }

    componentDidMount() {
        axios
            .get('/api/products')
            .then((response) => {
                this.setState({
                    fetchedData: response.data,
                })
            })
            .catch((error) => {console.log(error)})
    }

    createProductList = (product) => {           
        return(
            <Link to={`/product_item/${product.id}`} key={product.id}>
                <div className='flex justify-between py-4 cursor-pointer transition ease-in-out duration-200 group'>
                    <div className='flex'>
                    {console.log(product.image)}
                            <img className='w-[200px] p-5 object-cover' src={'/mediafiles/' + product.image} alt={product.name}/>
                        <div className='py-3 justify-center flex flex-col'>
                            <h1 className='font-medium text-black text-[20px] group-hover:text-green-600 transition ease-in-out duration-200'>{product.name}</h1>
                            <p className='pt-5 text-[13px] text-gray-700'>{product.description}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center space-y-2 px-6'>
                        <h1 className='text-[20px] text-end'>₸{product.price}</h1>
                        <button className='bg-green-500 p-3 font-bold text-white whitespace-nowrap rounded-lg hover:bg-green-600 transition ease-out duration-300'>В корзину</button>
                        <span className='text-[12px] text-end text-gray-600 whitespace-nowrap'>В наличии: {product.quantity}</span>
                    </div>
                </div>
            </Link>
        )
    }
    
    createProductGrid = (product) => {
        return (
            <div></div>
        )
    }

    createEmptyQS = () => {
        return (
            <div className='h-screen'>
                <h1 className='text-center pt-10 font-medium text-lg'>Нет результатов. Попробуйте использовать другие фильтры</h1>
            </div>
        )
    }

    render() {
        return (
            <div className='bg-white shadow-lg basis-3/4 ring-1 ring-gray-300 rounded-lg'>
                {/* <div className='w-2'>
                    <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div> */}
                {/* { this.props.filteredQuerySet.length === 0 ? this.state.fetchedData.map((product) => {return this.props.listView ? this.createProductList(product) : this.createProductGrid(product)}) : this.props.filteredQuerySet.map((product) => {return this.props.listView ? this.createProductList(product) : this.createProductGrid(product)}) } */}
                { this.props.filteredQuerySet.length === 0 ? this.createEmptyQS() : this.props.filteredQuerySet.map((product) => {return this.props.listView ? this.createProductList(product) : this.createProductGrid(product)}) }
                {/* { this.props.filteredQuerySet.map((product) => {return this.props.listView ? this.createProductList(product) : this.createProductGrid(product)}) } */}
            </div>
        )
    }
}
