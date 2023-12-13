type RandStrOptions = {
    includePunctuation?: boolean;
    includeDigits?: boolean;
    includeUppercase?: boolean;
    includeLowercase?: boolean;
    includeSymbols?: boolean;
    customChars?: string[];
  };
  
  /**
   * Generates a random string of a specified length from selected character sets.
   *
   * @param len The desired length of the string. Non-integer values will be rounded down to the nearest integer.
   * @param options (optional) Settings to specify which character sets to include in the string generation.
   *                - includePunctuation: Includes punctuation characters if true. Default is true.
   *                - includeDigits: Includes numeric digits if true. Default is true.
   *                - includeUppercase: Includes uppercase alphabetic characters if true. Default is true.
   *                - includeLowercase: Includes lowercase alphabetic characters if true. Default is true.
   *                - includeSymbols: Includes symbol characters if true. Default is true.
   *                - customChars: An array of custom characters to include.
   * @returns A string of random characters based on the selected options. If `len` is non-positive or if no character sets are selected and no custom characters are provided, returns an empty string.
   */
  export const randStr = (len: number, options: RandStrOptions = {}): string => {
    len = Math.floor(len); // Ensure len is an integer
    if (len <= 0) {
      return ""; // or throw new Error("Length must be a positive number");
    }
  
    const {
      includePunctuation = false,
      includeDigits = false,
      includeUppercase = false,
      includeLowercase = true,
      includeSymbols = false,
      customChars = []
    } = options;
  
    let charPool = '';
  
    if (includePunctuation) charPool += "!\"#$%&'()*+,-./:;<=>?@";
    if (includeDigits) charPool += "0123456789";
    if (includeUppercase) charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charPool += "abcdefghijklmnopqrstuvwxyz";
    if (includeSymbols) charPool += "[\\]^_`{|}~";
    charPool += customChars.join('');
  
    if (charPool.length === 0) {
      return ""; // or throw new Error("No characters available to generate string");
    }
  
    let s = '';
    for (let i = 0; i < len; i++) {
      s += charPool[Math.floor(Math.random() * charPool.length)];
    }
  
    return s;
  };
  