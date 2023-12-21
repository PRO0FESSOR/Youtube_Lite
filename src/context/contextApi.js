import React , { createContext , useState , useEffect} from "react";

import {fetchDataFromApi} from "../utils/api"

export const context = createContext();

export const AppContext = (props) => {
    const [loading ,setLoading] = useState(false);
    const [searchResults ,setSearchResults] = useState([]);
    const [selectCategories ,setSelectCategories] = useState("New");
    const [mobileMenu ,setMobileMenu] = useState(false);

    useEffect( () => {
        fetchSelectedCategoryData(selectCategories)
    },[selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            // console.log(contents);
            setSearchResults(contents);
            console.log(searchResults)
            setLoading(false)
        })
    }

    return (
        <context.Provider value = {{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu,
        }}>

            {props.children}
            
        </context.Provider>
    )

}