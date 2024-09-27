class ChatbotController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def respond
      message = params[:message]
  
      # Define simple chatbot logic or integrate with an AI chatbot API
      if message.downcase.include?('shipping')
        reply = 'Our standard shipping takes 5-7 business days.'
      elsif message.downcase.include?('recommend')
        reply = 'We recommend our top-rated beauty products!'
      else
        reply = "I'm sorry, I don't understand. Can you try rephrasing?"
      end
  
      render json: { reply: reply }
    end
  end
  
