import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowUpDown, TrendingUp, Clock, Check, ChevronsUpDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useLocation } from "react-router-dom";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState("0.00");
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [exchangeRates, setExchangeRates] = useState<Record<string, Record<string, number>>>({});
  const { toast } = useToast();
  const location = useLocation();

  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$", country: "United States" },
    { code: "EUR", name: "Euro", symbol: "€", country: "European Union" },
    { code: "GBP", name: "British Pound", symbol: "£", country: "United Kingdom" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥", country: "Japan" },
    { code: "CAD", name: "Canadian Dollar", symbol: "CA$", country: "Canada" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$", country: "Australia" },
    { code: "CHF", name: "Swiss Franc", symbol: "CHF", country: "Switzerland" },
    { code: "CNY", name: "Chinese Yuan", symbol: "¥", country: "China" },
    { code: "INR", name: "Indian Rupee", symbol: "₹", country: "India" },
    { code: "BRL", name: "Brazilian Real", symbol: "R$", country: "Brazil" },
    { code: "KRW", name: "South Korean Won", symbol: "₩", country: "South Korea" },
    { code: "MXN", name: "Mexican Peso", symbol: "$", country: "Mexico" },
    { code: "SGD", name: "Singapore Dollar", symbol: "S$", country: "Singapore" },
    { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$", country: "Hong Kong" },
    { code: "NOK", name: "Norwegian Krone", symbol: "kr", country: "Norway" },
    { code: "SEK", name: "Swedish Krona", symbol: "kr", country: "Sweden" },
    { code: "DKK", name: "Danish Krone", symbol: "kr", country: "Denmark" },
    { code: "PLN", name: "Polish Zloty", symbol: "zł", country: "Poland" },
    { code: "CZK", name: "Czech Koruna", symbol: "Kč", country: "Czech Republic" },
    { code: "HUF", name: "Hungarian Forint", symbol: "Ft", country: "Hungary" },
    { code: "RUB", name: "Russian Ruble", symbol: "₽", country: "Russia" },
    { code: "TRY", name: "Turkish Lira", symbol: "₺", country: "Turkey" },
    { code: "ZAR", name: "South African Rand", symbol: "R", country: "South Africa" },
    { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", country: "New Zealand" },
    { code: "THB", name: "Thai Baht", symbol: "฿", country: "Thailand" },
    { code: "MYR", name: "Malaysian Ringgit", symbol: "RM", country: "Malaysia" },
    { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp", country: "Indonesia" },
    { code: "PHP", name: "Philippine Peso", symbol: "₱", country: "Philippines" },
    { code: "VND", name: "Vietnamese Dong", symbol: "₫", country: "Vietnam" },
    { code: "EGP", name: "Egyptian Pound", symbol: "£", country: "Egypt" },
    { code: "NGN", name: "Nigerian Naira", symbol: "₦", country: "Nigeria" },
    { code: "KES", name: "Kenyan Shilling", symbol: "KSh", country: "Kenya" },
    { code: "GHS", name: "Ghanaian Cedi", symbol: "₵", country: "Ghana" },
    { code: "AED", name: "UAE Dirham", symbol: "د.إ", country: "United Arab Emirates" },
    { code: "SAR", name: "Saudi Riyal", symbol: "﷼", country: "Saudi Arabia" },
    { code: "QAR", name: "Qatari Riyal", symbol: "﷼", country: "Qatar" },
    { code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك", country: "Kuwait" },
    { code: "BHD", name: "Bahraini Dinar", symbol: ".د.ب", country: "Bahrain" },
    { code: "OMR", name: "Omani Rial", symbol: "﷼", country: "Oman" },
    { code: "JOD", name: "Jordanian Dinar", symbol: "د.ا", country: "Jordan" },
    { code: "LBP", name: "Lebanese Pound", symbol: "ل.ل", country: "Lebanon" }
  ];

  const fetchExchangeRates = async () => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const rates = response.data.rates;
      
      // Convert the rates object to our format
      const formattedRates: Record<string, Record<string, number>> = {};
      Object.keys(rates).forEach(currency => {
        formattedRates[fromCurrency] = {
          ...formattedRates[fromCurrency],
          [currency]: rates[currency]
        };
      });
      
      setExchangeRates(formattedRates);
      setLastUpdated(new Date());
    } catch (error) {
      toast({
        title: "Error Fetching Rates",
        description: "Failed to fetch latest exchange rates. Please try again.",
        variant: "destructive",
      });
    }
  };

  const convertCurrency = async () => {
    if (!amount || isNaN(parseFloat(amount))) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      if (fromCurrency === toCurrency) {
        setResult(amount);
      } else {
        // Fetch latest rates if we don't have them
        if (!exchangeRates[fromCurrency]?.[toCurrency]) {
          await fetchExchangeRates();
        }
        
        const rate = exchangeRates[fromCurrency]?.[toCurrency];
        if (!rate) {
          throw new Error("Exchange rate not available");
        }
        
        const convertedAmount = (parseFloat(amount) * rate).toFixed(2);
        setResult(convertedAmount);
      }
      
      toast({
        title: "Conversion Complete",
        description: `${amount} ${fromCurrency} = ${result} ${toCurrency}`,
      });
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  };

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      convertCurrency();
    }
  }, [amount, fromCurrency, toCurrency]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fromParam = params.get("from");
    if (fromParam) {
      setFromCurrency(fromParam);
    }
  }, [location.search]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-background to-muted/20">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                Currency Converter
              </CardTitle>
              <p className="text-muted-foreground">Real-time exchange rates updated every minute</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Amount</label>
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="text-lg h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">From</label>
                    <Popover open={openFrom} onOpenChange={setOpenFrom}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={openFrom}
                          className="w-full h-12 justify-between"
                        >
                          {fromCurrency
                            ? `${currencies.find((currency) => currency.code === fromCurrency)?.symbol} ${fromCurrency} - ${currencies.find((currency) => currency.code === fromCurrency)?.name}`
                            : "Select currency..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search currency..." />
                          <CommandList>
                            <CommandEmpty>No currency found.</CommandEmpty>
                            <CommandGroup>
                              {currencies.map((currency) => (
                                <CommandItem
                                  key={currency.code}
                                  value={`${currency.code} ${currency.name} ${currency.country}`}
                                  onSelect={() => {
                                    setFromCurrency(currency.code);
                                    setOpenFrom(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      fromCurrency === currency.code ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {currency.symbol} {currency.code} - {currency.name}
                                  <span className="ml-auto text-xs text-muted-foreground">
                                    {currency.country}
                                  </span>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={swapCurrencies}
                      className="rounded-full w-12 h-12"
                    >
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">To</label>
                    <Popover open={openTo} onOpenChange={setOpenTo}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={openTo}
                          className="w-full h-12 justify-between"
                        >
                          {toCurrency
                            ? `${currencies.find((currency) => currency.code === toCurrency)?.symbol} ${toCurrency} - ${currencies.find((currency) => currency.code === toCurrency)?.name}`
                            : "Select currency..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search currency..." />
                          <CommandList>
                            <CommandEmpty>No currency found.</CommandEmpty>
                            <CommandGroup>
                              {currencies.map((currency) => (
                                <CommandItem
                                  key={currency.code}
                                  value={`${currency.code} ${currency.name} ${currency.country}`}
                                  onSelect={() => {
                                    setToCurrency(currency.code);
                                    setOpenTo(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      toCurrency === currency.code ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {currency.symbol} {currency.code} - {currency.name}
                                  <span className="ml-auto text-xs text-muted-foreground">
                                    {currency.country}
                                  </span>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="bg-primary/5 rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {isLoading ? "..." : result}
                    </div>
                    <div className="text-lg text-muted-foreground mb-4">
                      {currencies.find(c => c.code === toCurrency)?.name}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      Updated: {lastUpdated.toLocaleTimeString()}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={convertCurrency} 
                    className="currency-gradient text-white mt-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Converting..." : "Convert Now"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
