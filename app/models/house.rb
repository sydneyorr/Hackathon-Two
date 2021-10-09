class House < ApplicationRecord
  belongs_to :user
  has_many :costumes, through: :visits

   

end
