import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type SLMaximumLossProps = {
    value : string;
};

const SLMaximumLoss = ({ 
    value
}: SLMaximumLossProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={`text-red-600 ${classNames(styles.descrption)}`}>SL Maximum Loss <span className="text-xs font-light text-purple-600">(Stop Loss (pips) * Pip Value per lot  * Expected Volume)</span></div>
            </th>
            <td className="px-6 py-4 text-black bg-red-50">
                <div className={`font-bold text-red-600 ${classNames(styles.value)}`}>{value}</div>
            </td>
        </tr>
    );
};

export default SLMaximumLoss;
