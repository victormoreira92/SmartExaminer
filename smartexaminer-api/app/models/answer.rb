class Answer < ApplicationRecord
  validates :answer_content, presence: true
  belongs_to :question

end
