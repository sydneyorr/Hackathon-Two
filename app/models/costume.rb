class Costume < ApplicationRecord
  belongs_to :user
  has_many :houses, through: :visits
end
