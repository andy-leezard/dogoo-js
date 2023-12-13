export {
  beautifyURL,
  copyToClipboard,
  detectBrowser,
  getColorScheme,
  getURLParam,
} from "./browser"

export {
  injectElementsAtPosition,
  range,
  shuffleArray,
  sumOfArray,
} from "./common/array"

export { sleep } from "./common/asynchronous"

export { hashColor } from "./common/color"

export { djb2Hash } from "./common/crypto"

export {
  dateToInputValue,
  unixMilliDiff,
  unixMilliToDuration,
} from "./common/date"

export { isOdd } from "./common/number"

export {
  deleteOwnProperties,
  hasOwnProperties,
  isObject,
} from "./common/object"

export { randBool, randInt, randSign, randStr, uuidv4 } from "./common/random"

export { capitalize, isHttpUrl, normalize } from "./common/string"
