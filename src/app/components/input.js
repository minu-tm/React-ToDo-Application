import React from 'react';

export default ({
className,
placeholder,
value,
onChange,
...props
}) => {
 return (
    <input type="text" className={className}  placeholder={placeholder} value={value}
    onChange={onChange}
    />
 )
}
