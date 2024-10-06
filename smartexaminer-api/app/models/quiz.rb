class Quiz < ApplicationRecord
  validates :title, presence: true
  validates :status_quiz, presence: true
  after_create :set_status_quiz
  has_many :questions, dependent: :destroy

  enum status_quiz: {
    not_started: 0,
    in_progress: 1,
    finished: 2,
    reviewed: 3,
  }

  def set_status_quiz
    status_quiz = :not_started
  end
end
