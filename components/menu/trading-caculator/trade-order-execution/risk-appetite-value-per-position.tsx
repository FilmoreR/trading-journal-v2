import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type RiskAppetiteValuePerPositionProps = {
    data : any; // Data to be displayed in the gallery information
};

const RiskAppetiteValuePerPosition = ({ 
    data
}: RiskAppetiteValuePerPositionProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={classNames(styles.descrption)}>Risk Appetite Value Per Position <span className="text-xs font-light text-purple-600">(Risk Value Per Trade * Risk Appetite % Per Position)</span></div>
            </th>
            <td className="px-6 py-4 text-black bg-yellow-50">
                <div className={`font-bold ${classNames(styles.value)}`}>$10.00</div>
            </td>
        </tr>
    );
};

export default RiskAppetiteValuePerPosition;
