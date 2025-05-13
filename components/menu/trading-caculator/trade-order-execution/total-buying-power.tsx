import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type TotalBuyingPowerProps = {
    data : any; // Data to be displayed in the gallery information
};

const TotalBuyingPower = ({ 
    data
}: TotalBuyingPowerProps) => {

    const [totalBuyingPower, setTotalBuyingPower] = useState<any>('');
    // Effect hook for any future initialization needs
    useEffect(() => {
        setTotalBuyingPower(data._getTradeOrderComputationData.totalBuyingPower);
    },[]);
    

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-sky-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={classNames(styles.descrption)}>Total Buying Power <span className="text-xs font-light text-purple-600">(Capital * Leverage)</span></div>
            </th>
            <td className="px-6 py-4 text-black bg-yellow-50">
                <div className={`font-bold ${classNames(styles.value)}`}>{`$${totalBuyingPower}`}</div>
            </td>
        </tr>
    );
};

export default TotalBuyingPower;
