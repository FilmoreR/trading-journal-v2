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
type TradeShortProps = {
    data : any; // Data to be displayed in the gallery information
    onChangeSpreadPipsShort: (e: any) => void;
    onChangeAdjustStopLevelShort: (e: any) => void;
};

const TradeShort = ({ 
    data,
    onChangeSpreadPipsShort,
    onChangeAdjustStopLevelShort
}: TradeShortProps) => {
    const currencyPair = data._getTradeOrderComputationData.currencyPair;

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${classNames(styles.trade__type)}`}>
            <h5 className="text-xl font-bold dark:text-white text-red-700">SELL / SHORT</h5>
            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().stopLossPriceShort} data={data._getTradeOrderComputationData.shortStopLossPrice.toFixed(5)} />
                <Common label={tradeCaculatorLabel().stopLossPipsShort} data={data._getTradeOrderComputationData.shortStopLossPips.toFixed(3)} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().pipValuePerLot} data={data._getTradeOrderComputationData.shortPipValuePerLot.toFixed(2)} />
                <Common label={tradeCaculatorLabel().expectedVolume} data={data._getTradeOrderComputationData.shortExpectedVolume.toFixed(2)} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().takeProfitPips} data={data._getTradeOrderComputationData.shortTakeProfitPips.toFixed(2)} />
                <Common label={tradeCaculatorLabel().takeProfitPrice} data={data._getTradeOrderComputationData.shortTakeProfitPrice.toFixed(5)} />
            </TableTbodyTemplate>
            <br />
            {/* This is for USDJPY caculation */}
            {currencyPair.toUpperCase() === 'USDJPY' ? (
                <div>
                    <TableTbodyTemplate>
                        <Common 
                            label={tradeCaculatorLabel().SLMaximumLossUSDJPY} 
                            data={`$${data._getTradeOrderComputationData.shortSLMaximumLossUSDJPY.toFixed(2)} (${(data._getTradeOrderComputationData.shortSLMaximumLossPercentageUSDJPY * 100).toFixed(1)}%)`} />
                        <Common 
                            label={tradeCaculatorLabel().TPMaximumProfitUSDJPY} 
                            data={`$${data._getTradeOrderComputationData.shortTPMaximumProfitUSDJPY.toFixed(2)} (${(data._getTradeOrderComputationData.shortTPMaximumProfitPercentageUSDJPY * 100).toFixed(1)}%)`} />
                    </TableTbodyTemplate>
                    <br />
                </div>
            ) : ''}
            {/* This is for USDJPY caculation */}
            <TableTbodyTemplate>
                <SpreadPips label={tradeCaculatorLabel().spreadPips} value={data._getTradeOrderComputationData.shortSpreadPips} getChangeData={onChangeSpreadPipsShort} />
                <Common label={tradeCaculatorLabel().spreadCost} data={`$${data._getTradeOrderComputationData.shortSpreadCost.toFixed(2)}`} />
                {/* This is for USDJPY caculation */}
                {currencyPair.toUpperCase() === 'USDJPY' ? (
                    <Common label={tradeCaculatorLabel().totalPotentialLossUSDJPY} data={`$${data._getTradeOrderComputationData.shortTotalPotentialLossUSDJPY.toFixed(2)}`} />
                ) : ''}
                {currencyPair.toUpperCase() === 'USDJPY' ? (
                    <Common label={tradeCaculatorLabel().totalPotentialProfitUSDJPY} data={`$${data._getTradeOrderComputationData.shortTotalPotentialProfitUSDJPY.toFixed(2)}`} />
                ) : ''}
                {/* This is for USDJPY caculation */}
            </TableTbodyTemplate>
            {currencyPair.toUpperCase() != 'USDJPY' ? (
                <div>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().lotSize} data={`${data._getTradeOrderComputationData.shortLotSize.toFixed(0)}`} />
                    </TableTbodyTemplate>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().lossPipsMovedShort} data={`${data._getTradeOrderComputationData.shortLossPipsMoved.toFixed(5)}`} />
                        <Common label={tradeCaculatorLabel().loss} data={`$${data._getTradeOrderComputationData.shortLoss.toFixed(2)} (${(data._getTradeOrderComputationData.shortLossPercentage * 100).toFixed(2)}%)`} />
                    </TableTbodyTemplate>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().profitPipsMovedShort} data={`${data._getTradeOrderComputationData.shortProfitPipsMoved.toFixed(5)}`} />
                        <Common label={tradeCaculatorLabel().profit} data={`$${data._getTradeOrderComputationData.shortProfit.toFixed(2)} (${(data._getTradeOrderComputationData.shortProfitPercentage * 100).toFixed(2)}%)`} />
                    </TableTbodyTemplate>
                </div>
            ) : ''}

            <br />
            <TableTbodyTemplate>
                <AdjustStopLevel label={tradeCaculatorLabel().adjustStopLevel} value={data._getTradeOrderComputationData.shortAdjustStopLosslevelPercentage} getChangeData={onChangeAdjustStopLevelShort} />
                <Common label={tradeCaculatorLabel().newStopLossShort} data={data._getTradeOrderComputationData.shortNEWStopLoss.toFixed(5)} />
                {currencyPair.toUpperCase() === 'USDJPY' ? (
                    <Common label={tradeCaculatorLabel().newStopLossUSDJPYShort} data={data._getTradeOrderComputationData.shortNEWStopLossPipsUSDJPY.toFixed(2)} />
                ) : ''}
            </TableTbodyTemplate>
            {currencyPair.toUpperCase() === 'USDJPY' ? (
                <div>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWSLMaximumLossUSDJPY} data={`$${data._getTradeOrderComputationData.shortNEWSLMaximumLossUSDJPY.toFixed(2)} (${(data._getTradeOrderComputationData.shortNEWSLMaximumLossPercentageUSDJPY * 100).toFixed(2)}%)`} />
                        <Common label={tradeCaculatorLabel().NEWTotalPotentialLossUSDJPY} data={`$${data._getTradeOrderComputationData.shortNEWTotalPotentialLossUSDJPY.toFixed(2)}`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPipsUSDJPY} data={`${data._getTradeOrderComputationData.shortNEWTakeProfitPipsUSDJPY.toFixed(3)}`}/>
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPriceUSDJPYShort} data={`${data._getTradeOrderComputationData.shortNEWTakeProfitPriceUSDJPY.toFixed(3)}`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTPMaximumProfitUSDJPY} data={`$${data._getTradeOrderComputationData.shortNEWTPMaximumProfitUSDJPY.toFixed(2)} (${(data._getTradeOrderComputationData.shortNEWTPMaximumProfitPercentageUSDJPY * 100).toFixed(2)}%)`} />
                        <Common label={tradeCaculatorLabel().NEWTotalPotentialProfitUSDJPY} data={`$${data._getTradeOrderComputationData.shortTotalPotentialLossProfitUSDJPY.toFixed(2)}`} />
                    </TableTbodyTemplate>
                </div>
            ) : ''}

            {currencyPair.toUpperCase() != 'USDJPY' ? (
                <div>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWLossPipsMovedShort} data={`${data._getTradeOrderComputationData.shortNEWLossPipsMoved.toFixed(5)}`} />
                        <Common label={tradeCaculatorLabel().NEWLoss} data={`$${data._getTradeOrderComputationData.shortyNEWLoss.toFixed(2)} (${(data._getTradeOrderComputationData.shortNEWLossPercentage * 100).toFixed(2)}%)`} />
                        <Common label={tradeCaculatorLabel().NEWStopLossShort} data={`${data._getTradeOrderComputationData.shortNEWStopLossPips.toFixed(5)}`}  />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPips} data={`${data._getTradeOrderComputationData.shortNEWTakeProfitPips.toFixed(5)}`} />
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPriceShort} data={`${data._getTradeOrderComputationData.shortNEWTakeProfitPrice.toFixed(5)}`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTakeProfitShort} data={`${data._getTradeOrderComputationData.shortNEWProfitPipsMoved.toFixed(5)}`} />
                        <Common label={tradeCaculatorLabel().NEWTakeProfit} data={`$${data._getTradeOrderComputationData.shortNEWProfit.toFixed(2)} (${(data._getTradeOrderComputationData.shortNEWProfitPercentage * 100).toFixed(2)}%)`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().totalPotentialLoss} data={`$${data._getTradeOrderComputationData.shortTotalPotentialLoss.toFixed(2)}`} />
                        <Common label={tradeCaculatorLabel().totalPotentialProfit} data={`$${data._getTradeOrderComputationData.shortTotalPotentialProfit.toFixed(2)}`}  />
                    </TableTbodyTemplate>
                </div>
            ) : ''}
        </div>
    );
};

export default TradeShort;
