import { NextApiRequest, NextApiResponse } from 'next';

const fetchExchangeRates = async (req = NextApiRequest, res = NextApiResponse) => {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  const currencies = ['USD', 'EUR', 'JPY', 'CNY', 'GBP', 'AUD'];
  const toCurrency = 'KRW';
  const currencyIcons = {
    'USD': '🇺🇸',
    'EUR': '💶',
    'JPY': '🇯🇵',
    'CNY': '🇨🇳',
    'GBP': '🇬🇧',
    'AUD': '🇦🇺',
  };

  try {
    const promises = currencies.map(currency => 
      fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currency}&to_currency=${toCurrency}&apikey=${apiKey}`)
        .then(response => response.json())
    );

    const results = await Promise.all(promises);

    const exchangeRates = results.map(result => {
      const exchangeRateData = result['Realtime Currency Exchange Rate'];
      const fromCurrency = exchangeRateData['1. From_Currency Code'];
      return {
        icon: currencyIcons[fromCurrency],
        from_currency: fromCurrency,
        rate: parseFloat(exchangeRateData['5. Exchange Rate']).toFixed(2),
        last_refreshed: exchangeRateData['6. Last Refreshed']
      };
    });

    res.status(200).json(exchangeRates);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching exchange rates' });
  }
};

export default fetchExchangeRates;