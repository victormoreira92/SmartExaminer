class StatusEvaluation < ApplicationRecord

  enum step:{

    # Evaluation is created and it's waiting for the application.
    evaluation_awaiting_application: 0,

    # Evaluation is being applied.
    evaluation_application_in_progress: 1,

    # Evaluation application was finished
    evaluation_application_finished: 2,

    # Evaluation was archived
    evaluation_archived: 3
  }

  has_many :evaluations

  validates :step, presence: true
  validates :description, presence: true
end
