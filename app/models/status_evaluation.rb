class StatusEvaluation < ApplicationRecord

  enum step:{
    waiting_for_aplication: 0,
    aplication_in_process: 1,
    application_completed: 3,
    evaluation_archived: 4
  }

  has_many :evaluations
end
