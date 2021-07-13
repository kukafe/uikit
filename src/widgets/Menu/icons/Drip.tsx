import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 400 400" {...props}>
      <path d="M57.825 53.711 C 57.832 54.033,73.599 73.633,92.864 97.266 L 127.890 140.234 109.258 140.444 L 90.625 140.653 90.625 254.577 C 90.625 380.613,90.283 372.259,95.762 380.214 C 98.771 384.583,105.721 389.829,110.800 391.565 C 114.566 392.852,273.628 393.445,280.392 392.197 C 290.067 390.413,298.891 383.309,302.484 374.411 C 304.265 370.002,304.304 369.291,304.688 334.488 L 305.078 299.054 310.070 297.178 C 376.061 272.377,377.863 180.329,312.500 173.041 C 303.775 172.068,304.687 174.030,304.688 156.235 L 304.688 140.625 284.416 140.625 L 264.145 140.625 294.204 98.053 C 310.736 74.639,324.466 54.952,324.715 54.303 C 325.117 53.256,310.324 53.125,191.490 53.125 C 117.967 53.125,57.818 53.389,57.825 53.711 M288.281 72.248 C 288.281 72.453,285.455 76.614,282.001 81.495 L 275.720 90.369 224.774 90.887 C 196.754 91.172,160.092 91.405,143.304 91.406 L 112.779 91.406 105.413 82.367 C 101.362 77.396,97.930 73.001,97.786 72.602 C 97.627 72.156,134.444 71.875,192.904 71.875 C 245.361 71.875,288.281 72.043,288.281 72.248 M231.382 110.073 L 261.592 110.547 249.593 127.620 C 242.994 137.011,236.992 145.360,236.255 146.175 C 234.974 147.591,233.225 147.656,196.851 147.656 L 158.787 147.656 143.524 128.969 C 135.129 118.691,128.464 110.078,128.713 109.828 C 129.264 109.278,189.871 109.422,231.382 110.073 M172.628 194.203 C 187.867 212.923,200.553 228.375,200.820 228.540 C 201.087 228.704,212.173 213.393,225.457 194.514 L 249.609 160.189 267.383 160.172 L 285.156 160.156 285.156 235.028 L 285.156 309.899 227.605 310.418 C 195.952 310.704,156.402 310.938,139.715 310.938 L 109.375 310.938 109.375 235.547 L 109.375 160.156 127.148 160.162 L 144.922 160.167 172.628 194.203 M312.500 192.991 C 349.858 199.660,346.784 256.790,308.008 276.471 L 304.688 278.157 304.688 234.855 C 304.688 194.034,304.766 191.568,306.055 191.819 C 306.807 191.965,309.707 192.493,312.500 192.991 M195.321 247.045 C 183.553 265.582,181.429 273.132,185.701 281.238 C 194.228 297.416,219.851 289.837,217.711 271.769 C 216.930 265.176,207.514 247.247,200.854 239.672 C 200.582 239.362,198.092 242.680,195.321 247.045 " stroke="none" fill="#000000" fill-rule="evenodd" />
    </Svg>
  );
};

export default Icon;