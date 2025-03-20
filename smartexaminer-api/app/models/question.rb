class Question < ApplicationRecord
  enum type_answer: {
    single_choice: 0,
    multi_choice: 1,
    true_or_false: 2,
    short_answer: 3,
    essay_answer: 4,
  }

  belongs_to :quiz, optional: true
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers

  validates :content, presence: true




end
