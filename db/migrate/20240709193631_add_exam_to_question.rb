class AddExamToQuestion < ActiveRecord::Migration[7.0]
  def change
    add_reference :questions, :exam, null: false, foreign_key: true
  end
end
