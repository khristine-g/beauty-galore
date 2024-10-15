class Trending < ApplicationRecord
  belongs_to :category
  validates :name, :price, :description, :image, presence: true
end
