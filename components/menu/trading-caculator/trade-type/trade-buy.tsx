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
    onChangeSpreadPipsBuy: (e: any) => void;
    onChangeAdjustStopLevelBuy: (e: any) => void;
};

const TradeBuy = ({ 
    data,
    onChangeSpreadPipsBuy,
    onChangeAdjustStopLevelBuy
}: TradeBuyProps) => {
    const currencyPair = data._getTradeOrderComputationData.currencyPair;

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${classNames(styles.trade__type)}`}>
            <h5 className="text-xl font-bold dark:text-white text-emerald-700">BUY / LONG</h5>
            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().stopLossPriceBuy} data={data._getTradeOrderComputationData.buyStopLossPrice.toFixed(5)} />
                <Common label={tradeCaculatorLabel().stopLossPipsBuy} data={data._getTradeOrderComputationData.buyStopLossPips.toFixed(3)} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().pipValuePerLot} data={data._getTradeOrderComputationData.buyPipValuePerLot.toFixed(2)} />
                <Common label={tradeCaculatorLabel().expectedVolume} data={data._getTradeOrderComputationData.buyExpectedVolume.toFixed(2)} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().takeProfitPips} data={data._getTradeOrderComputationData.buyTakeProfitPips.toFixed(2)} />
                <Common label={tradeCaculatorLabel().takeProfitPrice} data={data._getTradeOrderComputationData.buyTakeProfitPrice.toFixed(5)} />
            </TableTbodyTemplate>
            <br />
            {/* This is for USDJPY caculation */}
            {currencyPair.toUpperCase() === 'USDJPY' ? (
                <div>
                    <TableTbodyTemplate>
                        <Common 
                            label={tradeCaculatorLabel().SLMaximumLossUSDJPY} 
                            data={`$${data._getTradeOrderComputationData.buySLMaximumLoss} (${(data._getTradeOrderComputationData.buySLMaximumLossPercentage * 100)}%)`} />
                        <Common label={tradeCaculatorLabel().TPMaximumProfitUSDJPY} 
                            data={`$${data._getTradeOrderComputationData.buyTPMaximumProfit} (${(data._getTradeOrderComputationData.buyTPMaximumProfitPercentage * 100)}%)`} />
                    </TableTbodyTemplate>
                    <br />
                </div>
            ) : ''}
            {/* This is for USDJPY caculation */}
            <TableTbodyTemplate>
                <SpreadPips label={tradeCaculatorLabel().spreadPips} value={data._getTradeOrderComputationData.buySpreadPips} getChangeData={onChangeSpreadPipsBuy} />
                <Common label={tradeCaculatorLabel().spreadCost} data={`$${data._getTradeOrderComputationData.buySpreadCost.toFixed(2)}`} />

                {/* This is for USDJPY caculation */}
                {currencyPair.toUpperCase() === 'USDJPY' ? (
                    <Common label={tradeCaculatorLabel().totalPotentialLossUSDJPY} data={`$${data._getTradeOrderComputationData.buyTotalPotentialLoss.toFixed(2)}`} />
                ) : ''}
                {currencyPair.toUpperCase() === 'USDJPY' ? (
                    <Common label={tradeCaculatorLabel().totalPotentialProfitUSDJPY} data={`$60.17`} />
                ) : ''}
                {/* This is for USDJPY caculation */}
            </TableTbodyTemplate>
            {currencyPair.toUpperCase() != 'USDJPY' ? (
                <div>
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
                </div>
            ) : ''}
            <br />
            <TableTbodyTemplate>
                <AdjustStopLevel label={tradeCaculatorLabel().adjustStopLevel} value={'0.42'} getChangeData={onChangeAdjustStopLevelBuy} />
                <Common label={tradeCaculatorLabel().newStopLossBuy} data={`1.32762`} />
                {currencyPair.toUpperCase() === 'USDJPY' ? (
                    <Common label={tradeCaculatorLabel().newStopLossUSDJPYBuy} data={`70.64801`} />
                ) : ''}
            </TableTbodyTemplate>
            {currencyPair.toUpperCase() === 'USDJPY' ? (
                <div>
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
                </div>
            ) : ''}

            {currencyPair.toUpperCase() != 'USDJPY' ? (
                <div>
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
            ) : ''}
        </div>
    );
};

export default TradeBuy;
