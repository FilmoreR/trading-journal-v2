import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

import TableTbodyTemplate from '../../../templates/table-tbody';
import tradeCaculatorLabel from '../../../../constants/trade-caculator-label';
import Common from './common';

import SpreadPips from './spread-pips';
import AdjustStopLevel from './adjust-stop-level';

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
    const [buyTotalPotentialProfit, setBuyTotalPotentialProfit] = useState<any>('');

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
        setBuyTotalPotentialProfit(data._getTradeOrderComputationData.buyTotalPotentialLoss);
    },[]);

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${classNames(styles.trade__type)}`}>
            <h5 className="text-xl font-bold dark:text-white text-emerald-700">BUY / LONG</h5>
            <br />
            <TableTbodyTemplate>
                {buyStopLossPrice? (
                    <Common label={tradeCaculatorLabel().stopLossPriceBuy} data={buyStopLossPrice.toFixed(5)} />
                ) : ''}

                {buyStopLossPips? (
                    <Common label={tradeCaculatorLabel().stopLossPipsBuy} data={buyStopLossPips.toFixed(3)} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {buyPipValuePerLot? (
                    <Common label={tradeCaculatorLabel().pipValuePerLot} data={buyPipValuePerLot.toFixed(2)} />
                ) : ''}

                {buyExpectedVolume? (
                    <Common label={tradeCaculatorLabel().expectedVolume} data={buyExpectedVolume.toFixed(2)} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {buyTakeProfitPips? (
                    <Common label={tradeCaculatorLabel().takeProfitPips} data={buyTakeProfitPips.toFixed(2)} />
                ) : ''}

                {buyTakeProfitPrice? (
                    <Common label={tradeCaculatorLabel().takeProfitPrice} data={buyTakeProfitPrice.toFixed(5)} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            {/* This is for USDJPY caculation */}
            <TableTbodyTemplate>
                {buySLMaximumLoss? (
                    <Common label={tradeCaculatorLabel().SLMaximumLossUSDJPY} data={`$${buySLMaximumLoss} (${(buySLMaximumLossPercentage * 100)}%)`} />
                ) : ''}

                {buyTPMaximumProfit? (
                    <Common label={tradeCaculatorLabel().TPMaximumProfitUSDJPY} data={`$${buyTPMaximumProfit} (${(buyTPMaximumProfitPercentage * 100)}%)`} />
                ) : ''}
            </TableTbodyTemplate>
            {/* This is for USDJPY caculation */}
            <br />
            <TableTbodyTemplate>
                {buySpreadPips? (
                    <SpreadPips label={tradeCaculatorLabel().spreadPips} value={buySpreadPips} />
                ) : ''}

                {buySpreadCost? (
                    <Common label={tradeCaculatorLabel().spreadCost} data={`$${buySpreadCost.toFixed(2)}`} />
                ) : ''}

                {/* This is for USDJPY caculation */}
                {buyTotalPotentialLoss? (
                    <Common label={tradeCaculatorLabel().totalPotentialLossUSDJPY} data={`$${buyTotalPotentialLoss.toFixed(2)}`} />
                ) : ''}

                {buyTotalPotentialProfit? (
                    <Common label={tradeCaculatorLabel().totalPotentialProfitUSDJPY} data={`$60.17`} />
                ) : ''}
                {/* This is for USDJPY caculation */}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().lotSize} data={`2000`} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().lossPipsMovedBuy} data={`0.00666`} />
                <Common label={tradeCaculatorLabel().loss} data={`$13.13 (1.3%)`} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().profitPipsMovedBuy} data={`0.03998`} />
                <Common label={tradeCaculatorLabel().profit} data={`$79.95 (8%)`} />
            </TableTbodyTemplate>

            <br />
            <TableTbodyTemplate>
                <AdjustStopLevel label={tradeCaculatorLabel().adjustStopLevel} value={'0.42'} />
                <Common label={tradeCaculatorLabel().newStopLossBuy} data={`1.32762`} />
                <Common label={tradeCaculatorLabel().newStopLossUSDJPYBuy} data={`70.64801`} />
            </TableTbodyTemplate>

            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().NEWSLMaximumLossUSDJPY} data={`$9.70 (1%)`} />
                <Common label={tradeCaculatorLabel().NEWTotalPotentialLossUSDJPY} data={`$10.04`} />
            </TableTbodyTemplate>

            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().NEWTakeProfitPipsUSDJPY} data={`423.88806`} />
                <Common label={tradeCaculatorLabel().NEWTakeProfitPriceUSDJPY} data={`149.90488`} />
            </TableTbodyTemplate>

            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().NEWTPMaximumProfitUSDJPY} data={`$58.20 (5.82%)`} />
                <Common label={tradeCaculatorLabel().NEWTotalPotentialProfitUSDJPY} data={`$58.54`} />
            </TableTbodyTemplate>

            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().NEWLossPipsMovedBuy} data={`0.00493`} />
                <Common label={tradeCaculatorLabel().NEWLoss} data={`$9.86 (0.99%)`} />
                <Common label={tradeCaculatorLabel().NEWStopLossBuy} data={`49.30435`} />
            </TableTbodyTemplate>

            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().NEWTakeProfitPips} data={`295.8261`} />
                <Common label={tradeCaculatorLabel().NEWTakeProfitPriceBuy} data={`1.36213`} />
            </TableTbodyTemplate>

            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().NEWTakeProfitBuy} data={`0.02958`} />
                <Common label={tradeCaculatorLabel().NEWTakeProfit} data={`$59.17 (5.92%)`} />
            </TableTbodyTemplate>

            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().totalPotentialLoss} data={`$10.22`} />
                <Common label={tradeCaculatorLabel().totalPotentialProfit} data={`$69.39`} />
            </TableTbodyTemplate>
        </div>
    );
};

export default TradeBuy;
