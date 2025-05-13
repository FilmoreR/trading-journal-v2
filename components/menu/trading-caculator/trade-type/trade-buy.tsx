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
    const [buyStopLossPrice, setBuyStopLossPrice] = useState<any>('');
    const [buyStopLossPips, setBuyStopLossPips] = useState<any>('');

    const [buyPipValuePerLot, setBuyPipValuePerLot] = useState<any>('');
    const [buyExpectedVolume, setBuyExpectedVolume] = useState<any>('');

    const [buyTakeProfitPips, setBuyTakeProfitPips] = useState<any>('');
    const [buyTakeProfitPrice, setBuyTakeProfitPrice] = useState<any>('');

    const [buySLMaximumLoss, setBuySLMaximumLoss] = useState<any>('');
    const [buySLMaximumLossPercentage, setBuySLMaximumLossPercentage] = useState<any>('');

    const [buyTPMaximumProfit, setBuyTPMaximumProfit] = useState<any>('');
    const [buyTPMaximumProfitPercentage, setBuyTPMaximumProfitPerentage] = useState<any>('');

    const [buySpreadPips, setBuySpreadPips] = useState<any>('');
    const [buySpreadCost, setBuySpreadCost] = useState<any>('');
    const [buyTotalPotentialLoss, setBuyTotalPotentialLoss] = useState<any>('');

    // Effect hook for any future initialization needs
    useEffect(() => {
        setBuyStopLossPrice(data._getTradeOrderComputationData.buyStopLossPrice);
        setBuyStopLossPips(data._getTradeOrderComputationData.buyStopLossPips);

        setBuyPipValuePerLot(data._getTradeOrderComputationData.buyPipValuePerLot);
        setBuyExpectedVolume(data._getTradeOrderComputationData.buyExpectedVolume);

        setBuyTakeProfitPips(data._getTradeOrderComputationData.buyTakeProfitPips);
        setBuyTakeProfitPrice(data._getTradeOrderComputationData.buyTakeProfitPrice);

        setBuySLMaximumLoss(data._getTradeOrderComputationData.buySLMaximumLoss);
        setBuySLMaximumLossPercentage(data._getTradeOrderComputationData.buySLMaximumLossPercentage);

        setBuyTPMaximumProfit(data._getTradeOrderComputationData.buyTPMaximumProfit);
        setBuyTPMaximumProfitPerentage(data._getTradeOrderComputationData.buyTPMaximumProfitPercentage);

        setBuySpreadPips(data._getTradeOrderComputationData.buySpreadPips);
        setBuySpreadCost(data._getTradeOrderComputationData.buySpreadCost);
        setBuyTotalPotentialLoss(data._getTradeOrderComputationData.buyTotalPotentialLoss);
    },[]);

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${classNames(styles.trade__type)}`}>
            <h5 className="text-xl font-bold dark:text-white text-emerald-700">BUY / LONG</h5>
            <br />
            <TableTbodyTemplate>
                {buyStopLossPrice? (
                    <StopLossPrice 
                        value={buyStopLossPrice.toFixed(5)}
                        formulaDescription={'(Entry Price - (Entry Price * Stop Loss level %)'} />
                ) : ''}

                {buyStopLossPips? (
                    <StopLossPips 
                        value={buyStopLossPips.toFixed(3)}
                        formulaDescription={'((Entry Price - Stop Loss Price) / Pips Conversion)'} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {buyPipValuePerLot? (
                    <PipValuePerLot value={`$${buyPipValuePerLot.toFixed(2)}`} />
                ) : ''}

                {buyExpectedVolume? (
                    <ExpectedVolume value={buyExpectedVolume.toFixed(2)} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {buyTakeProfitPips? (
                    <TakeProfitPips value={buyTakeProfitPips.toFixed(2)} />
                ) : ''}

                {buyTakeProfitPrice? (
                     <TakeProfitPrice value={buyTakeProfitPrice.toFixed(5)} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {buySLMaximumLoss? (
                     <SLMaximumLoss value={`$${buySLMaximumLoss} (${(buySLMaximumLossPercentage * 100)}%)`} />
                ) : ''}

                {buyTPMaximumProfit? (
                    <TPMaximumProfit value={`$${buyTPMaximumProfit} (${(buyTPMaximumProfitPercentage * 100)}%)`}/>
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {buySpreadPips? (
                    <SpreadPips value={buySpreadPips} />
                ) : ''}

                {buySpreadCost? (
                    <SpreadCost value={`$${buySpreadCost.toFixed(2)}`} />
                ) : ''}

                {buyTotalPotentialLoss? (
                    <TotalPotentialLoss value={`$${buyTotalPotentialLoss.toFixed(2)}`} />
                ) : ''}
            </TableTbodyTemplate>
        </div>
    );
};

export default TradeBuy;
