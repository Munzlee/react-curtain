import React, {
  EventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import s from './CurtainStyle.module.css';





export interface ICurtainProps {
  styleLeftSide?: React.CSSProperties;
  styleRightSide?: React.CSSProperties;
  children: React.ReactNode;
  automaticOpening?: boolean;
  scrollOpening?: boolean;
  touchOpening?: boolean;
  clickOpening?: boolean;
  openCondition?: boolean;
  automaticOpeningDelay?: number;
}

export function Curtain(props: ICurtainProps) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (
      props.automaticOpening &&
      (props.openCondition !== undefined ? props.openCondition : true)
    ) {
      setTimeout(() => setIsOpen(true), props.automaticOpeningDelay ?? 1000);
    }
  }, [props, setIsOpen]);

  const handleCaptureOpen: EventHandler<any> = useCallback(() => {
    if (props.openCondition !== undefined ? props.openCondition : true) {
      setIsOpen(true);
    }
  }, [props.openCondition]);
  return (
    <>
      <div
        onScrollCapture={props.scrollOpening ? handleCaptureOpen : undefined}
        onTouchStartCapture={props.touchOpening ? handleCaptureOpen : undefined}
        onClick={props.clickOpening ? handleCaptureOpen : undefined}
        className={isOpen ? s?.curtain + ' ' + s?.opened_curtain : s?.curtain}
      >
        <div className={s?.curtain__wrapper}>
          <div
            style={props?.styleLeftSide}
            className={s?.curtain__panel + ' ' + s?.curtain__panel_left}
          ></div>

          <div>{props.children}</div>

          <div
            style={props.styleRightSide}
            className={s.curtain__panel + ' ' + s.curtain__panel_right}
          ></div>
        </div>
      </div>
    </>
  );
}
