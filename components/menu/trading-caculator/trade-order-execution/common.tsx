import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type CommonProps = {
    data : any; // Data to be displayed in the gallery information
    label : any;
};

const Common = ({ 
    data,
    label
}: CommonProps) => {
    
    const [dataValue, setDataValue] = useState<any>('');

    // Effect hook for any future initialization needs
    useEffect(() => {
        setDataValue(data);
    },[]);

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap ${label.titleBG ? label.titleBG : 'bg-gray-100'} dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={`${label.titleColor ? label.titleColor : ''} ${classNames(styles.descrption)}`}>{label.title? label.title : ''} 
                    {label.description? (
                        <span className={`text-xs font-light ${label.descriptionColor? label.descriptionColor : 'text-purple-600'}`}> {label.description}</span>
                    ) : ''} 
                </div>
            </th>
            <td className={`px-6 py-4 ${label.valueBG? label.valueBG : 'bg-orange-300'} text-black`}>
                <div className={`font-bold ${classNames(styles.value)} ${label.valueColor? label.valueColor : ''}`}>{dataValue}</div>
            </td>
        </tr>
    );
};

export default Common;
