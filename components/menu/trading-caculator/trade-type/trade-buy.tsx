import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

import TableTbodyTemplate from '../../../templates/table-tbody';

import StopLossPrice from './stop-loss-price';
import StopLossPips from './stop-loss-pips';

import PipValuePerLot from './pip-value-per-lot';
import ExpectedVolume from './expected-volume';

import TakeProfitPips from './take-profit-pips';
import TakeProfitPrice from './take-profit-price';

import SLMaximumLoss from './sl-maximum-loss';
import TPMaximumProfit from './tp-maximum-profit';

import SpreadPips from './spread-pips';
import SpreadCost from './spread-cost';
import TotalPotentialLoss from './total-potential-loss';

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
            <TableTbodyTemplate>
                <StopLossPrice 
                    data={data}
                    value={'1.30960'}
                    formulaDescription={'(Entry Price - (Entry Price * Stop Loss level %)'} />

                <StopLossPips 
                    data={data}
                    value={'132.283'}
                    formulaDescription={'((Entry Price - Stop Loss Price) / Pips Conversion)'} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <PipValuePerLot data={data} value={'$7.56'} />

                <ExpectedVolume data={data} value={'0.01'} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <TakeProfitPips data={data} value={'793.69'} />

                <TakeProfitPrice data={data} value={'1.40220'} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <SLMaximumLoss data={data} value={'$10.00 (1%)'} />

                <TPMaximumProfit data={data} value={'$60.00 (6%)'} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <SpreadPips data={data}/>

                <SpreadCost data={data} value={'$0.14'} />

                <TotalPotentialLoss data={data} value={'$10.14'} />
            </TableTbodyTemplate>
        </div>
    );
};

export default TradeBuy;
