import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type AdjustStopLevelProps = {
    value : any;
    label : any;
};

const AdjustStopLevel = ({ 
    value,
    label
}: AdjustStopLevelProps) => {

    const [adjustStopLevel, setAdjustStopLevel] = useState<any>('');
    // Effect hook for any future initialization needs
    useEffect(() => {
        setAdjustStopLevel(value);
    },[]);

    const handleChange = (e: any) => {
        setAdjustStopLevel(e.target.value);
    };

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap ${label.titleBG ? label.titleBG : 'bg-gray-100'} dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={classNames(styles.descrption)}>{label.title? label.title : ''} 
                    {label.description? (
                        <span className={`text-xs font-light ${label.descriptionColor? label.descriptionColor : 'text-purple-600'}`}> {label.description}</span>
                    ) : ''} 
                </div>
            </th>
            <td className={`px-6 py-4 ${label.valueBG? label.valueBG : 'bg-orange-300'} text-black`}>
                <input 
                    type="text" 
                    id="standard-lot" 
                    className="font-bold text-right bg-yellow-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900" 
                    placeholder={adjustStopLevel}
                    value={adjustStopLevel}
                    onChange={handleChange}/>
            </td>
        </tr>
    );
};

export default AdjustStopLevel;
