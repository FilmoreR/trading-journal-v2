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
    const [shortTotalPotentialProfi, setShortTotalPotentialProfit] = useState<any>('');

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
        setShortTotalPotentialProfit(data._getTradeOrderComputationData.shortTotalPotentialLoss);
    },[]);

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${classNames(styles.trade__type)}`}>
            <h5 className="text-xl font-bold dark:text-white text-red-700">SELL / SHORT</h5>
            <br />
            <TableTbodyTemplate>
                {shortStopLossPrice? (
                    <Common label={tradeCaculatorLabel().stopLossPriceShort} data={shortStopLossPrice.toFixed(5)} />
                ) : ''}

                {shortStopLossPips? (
                    <Common label={tradeCaculatorLabel().stopLossPipsShort} data={shortStopLossPips.toFixed(3)} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {shortPipValuePerLot? (
                    <Common label={tradeCaculatorLabel().pipValuePerLot} data={shortPipValuePerLot.toFixed(2)} />
                ) : ''}

                {shortExpectedVolume? (
                    <Common label={tradeCaculatorLabel().expectedVolume} data={shortExpectedVolume.toFixed(2)} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                {shortTakeProfitPips? (
                    <Common label={tradeCaculatorLabel().takeProfitPips} data={shortTakeProfitPips.toFixed(2)} />
                ) : ''}

                {shortTakeProfitPrice? (
                     <Common label={tradeCaculatorLabel().takeProfitPrice} data={shortTakeProfitPrice.toFixed(5)} />
                ) : ''}
            </TableTbodyTemplate>
            <br />
            {/* This is for USDJPY caculation */}
            <TableTbodyTemplate>
                {shortSLMaximumLoss? (
                     <Common label={tradeCaculatorLabel().SLMaximumLossUSDJPY} data={`$${shortSLMaximumLoss} (${(shortSLMaximumLossPercentage * 100)}%)`} />
                ) : ''}

                {shortTPMaximumProfit? (
                    <Common label={tradeCaculatorLabel().TPMaximumProfitUSDJPY} data={`$${shortTPMaximumProfit} (${(shortTPMaximumProfitPercentage * 100)}%)`} />
                ) : ''}
            </TableTbodyTemplate>
            {/* This is for USDJPY caculation */}
            <br />
            <TableTbodyTemplate>
                {shortSpreadPips? (
                    <SpreadPips label={tradeCaculatorLabel().spreadPips} value={shortSpreadPips} getChangeData={onChangeSpreadPipsShort} />
                ) : ''}

                {shortSpreadCost? (
                    <Common label={tradeCaculatorLabel().spreadCost} data={`$${shortSpreadCost.toFixed(2)}`} />
                ) : ''}
                {/* This is for USDJPY caculation */}
                {shortTotalPotentialLoss? (
                    <Common label={tradeCaculatorLabel().totalPotentialLossUSDJPY} data={`$${shortTotalPotentialLoss.toFixed(2)}`} />
                ) : ''}

                {shortTotalPotentialProfi? (
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
                <Common label={tradeCaculatorLabel().lossPipsMovedShort} data={`0.00666`} />
                <Common label={tradeCaculatorLabel().loss} data={`$13.13 (1.3%)`} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <Common label={tradeCaculatorLabel().profitPipsMovedShort} data={`0.03998`} />
                <Common label={tradeCaculatorLabel().profit} data={`$79.95 (8%)`} />
            </TableTbodyTemplate>

            <br />
            <TableTbodyTemplate>
                <AdjustStopLevel label={tradeCaculatorLabel().adjustStopLevel} value={'0.42'} getChangeData={onChangeAdjustStopLevelShort} />
                <Common label={tradeCaculatorLabel().newStopLossShort} data={`1.33815`} />
                <Common label={tradeCaculatorLabel().newStopLossUSDJPYShort} data={`59.72306`} />
            </TableTbodyTemplate>

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
    );
};

export default TradeShort;
