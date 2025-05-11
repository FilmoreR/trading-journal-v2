import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type TradeBuyProps = {
    data : any; // Data to be displayed in the gallery information
};

const TradeBuy = ({ 
    data
}: TradeBuyProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${classNames(styles.trade__type)}`}>
            <h5 className="text-xl font-bold dark:text-white text-emerald-700">BUY / LONG</h5>
            <br />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                     <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-red-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={`text-red-600 ${classNames(styles.descrption)}`}>Stop Loss Price <span className="text-xs font-light text-purple-600">(Entry Price - (Entry Price * Stop Loss level %)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-blue-900">
                            <div className={`font-bold text-white ${classNames(styles.value)}`}>1.30960</div>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={`${classNames(styles.descrption)}`}>Stop Loss (pips) <span className="text-xs font-light text-purple-600">((Entry Price - Stop Loss Price) / Pips Conversion)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>132.283</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                     <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Pip Value per lot <span className="text-xs font-light text-purple-600">(Pips Conversion × Standard Lot) / Entry Price</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>$7.56</div>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-blue-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={`text-blue-800 ${classNames(styles.descrption)}`}>Expected Volume <span className="text-xs font-light text-purple-600">(Risk Amount / (Stop Loss (pips) × Pip Value per lot))</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-blue-900">
                            <div className={`font-bold text-white ${classNames(styles.value)}`}>0.01</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                     <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Take Profit (pips) <span className="text-xs font-light text-purple-600">(Stop Loss (pips) × Risk Reward Ratio )</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>793.698</div>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-emerald-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={`text-emerald-700 ${classNames(styles.descrption)}`}>Take Profit Price <span className="text-xs font-light text-purple-600">(Entry Price + (Take Profit (pips) × Pips Conversion))</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-blue-900">
                            <div className={`font-bold text-white ${classNames(styles.value)}`}>1.40220</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                     <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={`text-red-600 ${classNames(styles.descrption)}`}>SL Maximum Loss <span className="text-xs font-light text-purple-600">(Stop Loss (pips) * Pip Value per lot  * Expected Volume)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-red-50">
                            <div className={`font-bold text-red-600 ${classNames(styles.value)}`}>$10.00 (1%)</div>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={`text-emerald-700 ${classNames(styles.descrption)}`}>Take Profit Price <span className="text-xs font-light text-purple-600">(Entry Price + (Take Profit (pips) × Pips Conversion))</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-emerald-50">
                            <div className={`font-bold text-emerald-700 ${classNames(styles.value)}`}>$60.00 (6%)</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                     <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Spread (pips)</div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>1.8</div>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Spread Cost <span className="text-xs font-light text-purple-600">(Spread (pips) * Pip Value per Lot * Expected Volume)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold text-red-600 ${classNames(styles.value)}`}>$0.14</div>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Total Potential Loss <span className="text-xs font-light text-purple-600">(SL Maximum Loss + Spread Cost)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-red-100">
                            <div className={`font-bold text-red-600 ${classNames(styles.value)}`}>$10.14</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TradeBuy;
