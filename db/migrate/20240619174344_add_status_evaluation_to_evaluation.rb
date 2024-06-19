class AddStatusEvaluationToEvaluation < ActiveRecord::Migration[7.0]
  def change
    add_reference :evaluations, :status_evaluation, null: true, foreign_key: true
  end
end
