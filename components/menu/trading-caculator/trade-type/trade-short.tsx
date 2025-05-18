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
                            data={`$${data._getTradeOrderComputationData.shortSLMaximumLoss} (${(data._getTradeOrderComputationData.shortSLMaximumLossPercentage * 100)}%)`} />
                        <Common 
                            label={tradeCaculatorLabel().TPMaximumProfitUSDJPY} 
                            data={`$${data._getTradeOrderComputationData.shortTPMaximumProfit} (${(data._getTradeOrderComputationData.shortTPMaximumProfitPercentage * 100)}%)`} />
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
                    <Common label={tradeCaculatorLabel().totalPotentialLossUSDJPY} data={`$${data._getTradeOrderComputationData.shortTotalPotentialLoss.toFixed(2)}`} />
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
                        <Common label={tradeCaculatorLabel().lossPipsMovedShort} data={`0.00666`} />
                        <Common label={tradeCaculatorLabel().loss} data={`$13.13 (1.3%)`} />
                    </TableTbodyTemplate>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().profitPipsMovedShort} data={`0.03998`} />
                        <Common label={tradeCaculatorLabel().profit} data={`$79.95 (8%)`} />
                    </TableTbodyTemplate>
                </div>
            ) : ''}

            <br />
            <TableTbodyTemplate>
                <AdjustStopLevel label={tradeCaculatorLabel().adjustStopLevel} value={'0.42'} getChangeData={onChangeAdjustStopLevelShort} />
                <Common label={tradeCaculatorLabel().newStopLossShort} data={`1.33815`} />
                {currencyPair.toUpperCase() === 'USDJPY' ? (
                    <Common label={tradeCaculatorLabel().newStopLossUSDJPYShort} data={`59.72306`} />
                ) : ''}
            </TableTbodyTemplate>
            {currencyPair.toUpperCase() === 'USDJPY' ? (
                <div>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWSLMaximumLossUSDJPY} data={`$8.20 (8.2%)`} />
                        <Common label={tradeCaculatorLabel().NEWTotalPotentialLossUSDJPY} data={`$8.54`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPipsUSDJPY} data={`358.33836`} />
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPriceUSDJPY} data={`149.2493836`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTPMaximumProfitUSDJPY} data={`$49.20 (4.92%)`} />
                        <Common label={tradeCaculatorLabel().NEWTotalPotentialProfitUSDJPY} data={`$49.54`} />
                    </TableTbodyTemplate>
                </div>
            ) : ''}

            {currencyPair.toUpperCase() != 'USDJPY' ? (
                <div>
                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWLossPipsMovedShort} data={`0.00560`} />
                        <Common label={tradeCaculatorLabel().NEWLoss} data={`$11.19 (1.12%)`} />
                        <Common label={tradeCaculatorLabel().NEWStopLossShort} data={`55.9671`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPips} data={`335.8026`} />
                        <Common label={tradeCaculatorLabel().NEWTakeProfitPriceShort} data={`1.29897`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().NEWTakeProfitShort} data={`0.03358`} />
                        <Common label={tradeCaculatorLabel().NEWTakeProfit} data={`$67.16 (6.72%)`} />
                    </TableTbodyTemplate>

                    <br />
                    <TableTbodyTemplate>
                        <Common label={tradeCaculatorLabel().totalPotentialLoss} data={`$11.55`} />
                        <Common label={tradeCaculatorLabel().totalPotentialProfit} data={`$67.52`} />
                    </TableTbodyTemplate>
                </div>
            ) : ''}
        </div>
    );
};

export default TradeShort;
