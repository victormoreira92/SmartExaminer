class CreateQuizzes < ActiveRecord::Migration[7.0]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.integer :status_quiz
      t.string :description

      t.timestamps
    end
  end
end
