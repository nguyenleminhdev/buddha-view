/**phiên bản của từng i18n */
interface LanguageVersion {
    readonly common: object
    readonly view: object
}

/**kiểu dữ liệu cho khai báo i18n */
export interface Language {
    readonly name: string
    [index: string]: LanguageVersion | string
}