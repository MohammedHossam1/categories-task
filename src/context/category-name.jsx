'use client'
import { createContext, useContext, useState } from "react";

const CategoryName = createContext('');


export function CategoriesWrapper({ children }) {
    const [categoryName, setCategoryName] = useState("")
    return (
        <CategoryName.Provider value={{ categoryName, setCategoryName }}>
            {children}
        </CategoryName.Provider>
    )
}

export function useCategoryNameContext() {
    return useContext(CategoryName)
}