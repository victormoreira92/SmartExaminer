class FixType < ActiveRecord::Migration[7.0]
  def change
    rename_column :questions, :type, :type_question
  end
end
