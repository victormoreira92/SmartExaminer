=begin
  Evaluation
  title:string
  number_questions:integer
  type:integer (multiple_choice,
        true_or_false,
        short_answer,
        fill_white_space,
=end
class Evaluation < ApplicationRecord
  before_validation :set_status_evaluation
  
  enum evaluation_type: {
    multiple_choice: 0,
    short_answer: 1,
    true_or_false: 2,
    fill_white_space: 3
  }
  
  validates :title, presence: true
  validates :evaluation_type, presence: true
  validates :number_questions, presence: true, numericality: { greater_than_or_equal_to: 1, only_integer: true }
  validates_associated :quizzes
  

  belongs_to :status_evaluation
  has_many :quizzes, dependent: :delete_all
  accepts_nested_attributes_for :quizzes, reject_if: :all_blank, allow_destroy: true


  def set_status_evaluation
    self.status_evaluation = StatusEvaluation.evaluation_awaiting_application.first
  end
end
