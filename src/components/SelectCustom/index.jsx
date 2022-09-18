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
                const key = item['_id'] + item.name
                return (
                    <MenuItem key={key} value={item['_id']}>{item.name}</MenuItem>
                )
            })}
        </Select>
    );
};

export default SelectCustom;