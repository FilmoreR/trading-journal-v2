import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type CurrencyPairProps = {
    data : any; // Data to be displayed in the gallery information
    label : any;
    getChangeData: (e: any) => void;
};

const CurrencyPair = ({ 
    data,
    label,
    getChangeData
}: CurrencyPairProps) => {

    const [currencyPairList, setCurrencyPairList] = useState<any>([]);
    const [currencyPair, setCurrencyPair] = useState<any>('');

    // Effect hook for any future initialization needs
    useEffect(() => {
        setCurrencyPairList(data.responseCurrencyPairs);
        setCurrencyPair(data._getTradeOrderComputationData.currencyPair);
    },[]);

    const handleChange = (e: any) => {
        setCurrencyPair(e.target.value);
        getChangeData(e);
    };

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap ${label.titleBG ? label.titleBG : 'bg-gray-100'} dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={classNames(styles.descrption)}>{label.title? label.title : ''} 
                    {label.description? (
                        <span className={`text-xs font-light ${label.descriptionColor? label.descriptionColor : 'text-purple-600'}`}> {label.description}</span>
                    ) : ''} 
                </div>
            </th>
            <td className={`px-6 py-4 ${label.valueBG? label.valueBG : 'bg-orange-300'} text-black`}>
                <div className={`font-bold ${classNames(styles.value)} ${label.valueColor? label.valueColor : ''}`}>
                    {currencyPairList? (
                        <select 
                            id="default" 
                            className="bg-orange-300 border text-right border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={currencyPair} 
                            onChange={handleChange}>
                            {currencyPairList.map((res : any, index : number) => (
                                <option 
                                    id={`curreny-${index}`} 
                                    data-spread={res.averageSpread}
                                    data-pip-value={res.pipsConversion}
                                    data-stop-loss={res.stopLosslevel}
                                    value={res.curreny} 
                                    key={index}>
                                        {res.curreny}
                                </option>
                            ))}
                        </select>
                    ) : ''}
                </div>
            </td>
        </tr>
    );
};

export default CurrencyPair;
