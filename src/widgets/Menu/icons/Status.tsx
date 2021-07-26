import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 400 400" {...props}>
      <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
            <path d="M555 2243 c-248 -35 -462 -226 -531 -473 -16 -59 -32 -359 -20 -403
      13 -53 61 -73 102 -43 17 13 20 32 25 203 5 156 10 198 28 247 58 162 196 289
      358 331 86 22 1121 22 1208 0 179 -47 323 -191 370 -370 22 -88 22 -1132 0
      -1220 -47 -177 -193 -323 -370 -370 -50 -13 -147 -15 -605 -15 -589 0 -604 1
      -709 55 -62 31 -160 121 -200 184 -66 102 -74 144 -75 371 l-1 205 200 5 200
      5 39 80 c31 66 40 76 46 60 48 -125 235 -575 246 -592 20 -32 78 -32 98 0 7
      12 84 235 171 495 86 260 159 472 161 470 2 -2 33 -114 69 -248 36 -134 71
      -250 77 -257 8 -10 69 -13 273 -13 241 0 263 1 278 18 22 24 22 65 -1 85 -15
      14 -51 17 -237 19 l-219 3 -88 329 c-49 182 -94 336 -100 343 -15 19 -72 16
      -90 -4 -9 -10 -89 -238 -178 -508 -89 -269 -165 -493 -169 -497 -3 -4 -60 126
      -126 289 -128 316 -135 327 -192 307 -21 -7 -38 -33 -84 -134 l-57 -125 -211
      -5 c-154 -4 -214 -8 -223 -18 -10 -10 -13 -71 -13 -260 1 -268 8 -319 62 -426
      83 -165 204 -271 378 -333 l80 -28 595 0 595 0 82 28 c93 31 212 106 268 168
      61 67 114 157 143 243 l27 81 0 600 0 600 -27 80 c-67 196 -216 347 -411 412
      l-82 28 -565 1 c-311 1 -578 0 -595 -3z" fill="#b2b2b2"/>
      </g>
    </Svg>
  );
};

export default Icon;