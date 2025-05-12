import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type CurrencyPairProps = {
    data : any; // Data to be displayed in the gallery information
};

const CurrencyPair = ({ 
    data
}: CurrencyPairProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={classNames(styles.descrption)}>Currency Pair</div>
            </th>
            <td className="px-6 py-4 bg-orange-300 text-black">
                <div className={`font-bold ${classNames(styles.value)}`}>
                    {/* GBPUSD */}
                    <select id="default" className="bg-orange-300 border text-right border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option data-spread="1.6" data-pip-value="0.0001" value="EURUSD" selected>EURUSD</option>
                        <option data-spread="2" data-pip-value="0.01" value="USDJPY">USDJPY</option>
                        <option data-spread="1.9" data-pip-value="0.0001" value="USDCHF">USDCHF</option>
                        <option data-spread="2.3" data-pip-value="0.0001" value="AUDUSD">AUDUSD</option>
                        <option data-spread="2.8" data-pip-value="0.0001" value="NZDUSD">NZDUSD</option>
                        <option data-spread="1.8" data-pip-value="0.0001" value="GBPUSD">GBPUSD</option>
                        <option data-spread="2.3" data-pip-value="0.0001" value="USDCAD">USDCAD</option>
                    </select>
                </div>
            </td>
        </tr>
    );
};

export default CurrencyPair;
