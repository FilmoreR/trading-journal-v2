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
    }, []);

    useEffect(() => {
        if (responseLeverage && responseCurrencyPairs
        ) {
            onLoadComputeData(data.firebaseData.tradeCaculatorDefaultData);
        }
    }, [responseLeverage, responseCurrencyPairs]);


    const onLoadComputeData = (updatedObj : any) => {
        const _getTradeOrderComputationData = getTradeOrderComputationData(
            updatedObj,
            responseCurrencyPairs
        );
        
        setupdateData({
            _getTradeOrderComputationData,
            responseLeverage,
            responseCurrencyPairs
        });
    };

    const handleChangeAccountType = (value: any) => {
        console.log("handleChangeAccountType value ------>", value);
    };

    const handleChangeCapital = (value: any) => {
        console.log("handleChangeCapital value ------>", value);
    };

    const handleChangeCurrencyPair = (value: any) => {
        // let _responseTradeCaculatorDefaultData = responseTradeCaculatorDefaultData;
        // console.log("handleChangeCurrencyPair  ------> _responseTradeCaculatorDefaultData :", _responseTradeCaculatorDefaultData);
        console.log("handleChangeCurrencyPair  ------> value :", value);

        const updatedObj = {...responseTradeCaculatorDefaultData, currencyPair: value};

        setResponseTradeCaculatorDefaultData((prevState: any) => ({...prevState, currencyPair: value}));
        onLoadComputeData(updatedObj);

        console.log("=======================================================");
    };

    const handleChangeRiskPercentagePerTrade = (value: any) => {
        console.log("handleChangeRiskPercentagePerTrade value ------>", value);
    };

    const handleChangeRiskAppetitePercentagePerPosition = (value: any) => {
        console.log("handleChangeRiskAppetitePercentagePerPosition value ------>", value);
    };

    const handleChangeRiskRewardRatio = (value: any) => {
        console.log("handleChangeRiskRewardRatio value ------>", value);
    };

    const handleChangeLeverage = (value: any) => {
        console.log("handleChangeLeverage value ------>", value);
    };

    const handleChangeEntryPrice = (value: any) => {
        console.log("handleChangeEntryPrice value ------>", value);
    };

    const handleChangeStopLossLevel = (value: any) => {
        console.log("handleChangeStopLossLevel value ------>", value);
    };

    const handleChangeSpreadPipsBuy= (value: any) => {
        console.log("handleChangeSpreadPipsBuy value ------>", value);
        console.log("handleChangeSpreadPipsShort responseTradeCaculatorDefaultData ------>", responseTradeCaculatorDefaultData);
    };

    const handleChangeSpreadPipsShort= (value: any) => {
        console.log("handleChangeSpreadPipsShort value ------>", value);
        console.log("handleChangeSpreadPipsShort responseTradeCaculatorDefaultData ------>", responseTradeCaculatorDefaultData);
    };

    const handleChangeAdjustStopLevelBuy= (value: any) => {
        console.log("handleChangeAdjustStopLevelBuy value ------>", value);
    };

    const handleChangeAdjustStopLevelShort= (value: any) => {
        console.log("handleChangeAdjustStopLevelShort value ------>", value);
    };

    console.log("updateData", updateData);
    console.log("responseTradeCaculatorDefaultData", responseTradeCaculatorDefaultData);
    console.log("--------------------------------------------------");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
                {updateData? (
                    <TradeOrderExecution 
                        onChangeAccountType={handleChangeAccountType}
                        onChangeCapital={handleChangeCapital}
                        onChangeCurrencyPair={handleChangeCurrencyPair}
                        onChangeRiskPercentagePerTrade={handleChangeRiskPercentagePerTrade}
                        onChangeRiskAppetitePercentagePerPosition={handleChangeRiskAppetitePercentagePerPosition}
                        onChangeRiskRewardRatio={handleChangeRiskRewardRatio}
                        onChangeLeverage={handleChangeLeverage}
                        onChangeEntryPrice={handleChangeEntryPrice}
                        onChangeStopLossLevel={handleChangeStopLossLevel}
                        data={updateData}/>
                ) : ''}
            </div>
            <div>
                {updateData? (
                    <TradeBuy 
                        onChangeSpreadPipsBuy={handleChangeSpreadPipsBuy}
                        onChangeAdjustStopLevelBuy={handleChangeAdjustStopLevelBuy}
                        data={updateData}/>
                ) : ''}
            </div>
            <div>
                {updateData? (
                    <TradeShort 
                        onChangeSpreadPipsShort={handleChangeSpreadPipsShort}
                        onChangeAdjustStopLevelShort={handleChangeAdjustStopLevelShort}
                        data={updateData}/>
                ) : ''}
            </div>
        </div>
    );
};

export default TradingCalculator;
