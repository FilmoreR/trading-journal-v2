import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type RiskRewardRatioProps = {
    data : any; // Data to be displayed in the gallery information
    label : any;
};

const RiskRewardRatio = ({ 
    data,
    label
}: RiskRewardRatioProps) => {

    const [riskRewardRatio, setRiskRewardRatio] = useState<any>('');
    // Effect hook for any future initialization needs
    useEffect(() => {
        setRiskRewardRatio(data._getTradeOrderComputationData.riskRewardRatio);
    },[]);

    const handleChange = (e: any) => {
        setRiskRewardRatio(e.target.value);
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
                    <input 
                        type="text" 
                        id="standard-lot" 
                        className="font-bold text-right bg-orange-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900" 
                        placeholder={riskRewardRatio}
                        value={riskRewardRatio}
                        onChange={handleChange}/>
                </div>
            </td>
        </tr>
    );
};

export default RiskRewardRatio;
