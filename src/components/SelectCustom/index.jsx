import React from 'react';
import {MenuItem, Select} from "@mui/material";

const SelectCustom = ({data, labelId, label, value, onChange, style}) => {
    return (
        <Select
            labelId={labelId}
            label={label}
            value={value}
            onChange={onChange}
            style={style}
        >
            {data.map(item => {
                return (
                    <MenuItem key={item['_id']} value={item['_id']}>{item.name}</MenuItem>
                )
            })}
        </Select>
    );
};

export default SelectCustom;