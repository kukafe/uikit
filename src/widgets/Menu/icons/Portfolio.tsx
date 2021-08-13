import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 216 216" {...props}>
      <path d="M108,0h-4v104H0v4c0,59.551,48.449,108,108,108s108-48.449,108-108C216,48.449,167.551,0,108,0z M108,208
				c-53.801,0-97.814-42.707-99.922-96H112V8.078c53.293,2.108,96,46.121,96,99.922C208,163.141,163.141,208,108,208z" fill="#b2b2b2"/>
			<path d="M192,104c-2.209,0-4,1.791-4,4c0,44.111-35.889,80-80,80c-2.209,0-4,1.791-4,4s1.791,4,4,4c48.524,0,88-39.476,88-88
				C196,105.791,194.209,104,192,104z" fill="#b2b2b2"/>
			<rect x="80" y="40" width="8" height="56" fill="#b2b2b2"/>
			<rect x="64" y="60" width="8" height="36" fill="#b2b2b2"/>
			<rect x="48" y="32" width="8" height="64" fill="#b2b2b2"/>
			<rect x="32" y="20" width="8" height="76" fill="#b2b2b2"/>
			<rect x="16" y="48" width="8" height="48" fill="#b2b2b2"/>
    </Svg>
  );
};

export default Icon;
