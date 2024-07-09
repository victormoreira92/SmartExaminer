class Exam < ApplicationRecord
  has_many :questions, dependent: :destroy

  validates :title, presence: true, length: { in: 3..50 }
  validates :description, length: { maximum: 100 }

end
