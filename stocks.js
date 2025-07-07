export default async function handler(req, res) {
  const symbols = ['AAPL', 'TSLA', 'MSFT'];
  const data = await fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols.join(',')}`)
    .then(res => res.json());

  res.status(200).json(data.quoteResponse.result);
}
