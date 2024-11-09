import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={200}
    height={200}
    viewBox="0 0 359 461"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M298 0.051238C293.845 6.04058 289.12 11.079 283.879 16.145C281.027 18.9544 278.428 21.9591 275.81 24.9853C272.893 28.3144 269.852 31.5226 266.812 34.7387C265.487 36.1472 264.161 37.5561 262.836 38.9653C262.186 39.6566 261.536 40.3478 260.866 41.06C258.208 43.8968 255.57 46.7528 252.938 49.6137C248.625 54.2996 244.287 58.9622 239.938 63.6137C234.872 69.0313 229.847 74.4829 224.844 79.9575C220.99 84.1615 217.087 88.3198 213.191 92.4848C209.606 96.3212 206.042 100.175 202.5 104.051C197.766 109.231 192.983 114.363 188.189 119.487C184.625 123.301 181.083 127.134 177.562 130.989C173.246 135.712 168.882 140.388 164.5 145.051C159.919 149.93 155.344 154.814 150.812 159.739C149.973 160.65 149.134 161.561 148.27 162.5C146.087 164.954 144.041 167.48 142 170.051C166.426 166.396 190.849 162.716 215.267 159.006C221.75 158.021 228.233 157.038 234.717 156.055C236.153 155.837 236.153 155.837 237.618 155.615C241.53 155.022 245.443 154.429 249.355 153.836C260.348 152.169 271.341 150.501 282.334 148.83C291.183 147.485 300.033 146.142 308.883 144.802C313.536 144.098 318.188 143.392 322.84 142.683C327.181 142.021 331.523 141.363 335.865 140.708C337.455 140.467 339.044 140.225 340.634 139.982C342.801 139.651 344.97 139.324 347.138 138.998C348.956 138.722 348.956 138.722 350.81 138.441C353.586 138.102 356.209 137.972 359 138.051C357.367 142.233 354.291 144.996 351.145 148.067C350.565 148.642 349.985 149.216 349.387 149.808C347.534 151.644 345.674 153.473 343.812 155.301C341.378 157.699 338.947 160.1 336.52 162.504C335.931 163.087 335.343 163.67 334.737 164.27C331.29 167.705 328.035 171.23 324.885 174.941C319.634 180.819 313.857 186.24 308.252 191.779C302.611 197.36 297.029 202.899 291.883 208.946C286.81 214.618 281.237 219.86 275.825 225.206C268.449 232.427 268.449 232.427 261.5 240.051C256.023 246.478 249.828 252.276 243.825 258.206C236.449 265.427 236.449 265.427 229.5 273.051C224.023 279.478 217.828 285.276 211.825 291.206C206.314 296.655 200.868 302.088 195.838 307.991C191.145 313.252 185.988 318.11 180.97 323.061C174.051 329.851 174.051 329.851 167.531 337.02C162.21 343.249 156.224 348.882 150.397 354.633C143.257 361.631 143.257 361.631 136.531 369.02C131.04 375.455 124.839 381.265 118.825 387.206C113.325 392.645 107.89 398.068 102.869 403.959C97.9822 409.429 92.6156 414.482 87.3975 419.633C82.0348 424.933 76.7527 430.229 71.855 435.969C67.6418 440.698 63.0589 445.093 58.5625 449.551C57.5343 450.574 56.5063 451.598 55.4785 452.622C52.9884 455.101 50.4951 457.577 48 460.051C47.34 459.721 46.68 459.391 46 459.051C46.4989 458.224 46.9977 457.396 47.5117 456.543C57.6719 439.663 67.6444 422.672 77.6013 405.671C82.7298 396.915 87.8779 388.17 93.0469 379.438C97.5522 371.821 102.028 364.187 106.5 356.551C111.995 347.168 117.508 337.795 123.047 328.438C127.552 320.821 132.028 313.187 136.5 305.551C143.113 294.261 149.752 282.987 156.417 271.728C158.085 268.908 159.748 266.085 161.41 263.262C161.98 262.296 162.549 261.33 163.136 260.334C164.204 258.522 165.271 256.709 166.337 254.895C170.468 247.891 174.722 240.966 179 234.051C153.656 240.635 128.345 247.342 103.045 254.093C100.624 254.739 98.2024 255.385 95.7811 256.031C79.9477 260.255 64.1154 264.483 48.2861 268.723C43.3302 270.05 38.3739 271.376 33.4174 272.701C30.1132 273.585 26.8093 274.47 23.5059 275.357C19.8991 276.325 16.2914 277.29 12.6836 278.254C11.6197 278.541 10.5558 278.827 9.45966 279.122C8.49771 279.379 7.53578 279.636 6.54468 279.9C5.70944 280.124 4.87422 280.348 4.01367 280.578C2.00002 281.051 2 281.051 0 281.051C1.35306 277.482 2.93689 274.197 4.80078 270.868C5.35886 269.869 5.91695 268.871 6.49194 267.842C7.39312 266.244 7.39312 266.244 8.3125 264.614C8.93842 263.5 9.56434 262.386 10.2092 261.238C14.7213 253.241 19.3422 245.314 24.0391 237.423C28.1939 230.439 32.265 223.41 36.3125 216.364C41.4735 207.385 46.7051 198.452 52 189.551C59.7886 176.454 67.4119 163.265 75 150.051C83.2435 135.696 91.5561 121.388 100.017 107.159C107.125 95.1887 114.067 83.1241 121 71.0512C128.862 57.3602 136.764 43.6962 144.812 30.1137C145.161 29.5245 145.51 28.9352 145.87 28.3281C153.684 15.1387 153.684 15.1387 156.065 14.4786C157.354 14.3382 157.354 14.3382 158.668 14.195C159.656 14.0807 160.645 13.9663 161.663 13.8484C162.755 13.7362 163.847 13.6239 164.973 13.5083C166.126 13.3787 167.28 13.2491 168.469 13.1156C171.662 12.7598 174.857 12.4163 178.052 12.0781C181.425 11.7184 184.797 11.3439 188.169 10.9709C193.23 10.4127 198.292 9.86045 203.354 9.31446C213.049 8.26885 222.74 7.1893 232.429 6.09948C238.226 5.44832 244.024 4.80259 249.822 4.15655C253.055 3.79619 256.289 3.43408 259.522 3.07068C263.362 2.63955 267.202 2.21417 271.043 1.79291C272.456 1.63711 273.869 1.47945 275.281 1.31972C282.884 0.461027 290.345 -0.19153 298 0.051238Z"
      fill="white"
    />
  </svg>
);
export default SVGComponent;
