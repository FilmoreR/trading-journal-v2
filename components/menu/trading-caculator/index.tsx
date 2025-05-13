import React, { useEffect, useState, useRef } from "react";
import TradeOrderExecution from './trade-order-execution';
import TradeBuy from './trade-type/trade-buy';
import TradeShort from './trade-type/trade-short';
import getTradeOrderComputationData from '../../../utils/trade-caculator';

/**
 * Props interface for GalleryInformation component
 */
type TradingCalculatorProps = {
    data : any; // Data to be displayed in the gallery information
};

const TradingCalculator = ({ 
    data
}: TradingCalculatorProps) => {

    const [responseTradeCaculatorDefaultData, setResponseTradeCaculatorDefaultData] = useState<any>('');
    const [responseLeverage, setResponseLeverage] = useState<any>('');
    const [responseCurrencyPairs, setResponseCurrencyPairs] = useState<any>('');

    const [updateData, setupdateData] = useState<any>(false);


    const [standardLot, setStandardLot] = useState<any>(''); // onChange
    const [capital, setCapital] = useState<any>(''); // onChange
    const [currencyPair, setCurrencyPair] = useState<any>(''); // onChange

    const [pipsConversion, setPipsConversion] = useState<any>(''); // onChange

    const [riskPercentagePerTrade, setRiskPercentagePerTrade] = useState(''); // onChange

    const [riskValuePerTrade, setRiskValuePerTrade] =  useState<any>('');

    const [riskAppetitePercentagePerPosition, setRiskAppetitePercentagePerPosition] = useState<any>(''); // onChange

    const [riskAppetiteValuePerPosition, setRiskAppetiteValuePerPosition] = useState<any>('');
    const [riskAppetitePercentageCapital, setRiskAppetitePercentageCapital] = useState<any>('');

    const [riskRewardRatio, setRiskRewardRatio] = useState<any>(''); // onChange

    const [rewardRatioValue, setRewardRatioValue] = useState<any>('');
    const [rewardRatioPercentage, setRewardRatioPercentage] = useState<any>('');

    const [leverage, setLeverage] = useState<any>(''); // onChange

    const [totalBuyingPower, setTotalBuyingPower] = useState<any>('');
    const [totalRiskValue, setTotalRiskValue] = useState<any>('');
    const [riskAmount, setRiskAmount] = useState<any>('');

    const [entryPrice, setEntryPrice] = useState<any>(''); // onChange
    const [stopLossLevelPercentage, setStopLossLevelPercentage] = useState<any>(''); // onChange

    const [buyStopLossPrice, setBuyStopLossPrice] = useState<any>('');
    const [buyStopLossPips, setBuyStopLossPips] = useState<any>('');
    const [buyPipValuePerLot, setBuyPipValuePerLot] = useState<any>('');
    const [buyExpectedVolume, setBuyExpectedVolume] = useState<any>('');
    const [buyTakeProfitPips, setBuyTakeProfitPips] = useState<any>('');
    const [buyTakeProfitPrice, setBuyTakeProfitPrice] = useState<any>('');
    const [buySLMaximumLoss, setBuySLMaximumLoss] = useState<any>('');
    const [buySLMaximumLossPercentage, setBuySLMaximumLossPercentage] = useState<any>('');
    const [buyTPMaximumProfit, setBuyTPMaximumProfit] = useState<any>('');
    const [buyTPMaximumProfitPerentage, setBuyTPMaximumProfitPercentage] = useState<any>('');

    const [buySpreadPips, setBuySpreadPips] = useState<any>(''); // onChange

    const [buySpreadCost, setBuySpreadCost] = useState<any>('');
    const [buyTotalPotentialLoss, setBuyTotalPotentialLoss] = useState<any>('');

    const [shortStopLossPrice, setShortStopLossPrice] = useState<any>('');
    const [shortStopLossPips, setShortStopLossPips] = useState<any>('');
    const [shortPipValuePerLot, setShortPipValuePerLot] = useState<any>('');
    const [shortExpectedVolume, setShortExpectedVolume] = useState<any>('');
    const [shortTakeProfitPips, setShortTakeProfitPips] = useState<any>('');
    const [shortTakeProfitPrice, setShortTakeProfitPrice] = useState<any>('');
    const [shortSLMaximumLoss, setShortSLMaximumLoss] = useState<any>('');
    const [shortSLMaximumLossPercentage, setShortSLMaximumLossPercentage] = useState<any>('');
    const [shortTPMaximumProfit, setShortTPMaximumProfit] = useState<any>('');
    const [shortTPMaximumProfitPercentage, setShortTPMaximumProfitPercentage] = useState<any>('');

    const [shortSpreadPips, setShortSpreadPips] = useState<any>(''); // onChange

    const [shortSpreadCost, setShortSpreadCost] = useState<any>('');
    const [shortTotalPotentialLoss, setShortTotalPotentialLoss] = useState<any>('');

    // Effect hook for any future initialization needs
    useEffect(() => {

        if(data.firebaseData) {
            const tradeCaculatorDefaultData = data.firebaseData.tradeCaculatorDefaultData;
            const leverage = data.firebaseData.leverage;
            const currencyPairs = data.firebaseData.currencyPairs;

            setResponseTradeCaculatorDefaultData(tradeCaculatorDefaultData);
            setResponseLeverage(leverage);
            setResponseCurrencyPairs(currencyPairs);
        }

        if (
            responseTradeCaculatorDefaultData &&
            responseLeverage &&
            responseCurrencyPairs
        ) {
            onLoadComputeData();
        }
    }, [
        responseTradeCaculatorDefaultData, 
        responseLeverage, 
        responseCurrencyPairs
    ]);


    const onLoadComputeData = () => {
        const _getTradeOrderComputationData = getTradeOrderComputationData(
            responseTradeCaculatorDefaultData,
            responseCurrencyPairs
        );
        
        setupdateData({
            _getTradeOrderComputationData,
            responseLeverage,
            responseCurrencyPairs
        });
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
                {updateData? (
                    <TradeOrderExecution data={updateData}/>
                ) : ''}
            </div>
            <div>
                {updateData? (
                    <TradeBuy data={updateData}/>
                ) : ''}
            </div>
            <div>
                {updateData? (
                    <TradeShort data={updateData}/>
                ) : ''}
            </div>
        </div>
    );
};

export default TradingCalculator;
