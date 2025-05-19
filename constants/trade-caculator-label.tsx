const tradeCaculatorLabel = () => {
    return ({
        "accountType": {
            "title": "Standard Lot",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(1 lot = 100,000 units)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-orange-300",
            "valueColor": "default"
        },
        "capital": {
            "title": "Capital",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": false,
            "descriptionColor": "default",
            "valueBG": "bg-orange-300",
            "valueColor": "default"
        },
        "currencyPair": {
            "title": "Currency Pair",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": false,
            "descriptionColor": "default",
            "valueBG": "bg-orange-300",
            "valueColor": "default"
        },
        "pipsConversion": {
            "title": "Pips Conversion",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": false,
            "descriptionColor": "default",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "riskPercentagePerTrade": {
            "title": "Risk % of Capital Per Trade",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": false,
            "descriptionColor": "default",
            "valueBG": "bg-orange-300",
            "valueColor": "default"
        },
        "riskValuePerTrade": {
            "title": "Risk Value Per Trade",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Capital *Risk % of Capital Per Trade)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "riskAppetitePercentagePerPosition": {
            "title": "Risk Appetite % Per Position",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": false,
            "descriptionColor": "default",
            "valueBG": "bg-orange-300",
            "valueColor": "default"
        },
        "riskAppetiteValuePerPosition": {
            "title": "Risk Appetite Value Per Position",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Risk Value Per Trade * Risk Appetite % Per Position)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "riskAppetiteCapital": {
            "title": "Risk Appetite % of Captial",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Risk Appetite Value Per Position / Capital)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "riskRewardRatio": {
            "title": "Risk Reward Ratio",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(ex: 3:1)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-orange-300",
            "valueColor": "default"
        },
        "rewardRatioValue": {
            "title": "Reward Ratio Value",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Risk Appetite Value Per Position * Risk Reward Ratio)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "rewardRatioPercentage": {
            "title": "Reward Ratio %",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Risk Reward Ratio / Reward Ratio Value)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "leverage": {
            "title": "Leverage",
            "titleBG": "bg-sky-100",
            "titleColor": "default",
            "description": false,
            "descriptionColor": "default",
            "valueBG": "bg-orange-300",
            "valueColor": "default"
        },
        "totalBuyingPower": {
            "title": "Total Buying Power",
            "titleBG": "bg-sky-100",
            "titleColor": "default",
            "description": "(Capital * Leverage)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "totalRiskValue": {
            "title": "Total Risk Value",
            "titleBG": "bg-sky-100",
            "titleColor": "default",
            "description": "(Total Buying Power * Risk % of Capital Per Trade)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "riskAmount": {
            "title": "Risk Amount",
            "titleBG": "bg-sky-100",
            "titleColor": "default",
            "description": "(Capital × Risk Appetite % of Captial)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "entryPrice": {
            "title": "Entry Price",
            "titleBG": "bg-orange-100",
            "titleColor": "default",
            "description": false,
            "descriptionColor": "default",
            "valueBG": "bg-orange-300",
            "valueColor": "default"
        },
        "stopLossLevel": {
            "title": "Stop Loss level %",
            "titleBG": "bg-orange-100",
            "titleColor": "default",
            "description": false,
            "descriptionColor": "default",
            "valueBG": "bg-orange-300",
            "valueColor": "default"
        },
        "stopLossPriceBuy": {
            "title": "Stop Loss Price",
            "titleBG": "bg-red-100",
            "titleColor": "text-red-600",
            "description": "(Entry Price - (Entry Price * Stop Loss level %)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-blue-300",
            "valueColor": "text-black"
        },
        "stopLossPriceShort": {
            "title": "Stop Loss Price",
            "titleBG": "bg-red-100",
            "titleColor": "text-red-600",
            "description": "(Entry Price + (Entry Price * Stop Loss level %)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-blue-300",
            "valueColor": "text-black"
        },
        "stopLossPipsBuy": {
            "title": "Stop Loss (pips)",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "((Entry Price - Stop Loss Price) / Pips Conversion)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "stopLossPipsShort": {
            "title": "Stop Loss (pips)",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(( Stop Loss Price - Entry Price) / Pips Conversion)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "pipValuePerLot": {
            "title": "Pip Value per lot",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "((Pips Conversion * Standard Lot) / Entry Price)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "expectedVolume": {
            "title": "Expected Volume",
            "titleBG": "bg-blue-100",
            "titleColor": "text-blue-800",
            "description": "(Risk Amount / (Stop Loss (pips) * Pip Value per lot))",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-blue-900",
            "valueColor": "text-white"
        },
        "takeProfitPips": {
            "title": "Take Profit (pips)",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Stop Loss (pips) * Risk Reward Ratio)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "takeProfitPrice": {
            "title": "Take Profit Price",
            "titleBG": "bg-emerald-100 ",
            "titleColor": "text-emerald-700",
            "description": "(Entry Price + (Take Profit (pips) * Pips Conversion))",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-blue-300",
            "valueColor": "text-black"
        },
        "SLMaximumLossUSDJPY": {
            "title": "SL Maximum Loss",
            "titleBG": "bg-gray-100",
            "titleColor": "text-red-600",
            "description": "(Stop Loss (pips) * Pip Value per lot * Expected Volume)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-red-50",
            "valueColor": "text-red-600"
        },
        "TPMaximumProfitUSDJPY": {
            "title": "TP Maximum Profit",
            "titleBG": "bg-gray-100",
            "titleColor": "text-emerald-700",
            "description": "(Take Profit (pips) * Pip Value per lot * Expected Volume)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-emerald-50",
            "valueColor": "text-emerald-700"
        },
        "spreadPips": {
            "title": "Spread (pips)",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": false,
            "descriptionColor": "default",
            "valueBG": "bg-yellow-50",
            "valueColor": "default"
        },
        "spreadCost": {
            "title": "Spread Cost",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Spread (pips) * Pip Value per Lot * Expected Volume)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "totalPotentialLossUSDJPY": {
            "title": "Total Potential Loss",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(SL Maximum Loss + Spread Cost)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-red-100",
            "valueColor": "text-red-600"
        },
        "totalPotentialProfitUSDJPY": {
            "title": "Total Potential Profit",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(TP Maximum Profit + Spread Cost))",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-emerald-50",
            "valueColor": "text-emerald-700"
        },
        "lotSize": {
            "title": "Lot Size",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Expected Volume * Standard Lot)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "lossPipsMovedBuy": {
            "title": "Loss Pips Moved",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Entry Price - Stop Loss Price)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "lossPipsMovedShort": {
            "title": "Loss Pips Moved",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Stop Loss Price - Entry Price)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "loss": {
            "title": "Loss",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Loss Pips moved * Lot Size)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-red-600"
        },
        "profitPipsMovedBuy": {
            "title": "Profit Pips Moved",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Entry Price - Take Profit Price)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "profitPipsMovedShort": {
            "title": "Profit Pips Moved",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Take Profit Price - Entry Price)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "profit": {
            "title": "Profit",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Profit Pips Moved * Lot Size)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-emerald-700"
        },
        "adjustStopLevel": {
            "title": "Adjust Stop Level %",
            "titleBG": "bg-orange-100",
            "titleColor": "default",
            "description": false,
            "descriptionColor": "default",
            "valueBG": "bg-orange-300",
            "valueColor": "default"
        },
        "newStopLossBuy": {
            "title": "New Stop Loss",
            "titleBG": "bg-red-100",
            "titleColor": "text-red-600",
            "description": "(Entry Price - (Entry Price * Adjust Stop Level %))",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-blue-900",
            "valueColor": "text-white"
        },
        "newStopLossShort": {
            "title": "New Stop Loss",
            "titleBG": "bg-red-100",
            "titleColor": "text-red-600",
            "description": "(Entry Price + (Entry Price * Adjust Stop Level %))",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-blue-900",
            "valueColor": "text-white"
        },
        "newStopLossUSDJPYBuy": {
            "title": "NEW Stop Loss (pips)",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "((Entry Price - New Stop Loss ) / Pips Conversion)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "newStopLossUSDJPYShort": {
            "title": "NEW Stop Loss (pips)",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(( NEW Stop Loss - Entry Price) / Pips Conversion)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "NEWSLMaximumLossUSDJPY": {
            "title": "NEW SL Maximum Loss",
            "titleBG": "bg-red-100",
            "titleColor": "text-red-600",
            "description": "(NEW Stop Loss (pips) * Pip Value per lot  * Expected Volume)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-red-50",
            "valueColor": "text-red-600"
        },
        "NEWTotalPotentialLossUSDJPY": {
            "title": "NEW Total Potential Loss",
            "titleBG": "bg-red-100",
            "titleColor": "text-red-600",
            "description": "(NEW SL Maximum Loss + Spread Cost)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-red-50",
            "valueColor": "text-red-600"
        },
        "NEWTakeProfitPipsUSDJPY": {
            "title": "NEW Take Profit (pips)",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(New Stop Loss (pips) * Risk Reward Ratio)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "NEWTakeProfitPriceUSDJPYBuy": {
            "title": "NEW Take Profit Price",
            "titleBG": "bg-blue-100",
            "titleColor": "text-emerald-700",
            "description": "(Entry Price + (NEW Take Profit (pips) * Pips Conversion))",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-blue-900",
            "valueColor": "text-white"
        },
        "NEWTakeProfitPriceUSDJPYShort": {
            "title": "NEW Take Profit Price",
            "titleBG": "bg-blue-100",
            "titleColor": "text-emerald-700",
            "description": "(Entry Price - (NEW Take Profit (pips) * Pips Conversion))",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-blue-900",
            "valueColor": "text-white"
        },
        "NEWTPMaximumProfitUSDJPY": {
            "title": "NEW TP Maximum Profit",
            "titleBG": "bg-emerald-100 ",
            "titleColor": "text-emerald-700",
            "description": "(NEW Take Profit (pips) * Pip Value per lot * Expected Volume)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-emerald-50",
            "valueColor": "text-emerald-700"
        },
        "NEWTotalPotentialProfitUSDJPY": {
            "title": "NEW Total Potential Profit",
            "titleBG": "bg-emerald-100 ",
            "titleColor": "text-emerald-700",
            "description": "(NEW TP Maximum Profit + Spread Cost)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-emerald-50",
            "valueColor": "text-emerald-700"
        },
        "NEWLossPipsMovedBuy": {
            "title": "NEW Loss Pips Moved",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(Entry Price - New Stop Loss)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "NEWLossPipsMovedShort": {
            "title": "NEW Loss Pips Moved",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(New Stop Loss - Entry Price)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "NEWLoss": {
            "title": "NEW Loss",
            "titleBG": "bg-red-50",
            "titleColor": "text-red-600",
            "description": "(New Loss Pips moved * Lot Size)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-red-50",
            "valueColor": "text-red-600"
        },
        "NEWStopLossBuy": {
            "title": "NEW Stop Loss (pips)",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "((Entry Price - NEW Stop Loss) / Pips Conversion)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "NEWStopLossShort": {
            "title": "NEW Stop Loss (pips)",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "((NEW Stop Loss - Entry Price) / Pips Conversion)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "NEWTakeProfitPips": {
            "title": "NEW Take Profit (pips)",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(NEW Stop Loss (pips) * Risk Reward Ratio)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-yellow-50",
            "valueColor": "text-sky-800"
        },
        "NEWTakeProfitPriceBuy": {
            "title": "NEW Take Profit Price",
            "titleBG": "bg-blue-100",
            "titleColor": "text-blue-800",
            "description": "(Entry Price + (NEW Take Profit (pips) * Pips Conversion))",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-blue-900",
            "valueColor": "text-white"
        },
        "NEWTakeProfitPriceShort": {
            "title": "NEW Take Profit Price",
            "titleBG": "bg-blue-100",
            "titleColor": "text-blue-800",
            "description": "(Entry Price - (NEW Take Profit (pips) * Pips Conversion))",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-blue-900",
            "valueColor": "text-white"
        },
        "NEWTakeProfitBuy": {
            "title": "NEW Profit Pips Moved",
            "titleBG": "bg-emerald-50",
            "titleColor": "text-emerald-700",
            "description": "(NEW Take Profit Price - Entry Price)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-emerald-50",
            "valueColor": "text-emerald-700"
        },
        "NEWTakeProfitShort": {
            "title": "NEW Profit Pips Moved",
            "titleBG": "bg-emerald-50",
            "titleColor": "text-emerald-700",
            "description": "(Entry Price - NEW Take Profit Price )",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-emerald-50",
            "valueColor": "text-emerald-700"
        },
        "NEWTakeProfit": {
            "title": "NEW Profit",
            "titleBG": "bg-emerald-50",
            "titleColor": "text-emerald-700",
            "description": "(NEW Profit Pips moved * Lot Size)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-emerald-50",
            "valueColor": "text-emerald-700"
        },
        "totalPotentialLoss": {
            "title": "Total Potential Loss",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(New Loss + Spread Cost)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-red-100",
            "valueColor": "text-red-600"
        },
        "totalPotentialProfit": {
            "title": "Total Potential Profit",
            "titleBG": "bg-gray-100",
            "titleColor": "default",
            "description": "(New Profit + Spread Cost)",
            "descriptionColor": "text-purple-600",
            "valueBG": "bg-emerald-50",
            "valueColor": "text-emerald-700"
        },
    });
};

export default tradeCaculatorLabel;
