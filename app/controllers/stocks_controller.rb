class StocksController < ApplicationController
  respond_to :json

  def show
    respond_with Stock.find_by_id(params[:id])
  end

  def symbol
    respond_with Stock.find_by_symbol(params[:symbol].upcase)
  end

  # def safe_params
  #   params.permit(:description, :priority, :completed)
  # end

end
