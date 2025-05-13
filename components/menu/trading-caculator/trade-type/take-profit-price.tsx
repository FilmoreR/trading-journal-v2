import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type TakeProfitPriceProps = {
    value : string;
};

const TakeProfitPrice = ({
    value
}: TakeProfitPriceProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-emerald-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={`text-emerald-700 ${classNames(styles.descrption)}`}>Take Profit Price <span className="text-xs font-light text-purple-600">(Entry Price + (Take Profit (pips) × Pips Conversion))</span></div>
            </th>
            <td className="px-6 py-4 text-black bg-blue-900">
                <div className={`font-bold text-white ${classNames(styles.value)}`}>{value}</div>
            </td>
        </tr>
    );
};

export default TakeProfitPrice;
