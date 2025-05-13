const getTradeOrderComputationData = (
    responseTradeCaculatorDefaultData : any, 
    responseCurrencyPairs : any
) => {
    let _setStandardLot = responseTradeCaculatorDefaultData.accountType.value;
    let _setCapital = responseTradeCaculatorDefaultData.capital;
    let _setCurrencyPair = responseTradeCaculatorDefaultData.currencyPair;

    let _setRiskPercentagePerTrade = responseTradeCaculatorDefaultData.riskPercentagePerTrade;
    let _setRiskValuePerTrade = _setCapital * _setRiskPercentagePerTrade;
    let _setRiskAppetitePercentagePerPosition = responseTradeCaculatorDefaultData.riskAppetitePercentagePerPosition;

    let _setRiskAppetiteValuePerPosition = (_setCapital
            * _setRiskPercentagePerTrade) 
            * _setRiskAppetitePercentagePerPosition;
    
    let _setRiskAppetitePercentageCapital = _setRiskAppetiteValuePerPosition / _setCapital;
    
    let _setRiskRewardRatio = responseTradeCaculatorDefaultData.riskRewardRatio.value;

    let _setRewardRatioValue = _setRiskAppetiteValuePerPosition * responseTradeCaculatorDefaultData.riskRewardRatio.value;

    let _setRewardRatioPercentage = _setRiskRewardRatio / _setRewardRatioValue;

    let _setLeverage = responseTradeCaculatorDefaultData.leverage.value;
    
    let _setTotalBuyingPower = _setCapital * _setLeverage;
    let _setTotalRiskValue = _setTotalBuyingPower * _setRiskPercentagePerTrade;
    let _setRiskAmount = _setCapital * _setRiskAppetitePercentageCapital;
    let _setEntryPrice = responseTradeCaculatorDefaultData.entryPrice;

    
    let _setPipsConversion = 0;
    let _setStopLossLevelPercentage = 0;
    let _setBuySpreadPips = 0;
    let _setShortSpreadPips = 0;

    responseCurrencyPairs.forEach(function(data : any){
        if(data.curreny === responseTradeCaculatorDefaultData.currencyPair) {
            _setPipsConversion = data.pipsConversion;
            _setStopLossLevelPercentage = data.stopLosslevel;
            _setBuySpreadPips = data.averageSpread;
            _setShortSpreadPips = data.averageSpread;
        }
    });

    // BUY / LONG
    let _setBuyStopLossPrice = (_setEntryPrice - (_setEntryPrice * _setStopLossLevelPercentage));
    let _setBuyStopLossPips = (_setEntryPrice - _setBuyStopLossPrice) / _setPipsConversion;
    let _setBuyPipValuePerLot = (_setPipsConversion * _setStandardLot) / _setEntryPrice;

    let _setBuyExpectedVolume = _setRiskAmount / (_setBuyStopLossPips * _setBuyPipValuePerLot);
    let _setBuyTakeProfitPips = _setBuyStopLossPips * _setRiskRewardRatio;
    let _setBuyTakeProfitPrice = _setEntryPrice + (_setBuyTakeProfitPips * _setPipsConversion)
    let _setBuySLMaximumLoss = _setBuyStopLossPips * _setBuyPipValuePerLot * _setBuyExpectedVolume;
    let _setBuySLMaximumLossPercentage = _setBuySLMaximumLoss / _setCapital;
    let _setBuyTPMaximumProfit = _setBuyTakeProfitPips * _setBuyPipValuePerLot * _setBuyExpectedVolume;

    let _setBuyTPMaximumProfitPercentage = _setBuyTPMaximumProfit / _setCapital;
    let _setBuySpreadCost = _setBuySpreadPips * _setBuyPipValuePerLot * _setBuyExpectedVolume;
    let _setBuyTotalPotentialLoss = _setBuySLMaximumLoss + _setBuySpreadCost;


    // SELL / SHORT
    let _setShortStopLossPrice = (_setEntryPrice + (_setEntryPrice * _setStopLossLevelPercentage));
    let _setShortStopLossPips = (_setShortStopLossPrice - _setEntryPrice) / _setPipsConversion;
    let _setShortPipValuePerLot = (_setPipsConversion * _setStandardLot) / _setEntryPrice;
    let _setShortExpectedVolume = _setRiskAmount / (_setShortStopLossPips * _setShortPipValuePerLot);
    let _setShortTakeProfitPips = _setShortStopLossPips * _setRiskRewardRatio;

    let _setShortTakeProfitPrice = _setEntryPrice + (_setShortTakeProfitPips * _setPipsConversion)
    let _setShortSLMaximumLoss = _setShortStopLossPips * _setShortPipValuePerLot * _setShortExpectedVolume;
    let _setShortSLMaximumLossPercentage = _setShortSLMaximumLoss / _setCapital;
    let _setShortTPMaximumProfit = _setShortTakeProfitPips * _setShortPipValuePerLot * _setShortExpectedVolume;
    let _setShortTPMaximumProfitPercentage = _setShortTPMaximumProfit / _setCapital;

    let _setShortSpreadCost = _setShortSpreadPips * _setShortPipValuePerLot * _setShortExpectedVolume;
    let _setShortTotalPotentialLoss = _setShortSLMaximumLoss + _setShortSpreadCost;

    return ({
        standardLot: _setStandardLot,
        capital: _setCapital,
        currencyPair: _setCurrencyPair,
        riskPercentagePerTrade: _setRiskPercentagePerTrade,
        riskValuePerTrade: _setRiskValuePerTrade,
        riskAppetitePercentagePerPosition: _setRiskAppetitePercentagePerPosition,
        riskAppetiteValuePerPosition: _setRiskAppetiteValuePerPosition,
        riskAppetitePercentageCapital: _setRiskAppetitePercentageCapital,
        riskRewardRatio: _setRiskRewardRatio,
        rewardRatioValue: _setRewardRatioValue,
        rewardRatioPercentage: _setRewardRatioPercentage,
        leverage: _setLeverage,
        totalBuyingPower: _setTotalBuyingPower,
        totalRiskValue: _setTotalRiskValue,
        riskAmount: _setRiskAmount,
        entryPrice: _setEntryPrice,
        pipsConversion: _setPipsConversion,
        stopLossLevelPercentage: _setStopLossLevelPercentage,
        buySpreadPips: _setBuySpreadPips,
        shortSpreadPips: _setShortSpreadPips,
        buyStopLossPrice: _setBuyStopLossPrice,
        buyStopLossPips: _setBuyStopLossPips,
        buyPipValuePerLot: _setBuyPipValuePerLot,
        buyExpectedVolume: _setBuyExpectedVolume,
        buyTakeProfitPips: _setBuyTakeProfitPips,
        buyTakeProfitPrice: _setBuyTakeProfitPrice,
        buySLMaximumLoss: _setBuySLMaximumLoss,
        buySLMaximumLossPercentage: _setBuySLMaximumLossPercentage,
        buyTPMaximumProfit: _setBuyTPMaximumProfit,
        buyTPMaximumProfitPercentage: _setBuyTPMaximumProfitPercentage,
        buySpreadCost: _setBuySpreadCost,
        buyTotalPotentialLoss: _setBuyTotalPotentialLoss,
        shortStopLossPrice: _setShortStopLossPrice,
        shortStopLossPips: _setShortStopLossPips,
        shortPipValuePerLot: _setShortPipValuePerLot,
        shortExpectedVolume: _setShortExpectedVolume,
        shortTakeProfitPips: _setShortTakeProfitPips,
        shortTakeProfitPrice: _setShortTakeProfitPrice,
        shortSLMaximumLoss: _setShortSLMaximumLoss,
        shortSLMaximumLossPercentage: _setShortSLMaximumLossPercentage,
        shortTPMaximumProfit: _setShortTPMaximumProfit,
        shortTPMaximumProfitPercentage: _setShortTPMaximumProfitPercentage,
        shortSpreadCost: _setShortSpreadCost,
        shortTotalPotentialLoss: _setShortTotalPotentialLoss
    });
};

export default getTradeOrderComputationData;