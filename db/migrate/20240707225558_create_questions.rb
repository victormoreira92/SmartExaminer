class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    enable_extension 'hstore' unless extension_enabled?('hstore')
    create_table :questions do |t|
      t.string :feedback
      t.integer :type
      t.integer :points
      t.string :correct_answer, array: true, default: []
      t.hstore :alternatives

      t.timestamps
    end
  end
end
