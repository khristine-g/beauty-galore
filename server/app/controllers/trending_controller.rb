class TrendingController < ApplicationController
    def index
      @trending_products = Trending.all
      render json: @trending_products
    end
  end
  