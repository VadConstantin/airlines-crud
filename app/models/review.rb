class Review < ApplicationRecord
  belongs_to :airline

  validates :title, presence: true
  validates :description, presence: true
  validates :score, presence: true
end
