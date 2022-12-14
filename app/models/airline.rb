class Airline < ApplicationRecord
  has_many :reviews

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def average_score
    return 0 unless reviews.length > 0
    reviews.average(:score).round(2).to_f
  end
end
