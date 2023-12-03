import React from "react";

export function changeOpen(title: string, open: string, setOpen: React.Dispatch<React.SetStateAction<string>>){
    if(title === open){
        setOpen('')
    }else{
        setOpen(title)
    }
}