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
    let _setBuyAdjustStopLosslevelPercentage = 0;
    let _setShortAdjustStopLosslevelPercentage = 0;
    let _setBuySpreadPips = 0;
    let _setShortSpreadPips = 0;


    responseCurrencyPairs.forEach(function(data : any){
        if(data.curreny === responseTradeCaculatorDefaultData.currencyPair) {
            _setPipsConversion = data.pipsConversion;
            _setStopLossLevelPercentage = data.stopLosslevel;
            _setBuyAdjustStopLosslevelPercentage = data.adjustStopLosslevel;
            _setShortAdjustStopLosslevelPercentage = data.adjustStopLosslevel;
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
    //USDJPY
    let _setBuySLMaximumLossUSDJPY = _setBuyStopLossPips * _setBuyPipValuePerLot * _setBuyExpectedVolume;
    let _setBuySLMaximumLossPercentageUSDJPY = _setBuySLMaximumLossUSDJPY / _setCapital;
    let _setBuyTPMaximumProfitUSDJPY = _setBuyTakeProfitPips * _setBuyPipValuePerLot * _setBuyExpectedVolume;
    let _setBuyTPMaximumProfitPercentageUSDJPY = _setBuyTPMaximumProfitUSDJPY / _setCapital;
    let _setBuySpreadCost = _setBuySpreadPips * _setBuyPipValuePerLot * _setBuyExpectedVolume;
    let _setBuyTotalPotentialLossUSDJPY = _setBuySLMaximumLossUSDJPY + _setBuySpreadCost;
    let _setBuyTotalPotentialProfitUSDJPY = _setBuyTPMaximumProfitUSDJPY + _setBuySpreadCost;
    //USDJPY


    // SELL / SHORT
    let _setShortStopLossPrice = (_setEntryPrice + (_setEntryPrice * _setStopLossLevelPercentage));
    let _setShortStopLossPips = (_setShortStopLossPrice - _setEntryPrice) / _setPipsConversion;
    let _setShortPipValuePerLot = (_setPipsConversion * _setStandardLot) / _setEntryPrice;
    let _setShortExpectedVolume = _setRiskAmount / (_setShortStopLossPips * _setShortPipValuePerLot);
    let _setShortTakeProfitPips = _setShortStopLossPips * _setRiskRewardRatio;
    let _setShortTakeProfitPrice = _setEntryPrice + (_setShortTakeProfitPips * _setPipsConversion);

    //USDJPY
    let _setShortSLMaximumLossUSDJPY = _setShortStopLossPips * _setShortPipValuePerLot * _setShortExpectedVolume;
    let _setShortSLMaximumLossPercentageUSDJPY = _setShortSLMaximumLossUSDJPY / _setCapital;
    let _setShortTPMaximumProfitUSDJPY = _setShortTakeProfitPips * _setShortPipValuePerLot * _setShortExpectedVolume;
    let _setShortTPMaximumProfitPercentageUSDJPY = _setShortTPMaximumProfitUSDJPY / _setCapital;
    let _setShortSpreadCost = _setShortSpreadPips * _setShortPipValuePerLot * _setShortExpectedVolume;
    let _setShortTotalPotentialLossUSDJPY = _setShortSLMaximumLossUSDJPY + _setShortSpreadCost;
    let _setShortTotalPotentialProfitUSDJPY = _setShortTPMaximumProfitUSDJPY + _setShortSpreadCost;

    // Adjust Stop Level
    let _setBuyNEWStopLoss = _setEntryPrice - (_setEntryPrice * _setBuyAdjustStopLosslevelPercentage);
    let _setShortNEWStopLoss = _setEntryPrice + (_setEntryPrice * _setShortAdjustStopLosslevelPercentage);

    //USDJPY BUY / LONG
    let _setBuyNEWStopLossPipsUSDJPY = (_setEntryPrice - _setBuyNEWStopLoss) / _setPipsConversion;
    let _setBuyNEWSLMaximumLossUSDJPY = _setBuyNEWStopLossPipsUSDJPY * _setBuyPipValuePerLot * _setBuyExpectedVolume;
    let _setBuyNEWSLMaximumLossPercentageUSDJPY = _setBuyNEWSLMaximumLossUSDJPY / _setCapital;
    let _setBuyNEWTotalPotentialLossUSDJPY = _setBuyNEWSLMaximumLossUSDJPY + _setBuySpreadCost;
    let _setBuyNEWTakeProfitPipsUSDJPY = _setBuyNEWStopLossPipsUSDJPY * _setRiskRewardRatio;
    let _setBuyNEWTakeProfitPriceUSDJPY = _setEntryPrice + (_setBuyNEWTakeProfitPipsUSDJPY * _setPipsConversion);
    let _setBuyNEWTPMaximumProfitUSDJPY = _setBuyNEWTakeProfitPipsUSDJPY * _setBuyPipValuePerLot * _setBuyExpectedVolume;
    let _setBuyNEWTPMaximumProfitPercentageUSDJPY = _setBuyNEWTPMaximumProfitUSDJPY / _setCapital;
    let _setBuyNEWTotalPotentialProfitUSDJPY = _setBuyNEWTPMaximumProfitUSDJPY + _setBuySpreadCost;
    //USDJPY BUY / LONG
    //USDJPY SELL / SHORT
    let _setShortNEWStopLossPipsUSDJPY = (_setShortNEWStopLoss - _setEntryPrice) / _setPipsConversion;
    let _setShortNEWSLMaximumLossUSDJPY = _setShortNEWStopLossPipsUSDJPY * _setShortPipValuePerLot * _setShortExpectedVolume;
    let _setShortNEWSLMaximumLossPercentageUSDJPY = _setShortNEWSLMaximumLossUSDJPY / _setCapital;
    let _setShortNEWTotalPotentialLossUSDJPY = _setBuyNEWSLMaximumLossUSDJPY + _setBuySpreadCost;
    let _setShortNEWTakeProfitPipsUSDJPY = _setShortNEWStopLossPipsUSDJPY * _setRiskRewardRatio;
    let _setShortNEWTakeProfitPriceUSDJPY = _setEntryPrice - (_setShortNEWTakeProfitPipsUSDJPY * _setPipsConversion);
    let _setShortNEWTPMaximumProfitUSDJPY = _setShortNEWTakeProfitPipsUSDJPY * _setShortPipValuePerLot * _setShortExpectedVolume;
    let _setShortNEWTPMaximumProfitPercentageUSDJPY = _setShortNEWTPMaximumProfitUSDJPY / _setCapital;
    let _setShortTotalPotentialLossProfitUSDJPY = _setShortNEWTPMaximumProfitUSDJPY + _setShortSpreadCost;
    //USDJPY SELL / SHORT

    let _setBuyLotSize = _setBuyExpectedVolume * _setStandardLot;
    let _setBuyLossPipsMoved = _setEntryPrice - _setBuyStopLossPrice;
    let _setBuyLoss = _setBuyLossPipsMoved * _setBuyLotSize;
    let _setBuyLossPecentage = _setBuyLoss / _setCapital;
    let _setBuyProfitPipsMoved = _setBuyTakeProfitPrice - _setEntryPrice;
    let _setBuyProfit = _setBuyProfitPipsMoved * _setBuyLotSize;
    let _setBuyProfitPercentage = _setBuyProfit / _setCapital;
    let _setBuyNEWLossPipsMoved = _setEntryPrice - _setBuyNEWStopLoss;
    let _setBuyNEWLoss = _setBuyNEWLossPipsMoved * _setBuyLotSize;
    let _setBuyNEWLossPercentage = _setBuyNEWLoss / _setCapital;
    let _setBuyNEWStopLossPips = (_setEntryPrice - _setBuyNEWStopLoss) / _setPipsConversion;
    let _setBuyNEWTakeProfitPips = _setBuyNEWStopLossPips * _setRiskRewardRatio;
    let _setBuyNEWTakeProfitPrice = _setEntryPrice + (_setBuyNEWTakeProfitPips * _setPipsConversion);
    let _setBuyNEWProfitPipsMoved = _setBuyNEWTakeProfitPrice - _setEntryPrice;
    let _setBuyNEWProfit = _setBuyNEWProfitPipsMoved * _setBuyLotSize;
    let _setBuyNEWProfitPercentage = _setBuyNEWProfit / _setCapital;
    let _setBuyTotalPotentialLoss = _setBuyNEWLoss + _setBuySpreadCost;
    let _setBuyTotalPotentialProfit = _setBuyNEWProfit + _setBuySpreadCost;

    let _setShortLotSize = (_setShortExpectedVolume * _setStandardLot);
    let _setShortLossPipsMoved = _setShortStopLossPrice - _setEntryPrice;
    let _setShortLoss = _setShortLossPipsMoved * _setShortLotSize;
    let _setShortLossPercentage = _setShortLoss / _setCapital;
    let _setShortProfitPipsMoved = _setShortTakeProfitPrice - _setEntryPrice;
    let _setShortProfit = _setShortProfitPipsMoved * _setShortLotSize;
    let _setShortProfitPercentage = _setShortProfit / _setCapital;
    let _setShortNEWLossPipsMoved = _setShortNEWStopLoss - _setEntryPrice;
    let _setShortyNEWLoss = _setShortNEWLossPipsMoved * _setBuyLotSize;
    let _setShortNEWLossPercentage = _setShortyNEWLoss / _setCapital;
    let _setShortNEWStopLossPips = (_setShortNEWStopLoss - _setEntryPrice) / _setPipsConversion;
    let _setShortNEWTakeProfitPips = _setShortNEWStopLossPips * _setRiskRewardRatio;
    let _setShortNEWTakeProfitPrice = _setEntryPrice - (_setShortNEWTakeProfitPips * _setPipsConversion);
    let _setShortNEWProfitPipsMoved = _setEntryPrice - _setShortNEWTakeProfitPrice;
    
    let _setShortNEWProfit = (_setShortLotSize * _setShortNEWProfitPipsMoved);
    let _setShortNEWProfitPercentage = _setShortNEWProfit / _setCapital;
    let _setShortTotalPotentialLoss = _setShortyNEWLoss + _setShortSpreadCost;
    let _setShortTotalPotentialProfit = _setShortNEWProfit + _setShortSpreadCost;


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

        buySLMaximumLossUSDJPY: _setBuySLMaximumLossUSDJPY,
        buySLMaximumLossPercentageUSDJPY: _setBuySLMaximumLossPercentageUSDJPY,
        buyTPMaximumProfitUSDJPY: _setBuyTPMaximumProfitUSDJPY,
        buyTPMaximumProfitPercentageUSDJPY: _setBuyTPMaximumProfitPercentageUSDJPY,
        buySpreadCost: _setBuySpreadCost,
        buyTotalPotentialLossUSDJPY: _setBuyTotalPotentialLossUSDJPY,
        buyTotalPotentialProfitUSDJPY: _setBuyTotalPotentialProfitUSDJPY,

        shortStopLossPrice: _setShortStopLossPrice,
        shortStopLossPips: _setShortStopLossPips,
        shortPipValuePerLot: _setShortPipValuePerLot,
        shortExpectedVolume: _setShortExpectedVolume,
        shortTakeProfitPips: _setShortTakeProfitPips,
        shortTakeProfitPrice: _setShortTakeProfitPrice,

        shortSLMaximumLossUSDJPY: _setShortSLMaximumLossUSDJPY,
        shortSLMaximumLossPercentageUSDJPY: _setShortSLMaximumLossPercentageUSDJPY,
        shortTPMaximumProfitUSDJPY: _setShortTPMaximumProfitUSDJPY,
        shortTPMaximumProfitPercentageUSDJPY: _setShortTPMaximumProfitPercentageUSDJPY,
        shortSpreadCost: _setShortSpreadCost,
        shortTotalPotentialLossUSDJPY: _setShortTotalPotentialLossUSDJPY,
        shortTotalPotentialProfitUSDJPY: _setShortTotalPotentialProfitUSDJPY,

        buyAdjustStopLosslevelPercentage: _setBuyAdjustStopLosslevelPercentage,
        shortAdjustStopLosslevelPercentage: _setShortAdjustStopLosslevelPercentage,
        buyNEWStopLoss: _setBuyNEWStopLoss,
        shortNEWStopLoss: _setShortNEWStopLoss,

        buyNEWStopLossPipsUSDJPY: _setBuyNEWStopLossPipsUSDJPY,
        buyNEWSLMaximumLossUSDJPY: _setBuyNEWSLMaximumLossUSDJPY,
        buyNEWSLMaximumLossPercentageUSDJPY: _setBuyNEWSLMaximumLossPercentageUSDJPY,
        buyNEWTotalPotentialLossUSDJPY: _setBuyNEWTotalPotentialLossUSDJPY,
        buyNEWTakeProfitPipsUSDJPY: _setBuyNEWTakeProfitPipsUSDJPY,
        buyNEWTakeProfitPriceUSDJPY: _setBuyNEWTakeProfitPriceUSDJPY,
        buyNEWTPMaximumProfitUSDJPY: _setBuyNEWTPMaximumProfitUSDJPY,
        buyNEWTPMaximumProfitPercentageUSDJPY: _setBuyNEWTPMaximumProfitPercentageUSDJPY,
        buyNEWTotalPotentialProfitUSDJPY: _setBuyNEWTotalPotentialProfitUSDJPY,

        shortNEWStopLossPipsUSDJPY: _setShortNEWStopLossPipsUSDJPY,
        shortNEWSLMaximumLossUSDJPY: _setShortNEWSLMaximumLossUSDJPY,
        shortNEWSLMaximumLossPercentageUSDJPY: _setShortNEWSLMaximumLossPercentageUSDJPY,
        shortNEWTotalPotentialLossUSDJPY: _setShortNEWTotalPotentialLossUSDJPY,
        shortNEWTakeProfitPipsUSDJPY: _setShortNEWTakeProfitPipsUSDJPY,
        shortNEWTakeProfitPriceUSDJPY: _setShortNEWTakeProfitPriceUSDJPY,
        shortNEWTPMaximumProfitUSDJPY: _setShortNEWTPMaximumProfitUSDJPY,
        shortNEWTPMaximumProfitPercentageUSDJPY: _setShortNEWTPMaximumProfitPercentageUSDJPY,
        shortTotalPotentialLossProfitUSDJPY: _setShortTotalPotentialLossProfitUSDJPY,

        buyLotSize: _setBuyLotSize,
        buyLossPipsMoved: _setBuyLossPipsMoved,
        buyLoss: _setBuyLoss,
        buyLossPecentage: _setBuyLossPecentage,
        buyProfitPipsMoved: _setBuyProfitPipsMoved,
        buyProfit: _setBuyProfit,
        buyProfitPercentage: _setBuyProfitPercentage,

        buyNEWLossPipsMoved: _setBuyNEWLossPipsMoved,
        buyNEWLoss: _setBuyNEWLoss,
        buyNEWLossPercentage: _setBuyNEWLossPercentage,
        buyNEWStopLossPips: _setBuyNEWStopLossPips,
        buyNEWTakeProfitPips: _setBuyNEWTakeProfitPips,
        buyNEWTakeProfitPrice: _setBuyNEWTakeProfitPrice,
        buyNEWProfitPipsMoved: _setBuyNEWProfitPipsMoved,
        buyNEWProfit: _setBuyNEWProfit,
        buyNEWProfitPercentage: _setBuyNEWProfitPercentage,
        buyTotalPotentialLoss: _setBuyTotalPotentialLoss,
        buyTotalPotentialProfit: _setBuyTotalPotentialProfit,

        shortLotSize: _setShortLotSize,
        shortLossPipsMoved: _setShortLossPipsMoved,
        shortLoss: _setShortLoss,
        shortLossPercentage: _setShortLossPercentage,
        shortProfitPipsMoved: _setShortProfitPipsMoved,
        shortProfit: _setShortProfit,
        shortProfitPercentage: _setShortProfitPercentage,
        
        shortNEWLossPipsMoved: _setShortNEWLossPipsMoved,
        shortyNEWLoss: _setShortyNEWLoss,
        shortNEWLossPercentage: _setShortNEWLossPercentage,
        shortNEWStopLossPips: _setShortNEWStopLossPips,
        shortNEWTakeProfitPips: _setShortNEWTakeProfitPips,
        shortNEWTakeProfitPrice: _setShortNEWTakeProfitPrice,
        shortNEWProfitPipsMoved: _setShortNEWProfitPipsMoved,
        shortNEWProfit: _setShortNEWProfit,
        shortNEWProfitPercentage: _setShortNEWProfitPercentage,
        shortTotalPotentialLoss: _setShortTotalPotentialLoss,
        shortTotalPotentialProfit: _setShortTotalPotentialProfit
    });
};

export default getTradeOrderComputationData;