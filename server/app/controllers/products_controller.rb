# app/controllers/products_controller.rb
# class ProductsController < ApplicationController
#     def index
#       @products = Product.all
#       render json: @products
#     end

   
#   end

# app/controllers/products_controller.rb
# app/controllers/products_controller.rb
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
end
