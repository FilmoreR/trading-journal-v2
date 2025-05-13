import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type RewardRatioPercemtageProps = {
    data : any; // Data to be displayed in the gallery information
};

const RewardRatioPercemtage = ({ 
    data
}: RewardRatioPercemtageProps) => {

    const [rewardRatioPercemtage, setRewardRatioPercemtage] = useState<any>('');
    // Effect hook for any future initialization needs
    useEffect(() => {
        setRewardRatioPercemtage(data._getTradeOrderComputationData.rewardRatioPercentage);
    },[]);

    return (
        <tr className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800 ${classNames(styles.table_head)}`}>
                <div className={classNames(styles.descrption)}>Reward Ratio % <span className="text-xs font-light text-purple-600">(Risk Reward Ratio / Reward Ratio Value)</span></div>
            </th>
            <td className="px-6 py-4 text-black bg-yellow-50">
                <div className={`font-bold ${classNames(styles.value)}`}>{rewardRatioPercemtage}</div>
            </td>
        </tr>
    );
};

export default RewardRatioPercemtage;
