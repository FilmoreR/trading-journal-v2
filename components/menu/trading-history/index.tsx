import React, { useEffect, useState, useRef } from "react";
import classNames from 'classnames';

/**
 * Props interface for GalleryInformation component
 */
type TradingHistoryProps = {
    data : any; // Data to be displayed in the gallery information
};

const TradingHistory = ({ 
    data
}: TradingHistoryProps) => {

    // Effect hook for any future initialization needs
    useEffect(() => {

    },[]);

    return (
        <div>
            <div>
                <div>
                    <p className="text-xl">Trading History...</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TradingHistory;
