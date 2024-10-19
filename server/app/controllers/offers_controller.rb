class OffersController < ApplicationController
    def index
      @offers = Offer.all
      render json: @offers
    end
  
    def show
      @offer = Offer.find(params[:id])
      render json: @offer
    end
  end
  