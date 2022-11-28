import React from "react";
import { CommentStatus } from "../model/comment";
import { ChangeFilterListener } from "../shared/common-types"
import { Filter } from "./HomeApp"


interface CommentFilterStatusProps {
    onChangeFilter: ChangeFilterListener;
    filter: Filter
}


export default function CommentFilter({ filter, onChangeFilter }: CommentFilterStatusProps) {
    function handleChangeFilter(event: React.ChangeEvent<HTMLSelectElement>) {
        onChangeFilter(event.target.value === '0' ? undefined : parseInt(event.target.value))
    }



    return (


        <select value={filter} onChange={handleChangeFilter} className="TodoFilter">
            <option value='0'>All</option>
            <option value={CommentStatus.Active}>Active</option>
            <option value={CommentStatus.Suspended}>Suspend</option>
            
        </select>
        
    )
}