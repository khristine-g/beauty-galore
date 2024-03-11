# app/controllers/orders_controller.rb

class OrdersController < ApplicationController
    before_action :authenticate_user!
  
    def new
      @order = current_user.orders.build
    end
  
    def create
      @order = current_user.orders.build(order_params)
      # Add logic to save order items based on the user's cart
  
      if @order.save
        # Handle successful order creation, clear the user's cart, and redirect
        flash[:success] = 'Order placed successfully!'
        redirect_to root_path
      else
        render 'new'
      end
    end
  
    private
  
    def order_params
      params.require(:order).permit(:total_price)
    end
  end
  