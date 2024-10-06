class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.string :answer_content, null:false
      t.boolean :correct
      t.integer :type_answer

      t.timestamps
    end
  end
end
