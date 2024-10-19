class ProductsController < ApplicationController
  def index
    if params[:search].present?
      products = Product.where('name LIKE ?', "%#{params[:search]}%")
    elsif params[:category_id].present?
      category = Category.find(params[:category_id])
      products = category.products
    else
      products = Product.all
    end

    render json: products
  end

  def search
    if params[:search].present?
      @products = Product.where("LOWER(name) LIKE LOWER(?)", "%#{params[:search]}%")

      render json: @products
    else
      render json: [] # Return an empty array if no search term is provided
    end
  end
end

