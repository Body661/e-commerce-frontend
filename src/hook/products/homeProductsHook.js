import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts, getProductsByCategoryHome} from '../../redux/actions/productActions';

const ViewHomeProductsHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts(4))
        dispatch(getProductsByCategoryHome('63a73190f03c4a488cc4b6d9'))
    }, [])

    const allProducts = useSelector((state) => state.allProducts.allProducts)
    const allProductsByCategory = useSelector(state => state.allProducts.productsByCategoryHome)
    const loading = useSelector((state) => state.allProducts.loading)
    const error = useSelector((state) => state.allProducts.error)

    let products = [];
    if (allProducts?.data?.data && allProducts?.data?.data?.length > 0) products = allProducts?.data?.data;

    let categoryProducts = [];
    if (allProductsByCategory?.data?.data && allProductsByCategory?.data?.data?.length > 0) categoryProducts = allProductsByCategory?.data?.data;

    return [products, categoryProducts, loading, error]
}

export default ViewHomeProductsHook