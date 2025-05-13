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
type TradeShortProps = {
    data : any; // Data to be displayed in the gallery information
};

const TradeShort = ({ 
    data
}: TradeShortProps) => {
    const [shortStopLossPrice, setShortStopLossPrice] = useState<any>('');
    const [shortStopLossPips, setShortStopLossPips] = useState<any>('');

    const [shortPipValuePerLot, setShortPipValuePerLot] = useState<any>('');
    const [shortExpectedVolume, setShortExpectedVolume] = useState<any>('');

    const [shortTakeProfitPips, setShortTakeProfitPips] = useState<any>('');
    const [shortTakeProfitPrice, setShortTakeProfitPrice] = useState<any>('');

    const [shortSLMaximumLoss, setShortSLMaximumLoss] = useState<any>('');
    const [shortSLMaximumLossPercentage, setShortSLMaximumLossPercentage] = useState<any>('');

    const [shortTPMaximumProfit, setShortTPMaximumProfit] = useState<any>('');
    const [shortTPMaximumProfitPercentage, setShortTPMaximumProfitPerentage] = useState<any>('');

    const [shortSpreadPips, setShortSpreadPips] = useState<any>('');
    const [shortSpreadCost, setShortSpreadCost] = useState<any>('');
    const [shortTotalPotentialLoss, setShortTotalPotentialLoss] = useState<any>('');

    // Effect hook for any future initialization needs
    useEffect(() => {
        setShortStopLossPrice(data._getTradeOrderComputationData.shortStopLossPrice);
        setShortStopLossPips(data._getTradeOrderComputationData.shortStopLossPips);

        setShortPipValuePerLot(data._getTradeOrderComputationData.shortPipValuePerLot);
        setShortExpectedVolume(data._getTradeOrderComputationData.shortExpectedVolume);

        setShortTakeProfitPips(data._getTradeOrderComputationData.shortTakeProfitPips);
        setShortTakeProfitPrice(data._getTradeOrderComputationData.shortTakeProfitPrice);

        setShortSLMaximumLoss(data._getTradeOrderComputationData.shortSLMaximumLoss);
        setShortSLMaximumLossPercentage(data._getTradeOrderComputationData.shortSLMaximumLossPercentage);

        setShortTPMaximumProfit(data._getTradeOrderComputationData.shortTPMaximumProfit);
        setShortTPMaximumProfitPerentage(data._getTradeOrderComputationData.shortTPMaximumProfitPercentage);

        setShortSpreadPips(data._getTradeOrderComputationData.shortSpreadPips);
        setShortSpreadCost(data._getTradeOrderComputationData.shortSpreadCost);
        setShortTotalPotentialLoss(data._getTradeOrderComputationData.shortTotalPotentialLoss);
    },[]);

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${classNames(styles.trade__type)}`}>
            <h5 className="text-xl font-bold dark:text-white text-red-700">SELL / SHORT</h5>
            <br />
            <TableTbodyTemplate>
                {shortStopLossPrice? (
                    <StopLossPrice 
                        value={shortStopLossPrice.toFixed(5)}
                        formulaDescription={'(Entry Price + (Entry Price * Stop Loss level %)'} />
                ) : ''}

                {shortStopLossPips? (
                    <StopLossPips 
                        value={shortStopLossPips.toFixed(3)}
                        formulaDescription={'(( Stop Loss Price - Entry Price) / Pips Conversion)'} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {shortPipValuePerLot? (
                    <PipValuePerLot value={`$${shortPipValuePerLot.toFixed(2)}`} />
                ) : ''}

                {shortExpectedVolume? (
                    <ExpectedVolume value={shortExpectedVolume.toFixed(2)} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {shortTakeProfitPips? (
                    <TakeProfitPips value={shortTakeProfitPips.toFixed(2)} />
                ) : ''}

                {shortTakeProfitPrice? (
                     <TakeProfitPrice value={shortTakeProfitPrice.toFixed(5)} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {shortSLMaximumLoss? (
                     <SLMaximumLoss value={`$${shortSLMaximumLoss} (${(shortSLMaximumLossPercentage * 100)}%)`} />
                ) : ''}

                {shortTPMaximumProfit? (
                    <TPMaximumProfit value={`$${shortTPMaximumProfit} (${(shortTPMaximumProfitPercentage * 100)}%)`}/>
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {shortSpreadPips? (
                    <SpreadPips value={shortSpreadPips} />
                ) : ''}

                {shortSpreadCost? (
                    <SpreadCost value={`$${shortSpreadCost.toFixed(2)}`} />
                ) : ''}

                {shortTotalPotentialLoss? (
                    <TotalPotentialLoss value={`$${shortTotalPotentialLoss.toFixed(2)}`} />
                ) : ''}
            </TableTbodyTemplate>
        </div>
    );
};

export default TradeShort;
