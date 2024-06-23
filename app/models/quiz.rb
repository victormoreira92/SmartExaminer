class Quiz < ApplicationRecord
  belongs_to :evaluation

  validates :question, presence: true
  validates :correct_answer, presence: true

end
