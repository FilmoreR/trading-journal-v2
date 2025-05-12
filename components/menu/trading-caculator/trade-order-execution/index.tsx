import React, { useEffect, useState, useRef } from "react";
import styles from './styles.module.scss';
import classNames from 'classnames';

import TableTbodyTemplate from '../../../templates/table-tbody';

import AccountType from './account-type';
import Capital from './capital';
import CurrencyPair from './currency-pair';
import PipsConversion from './pips-conversion';
import RiskPercentagePerTrade from './risk-percentage-per-trade';
import RiskValuePerTrade from './risk-value-per-trade';
import RiskAppetitePercentagePerPosition from './risk-appetite-percentage-per-position';
import RiskAppetiteValuePerPosition from './risk-appetite-value-per-position';
import RiskAppetiteCapital from './risk-appetite-capital';
import RiskRewardRatio from './risk-reward-ratio';
import RewardRatioValue from './reward-ratio-value';
import RewardRatioPercemtage from './reward-ratio-percentage';

import Leverage from './leverage';
import TotalBuyingPower from './total-buying-power';
import TotalRiskValue from './total-risk-value';
import RiskAmount from './risk-amount';

import EntryPrice from './entry-price';
import StopLossLevel from './stop-loss-level';

/**
 * Props interface for GalleryInformation component
 */
type TradeOrderExecutionProps = {
    data : any; // Data to be displayed in the gallery information
};

const TradeOrderExecution = ({ 
    data
}: TradeOrderExecutionProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${classNames(styles.trade__order__execution)}`}>
            <TableTbodyTemplate>
                <AccountType data={data} />

                <Capital data={data} />

                <CurrencyPair data={data} />

                <PipsConversion data={data} />

                <RiskPercentagePerTrade data={data} />

                <RiskValuePerTrade data={data} />

                <RiskAppetitePercentagePerPosition data={data} />

                <RiskAppetiteValuePerPosition data={data} />

                <RiskAppetiteCapital data={data} />

                <RiskRewardRatio data={data} />

                <RewardRatioValue data={data} />

                <RewardRatioPercemtage data={data} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <Leverage data={data} />

                <TotalBuyingPower data={data} />

                <TotalRiskValue data={data} />

                <RiskAmount data={data} />
            </TableTbodyTemplate>
            <br />
            <TableTbodyTemplate>
                <EntryPrice data={data} />

                <StopLossLevel data={data} />
            </TableTbodyTemplate>
        </div>
    );
};

export default TradeOrderExecution;
