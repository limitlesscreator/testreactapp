import {useEffect, useState} from "react";

function savedValue(key,initValue){
    let temp = JSON.parse(localStorage.getItem(key))
    if (temp) return temp
    return initValue
}

export const useLocalStorage = (key,initValue) => {
    const [value,setValue] = useState(() => {
        savedValue(key,initValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[value])

    return [value, setValue]
}