class StocksController < ApplicationController
  respond_to :json

  def show
    respond_with Stock.find_by_id(params[:id])
  end

  def symbol
    @stock = StockQuote::Stock.quote(params[:symbol].upcase)
    respond_with @stock
  end

  # def safe_params
  #   params.permit(:description, :priority, :completed)
  # end

end
