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
                            data={`$${data._getTradeOrderComputationData.buySLMaximumLossUSDJPY.toFixed(2)} (${(data._getTradeOrderComputationData.buySLMaximumLossPercentageUSDJPY * 100).toFixed(1)}%)`} />
                        <Common label={tradeCaculatorLabel().TPMaximumProfitUSDJPY} 
                            data={`$${data._getTradeOrderComputationData.buyTPMaximumProfitUSDJPY.toFixed(2)} (${(data._getTradeOrderComputationData.buyTPMaximumProfitPercentageUSDJPY * 100).toFixed(1)}%)`} />
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
                    <Common label={tradeCaculatorLabel().totalPotentialLossUSDJPY} data={`$${data._getTradeOrderComputationData.buyTotalPotentialLossUSDJPY.toFixed(2)}`} />
                ) : ''}
                {currencyPair.toUpperCase() === 'USDJPY' ? (
                    <Common label={tradeCaculatorLabel().totalPotentialProfitUSDJPY} data={`$${data._getTradeOrderComputationData.buyTotalPotentialProfitUSDJPY.toFixed(2)}`} />
                ) : ''}
                {/* This is for USDJPY caculation */}
            </TableTbodyTemplate>
            {currencyPair.toUpperCase() != 'USDJPY' ? (
                <div>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().lotSize} data={`${data._getTradeOrderComputationData.buyLotSize.toFixed(0)}`} />
                    </TableTbodyTemplate>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().lossPipsMovedBuy} data={`${data._getTradeOrderComputationData.buyLossPipsMoved.toFixed(5)}`} />
                        <Common label={tradeCaculatorLabel().loss} data={`$${data._getTradeOrderComputationData.buyLoss.toFixed(2)} (${(data._getTradeOrderComputationData.buyLossPecentage * 100).toFixed(2)}%)`} />
                    </TableTbodyTemplate>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().profitPipsMovedBuy} data={`${data._getTradeOrderComputationData.buyProfitPipsMoved.toFixed(5)}`} />
                        <Common label={tradeCaculatorLabel().profit} data={`$${data._getTradeOrderComputationData.buyProfit.toFixed(2)} (${(data._getTradeOrderComputationData.buyProfitPercentage * 100).toFixed(2)}%)`} />
                    </TableTbodyTemplate>
                </div>
            ) : ''}
            <br />
            <TableTbodyTemplate>
                <AdjustStopLevel label={tradeCaculatorLabel().adjustStopLevel} value={data._getTradeOrderComputationData.buyAdjustStopLosslevelPercentage} getChangeData={onChangeAdjustStopLevelBuy} />
                <Common label={tradeCaculatorLabel().newStopLossBuy} data={data._getTradeOrderComputationData.buyNEWStopLoss.toFixed(5)} />
                {currencyPair.toUpperCase() === 'USDJPY' ? (
                    <Common label={tradeCaculatorLabel().newStopLossUSDJPYBuy} data={data._getTradeOrderComputationData.buyNEWStopLossPipsUSDJPY.toFixed(2)} />
                ) : ''}
            </TableTbodyTemplate>
            {currencyPair.toUpperCase() === 'USDJPY' ? (
                <div>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWSLMaximumLossUSDJPY} data={`$${data._getTradeOrderComputationData.buyNEWSLMaximumLossUSDJPY.toFixed(2)} (${(data._getTradeOrderComputationData.buyNEWSLMaximumLossPercentageUSDJPY * 100).toFixed(2)}%)`} />
                        <Common label={tradeCaculatorLabel().NEWTotalPotentialLossUSDJPY} data={`$${data._getTradeOrderComputationData.buyNEWTotalPotentialLossUSDJPY.toFixed(2)}`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPipsUSDJPY} data={`${data._getTradeOrderComputationData.buyNEWTakeProfitPipsUSDJPY.toFixed(3)}`} />
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPriceUSDJPYBuy} data={`${data._getTradeOrderComputationData.buyNEWTakeProfitPriceUSDJPY.toFixed(3)}`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTPMaximumProfitUSDJPY} data={`$${data._getTradeOrderComputationData.buyNEWTPMaximumProfitUSDJPY.toFixed(2)} (${(data._getTradeOrderComputationData.buyNEWTPMaximumProfitPercentageUSDJPY * 100).toFixed(2)}%)`} />
                        <Common label={tradeCaculatorLabel().NEWTotalPotentialProfitUSDJPY} data={`$${data._getTradeOrderComputationData.buyNEWTotalPotentialProfitUSDJPY.toFixed(2)}`} />
                    </TableTbodyTemplate>
                </div>
            ) : ''}

            {currencyPair.toUpperCase() != 'USDJPY' ? (
                <div>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWLossPipsMovedBuy} data={`${data._getTradeOrderComputationData.buyNEWLossPipsMoved.toFixed(5)}`} />
                        <Common label={tradeCaculatorLabel().NEWLoss} data={`$${data._getTradeOrderComputationData.buyNEWLoss.toFixed(2)} (${(data._getTradeOrderComputationData.buyNEWLossPercentage * 100).toFixed(2)}%)`} />
                        <Common label={tradeCaculatorLabel().NEWStopLossBuy} data={`${data._getTradeOrderComputationData.buyNEWStopLossPips.toFixed(5)}`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPips} data={`${data._getTradeOrderComputationData.buyNEWTakeProfitPips.toFixed(5)}`} />
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPriceBuy} data={`${data._getTradeOrderComputationData.buyNEWTakeProfitPrice.toFixed(5)}`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTakeProfitBuy} data={`${data._getTradeOrderComputationData.buyNEWProfitPipsMoved.toFixed(5)}`} />
                        <Common label={tradeCaculatorLabel().NEWTakeProfit} data={`$${data._getTradeOrderComputationData.buyNEWProfit.toFixed(2)} (${(data._getTradeOrderComputationData.buyNEWProfitPercentage * 100).toFixed(2)}%)`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().totalPotentialLoss} data={`$${data._getTradeOrderComputationData.buyTotalPotentialLoss.toFixed(2)}`} />
                        <Common label={tradeCaculatorLabel().totalPotentialProfit} data={`$${data._getTradeOrderComputationData.buyTotalPotentialProfit.toFixed(2)}`} />
                    </TableTbodyTemplate>
                </div>
            ) : ''}
        </div>
    );
};

export default TradeBuy;
