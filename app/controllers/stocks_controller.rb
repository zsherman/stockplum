class StocksController < ApplicationController
  respond_to :json
  before_action :init_tradeking, only: [:chart, :articles, :stock_list]

  def show
    respond_with Stock.find_by_id(params[:id])
  end

  def symbol
    @stock = StockQuote::Stock.quote(params[:symbol].upcase)
    respond_with @stock
  end

  def stock_list
    @stocks = StockQuote::Stock.quote(params[:symbols])
    respond_with @stocks
  end

  def chart
    @symbol = params[:symbol].upcase

    @chart = @client.get(
      "market/timesales",
      {
        symbols: @symbol,
        startdate: "2012-04-06",
        interval: "5min"
      }
    )

    respond_with @chart
  end

  def articles
    @articles = @client.get(
      "market/news/search",
      {
        symbols: params[:symbols],
        startdate: "2014-8-29",
        enddate: "2014-8-29"
      }
    )

    respond_with @articles
  end

  private

  def init_tradeking
    @client = Tradeking::Client.new(
      consumer_key: ENV["TK_CONSUMER_KEY"],
      consumer_secret: ENV["TK_CONSUMER_SECRET"],
      access_token: ENV["TK_ACCESS_TOKEN"],
      access_token_secret: ENV["TK_ACCESS_TOKEN_SECRET"]
    )
  end

  # def safe_params
  #   params.permit(:description, :priority, :completed)
  # end

end
