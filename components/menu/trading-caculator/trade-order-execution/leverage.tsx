import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type LeverageProps = {
    data : any; // Data to be displayed in the gallery information
};

const Leverage = ({ 
    data
}: LeverageProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-sky-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={classNames(styles.descrption)}>Leverage</div>
            </th>
            <td className="px-6 py-4 bg-orange-300 text-black">
                <div className={`font-bold ${classNames(styles.value)}`}>
                    <select id="default" className="bg-orange-300 border text-right border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">1:1</option>
                        <option value="2">2:1</option>
                        <option value="3">3:1</option>
                        <option value="5">5:1</option>
                        <option value="10" selected>10:1</option>
                        <option value="15">15:1</option>
                        <option value="20">20:1</option>
                        <option value="25">25:1</option>
                        <option value="50">50:1</option>
                        <option value="66">66:1</option>
                        <option value="100">100:1</option>
                        <option value="200">200:1</option>
                        <option value="300">300:1</option>
                        <option value="400">400:1</option>
                        <option value="500">500:1</option>
                        <option value="888">888:1</option>
                        <option value="1000">1000:1</option>
                    </select>
                </div>
            </td>
        </tr>
    );
};

export default Leverage;
