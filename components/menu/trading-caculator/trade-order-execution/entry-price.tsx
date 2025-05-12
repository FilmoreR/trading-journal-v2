import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type EntryPriceProps = {
    data : any; // Data to be displayed in the gallery information
};

const EntryPrice = ({ 
    data
}: EntryPriceProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-orange-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={classNames(styles.descrption)}>Entry Price</div>
            </th>
            <td className="px-6 py-4 bg-orange-300 text-black">
                <div className={`font-bold ${classNames(styles.value)}`}>
                    {/* 1.32283 */}
                    <input type="text" id="standard-lot" className="font-bold text-right bg-orange-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900" placeholder="1.32283" value={'1.32283'}/>
                </div>
            </td>
        </tr>
    );
};

export default EntryPrice;
