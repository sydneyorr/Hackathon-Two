class House < ApplicationRecord
  belongs_to :user
  has_many :costumes, through: :visits, dependent: :destroy
end
