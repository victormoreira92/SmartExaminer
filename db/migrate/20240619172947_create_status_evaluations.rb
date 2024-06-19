class CreateStatusEvaluations < ActiveRecord::Migration[7.0]
  def change
    drop_table :status_evaluations

    create_table :status_evaluations do |t|
      t.integer :step
      t.string :description

      t.timestamps
    end
  end
end
