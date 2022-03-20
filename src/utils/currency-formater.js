export function currency(locale, options = {}) {
  return value => {
    return new Intl.NumberFormat(locale, options).format(value);
  };
}