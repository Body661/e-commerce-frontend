import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import {useAllCategories} from "../../hook/category/useAllCategories";

const AllCategoryPage = () => {
    const {categories, loading, pageCount, getPage, error} = useAllCategories()

    return (
        <div style={{minHeight: '670px'}}>
            <CategoryContainer categories={categories} loading={loading} error={error}/>
            {pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage}/>) : null}
        </div>
    )
}

export default AllCategoryPage
