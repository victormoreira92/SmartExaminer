class RemoveTypeAnswerFromAnswers < ActiveRecord::Migration[7.0]
  def change
    remove_column :answers, :type_answer, :integer
  end
end
