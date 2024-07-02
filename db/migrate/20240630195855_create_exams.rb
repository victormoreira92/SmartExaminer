class CreateExams < ActiveRecord::Migration[7.0]
  def change
    create_table :exams do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
