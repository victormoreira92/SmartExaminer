class AddTypeAnswerToQuestion < ActiveRecord::Migration[7.0]
  def change
    add_column :questions, :type_answer, :integer
  end
end
