class StocksController < ApplicationController
  respond_to :json

  def show
    respond_with Stock.find_by_id(params[:id])
  end

  def symbol
    @stock = StockQuote::Stock.quote(params[:symbol].upcase)
    respond_with @stock
  end

  def chart
    @symbol = params[:symbol].upcase

    client = Tradeking::Client.new(
      consumer_key: ENV["TK_CONSUMER_KEY"],
      consumer_secret: ENV["TK_CONSUMER_SECRET"],
      access_token: ENV["TK_ACCESS_TOKEN"],
      access_token_secret: ENV["TK_ACCESS_TOKEN_SECRET"]
    )

    @chart = client.get(
      "market/timesales",
      {
        symbols: "AAPL",
        startdate: "2012-04-06",
        interval: "5min"
      }
    )

    respond_with @chart
  end

  # def safe_params
  #   params.permit(:description, :priority, :completed)
  # end

end
