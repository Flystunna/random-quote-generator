export const handler = async (event) => {
    console.log('Received event:', JSON.stringify(event));
    const quotes = [
      "The best way to predict the future is to invent it. - Alan Kay",
      "Every great developer you know got there by solving problems they were unqualified to solve. - Patrick McKenzie",
      "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
      "The function of good software is to make the complex appear to be simple. - Grady Booch",
      "Simplicity is the soul of efficiency. - Austin Freeman"
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  const response = {
      statusCode: 200,
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
          message: randomQuote
      }),
  };
  
  return response;
};