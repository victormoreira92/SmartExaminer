class Answer < ApplicationRecord
  validates :answer_content, presence: true
  validates :type_answer, presence: true
  belongs_to :question
  enum type_answer: {
    single_choice: 0,
    multi_choice: 1,
    true_or_false: 2,
    short_answer: 3,
    essay_answer: 4,
  }
end
