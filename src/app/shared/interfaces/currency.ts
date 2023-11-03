export interface RateValue {
    [key: string]: number
}

export interface CurrencyResponce {
    result?: string;  // number;
    provider?: string;  // "https://www.exchangerate-api.com",
    documentation?:  string; // "https://www.exchangerate-api.com/docs/free",
    terms_of_use?:  string;  // "https://www.exchangerate-api.com/terms",
    time_last_update_unix?: number;   // 1697501901,
    time_last_update_utc?:  string;  // "Mon, 16 Oct 2023 00:02:31 +0000",
    time_next_update_unix?:  number; // 1697501901,
    time_next_update_utc?:  string;  // "Mon, 16 Oct 2023 00:02:31 +0000",
    time_eol_unix?:  number; // 0,
    base_code:  string;
    rates?: {[key: string]: number};
    /*
    rates: {
        "EUR": 1, "AED": 3.861184, "AFN": 79.91183, "ALL": 105.810731, .. }
    */
   /*
   // https://dev.to/tlylt/exploring-key-string-any-in-typescript-4ake

   type ISomeType = {[key: string]: any};

    let someObject: ISomeType = {
        firstKey:   'firstValue',
        secondKey:  'secondValue',
        thirdKey:   'thirdValue'
    };

    let key: string = 'secondKey';

    let secondValue: string = someObject[key];
    */
}
