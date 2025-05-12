import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type ExpectedVolumeProps = {
    data : any;
    value : string;
};

const ExpectedVolume = ({ 
    data,
    value
}: ExpectedVolumeProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-blue-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={`text-blue-800 ${classNames(styles.descrption)}`}>Expected Volume <span className="text-xs font-light text-purple-600">(Risk Amount / (Stop Loss (pips) × Pip Value per lot))</span></div>
            </th>
            <td className="px-6 py-4 text-black bg-blue-900">
                <div className={`font-bold text-white ${classNames(styles.value)}`}>{value}</div>
            </td>
        </tr>
    );
};

export default ExpectedVolume;
