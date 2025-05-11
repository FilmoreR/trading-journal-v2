import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type TradeOrderExecutionProps = {
    data : any; // Data to be displayed in the gallery information
};

const TradeOrderExecution = ({ 
    data
}: TradeOrderExecutionProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${classNames(styles.trade__order__execution)}`}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Standard Lot <span className="text-xs font-light text-purple-600">(1 lot = 100,000 units)</span></div>
                        </th>
                        <td className="px-6 py-4 bg-orange-300 text-black">
                            <div className={`font-bold ${classNames(styles.value)}`}>
                                {/* 100,000 */}
                                <input type="text" id="small-input" className="font-bold text-right bg-orange-300 p-2.5 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900" placeholder="100,000" value={'100,000'}/>
                            </div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Capital</div>
                        </th>
                        <td className="px-6 py-4 bg-orange-300 text-black">
                            <div className={`font-bold ${classNames(styles.value)}`}>
                                {/* $1,000.00 */}
                                <input type="text" id="standard-lot" className="font-bold text-right bg-orange-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900" placeholder="$1,000.00" value={'$1,000.00'}/>
                            </div>
                        </td>
                    </tr>

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

                     <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Pips Conversion</div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>0.0001</div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Risk % of Capital Per Trade</div>
                        </th>
                        <td className="px-6 py-4 bg-orange-300 text-black">
                            <div className={`font-bold ${classNames(styles.value)}`}>
                                {/* 2% */}
                                <input type="text" id="standard-lot" className="font-bold text-right bg-orange-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900" placeholder="2%" value={'2%'}/>
                            </div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Risk Value Per Trade <span className="text-xs font-light text-purple-600">(Capital *Risk  % of Capital  Per Trade)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>$20.00</div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Risk Appetite % Per Position</div>
                        </th>
                        <td className="px-6 py-4 bg-orange-300 text-black">
                            <div className={`font-bold ${classNames(styles.value)}`}>
                                {/* 50% */}
                                <input type="text" id="standard-lot" className="font-bold text-right bg-orange-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900" placeholder="50%" value={'50%'}/>
                            </div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Risk Appetite Value Per Position <span className="text-xs font-light text-purple-600">(Risk Value Per Trade * Risk Appetite % Per Position)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>$10.00</div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Risk Appetite % of Captial <span className="text-xs font-light text-purple-600">(Risk Appetite Value Per Position / Capital)</span></div>
                        </th>
                        <td className="px-6 py- text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>1%</div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Risk Reward Ratio <span className="text-xs font-light text-purple-600">(ex: 3:1)</span></div>
                        </th>
                        <td className="px-6 py-4 bg-orange-300 text-black">
                            <div className={`font-bold ${classNames(styles.value)}`}>
                                {/* 6 */}
                                <input type="text" id="standard-lot" className="font-bold text-right bg-orange-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900" placeholder="6" value={'6'}/>
                            </div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Reward Ratio Value <span className="text-xs font-light text-purple-600">(Risk Appetite Value Per Position * Risk Reward Ratio)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>$60</div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Reward Ratio % <span className="text-xs font-light text-purple-600">(Risk Reward Ratio / Reward Ratio Value)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>10%</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-sky-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Leverage</div>
                        </th>
                        <td className="px-6 py-4 bg-orange-300 text-black">
                            <div className={`font-bold ${classNames(styles.value)}`}>
                                {/* 10 */}
                                {/* <input type="text" id="standard-lot" className="font-bold text-right bg-orange-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900" placeholder="10" value={'10'}/> */}
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

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-sky-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Total Buying Power <span className="text-xs font-light text-purple-600">(Capital * Leverage)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>$10,000.00</div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-sky-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Total Risk Value <span className="text-xs font-light text-purple-600">(Total Buying Power * Risk  % of Capital  Per Trade)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>$200.00</div>
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                       <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-sky-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Risk Amount <span className="text-xs font-light text-purple-600">(Capital × Risk Appetite % of Captial)</span></div>
                        </th>
                        <td className="px-6 py-4 text-black bg-yellow-50">
                            <div className={`font-bold ${classNames(styles.value)}`}>$200.00</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
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

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                       <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-orange-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                            <div className={classNames(styles.descrption)}>Stop Loss level %</div>
                        </th>
                        <td className="px-6 py-4 bg-orange-300 text-black">
                            <div className={`font-bold ${classNames(styles.value)}`}>
                                {/* 1% */}
                                <input type="text" id="standard-lot" className="font-bold text-right bg-orange-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900" placeholder="1%" value={'1%'}/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TradeOrderExecution;
