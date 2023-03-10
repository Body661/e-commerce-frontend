import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllCategories, getAllCategoriesPage} from "../../redux/actions/CategoryActions";

export const useAllCategories = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        dispatch(getAllCategories(6));
    }, [dispatch])

    const categories = useSelector(state => state.allCategories.categories)
    let pageCount = categories?.data?.paginationRes?.pages || 0;

    useEffect(() => {
        if (categories && categories?.status !== 200) setError(true)
        setLoading(false);
    }, [categories])

    const getPage = (page) => {
        dispatch(getAllCategoriesPage(page));
    }

    return {categories: categories?.data?.data, loading, error, pageCount, getPage};
}