import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

import TableTbodyTemplate from '../../../templates/table-tbody';
import tradeCaculatorLabel from '../../../../constants/trade-caculator-label';
import Common from './common';

import AccountType from './account-type';
import Capital from './capital';
import CurrencyPair from './currency-pair';
import RiskPercentagePerTrade from './risk-percentage-per-trade';
import RiskAppetitePercentagePerPosition from './risk-appetite-percentage-per-position';
import RiskRewardRatio from './risk-reward-ratio';

import Leverage from './leverage';

import EntryPrice from './entry-price';
import StopLossLevel from './stop-loss-level';

/**
 * Props interface for GalleryInformation component
 */
type TradeOrderExecutionProps = {
    data : any; // Data to be displayed in the gallery information
    onChangeAccountType: (e: any) => void;
    onChangeCapital: (e: any) => void;
    onChangeCurrencyPair: (e: any) => void;
    onChangeRiskPercentagePerTrade: (e: any) => void;
    onChangeRiskAppetitePercentagePerPosition: (e: any) => void;
    onChangeRiskRewardRatio: (e: any) => void;
    onChangeLeverage: (e: any) => void;
    onChangeEntryPrice: (e: any) => void;
    onChangeStopLossLevel: (e: any) => void;
};

const TradeOrderExecution = ({ 
    data,
    onChangeAccountType,
    onChangeCapital,
    onChangeCurrencyPair,
    onChangeRiskPercentagePerTrade,
    onChangeRiskAppetitePercentagePerPosition,
    onChangeRiskRewardRatio,
    onChangeLeverage,
    onChangeEntryPrice,
    onChangeStopLossLevel
}: TradeOrderExecutionProps) => {

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${classNames(styles.trade__order__execution)}`}>
            <TableTbodyTemplate>
                <AccountType label={tradeCaculatorLabel().accountType} data={data} getChangeData={onChangeAccountType}/>

                <Capital label={tradeCaculatorLabel().capital} data={data} getChangeData={onChangeCapital}/>

                <CurrencyPair label={tradeCaculatorLabel().currencyPair} data={data} getChangeData={onChangeCurrencyPair} />

                <Common label={tradeCaculatorLabel().pipsConversion} data={data._getTradeOrderComputationData.pipsConversion} />

                <RiskPercentagePerTrade label={tradeCaculatorLabel().riskPercentagePerTrade} data={data} getChangeData={onChangeRiskPercentagePerTrade} />

                <Common label={tradeCaculatorLabel().riskValuePerTrade} data={`$${data._getTradeOrderComputationData.riskValuePerTrade}`} />

                <RiskAppetitePercentagePerPosition label={tradeCaculatorLabel().riskAppetitePercentagePerPosition} data={data} getChangeData={onChangeRiskAppetitePercentagePerPosition} />

                <Common label={tradeCaculatorLabel().riskAppetiteValuePerPosition} data={`$${data._getTradeOrderComputationData.riskAppetiteValuePerPosition}`} />

                <Common label={tradeCaculatorLabel().riskAppetiteCapital} data={data._getTradeOrderComputationData.riskAppetitePercentageCapital} />

                <RiskRewardRatio label={tradeCaculatorLabel().riskRewardRatio} data={data} getChangeData={onChangeRiskRewardRatio} />

                <Common label={tradeCaculatorLabel().rewardRatioValue} data={`$${data._getTradeOrderComputationData.rewardRatioValue}`} />

                <Common label={tradeCaculatorLabel().rewardRatioPercentage} data={data._getTradeOrderComputationData.rewardRatioPercentage} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <Leverage label={tradeCaculatorLabel().leverage} data={data} getChangeData={onChangeLeverage} />

                <Common label={tradeCaculatorLabel().totalBuyingPower} data={`$${data._getTradeOrderComputationData.totalBuyingPower}`} />

                <Common label={tradeCaculatorLabel().totalRiskValue} data={`$${data._getTradeOrderComputationData.totalRiskValue}`} />

                <Common label={tradeCaculatorLabel().riskAmount} data={`$${data._getTradeOrderComputationData.riskAmount}`} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <EntryPrice label={tradeCaculatorLabel().entryPrice} data={data} getChangeData={onChangeEntryPrice} />

                <StopLossLevel label={tradeCaculatorLabel().stopLossLevel} data={data} getChangeData={onChangeStopLossLevel} />
            </TableTbodyTemplate>
        </div>
    );
};

export default TradeOrderExecution;
