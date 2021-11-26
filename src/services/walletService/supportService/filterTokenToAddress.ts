export function filterTokenToAddress(tokenArr, tokenSymbol: string) {
  const x = tokenArr.filter(e => e.symbol === tokenSymbol);
  return x[0].address;
}
