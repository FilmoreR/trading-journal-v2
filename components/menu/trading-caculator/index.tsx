import React, { useEffect, useState, useRef } from "react";
import TradeOrderExecution from './trade-order-execution';
import TradeBuy from './trade-type/trade-buy';
import TradeShort from './trade-type/trade-short';

/**
 * Props interface for GalleryInformation component
 */
type TradingCalculatorProps = {
    data : any; // Data to be displayed in the gallery information
};

const TradingCalculator = ({ 
    data
}: TradingCalculatorProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
                <TradeOrderExecution data={data} />
            </div>
            <div>
                <TradeBuy data={data} />
            </div>
            <div>
                <TradeShort data={data} />
            </div>
        </div>
    );
};

export default TradingCalculator;
