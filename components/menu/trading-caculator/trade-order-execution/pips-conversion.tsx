import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type PipsConversionProps = {
    data : any; // Data to be displayed in the gallery information
};

const PipsConversion = ({ 
    data
}: PipsConversionProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={classNames(styles.descrption)}>Pips Conversion</div>
            </th>
            <td className="px-6 py-4 text-black bg-yellow-50">
                <div className={`font-bold ${classNames(styles.value)}`}>0.0001</div>
            </td>
        </tr>
    );
};

export default PipsConversion;
