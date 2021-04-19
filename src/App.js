import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "./components/Layout";
import { Phrase } from "./components/Phrase";
import { PhraseList } from "./components/PhraseList";
import { Loading } from "./components/Layout/Layout.styles";

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [quotesAuthor, setQuotesAuthor] = useState([]);

  useEffect(() => {
    getQuoteRandom();
  }, []);

  const getQuoteRandom = async () => {
    setQuotesAuthor([]);
    setQuote({});
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
      setQuote(data.data[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getQuoteAuthor = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${quote.quoteAuthor}`
      );
      setQuotesAuthor(data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout getQuoteRandom={getQuoteRandom}>
      {quotesAuthor.length !== 0 && !loading ? (
        <PhraseList quotesAuthor={quotesAuthor} author={quote.quoteAuthor} />
      ) : quote && !loading ? (
        <Phrase quote={quote} getQuoteAuthor={getQuoteAuthor} />
      ) : (
        <Loading>
          <span class="material-icons">hourglass_bottom</span>
          <p>Loading...</p>
        </Loading>
      )}
    </Layout>
  );
}

export default App;
