import React, { ChangeEvent } from "react";
import styles from "./TipButton.module.css";

export interface TipButtonProps extends React.ComponentProps<"button"> {
  // Add your props here
  tipPercentage: number | "custom";
  isSelected: boolean;
  minCustomTip: number;
  customTipHandle: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TipButton = ({
  tipPercentage,
  customTipHandle,
  isSelected,
  minCustomTip,
  ...delegated
}: TipButtonProps) => {
  return (
    <>
      {tipPercentage !== "custom" ? (
        <button
          className={`${styles.tip} ${styles.tipButton} ${isSelected ? `${styles.selected}` : ""}`}
          {...delegated}
          data-percentage={tipPercentage}
        >
          {tipPercentage}%
        </button>
      ) : (
        <input
          type="number"
          className={`${styles.custom} ${styles.tipButton}`}
          placeholder="custom"
          onChange={customTipHandle}
          onFocus={customTipHandle}
          min={minCustomTip}
        />
      )}
    </>
  );
};
