class Question < ApplicationRecord
  has_rich_text :question
  belongs_to :exam

  enum type_question: {
    single_choice: 0,
    multiple_choice: 1,
    true_false: 2,
    short_answer: 3,
    free_text: 4
  }

  validates :question, presence: true
  validates :points, numericality: { greater_than_or_equal_to: 0 }
end
