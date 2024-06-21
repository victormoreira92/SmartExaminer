class AddEvaluationToQuizzes < ActiveRecord::Migration[7.0]
  def change
    add_reference :quizzes, :evaluation, null: false, foreign_key: true
  end
end
