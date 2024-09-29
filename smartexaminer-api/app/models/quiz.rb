class Quiz < ApplicationRecord
  validates :title, presence: true
  validates :status_quiz, presence: true

  enum status_quiz: {
    not_started: 0,
    in_progress: 1,
    finished: 2,
    reviewed: 3,
  }
end
