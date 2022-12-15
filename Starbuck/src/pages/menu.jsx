import { Button } from '@chakra-ui/react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu(){

    const [data, setData] = useState([])
    const [backupData, setBackupData] = useState([])
    const [category, setCategory] = useState([])
    const [categorySelected, setCategorySelected] = useState(0) 

    useEffect(() => {
        onGetData()
    }, [])

    
    // let onGetData = async() => {
    //     try {
    //         let response = await axios.get('http://localhost:5000/products')
    //         let responseCategory = await axios.get('http://localhost:5000/category')
            
    //         let newResponseFilter = response.data.filter(value => {
    //             return value.category === 0
    //         })
    //         setData(newResponseFilter)
    //         setBackupData(response.data)
    //         setCategory(responseCategory.data)
            
    //     } catch (error) {
            
    //     }
    // }

    let onGetData = async() => {
        try {
            let response = await axios.get('http://localhost:5000/products?category=0')
            let responseCategory = await axios.get('http://localhost:5000/category')
            
           setData(response.data)
           setCategory(responseCategory.data)
        } catch (error) {
            
        }
    }
    
    let onFilter = async(idx) => {
        let response= await axios.get(`http://localhost:5000/products?category=${idx}`)
        setData(response.data)
        setCategorySelected(idx)
    }
    return(
        <div className="flex px-20 pt-20 mt-24">
            <div className="basis-1/6">
                <div>
                    <h1 className="my-fs-25 font-bold">
                        {category[categorySelected]}
                    </h1>
                </div>
                {
                    category.map((value,index) => {
                        return(
                           <div>
                             <Button key={index} onClick={() => onFilter(index)}>
                                {value}
                            </Button>
                           </div>
                        )
                    })
                }
            </div>
            <div className="basis-5/6">
                <div>
                    <h1 className="my-fs-30 font-bold">
                        Menu
                    </h1>
                </div>
                <div className="mt-10 border-bottom pb-3">
                    <h1 className="my-fs-25 font-bold">
                        {category[categorySelected]}
                    </h1>
                </div>
                
                <div className="grid grid-cols-2 mt-3">
                    {
                        data.length?
                        data.map((value, index) => {
                            return(
                                <div key={index} className='flex items-center mt-3'>
                                    <div>
                                        <Link to={`/productdetail/${value.id}`}>
                                        <img src={value.image} style={{ width:'100px', height:'100px' }} className='rounded-full' />
                                        </Link>
                                    </div>
                                    <div className='pl-3'>
                                        <h1 className='my-fs-20 font-bold'>
                                            {value.name}
                                        </h1>
                                    </div>
                                </div>
                            )
                        }) : 
                        'Product Not Found'
                    }
                </div>
            </div>
        </div>
    )
}