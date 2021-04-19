import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "./components/Layout";
import { Phrase } from "./components/Phrase";
import { PhraseList } from "./components/PhraseList";

function App() {
  const [quote, setQuote] = useState({});
  const [quotesAuthor, setQuotesAuthor] = useState([]);

  useEffect(() => {
    getQuoteRandom();
  }, []);

  const getQuoteRandom = async () => {
    setQuotesAuthor([]);
    setQuote({});
    try {
      const { data } = await axios.get(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
      setQuote(data.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getQuoteAuthor = async () => {
    try {
      const { data } = await axios.get(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${quote.quoteAuthor}`
      );
      setQuotesAuthor(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  https: return (
    <Layout getQuoteRandom={getQuoteRandom}>
      {quotesAuthor.length !== 0 ? (
        <PhraseList quotesAuthor={quotesAuthor} />
      ) : (
        <Phrase quote={quote} getQuoteAuthor={getQuoteAuthor} />
      )}
    </Layout>
  );
}

export default App;
